const qnaList = [
  {
    q: '1. 내 가족이 될 몬스터 아가를 만나러 가는 중이야. 나만의 몬스터를 어떤 케이지에 데려올까?',
    a: [
      { answer: 'a. 몽실몽실 솜뭉치 같은 케이지', score: 2 },
      { answer: 'a. 몽실몽실 솜뭉치 같은 케이지', score: 4 },
      { answer: 'c. 어제 만난 삼색 고양이를 닮은 얼룩덜룩한 케이지', score: 6 },
      { answer : 'd. 노을지는 석양을 닮은 오묘한 보라색 케이지', score: 8}
    ]
  },
  {
    q: '2. 몬스터와의 첫 만남이야. 몬스터가 심심해보여! 장난감으로 뭘 줄까?',
    a: [
      { answer: 'a. 몬스터와의 첫 만남이야. 몬스터가 심심해보여! 장난감으로 뭘 줄까?', score: 2 },
      { answer: 'b. 친구인 유니콘이 나오는 동화책', score: 4 },
      { answer: 'c. 강아지풀을 닮은 부들부들한 공', score: 6 },
      { answer: 'd. 나풀나풀 깃털이 달린 낚시대', score: 8 },
      { answer: 'e. 뚝딱뚝딱 장난감 건축 도구', score: 10 }
    ]
  },
  {
    q: '3. 문을 여니 몬스터가 정말 좋아한다! 오늘은 몬스터가 좋아하는',
    a: [
      { answer: 'a. 라일락 향기가 물씬 나는 봄이야!', score: 4 },
      { answer: 'b. 매력적인 장미 향기가 나는 여름이야!', score: 2 },
      { answer: 'c. 오색빛깔 낙엽이 흐드러진 가을이야!', score: 5 },
      { answer: 'd. 온 세상이 전부 새하얀 겨울이야!', score: 7 }
    ]
  },
  {
    q: '4. 몬스터의 식사시간이다! 오늘 점심은 몬스터가 가장 좋아하는 특별식을 줘야지',
    a: [
      { answer: 'a. 노른자가 탱글탱글한 계란 후라이가 올라간 볶음밥', score: 4 },
      { answer: 'b. 꾸덕한 치즈가 올라간 토마토 파스타', score: 6 },
      { answer: 'c. 힘이 불끈불끈 솟는 스테이크', score: 2 },
      { answer: 'd. 간장 소스로 볶은 따뜻한 닭고기 덮밥', score: 1 }
    ]
  },
  {
    q: '5. 이제 몬스터와 산책을 갈 거야. 무슨 옷을 입혀줄까?',
    a: [
      { answer: 'a. 하얀 히아신스 무늬가 있는 모자', score: 6 },
      { answer: 'b. 크리스마스처럼 폭신한 목도리', score: 4 },
      { answer: 'c. 손수 뜬 털실 장갑', score: 3 },
      { answer: 'd. 꽈배기처럼 두껍게 꼬아진 아이보리색의 가디건', score: 5 },
      { answer: 'e. 커다란 모자가 달린 까만 후드티', score : 7 }
    ]
  },
  {
    q: '6. 열심히 산책한 몬스터를 위해 간식을 주자!',
    a: [
      { answer: 'a. 고소하고 달달한 향이 나는 버터 쿠키', score: 6 },
      { answer: 'b. 새콤달콤하고 시원한 귤', score: 4 },
      { answer: 'c. 혀에 닿으면 사르르 녹아버리는 마카롱', score: 2 },
      { answer: 'd. 고소하고 짭쪼름한 소금을 묻힌 아몬드', score: 3 },
      { answer: 'e. 버터 크림과 메이플 시럽이 발라진 크로아상', score: 1 }
    ]
  },
  {
    q: '7. 산책을 다녀왔으니 몬스터를 목욕시켜야해. 목욕을 싫어하는 몬스터를 위해 입욕제를 풀어주자',
    a: [
      { answer: 'a. 물에 들어가는 순간 우주가 펼쳐지는 컬러풀한 배스밤', score: 6 },
      { answer: 'b. 피로가 싹 풀리고 향이 좋은 배스 쏠트', score: 2 },
      { answer: 'c. 달달한 바닐라향이 나는 아로마 오일', score: 4 }
    ]
  },
  {
    q: '8. 목욕하느라 고생했어! 자기 전에 마지막으로 몬스터에게 음료수를 주자',
    a: [
      { answer: 'a. 달콤하고 시원한 복숭아 맛 아이스티', score: 6 },
      { answer: 'b. 입 안이 달달해지는 진한 초콜렛 밀크', score: 7 },
      { answer: 'c. 하얀 각설탕이 들어간 향긋한 홍차', score: 5 },
      { answer: 'd. 아카시아 꿀을 한 숟가락 넣은 따뜻한 우유', score: 4 },
      { answer: 'e. 상큼한 맛이 톡 쏘는 라임 스파클링 에이드', score: 3 }
    ]
  },
  {
    q: '9. 졸린 몬스터가 자연스럽게 향한 잠자리는 어디일까?',
    a: [
      { answer: 'a. 따뜻하고 조용한 동굴', score: 7 },
      { answer: 'b. 내가 쌓아올린 담요더미', score: 6 },
      { answer: 'c. 향긋하고 아름다운 꽃밭', score: 4 },
      { answer: 'd. 색색깔의 쿠션이 있는 원목 침대', score: 2 }
    ]
  },
  {
    q: '10. 행복한 하루를 보낸 몬스터가 잠이 든다. 무슨 책을 읽어줄까?',
    a: [
      { answer: 'a. 똑똑한 공주님과 친절한 왕자님의 사랑 이야기', score: 4 },
      { answer: 'b. 친구를 만들고 싶어하는 소심한 용 이야기', score: 2 },
      { answer: 'c. 세상에서 가장 멋진 용사가 되고 싶은 토끼 이야기', score: 3 },
      { answer: 'd. 엄마와 달콤한 빵을 만드는 곰 이야기 ', score: 5 },
      { answer: 'e. 처음으로 바다를 만나는 낙타 이야기', score: 6 }
    ]
  }
]

