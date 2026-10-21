/* 현장노트 데모 — 가상 업체 "바른공간 리모델링"의 데이터
 * 실제 서비스에서는 이 내용이 데이터베이스(D1)에서 업체별로 불러와집니다.
 * 업체 정보는 모두 가상이며, 사진은 Unsplash 무료 라이선스 사진입니다(실제 업체 시공 사진이 아님).
 */
'use strict';

const SHOP = {
  name: '바른공간 리모델링',
  short: '바른공간',
  ceo: '김바른',
  phone: '010-0000-0000',
  since: 2014,
  areas: ['분당', '판교', '수지', '광교', '용인 기흥'],
  license: '실내건축공사업 등록',
  insurance: '하자보수 보증보험 가입',
  as: '시공 후 2년 무상 A/S',
  bizno: '000-00-00000',
  address: '경기도 성남시 분당구 (데모용 주소)',
};

const SCOPE_LABEL = { bath: '욕실', kitchen: '주방', floor: '도배·바닥', window: '샷시' };
const IMG = (name) => `img/${name}.jpg`;

const CASES = [
  {
    id: 'c1', kind: 'bath', date: '2026-09-28',
    title: '정자동 32평 아파트 욕실 2개 전체 리모델링',
    area: '성남시 분당구 정자동', type: '아파트', size: 32, days: 5,
    scopes: ['욕실 2개 전체', '방수', '타일'],
    materials: ['600×600 포세린 타일', '벽걸이 양변기', '강화유리 파티션', '매립형 수전'],
    photos: [IMG('bath-a'), IMG('tile-shower')],
    process: [[IMG('before-bath-c'), '시공 전'], [IMG('work-room'), '철거·배관 점검'], [IMG('work-tile'), '방수·타일'], [IMG('bath-a'), '완공']],
    summary: '분당구 정자동 32평 아파트의 욕실 2개를 5일 동안 전체 철거 후 새로 시공했습니다. 기존 타일을 모두 걷어 내고 방수층을 다시 만든 뒤 600각 포세린 타일과 강화유리 파티션으로 마감했습니다.',
    story: [
      '입주 20년 차 아파트로, 줄눈 곰팡이와 타일 들뜸 때문에 상담을 요청하셨습니다. 아래층 누수 이력이 있어 덧방 대신 전체 철거를 권해 드렸습니다.',
      '1~2일 차에 철거와 배관 점검을 하고, 3일 차에 바닥·벽 방수 후 48시간 담수 시험을 했습니다. 이후 600각 포세린 타일을 시공하고 양변기를 벽걸이형으로 바꿔 청소가 쉬워졌습니다.',
      '샤워 공간은 욕조 대신 강화유리 파티션으로 나눠 좁은 욕실이 넓어 보이도록 했습니다.',
    ],
    faq: [
      { q: '욕실 공사 중에 집에서 지낼 수 있나요?', a: '욕실이 2개면 하나씩 순서대로 공사해 생활하실 수 있습니다. 1개뿐이면 3~4일은 다른 곳을 이용하셔야 합니다.' },
      { q: '덧방과 전체 철거는 어떻게 다른가요?', a: '덧방은 기존 타일 위에 새 타일을 붙여 빠르고 저렴하지만, 누수 이력이 있으면 방수를 새로 할 수 없어 전체 철거를 권합니다.' },
    ],
  },
  {
    id: 'c2', kind: 'kitchen', date: '2026-09-14',
    title: '풍덕천동 25평 아파트 주방 11자 구조 변경',
    area: '용인시 수지구 풍덕천동', type: '아파트', size: 25, days: 4,
    scopes: ['주방 전체', '상·하부장', '상판'],
    materials: ['월넛 무늬목 키큰장', '그레이 세라믹 상판', '무광 화이트 상부장', '매립 후드'],
    photos: [IMG('kitchen-c'), IMG('kitchen-d')],
    process: [[IMG('work-kitchen'), '철거·배관 이동'], [IMG('kitchen-c'), '완공']],
    summary: '수지구 풍덕천동 25평 아파트 주방을 4일 동안 ㄱ자에서 11자 구조로 바꿨습니다. 아일랜드형 작업대를 만들어 수납과 조리 공간을 함께 늘렸습니다.',
    story: [
      '아이가 둘인 가족으로 수납 공간이 부족하다는 고민이 있었습니다. 실측 후 냉장고 위치를 옮겨 11자 구조로 바꾸는 안을 드렸습니다.',
      '키큰장은 월넛 무늬목, 상부장은 무광 화이트로 맞췄고, 상판은 열과 긁힘에 강한 그레이 세라믹으로 시공했습니다.',
    ],
    faq: [{ q: '주방 구조를 바꾸면 배관 공사도 하나요?', a: '개수대 위치가 바뀌면 급·배수 배관을 옮깁니다. 아파트는 관리사무소 공사 신고가 필요해 저희가 대신 접수해 드립니다.' }],
  },
  {
    id: 'c3', kind: 'floor', date: '2026-08-30',
    title: '백현동 34평 아파트 전체 도배·강마루',
    area: '성남시 분당구 백현동', type: '아파트', size: 34, days: 3,
    scopes: ['전체 도배', '강마루', '걸레받이'],
    materials: ['실크 벽지(화이트)', '강마루 오크 내추럴', '걸레받이 60mm'],
    photos: [IMG('living-a'), IMG('living-c')],
    process: [[IMG('work-room'), '기존 마감 제거'], [IMG('living-a'), '완공']],
    summary: '분당구 백현동 34평 아파트 전체를 3일 동안 도배하고 강마루로 바닥을 새로 깔았습니다. 이사 전 빈집 상태에서 진행해 일정을 줄였습니다.',
    story: [
      '이사 날짜에 맞춰야 해서 도배와 바닥을 같은 주에 끝내는 일정으로 잡았습니다. 기존 장판을 걷어 내고 바닥 평탄 작업 후 강마루를 시공했습니다.',
      '벽지는 밝은 화이트 실크로 통일해 집 전체가 넓어 보이도록 했습니다.',
    ],
    faq: [{ q: '강마루와 장판 중 어떤 게 좋나요?', a: '강마루는 긁힘에 강하고 고급스럽지만 비용이 더 듭니다. 아이나 반려동물이 있다면 강마루를 많이 선택하십니다.' }],
  },
  {
    id: 'c4', kind: 'bath', date: '2026-08-21',
    title: '운중동 41평 아파트 부부욕실 호텔식 리모델링',
    area: '성남시 분당구 운중동', type: '아파트', size: 41, days: 5,
    scopes: ['부부욕실', '방수', '조명'],
    materials: ['그레이 포세린 타일', '원목 무늬 세면대장', '간접 조명', '매립 선반'],
    photos: [IMG('bath-c')],
    process: [[IMG('before-bath-1'), '시공 전'], [IMG('work-tile'), '타일'], [IMG('bath-c'), '완공']],
    summary: '분당구 운중동 41평 아파트의 부부욕실을 5일 동안 호텔식으로 리모델링했습니다. 그레이 포세린 타일과 원목 무늬 세면대장, 간접 조명으로 차분한 분위기를 만들었습니다.',
    story: ['욕조를 자주 쓰지 않는다는 말씀에 욕조를 없애고 넓은 샤워 공간과 매립 선반을 만들었습니다. 거울 뒤 간접 조명으로 밤에도 눈부시지 않게 했습니다.'],
    faq: [{ q: '욕조를 없애도 나중에 집 팔 때 괜찮을까요?', a: '요즘은 부부욕실은 샤워부스, 공용욕실은 욕조로 나누는 경우가 많습니다. 공용욕실에 욕조가 있으면 크게 문제 되지 않습니다.' }],
  },
  {
    id: 'c5', kind: 'window', date: '2026-08-12',
    title: '구미동 28평 아파트 거실·안방 샷시 교체',
    area: '성남시 분당구 구미동', type: '아파트', size: 28, days: 1,
    scopes: ['거실 샷시', '안방 샷시'],
    materials: ['PVC 이중창', '로이 복층유리 24mm'],
    photos: [IMG('window-a'), IMG('dining')],
    process: [],
    summary: '분당구 구미동 28평 아파트의 거실과 안방 샷시를 하루 만에 PVC 이중창으로 교체했습니다. 로이 복층유리로 겨울 결로와 외풍을 줄였습니다.',
    story: ['오래된 알루미늄 샷시라 겨울마다 결로와 외풍이 심했습니다. 거실과 안방 두 곳을 하루에 철거·설치까지 마쳤습니다.'],
    faq: [{ q: '샷시 교체는 하루면 끝나나요?', a: '창 2~3개는 보통 하루에 끝납니다. 집 전체를 바꾸면 2일 정도 걸립니다.' }],
  },
  {
    id: 'c6', kind: 'bath', date: '2026-07-25',
    title: '광교 원천동 40평 아파트 공용욕실 리모델링',
    area: '수원시 영통구 원천동', type: '아파트', size: 40, days: 4,
    scopes: ['공용욕실', '방수', '수납장'],
    materials: ['300×600 화이트 타일', '원목 세면대장', '오픈 선반', '해바라기 샤워기'],
    photos: [IMG('bath-b'), IMG('bath-d')],
    process: [[IMG('before-bath-c'), '시공 전'], [IMG('work-tile'), '방수·타일'], [IMG('bath-b'), '완공']],
    summary: '광교 원천동 40평 아파트의 공용욕실을 4일 동안 리모델링했습니다. 원목 세면대장과 오픈 선반으로 수납을 늘리고 욕조는 그대로 살렸습니다.',
    story: ['아이들이 쓰는 욕실이라 욕조는 남기고, 세면대 아래와 벽 선반에 수납을 최대한 넣었습니다.'],
    faq: [{ q: '욕실 1개만 따로 공사해도 되나요?', a: '네, 욕실 1개만 공사하는 경우도 많습니다. 보통 4일이면 끝납니다.' }],
  },
  {
    id: 'c7', kind: 'kitchen', date: '2026-07-08',
    title: '서현동 단독주택 주방·다용도실 리모델링',
    area: '성남시 분당구 서현동', type: '단독주택', size: 45, days: 6,
    scopes: ['주방 전체', '다용도실', '타일'],
    materials: ['무광 화이트 도어', '인조대리석 상판', '원목 마루', '빌트인 식기세척기'],
    photos: [IMG('kitchen-a'), IMG('kitchen-d')],
    process: [[IMG('work-kitchen'), '철거'], [IMG('kitchen-a'), '완공']],
    summary: '분당구 서현동 단독주택의 주방과 다용도실을 6일 동안 리모델링했습니다. 창가 쪽으로 개수대를 옮기고 식기세척기를 빌트인으로 넣었습니다.',
    story: ['단독주택이라 배관 위치가 자유로워 창가에 개수대를 두고 다용도실까지 동선을 하나로 이었습니다.'],
    faq: [{ q: '식기세척기 빌트인은 아무 주방에나 되나요?', a: '하부장 폭 60cm와 급·배수, 전용 콘센트가 필요합니다. 실측 때 가능 여부를 바로 알려 드립니다.' }],
  },
  {
    id: 'c8', kind: 'kitchen', date: '2026-06-27',
    title: '상현동 33평 아파트 화이트 아일랜드 주방',
    area: '용인시 수지구 상현동', type: '아파트', size: 33, days: 4,
    scopes: ['주방 전체', '아일랜드'],
    materials: ['무광 화이트 도어', '세라믹 상판', '원목 바 스툴 공간'],
    photos: [IMG('kitchen-e'), IMG('kitchen-b')],
    process: [[IMG('work-kitchen'), '철거'], [IMG('kitchen-e'), '완공']],
    summary: '수지구 상현동 33평 아파트 주방을 4일 동안 화이트 아일랜드 주방으로 바꿨습니다. 아일랜드에 수납과 식탁 기능을 함께 넣었습니다.',
    story: ['거실과 이어지는 주방이라 상부장을 줄이고 아일랜드를 중심에 두어 탁 트인 느낌을 냈습니다.'],
    faq: [],
  },
  {
    id: 'c9', kind: 'floor', date: '2026-06-10',
    title: '판교 삼평동 39평 아파트 도배·바닥·조명',
    area: '성남시 분당구 삼평동', type: '아파트', size: 39, days: 4,
    scopes: ['전체 도배', '강마루', '조명 교체'],
    materials: ['합지 벽지(웜화이트)', '강마루 라이트 오크', '라인 조명'],
    photos: [IMG('living-b'), IMG('window-a')],
    process: [[IMG('work-room'), '기존 마감 제거'], [IMG('living-b'), '완공']],
    summary: '판교 삼평동 39평 아파트의 도배와 바닥, 거실 조명을 4일 동안 바꿨습니다. 큰 창의 채광을 살리도록 밝은 톤으로 맞췄습니다.',
    story: ['남향 거실의 채광을 살리려고 벽지와 바닥을 모두 밝은 톤으로 맞추고, 천장 등을 라인 조명으로 바꿨습니다.'],
    faq: [],
  },
];

