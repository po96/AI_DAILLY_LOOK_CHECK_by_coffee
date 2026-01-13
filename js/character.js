const CHARACTER_DATA = [
  {
    "id": 1,
    "animal_ko": "토끼",
    "animal_en": "Rabbit",
    "match_tag": "토끼", 
    "image_url": "image/1.jpg",
    "description": "당신은 행운을 가져다주는 네 잎 클로버 찾기 선수예요. 크고 순한 눈매처럼 마음이 착하고, 깡충깡충 뛰는 것처럼 활발한 에너지를 가졌어요. 친구들의 고민을 쫑긋 세워 들어주는 다정한 상담가랍니다.",
    "keywords": ["호기심_가득", "다정함_만렙", "네잎클로버_헌터"],
    "personality_type": "The Counselor (상담가)"
  },
  {
    "id": 2,
    "animal_ko": "여우",
    "animal_en": "Fox",
    "match_tag": "여우",
    "image_url": "image/2.jpg",
    "description": "당신은 영리하고 민첩한 숲속의 탐정이에요. 갸름하고 뾰족한 턱선처럼 세련되고 분석적인 느낌을 주죠. 새로운 놀이를 만드는 것을 좋아하며, 뛰어난 눈치로 친구들이 원하는 것을 미리 알아차리는 센스쟁이예요.",
    "keywords": ["영리함", "세련된_분위기", "아이디어_뱅크"],
    "personality_type": "The Inventor (발명가)"
  },
  {
    "id": 3,
    "animal_ko": "늑대",
    "animal_en": "Wolf",
    "match_tag": "늑대",
    "image_url": "image/3.jpg",
    "description": "당신은 지혜롭고 엉뚱한 상상을 많이 하는 몽상가예요. 무서운 불 대신 무지개 비눗방울을 뿜으며 친구들에게 마술 쇼를 보여주는 리더십 있는 친구랍니다. 때로는 엉뚱한 매력으로 주변을 즐겁게 만들어요.",
    "keywords": ["리더십", "몽상가", "무지개_방울"],
    "personality_type": "The Dreamer (몽상가)"
  },
  {
    "id": 4,
    "animal_ko": "판다",
    "animal_en": "Panda",
    "match_tag": "판다",
    "image_url": "image/4.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 5,
    "animal_ko": "쥐",
    "animal_en": "Mouse",
    "match_tag": "쥐",
    "image_url": "image/5.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 6,
    "animal_ko": "소",
    "animal_en": "Cow",
    "match_tag": "소",
    "image_url": "image/6.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 7,
    "animal_ko": "호랑이",
    "animal_en": "Tiger",
    "match_tag": "호랑이",
    "image_url": "image/7.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 8,
    "animal_ko": "용",
    "animal_en": "Dragon",
    "match_tag": "용",
    "image_url": "image/8.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 9,
    "animal_ko": "뱀",
    "animal_en": "Snake",
    "match_tag": "뱀",
    "image_url": "image/9.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 10,
    "animal_ko": "말",
    "animal_en": "Horse",
    "match_tag": "말",
    "image_url": "image/10.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 11,
    "animal_ko": "양",
    "animal_en": "Sheep",
    "match_tag": "양",
    "image_url": "image/11.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 12,
    "animal_ko": "원숭이",
    "animal_en": "Monkey",
    "match_tag": "원숭이",
    "image_url": "image/12.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 13,
    "animal_ko": "닭",
    "animal_en": "Chiken",
    "match_tag": "닭",
    "image_url": "image/13.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 14,
    "animal_ko": "개",
    "animal_en": "Dog",
    "match_tag": "개",
    "image_url": "image/14.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 14,
    "animal_ko": "강아지",
    "animal_en": "Dog",
    "match_tag": "강아지",
    "image_url": "image/14.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 15,
    "animal_ko": "돼지",
    "animal_en": "Pig",
    "match_tag": "돼지",
    "image_url": "image/15.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 16,
    "animal_ko": "물고기",
    "animal_en": "Fish",
    "match_tag": "물고기",
    "image_url": "image/16.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 17,
    "animal_ko": "벌레",
    "animal_en": "Bug",
    "match_tag": "벌레",
    "image_url": "image/17.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 18,
    "animal_ko": "고양이",
    "animal_en": "Cat",
    "match_tag": "고양이",
    "image_url": "image/18.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 19,
    "animal_ko": "곰",
    "animal_en": "Bear",
    "match_tag": "곰",
    "image_url": "image/19.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 20,
    "animal_ko": "사슴",
    "animal_en": "Dear",
    "match_tag": "사슴",
    "image_url": "image/20.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 21,
    "animal_ko": "고래",
    "animal_en": "Whale",
    "match_tag": "고래",
    "image_url": "image/21.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 22,
    "animal_ko": "너구리",
    "animal_en": "Dear",
    "match_tag": "너구리",
    "image_url": "image/22.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 23,
    "animal_ko": "올빼미",
    "animal_en": "Owl",
    "match_tag": "올빼미",
    "image_url": "image/23.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  },
  {
    "id": 24,
    "animal_ko": "고슴도치",
    "animal_en": "Owl",
    "match_tag": "고슴도치",
    "image_url": "image/24.jpg",
    "description": "당신은 대나무 숲의 느긋한 철학자예요. 폭신한 뱃살처럼 친구들에게 안락함을 제공하며, 어떤 급한 일도 판다와 함께라면 여유로워진답니다. 평화주의자이며 낮잠 자는 것을 가장 좋아해요.",
    "keywords": ["평화주의자", "느긋함", "힐링_전문"],
    "personality_type": "The Philosopher (철학자)"
  }
  
]