const infoList = [
  {
    from: 10,
    to: 20,
    mLeft: '10%',
    name: '토끼',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
  {
    from: 21,
    to: 30,
    mLeft: '25%',
    name: '고양이',
    desc: '사람들은 당신이 꼼꼼하고 철저하다고 생각합니다. 심지어 종종 신경질적이라고 생각할 때도 있죠. 하지만 노력이 결실을 맺을 때 당신은 칭찬을 기쁘게 받아들입니다. (이것은 자기 자신을 받아들인다는 긍정적인 의미입니다.) 만약 당신이 충동적으로 행동한다면 사람들은 정말 놀랄 겁니다. 신중하게 행동하는 것은 대개 지혜를 드러내게 마련입니다. 당신은 친구들이 당신에게 조언을 구할 만큼 믿음직한 사람입니다.'
  },
  {
    from: 31,
    to: 40,
    mLeft: '40%',
    name: '표범',
    desc: '사람들은 당신이 분별 있고 현실적이며 겸손하다고 생각합니다. 당신은 당신에게 향하는 신뢰와 충성에 보답하는 사람으로 정평이 나 있습니다. 당신을 잘 아는 사람이라면 당신이 친구들에게 갖는 믿음을 깨거나 친구 사이를 이간질하기 어렵다는 걸 알 겁니다. 하지만 그 신뢰가 깨진다면, 당신은 꽤 큰 영향을 받습니다.'
  },
  {
    from: 41,
    to: 50,
    mLeft: '55%',
    name: '알파카',
    desc: '사람들은 당신이 생기 넘치고 매력적인 한편 현실적이기도 하다고 생각합니다. 당신이 인기 있는 데다가 침착함과 꾸밈없는 솔직함까지 지녔다고 생각하죠. 또한 당신이 언제나 친구들을 위하는 이해심 많고 사려깊은 사람이라고 생각합니다.'
  },
  {
    from: 51,
    to: 60,
    mLeft: '70%',
    name: '유니콘',
    desc: '사람들은 당신이 흥분을 잘 하고 다소 충동적이라고 생각합니다. 하지만 당신은 타고난 리더입니다! 의사 결정도 빠르게 내리죠. 사람들은 당신을 대범하고 모험심이 강한 사람으로 생각합니다. 또한 당신의 열정을 인정하고 높이 사기 때문에 당신의 동료, 친구로서 지내기를 좋아합니다.'
  },
  {
    from: 61,
    to: 70,
    mLeft: '85%',
    name: '사자',
    desc: '사람들은 당신을 조심해서 대해야 할 사람으로 생각합니다. 때때로 당신이 약간 자기중심적이고 남들을 지배하려는 경향이 있다고도 생각하죠. 어떤 사람들은 당신을 존경하고 당신처럼 되고 싶어하지만, 한편으로는 당신과 깊이 엮이는 걸 주저하기도 합니다.'
  }
]