const SERVICES = [
  { kind: 'bath', name: '욕실 리모델링', days: '4~6일', img: IMG('bath-d'), desc: '철거부터 방수, 타일, 도기·수전까지. 누수 이력이 있으면 방수를 새로 합니다.' },
  { kind: 'kitchen', name: '주방 리모델링', days: '3~6일', img: IMG('kitchen-b'), desc: '상·하부장, 상판, 후드, 타일. 구조 변경과 빌트인 가전도 함께 설계합니다.' },
  { kind: 'floor', name: '도배·바닥', days: '2~4일', img: IMG('living-c'), desc: '실크·합지 도배, 강마루·장판. 이사 일정에 맞춘 빈집 시공을 권합니다.' },
  { kind: 'window', name: '샷시 교체', days: '1~2일', img: IMG('window-a'), desc: 'PVC 이중창, 로이 복층유리로 결로와 외풍을 줄입니다.' },
];

const REVIEWS = [
  { who: '정자동 김○○ 님', text: '공사 전에 일정표를 주시고 매일 사진으로 진행 상황을 보내 주셔서 안심됐어요. 아래층 누수 걱정도 없어졌습니다.', caseId: 'c1' },
  { who: '풍덕천동 이○○ 님', text: '주방 구조를 바꾸자는 제안이 정말 좋았어요. 수납이 두 배는 늘었습니다.', caseId: 'c2' },
  { who: '백현동 박○○ 님', text: '이사 날짜가 빠듯했는데 약속한 날 정확히 끝내 주셨습니다.', caseId: 'c3' },
];

