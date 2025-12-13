import { CardData, Question, RecommendationResult } from './types';

// Images are referenced from root assuming they are available in public/assets
// Mapped based on visual cues:
// image.png -> ARCUS (Black)
// image (1).png -> NEON+ (Purple/Gradient)
// image (3).png -> THE MAESTRO (Metallic/Grey) - "THE PRIME FLOW"
// zero_plus.png -> ZERO+ (White) - "SPEND. COLLECT."
// Life Bridge uses a fallback placeholder as only 4 images were provided for 5 cards

export const POPULAR_CARDS: CardData[] = [
  {
    id: 'arcus',
    name: 'ARCUS PRIME',
    image: 'aqus.png',
    description: "품격 있는 당신의 여유로운 삶을 위한 동반자",
    tags: ['Health', 'Loyalty', 'Premium'],
    benefits: ['병원/약국 5% 할인', '공과금 월 1만원 할인', '금융 우대 및 캐시백'],
    annualFee: "30만원 (3년 유지 시 50% 캐시백)",
    isBest: false,
    detailedBenefits: [
      {
        title: "Essential Care (건강/생활)",
        icon: "activity", // 건강 관련 아이콘 추천
        content: [
          "메디컬 케어: 종합병원, 일반병원, 약국 업종 5% 결제일 할인",
          "라이프 쇼핑: 대형마트(이마트/홈플러스/롯데), 백화점 3% 할인",
          "오토 빌링: 아파트 관리비, 공과금, 통신비 자동이체 시 월 최대 1만원 할인"
        ]
      },
      {
        title: "Finance & Loyalty (신용/우대)",
        icon: "shield",
        content: [
          "프라임 금융 우대: 장기카드대출(카드론), 단기카드대출(CA) 금리 0.5~1.0%p 우대",
          "로열티 리워드: 카드 3년 이상 유지 시 연회비 50% 캐시백 제공"
        ]
      },
      {
        title: "Premium Leisure (여가)",
        icon: "coffee",
        content: [
          "트래블 라운지: 전세계 공항 라운지 연 3회 무료 제공",
          "호텔/리조트: 국내외 제휴 호텔 및 리조트 객실/식음료 우대 서비스",
          "마일리지 세이브: 적립된 마일리지 유효기간 연장 및 소멸 최소화 정책 적용"
        ]
      }
    ]
  },
  {
    id: 'neon-plus',
    name: 'NEON+',
    image: 'neon.png',
    description: "쓸 때마다 즉시 혜택, 갚을 때도 보너스",
    tags: ['Shopping', 'Digital', 'Cashback'],
    benefits: ['온라인/배달 7% 캐시백', '선결제 시 2% 리워드', 'OTT 10% 할인'],
    annualFee: "1만 5천원",
    isBest: true, // 젊은 층 인기 카드
    detailedBenefits: [
      {
        title: "Trend Pick (소비)",
        icon: "smartphone",
        content: [
          "디지털 쇼핑: 온라인 쇼핑, 배달앱(배민/쿠팡이츠) 결제 시 7% 캐시백",
          "구독 라이프: 넷플릭스, 유튜브 프리미엄 등 OTT 및 정기구독 10% 캐시백",
          "간편 결제: 삼성/애플/네이버페이 등으로 결제 시 추가 2% 적립"
        ]
      },
      {
        title: "Action Reward (행동)",
        icon: "zap",
        content: [
          "스마트 선결제: 건별 결제 후 5일 이내 선결제(즉시납부) 시 결제금액의 2% 캐시백",
          "로그인 미션: 카드사 앱(App) 월 10회 이상 방문 시 보너스 포인트 지급"
        ]
      },
      {
        title: "Smart Finance (관리)",
        icon: "trending-up",
        content: [
          "할부 케어: 건당 50만원 이상 할부 이용 시 수수료의 10% 캐시백",
          "한도 챌린지: 부여된 한도 내 적정 사용량(50% 이상) 달성 시 신용 관리 리워드 제공"
        ]
      }
    ]
  },
  {
    id: 'maestro',
    name: 'FLOW',
    image: 'flow.png',
    description: "금융과 라이프스타일의 완벽한 조화 (VVIP)",
    tags: ['High-End', '금융우대', 'Luxury'],
    benefits: ['전 가맹점 1.2% 무제한 적립', '해외/골프/호텔 3% 특별 적립', '금융 우대 서비스'],
    annualFee: "50만 원 (VIP 전용)",
    isBest: true, // 수익성 높은 베스트셀러
    detailedBenefits: [
      {
        title: "Flexibility Plan (금융)",
        icon: "credit-card",
        content: [
          "상시 무이자: 전 가맹점 2~4개월 무이자 할부 (건당 100만원 이상 결제 시)",
          "장기 할부 케어: 고액 결제 시 최장 24개월 저금리 할부 (연 5%대) 제공",
          "금융 우대: 카드론 및 현금서비스 이용 시 금리 20% 파격 할인"
        ]
      },
      {
        title: "Mileage Plan (리워드)",
        icon: "gift",
        content: [
          "기본 적립: 전월 실적 조건 없이 국내외 전 가맹점 1.2% 포인트(또는 마일리지) 적립",
          "특별 적립: 해외, 골프, 특급호텔, 백화점/면세점 이용 시 3.0% 특별 적립"
        ]
      },
      {
        title: "Prestige Plan (경험)",
        icon: "star",
        content: [
          "연간 기프트: 매년 1회 특급호텔 멤버십 또는 동반자 비즈니스 항공권 승급권 제공",
          "디지털 컨시어지: 전용 앱 VIP 라운지를 통한 24시간 채팅 상담 및 예약 대행"
        ]
      }
    ]
  },
  {
    id: 'life-bridge',
    name: 'CORE LIFE',
    image: 'corelife.png',
    description: "당신의 가정 경제를 든든하게 (Family)",
    tags: ['생활비', '자동이체', '가족카드'],
    benefits: ['금융(이자) 우대 10~20% 할인', '교육/마트/관리비 5~10% 할인', '스트리밍 20% 할인'],
    annualFee: "1만 8천원",
    detailedBenefits: [
      {
        title: "Living Plan (고정지출)",
        icon: "home",
        content: [
          "교육/육아: 학원 업종 이용 시 5% 결제일 할인 (월 최대 1만원)",
          "생활 쇼핑: 3대 대형마트(이마트/홈플러스/롯데) 5% 할인",
          "자동 납부: 아파트 관리비, 도시가스, 통신비 자동이체 시 10% 할인"
        ]
      },
      {
        title: "Finance Plan (유동성)",
        icon: "percent",
        content: [
          "할부 우대: 전 가맹점 2~3개월 상시 무이자 할부",
          "금융 케어: 카드론, 리볼빙 발생 이자의 10%를 포인트로 재적립",
          "현금서비스: 월 1회 이용 수수료 전액 면제"
        ]
      },
      {
        title: "Bonus Plan (가족)",
        icon: "users",
        content: [
          "패밀리 혜택: 가족 카드 발급 시 연회비 면제 및 실적 합산 인정",
          "잔액 케어: 금융 상품 잔액 보유 시, 당월 Living Plan 할인 한도 2배 상향"
        ]
      }
    ]
  },
  {
    id: 'zero-plus',
    name: 'ZERO+',
    image: 'zero.png',
    description: "복잡한 조건 없이 쓰면 쓸수록 혜택 (Starter)",
    tags: ['무실적', '캐시백', '심플'],
    benefits: ['무실적 월 3,000원 자동 캐시백', '생활필수 3종 5% 캐시백', '디지털 명세서 포인트'],
    annualFee: "1만원",
    detailedBenefits: [
      {
        title: "Basic Benefit (기본)",
        icon: "check-circle",
        content: ["심플 캐시백: 전월 실적 조건 없이 월 3,000원 자동 캐시백 (자동 충전)"]
      },
      {
        title: "Daily Benefit (생활)",
        icon: "shopping-cart",
        content: ["생활 필수: 교통, 편의점, 온라인결제 3대 영역 5% 캐시백 (영역별 월 최대 5천원)"]
      },
      {
        title: "Digital Benefit (참여)",
        icon: "mouse-pointer",
        content: ["앱 활동: 앱 로그인 및 디지털 명세서 전환 시 매월 500 포인트 추가 지급"]
      }
    ]
  }
];

