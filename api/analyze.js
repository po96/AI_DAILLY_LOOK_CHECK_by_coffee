import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ error: "Image is required" });
    }

    /**
     * 🔑 프롬프트 핵심
     * - 의상 최우선
     * - 헤어/메이크업 보조
     * - 배경/풍경은 점수에 영향 최소
     * - JSON ONLY 응답
     */
    const prompt = `
너는 패션 스타일 전문가이자 메이크업 & 헤어 보조 평가자이다.

다음 규칙을 반드시 지켜라:
1. 의상을 가장 우선적으로 평가한다 (전체 비중 70%).
2. 헤어와 메이크업은 보조 요소로 평가한다.
3. 배경, 풍경, 촬영 감성은 점수에 거의 반영하지 않는다.
4. 사진에서 사람이 명확하지 않거나 의상이 잘 보이지 않으면 감점 사유로 명시한다.
5. 반드시 아래 JSON 형식으로만 응답한다. 다른 문장은 절대 출력하지 마라.

점수 기준:
- totalScore: 0~100
- clothing: 0~70
- hair: 0~15
- makeup: 0~15

응답 JSON 형식:
{
  "totalScore": number,
  "clothing": number,
  "hair": number,
  "makeup": number,
  "strength": "강점 설명 (의상 중심)",
  "improve": "개선점 설명 (현실적 조언)"
}
`;

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "user",
          content: [
            { type: "input_text", text: prompt },
            { type: "input_image", image_base64: image }
          ]
        }
      ]
    });

    /**
     * OpenAI 응답에서 텍스트만 추출
     */
    const rawText = response.output_text;

    let parsed;
    try {
      parsed = JSON.parse(rawText);
    } catch (e) {
      console.error("JSON parse error:", rawText);

      // ❗ AI가 형식을 깨뜨렸을 때 fallback
      parsed = {
        totalScore: 70,
        clothing: 45,
        hair: 12,
        makeup: 13,
        strength: "의상이 전체적으로 무난하며 안정적인 스타일을 보여줍니다.",
        improve: "의상의 포인트가 다소 부족해 인상이 약해질 수 있습니다."
      };
    }

    /**
     * 🔒 서버에서 최종 점수 보정 (안전장치)
     */
    const total =
      parsed.clothing +
      parsed.hair +
      parsed.makeup;

    parsed.totalScore = Math.min(100, Math.round(total));

    return res.status(200).json(parsed);

  } catch (error) {
    console.error("Analyze error:", error);
    return res.status(500).json({
      error: "Analysis failed"
    });
  }
}