const FAQ = [
  { q: '견적은 무료인가요?', a: '네, 방문 실측과 견적은 무료입니다. 사진을 먼저 보내 주시면 대략적인 금액을 미리 알려 드립니다.' },
  { q: '공사 기간은 얼마나 걸리나요?', a: '욕실 1개는 4~5일, 주방은 3~6일, 샷시는 1~2일 정도입니다. 시공사례마다 실제 기간을 적어 두었습니다.' },
  { q: 'A/S는 어떻게 되나요?', a: '시공 후 2년 동안 무상 A/S를 해 드리고, 하자보수 보증보험에 가입되어 있습니다.' },
  { q: '어느 지역까지 시공하나요?', a: '분당, 판교, 수지, 광교, 용인 기흥이 주 시공 지역입니다. 다른 지역은 문의 주세요.' },
  { q: '공사 중 소음 민원은 어떻게 하나요?', a: '관리사무소 공사 신고와 엘리베이터 보양, 세대 동의서 안내까지 저희가 챙깁니다. 소음이 큰 철거는 평일 낮에만 합니다.' },
];

/* 사장님 앱에서 게시한 사례 (이 브라우저에만 저장) */
const OWNER_KEY = 'hn_demo_cases_v2';
function loadOwnerCases() {
  try { return JSON.parse(localStorage.getItem(OWNER_KEY) || '[]'); } catch { return []; }
}
function saveOwnerCases(list) {
  try { localStorage.setItem(OWNER_KEY, JSON.stringify(list)); return true; } catch { return false; }
}
function allCases() { return [...loadOwnerCases(), ...CASES]; }
function findCase(id) { return allCases().find((c) => c.id === id); }
function coverOf(c) { return (c.photos && c.photos[0]) || IMG('bath-a'); }
function avgDays() {
  const d = CASES.filter((c) => c.days).map((c) => c.days);
  return (d.reduce((a, b) => a + b, 0) / d.length).toFixed(1);
}

