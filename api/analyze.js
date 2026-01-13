export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { image } = req.body; // Base64 데이터 (data:image/jpeg;base64,...)

  try {
    const apiKey = process.env.OPENAI_API_KEY; // Vercel Settings에서 설정하세요.
    const apiUrl = "https://api.openai.com/v1/chat/completions";

    const prompt = `당신은 패션 전문가입니다. 다음 사진의 데일리룩 코디를 분석하세요.
    중요 지침:
    1. 헤어나 메이크업은 점수에 거의 반영하지 말고, 옷의 조화(색상, 핏, 스타일)에 집중하세요.
    2. 결과는 반드시 '점수:', '분석:', '강점:', '개선점:' 키워드를 포함하여 답변하세요.
    3. 친절하고 전문적인 어조를 유지하세요.`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // GPT-4o mini 모델 지정
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: prompt },
              {
                type: "image_url",
                image_url: {
                  url: image // 전달받은 Base64 이미지를 직접 입력
                }
              }
            ]
          }
        ],
        max_tokens: 600 // 분석 결과 길이를 제한하여 비용 절감
      })
    });

    const data = await response.json();
    
    // API 호출 에러 처리
    if (data.error) {
      throw new Error(data.error.message);
    }

    const resultText = data.choices[0].message.content;
    res.status(200).json({ analysis: resultText });

  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: '분석 중 오류가 발생했습니다: ' + error.message });
  }
}