export const QUESTIONS: Question[] = [
  {
    question: "편의점에서 물 한 병을 샀다. 계산할 때 당신의 손에 들린 것은?",
    options: [
      "📱 '폰 하나면 온 우주 통함' 삼성페이/애플페이 (지갑? 집에 두고 옴)",
      "💳 '실적 채워야지' 주력 신용카드 (혜택 계산기 머리에서 돌아감)",
      "🎫 '내 통장 잔고 안에서만' 체크카드 (선 넘는 소비는 용납 못 함)",
      "💵 '현금이 국룰' 지폐나 동전 (돈 쓰는 '맛'은 손끝에서 옴)"
    ]
  },
  {
    question: "다음 달 카드 명세서를 본 당신의 리얼한 반응은?",
    options: [
      "😱 '아... 지난달의 나, 무슨 짓을 한 거니?' (리볼빙이나 분할납부 버튼을 찾는다)",
      "🧐 '음, 예상대로군.' (할부와 고정지출이 계획된 오차범위 내에 있다)",
      "✨ '깔-끔.' (묻지도 따지지도 않고 선결제 or 전액 즉시 납부)",
      "🤷 '별거 없네?' (쓴 게 별로 없어서 스크롤 할 것도 없음)"
    ]
  },
  {
    question: "당신이 생각하는 '최고의 혜택'은?",
    options: [
      "✈️ '떠나요~ 둘이서~' 공항 라운지, 마일리지, 호텔 발렛파킹",
      "👨‍👩‍👧‍👦 '생활비 방어가 최고' 아파트 관리비, 학원비, 주유 할인",
      "☕ '지금 당장 할인!' 스타벅스 50%, 편의점 1+1, 배달앱 할인",
      "🧘 '복잡한 건 딱 질색' 조건 없이 그냥 쓴 만큼 적립해 주는 무지성 카드"
    ]
  },
  {
    question: "100만 원짜리 최신 가전제품을 질러야 한다면?",
    options: [
      "🗓️ '할부의 마법 소환!' 무이자 6개월로 내 미래의 내가 나눠서 갚는다.",
      "💳 '일시불로 주세요.' 포인트 적립 빵빵하게 챙기는 게 이득이니까.",
      "😰 '한도... 남았나?' 앱 켜서 한도 조회부터 하고 조마조마하게 긁는다.",
      "🤔 '꼭 필요한가?' 세 번 참으면 살인도 면하고 지출도 면한다. 안 삼."
    ]
  },
  {
    question: "주로 돈을 쓰는 '탕진 잼' 장소는 어디?",
    options: [
      "👗 '무신사, 지그재그, 핫플 맛집' 트렌드 따라가는 곳엔 내 돈이 있다.",
      "🛒 '이마트, 쿠팡, 병원' 우리 집 살림과 생존을 위한 필수 코스.",
      "⛳ '백화점, 골프장, 면세점' 나를 위한 품격 있는 투자는 아깝지 않지.",
      "🏠 '집 앞 슈퍼, 동네 시장' 멀리 안 나감. 필요한 생필품만 딱!"
    ]
  },
  {
    question: "카드사 앱(App), 얼마나 자주 들어가세요?",
    options: [
      "🔥 '인스타보다 자주 봄' 혜택 탭, 이벤트 탭, 실시간 실적... 거의 앱 중독 수준.",
      "📅 '월급날의 의식' 결제일 다가오면 금액 확인하러 한 달에 한 번 접속.",
      "🤖 '앱? 그런 게 있어?' 명세서는 문자로, 상담은 전화로 하는 게 편함.",
      "👻 '설치 안 함' 폰 용량 아까움. 쓸 일이 없음."
    ]
  },
  {
    question: "당신의 현재 라이프 스테이지(인생 단계)를 한 줄로 요약하면?",
    options: [
      "🔥 'YOLO & 갓생' 나를 위해 투자하고 즐기는 2030 (혹은 마음만은 청춘).",
      "🏠 '우리 집 CEO' 육아, 교육, 살림... 가정을 경영하는 프로 살림꾼.",
      "🥂 '여유만만 골드라이프' 경제적 자유를 즐기며 품위를 지키는 단계.",
      "🌳 '안정이 최고' 자녀들은 다 컸고, 복잡한 변화보다는 평온함이 좋다."
    ]
  }
];