function esc(str) {
  return String(str ?? '').replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}
function fmtDate(d) { const [y, m, day] = d.split('-'); return `${y}.${m}.${day}`; }

/* 데모 화면 이동 버튼 (오른쪽 아래에 작게) — 실제 업체 사이트에는 없음 */
function mountDemoNav(current) {
  if (window.self !== window.top) return;   // 캡처용 틀(iframe) 안에서는 숨김
  const items = [['index.html', '업체 홈페이지'], ['case.html?id=c1', '시공사례 상세'], ['owner.html', '사장님 앱'], ['report.html', '월간 리포트']];
  const el = document.createElement('div');
  el.className = 'demo-nav';
  el.innerHTML = `<button type="button" class="demo-nav-btn" aria-expanded="false">현장노트 데모 <span aria-hidden="true">▴</span></button>
    <div class="demo-nav-menu" hidden>
      <p>가상 업체로 만든 예시입니다. 사진은 Unsplash 무료 사진입니다.</p>
      ${items.map(([href, label], i) => `<a href="${href}"${i === current ? ' aria-current="page"' : ''}><span>${i + 1}</span>${label}</a>`).join('')}
    </div>`;
  document.body.appendChild(el);
  const btn = el.querySelector('button'), menu = el.querySelector('.demo-nav-menu');
  btn.addEventListener('click', () => {
    const open = menu.hidden;
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', open);
  });
}
