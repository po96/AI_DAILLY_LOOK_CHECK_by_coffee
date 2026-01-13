async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    // 모델 로드 완료!
}

// 2. 분석 시작 및 결과 예측
async function startAnalysis() {
    const uploadedImage = document.getElementById('uploaded-img'); // 사용자가 업로드한 이미지 DOM 요소
    
    if (!model) {
        alert("모델 로드 중입니다. 잠시 후 다시 시도해주세요.");
        return;
    }

    // 예측 실행
    const prediction = await model.predict(uploadedImage);
    
    // 가장 높은 확률의 클래스 찾기
    let maxProbability = 0;
    let predictedClass = ""; 

    for (let i = 0; i < maxPredictions; i++) {
        const probability = prediction[i].probability.toFixed(2) * 100;
        const className = prediction[i].className; // 예: "토끼 타입"

        if (probability > maxProbability) {
            maxProbability = probability;
            predictedClass = className;
        }
    }
    
    // 3. 결과 페이지로 이동하며 데이터 전달
    if (predictedClass) {
        const percent = Math.floor(maxProbability);
        
        // 중요: predictedClass(예: "토끼 타입")를 데이터베이스(JSON)의 match_tag와 연결해야 합니다.
        window.location.href = `result.html?animal=${predictedClass}&match_perc=${percent}`;
    }
}