// Map Answers to Types [Type A, Type B, Type C, Type D, Type E]
// Each inner array corresponds to the options of a question [Option 1, Option 2, Option 3, Option 4]
// Values are the Types that get points.
const SCORING_MAP: string[][][] = [
  // Q1
  [['B'], ['C', 'D'], ['B'], ['A', 'E']],
  // Q2
  [['B'], ['D'], ['A', 'C'], ['E']],
  // Q3
  [['C'], ['D'], ['B'], ['A', 'E']],
  // Q4
  [['D'], ['C'], ['B'], ['A', 'E']],
  // Q5
  [['B'], ['D'], ['C'], ['A', 'E']],
  // Q6
  [['B'], ['D'], ['A'], ['E']],
  // Q7
  [['B'], ['D'], ['C'], ['A']]
];

export const RESULTS_DATA: Record<string, RecommendationResult> = {
  'A': {
    name: "ARCUS`",
    description: "복잡한 건 싫어. 신용은 쌓는 거고, 빚은 없애는 거지.",
    benefits: [
      "분석 결과: 오랜 기간 카드를 써오신 당신! 한도는 넉넉하지만, 무리해서 긁지 않는 '절제미'가 있습니다.",
      "할부나 리볼빙 같은 건 딱 질색, 통장에 현금 꽉 채워두고 체크카드처럼 쓰거나 일시불로 깔끔하게 끝내는 안정 지향형이시군요.",
      "찰떡 궁합: 이것저것 따질 필요 없는 ARCUS PRIME"
    ],
    cardId: "arcus"
  },
  'B': {
    name: "NEON",
    description: "한도는 부족해도 혜택은 못 참지! 내 폰이 곧 지갑.",
    benefits: [
      "분석 결과: 맛집, 패션, 여행... 세상엔 즐길 게 너무 많죠? 한도 꽉꽉 채워 쓰는 '열정맨'입니다.",
      "카드 앱을 인스타보다 자주 켜고, 선결제도 팍팍 하면서 신용점수 관리까지 하는 당신은 디지털 금융의 지배자.",
      "찰떡 궁합: 온라인 쇼핑, 배달앱, 스트리밍 할인이 쏟아지는 NEON+"
    ],
    cardId: "neon-plus"
  },
  'C': {
    name: "FLOW",
    description: "가성비? 아니, 나는 '가심비'와 '경험'을 산다.",
    benefits: [
      "분석 결과: 남다른 구매력을 가진 이 구역의 큰손. 골프, 호캉스, 해외여행 등 삶의 질을 높이는 곳엔 돈을 아끼지 않습니다.",
      "푼돈 아끼는 할인보다는, 공항 라운지 무료입장이나 발렛파킹 같은 '특별한 대우'를 중요하게 생각합니다.",
      "찰떡 궁합: 연회비는 비싸도 혜택 총량이 압도적인 THE MAESTRO"
    ],
    cardId: "maestro"
  },
  'D': {
    name: "CORE LIFE",
    description: "숨만 쉬어도 나가는 고정비, 무이자 할부로 막는다!",
    benefits: [
      "분석 결과: 당신은 우리 집 CFO(최고재무책임자)! 마트, 학원비, 관리비 등 덩어리 큰 지출을 카드로 막아내는 전략가입니다.",
      "낭만보다는 가족과 현실을 위해 카드를 쓰는, 이 시대의 진정한 가장(혹은 살림 고수)입니다.",
      "찰떡 궁합: 생활비 방어력이 최강인 LIFE BRIDGE"
    ],
    cardId: "life-bridge"
  },
  'E': {
    name: "ZERO+",
    description: "카드? 있으면 쓰고 없으면 말고. 난 현금이 편해.",
    benefits: [
      "분석 결과: 지출 내역이 절간처럼 고요하시군요. 카드는 그저 결제 수단일 뿐, 혜택이나 등급엔 큰 관심이 없는 쿨한 영혼입니다.",
      "아주 가끔이라도 쓸 때 손해 보지 않으려면, 부담 없는 카드 하나쯤은 비상용으로 품어보세요.",
      "찰떡 궁합: 쓰고 싶을 때만 꺼내 써도 되는 ZERO+"
    ],
    cardId: "zero-plus"
  }
};

export const calculateRecommendation = (answers: number[]): RecommendationResult => {
  const scores: Record<string, number> = { 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0 };

  answers.forEach((optionIndex, questionIndex) => {
    const types = SCORING_MAP[questionIndex]?.[optionIndex];
    if (types) {
      types.forEach(type => {
        if (scores[type] !== undefined) {
          scores[type]++;
        }
      });
    }
  });

  // Find Type with max score
  let maxScore = -1;
  let resultType = 'E'; // Default

  Object.entries(scores).forEach(([type, score]) => {
    // Simple logic: greater strictly, or if equal, priority order could be arbitrary
    // Here we just take the first one that exceeds maxScore
    if (score > maxScore) {
      maxScore = score;
      resultType = type;
    }
  });

  return RESULTS_DATA[resultType];
};
