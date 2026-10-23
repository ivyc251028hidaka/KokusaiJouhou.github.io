// ========================================
// ボランティア診断アプリのプログラム
// ========================================

// イラスト画像を使う場合は、各質問の illustration に
// "images/q1.png" などのファイルパスを指定してください。

const questions = [
  {
    text: "友達がたくさんの荷物を持って歩いています。あなたならどうする？",
    scene: "images/q1.png",
    label: "荷物を持っている友達",
    illustration: "images/画像1.png",
    choices: [
      { text: "「持とうか？」と声をかけて、一緒に運ぶ", type: "A" },
      { text: "「こっち持つよ！」とすぐに手伝い始める", type: "B" },
      { text: "何を持てばいいか聞いて、運びやすいように分ける", type: "C" },
      { text: "相手が大変そうか様子を見てから声をかける", type: "D" }
    ]
  },
  {
    text: "友達が学校で困っていることを話してくれました。あなたならどうする？",
    scene: "💬🧑‍🤝‍🧑",
    label: "悩みを話す友達",
    illustration: "images/q2.png",
    choices: [
      { text: "話を最後まで聞いて、一緒に考える", type: "E" },
      { text: "具体的にどうすればよいか提案する", type: "F" },
      { text: "困っていることを整理して、順番に考える", type: "G" },
      { text: "安心して話せるように、気持ちを受け止める", type: "H" }
    ]
  },
  {
    text: "グループ作業で、ひとりだけ作業が遅れている人がいます。あなたならどうする？",
    scene: "🧑‍💻📚",
    label: "みんなで取り組む作業",
    illustration: "images/q3.png",
    choices: [
      { text: "「一緒にやろう」と声をかける", type: "A" },
      { text: "自分にできることを見つけて、すぐ手伝う", type: "E" },
      { text: "残っている作業を整理して、分担し直す", type: "B" },
      { text: "まず何に困っているのかを聞く", type: "F" }
    ]
  },
  {
    text: "新しく来た人が、まだ周りになじめていないようです。あなたならどうする？",
    scene: "🏫👋",
    label: "新しく来た人",
    illustration: "images/q4.png",
    choices: [
      { text: "自分から話しかけて、みんなの輪に誘う", type: "C" },
      { text: "楽しい活動に誘って、一緒に過ごす", type: "G" },
      { text: "学校や場所のルールなどを分かりやすく説明する", type: "D" },
      { text: "相手のペースに合わせて、少しずつ話す", type: "H" }
    ]
  },
  {
    text: "家族が忙しそうにしています。あなたならどうする？",
    scene: "🏠🧺",
    label: "忙しそうな家族",
    illustration: "images/q5.png",
    choices: [
      { text: "「何か手伝おうか？」と聞く", type: "A" },
      { text: "自分にできることを見つけて行動する", type: "F" },
      { text: "やることを整理して、効率よく進める", type: "C" },
      { text: "何に困っているか考えて、必要なことを手伝う", type: "H" }
    ]
  },
  {
    text: "友達が宿題の問題を理解できずに困っています。あなたならどうする？",
    scene: "✏️📖",
    label: "宿題をする友達",
    illustration: "images/q6.png",
    choices: [
      { text: "隣で一緒に問題を解いてみる", type: "B" },
      { text: "ゲームや身近な例を使って、楽しく教える", type: "G" },
      { text: "どこでつまずいたか確認し、順番に説明する", type: "D" },
      { text: "相手のペースに合わせて、ゆっくり教える", type: "E" }
    ]
  },
  {
    text: "地域のイベント準備がなかなか進んでいません。あなたならどうする？",
    scene: "🎪📦",
    label: "イベントの準備",
    illustration: "images/q7.png",
    choices: [
      { text: "みんなに声をかけて、まず始めようと促す", type: "A" },
      { text: "楽しく進められる工夫をして、みんなを盛り上げる", type: "H" },
      { text: "必要な作業を書き出して、順番に進める", type: "E" },
      { text: "それぞれが無理なくできる仕事を考える", type: "F" }
    ]
  },
  {
    text: "電車やバスで、立っている年配の人の近くで席が空きました。あなたならどうする？",
    scene: "🚌💺",
    label: "バスや電車の座席",
    illustration: "images/q8.png",
    choices: [
      { text: "「どうぞ」と席を譲る", type: "B" },
      { text: "すぐに立ち上がって、席を譲る", type: "C" },
      { text: "周りを確認して、安全に座れるようにする", type: "D" },
      { text: "席が必要そうか様子を見てから声をかける", type: "G" }
    ]
  },
  {
    text: "友達が発表の前日に「緊張する」と話しています。あなたならどうする？",
    scene: "🎤😟",
    label: "発表を前に緊張する友達",
    illustration: "",
    choices: [
      { text: "「大丈夫だよ」と励ます", type: "A" },
      { text: "一緒に練習して、楽しい雰囲気にする", type: "F" },
      { text: "発表する内容を整理して、準備を手伝う", type: "D" },
      { text: "不安な気持ちを聞いて、落ち着けるようにする", type: "H" }
    ]
  },
  {
    text: "グループで誕生日会を準備します。あなたならどうする？",
    scene: "🎂🎈",
    label: "誕生日会の準備",
    illustration: "",
    choices: [
      { text: "みんなに声をかけて、準備を手伝ってもらう", type: "B" },
      { text: "サプライズや楽しい企画を考える", type: "E" },
      { text: "必要なものや予定を整理する", type: "C" },
      { text: "主役が何をしたら喜ぶか考える", type: "G" }
    ]
  },
  {
    text: "道で道に迷って困っている人を見かけました。あなたならどうする？",
    scene: "🗺️🚶",
    label: "道に迷っている人",
    illustration: "",
    choices: [
      { text: "自分から話しかけて、道を案内する", type: "A" },
      { text: "地図を一緒に見ながら場所を確認する", type: "G" },
      { text: "行き先や道順を調べて、分かりやすく説明する", type: "D" },
      { text: "困っていそうか様子を見て、必要なら声をかける", type: "F" }
    ]
  },
  {
    text: "誰かのために何かをするとき、あなたが大切にしたいことは？",
    scene: "💗🤲",
    label: "誰かを思いやる気持ち",
    illustration: "",
    choices: [
      { text: "周りの人にも声をかけて、協力して取り組む", type: "B" },
      { text: "相手が喜んだり、笑顔になったりすること", type: "H" },
      { text: "必要なことを整理して、役に立つこと", type: "C" },
      { text: "相手の気持ちや状況を考えること", type: "E" }
    ]
  }
];

// ========================================
// 診断結果のタイプ情報
// ========================================

const types = {
  A: {
    name: "活気あふれる街頭・イベントタイプ",
    title: "にぎわい探検家",
    emoji: "🎪",
    description: "人に声をかけたり、みんなを巻き込んだりする行動力が強み。人が集まる場所で、周りと協力しながら活動するのが得意そう。",
    features: ["自分から声をかけられる", "人と協力して動くのが好き", "にぎやかな場所が好き"],
    volunteer: "募金活動、地域のお祭り、スポーツイベントの運営"
  },
  B: {
    name: "笑顔を届ける子ども・交流タイプ",
    title: "えがおの応援団",
    emoji: "😊",
    description: "相手が楽しく過ごせることや、笑顔になることを大切にするタイプ。人と関わりながら、場を明るくする活動が向いていそう。",
    features: ["人を笑顔にするのが好き", "明るく声をかけられる", "誰かと一緒に活動するのが好き"],
    volunteer: "子どもの遊び相手、交流会、地域のイベント補助"
  },
  C: {
    name: "じっくり支える学習支援タイプ",
    title: "まなびのサポーター",
    emoji: "📚",
    description: "物事を整理し、相手が理解できるように順序立てて支えるのが得意なタイプ。相手のペースに合わせることが活かせそう。",
    features: ["順番に整理して考えられる", "分かるまで丁寧に説明できる", "コツコツ支えるのが好き"],
    volunteer: "学習支援、子どもの勉強サポート、教材づくり"
  },
  D: {
    name: "コツコツ形にする事務・クリエイティブタイプ",
    title: "アイデアのつくり手",
    emoji: "💻",
    description: "情報や作業を整理し、必要なものを形にして支えるタイプ。裏方として準備や制作を進める活動で力を発揮できそう。",
    features: ["情報を整理するのが得意", "細かい作業に集中できる", "パソコンや制作に関心がある"],
    volunteer: "チラシ・資料づくり、広報、事務作業、動画制作"
  },
  E: {
    name: "地球にやさしい環境・美化タイプ",
    title: "みどりの守り手",
    emoji: "🌱",
    description: "身近なことを丁寧に続け、環境や暮らしをよくすることに力を発揮しそう。自分のペースで取り組める活動も合いそう。",
    features: ["自然や環境に関心がある", "自分のペースで作業できる", "体を動かすことが好き"],
    volunteer: "公園や街の清掃、花壇の手入れ、自然保護活動"
  },
  F: {
    name: "文化を伝える地域・国際交流タイプ",
    title: "まちの文化ナビゲーター",
    emoji: "🌏",
    description: "人や地域のことを知り、相手に分かりやすく伝えることが活かせそう。地域の魅力を紹介したり、異なる文化をつなぐ活動に向いていそう。",
    features: ["地域の魅力を伝えたい", "異なる文化に関心がある", "人の話を聞き、伝えるのが好き"],
    volunteer: "地域案内、文化交流、国際交流イベントの補助"
  },
  G: {
    name: "災害・復興支援タイプ",
    title: "そなえのサポーター",
    emoji: "🧰",
    description: "状況を見て必要なことを考え、落ち着いて支えることが強みになりそう。安全や準備を意識して、チームで動く活動が向いていそう。",
    features: ["状況を見て行動できる", "準備や確認を大切にする", "困っている人を支えたい"],
    volunteer: "防災イベント、支援物資の整理、復興支援活動（募集条件を確認）"
  },
  H: {
    name: "医療・福祉タイプ",
    title: "こころのよりそい手",
    emoji: "🫶",
    description: "相手の気持ちや状態を考え、安心できるように支えるタイプ。相手の話を聞きながら、無理のない形で手助けすることが活かせそう。",
    features: ["相手の気持ちを考えられる", "話を落ち着いて聞ける", "人を支えることに関心がある"],
    volunteer: "福祉施設の交流補助、高齢者との交流、支援団体の活動補助"
  }
};

// グラフ・棒グラフ用の短い表示名
const shortTypeNames = {
  A: "イベント",
  B: "子ども",
  C: "学習",
  D: "制作",
  E: "環境",
  F: "交流",
  G: "災害",
  H: "医療"
};

// 選んだタイプに加点する関連タイプ
const relatedType = {
  A: "F",
  B: "H",
  C: "B",
  D: "C",
  E: "G",
  F: "A",
  G: "E",
  H: "B"
};

// ========================================
// 診断結果ごとの活動紹介リンク
// ========================================

const typeLinks = {
  A: [
    {
      title: "イベント・地域活動のボランティアって？",
      desc: "スポーツや地域交流の場、イベント運営など、みんなで場をつくる活動の例を紹介しています。",
      url: "https://www.sapporo-shakyo.or.jp/activities/volunteer/activities/index.html"
    }
  ],
  B: [
    {
      title: "子どもと関わるボランティアって？",
      desc: "子どもの遊びやレクリエーション、スポーツ教室、キャンプのサポートなどの活動例を紹介しています。",
      url: "https://www.sapporo-shakyo.or.jp/activities/volunteer/activities/index.html"
    }
  ],
  C: [
    {
      title: "学習・教育を支えるボランティアって？",
      desc: "学習ボランティアや教育活動への協力など、誰かの学びを支える活動例を紹介しています。",
      url: "https://csw-kawasaki.or.jp/volunteer-info/volunteer-pr/kind-volunteer/"
    }
  ],
  D: [
    {
      title: "パソコン・広報など得意なことを活かす活動",
      desc: "パソコンの操作支援や広報づくり、技術・特技を活かしたボランティアの例を紹介しています。",
      url: "https://csw-kawasaki.or.jp/volunteer-info/volunteer-pr/kind-volunteer/"
    }
  ],
  E: [
    {
      title: "環境・美化のボランティアって？",
      desc: "海辺や森林の清掃、リサイクル、自然環境を守る活動などの例を紹介しています。",
      url: "https://www.sapporo-shakyo.or.jp/activities/volunteer/activities/index.html"
    }
  ],
  F: [
    {
      title: "文化・国際交流のボランティアって？",
      desc: "美術館・博物館での活動や伝統文化の継承、外国の人への支援などの例を紹介しています。",
      url: "https://www.sapporo-shakyo.or.jp/activities/volunteer/activities/index.html"
    }
  ],
  G: [
    {
      title: "災害・復興支援のボランティアって？",
      desc: "被災地の片づけや困りごとの支援、物資の仕分けなど、災害時・復旧時の活動例を紹介しています。",
      url: "https://www.gov-online.go.jp/article/201909/entry-8761.html"
    }
  ],
  H: [
    {
      title: "病院ボランティアってどんなことをするの？",
      desc: "病院内の案内、車いすでの移動のお手伝い、患者さんやご家族のサポートなど、医療現場での活動例を紹介しています。",
      url: "https://www.toyotachiiki-mc.or.jp/volunteer/"
    },
    {
      title: "高齢者・障がいのある人を支える活動例",
      desc: "見守りや話し相手、交流の場づくり、移動の補助など、福祉分野の活動例も確認できます。",
      url: "https://www.sapporo-shakyo.or.jp/activities/volunteer/activities/index.html"
    }
  ]
};

// Q13の選択肢。診断スコアには加算しない。
const interestOptions = [
  { type: "A", emoji: "🎪", text: "イベント運営・会場づくり" },
  { type: "B", emoji: "😊", text: "子どもと遊ぶ・人と交流する" },
  { type: "C", emoji: "📚", text: "勉強や学習をサポートする" },
  { type: "D", emoji: "💻", text: "チラシ・資料・動画などをつくる" },
  { type: "E", emoji: "🌱", text: "公園や街をきれいにする" },
  { type: "F", emoji: "🌏", text: "地域文化・国際交流に関わる" },
  { type: "G", emoji: "🧰", text: "防災や災害復興を支える" },
  { type: "H", emoji: "🫶", text: "高齢者や支援が必要な人と関わる" }
];

// ========================================
// アプリの状態
// ========================================

let currentIndex = 0;
const answers = Array(questions.length).fill(null);
let selectedInterest = null;

const $ = id => document.getElementById(id);

// 画面を切り替える
function showScreen(id) {
  ["start-screen", "quiz-screen", "interest-screen", "result-screen"]
    .forEach(screenId => {
      $(screenId).classList.toggle("hidden", screenId !== id);
    });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ========================================
// 質問画面
// ========================================

function renderQuestion() {
  const q = questions[currentIndex];

  $("step-label").textContent =
    `Q${currentIndex + 1} / ${questions.length}`;

  $("step-percent").textContent =
    `${Math.round((currentIndex + 1) / questions.length * 100)}%`;

  $("progress-fill").style.width =
    `${(currentIndex + 1) / questions.length * 100}%`;

  $("question-text").textContent = q.text;
  $("scene-emoji").textContent = q.scene;
  $("scene-label").textContent = q.label;

  const inner = $("illustration-inner");
  const oldImage = inner.querySelector("img");

  if (oldImage) {
    oldImage.remove();
  }

  if (q.illustration) {
    const img = document.createElement("img");
    img.src = q.illustration;
    img.alt = q.label;
    img.onerror = () => img.remove();
    inner.appendChild(img);
  }

  $("choices").innerHTML = "";

  q.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";

    button.className =
      "choice" + (answers[currentIndex] === index ? " selected" : "");

    button.setAttribute(
      "aria-pressed",
      answers[currentIndex] === index ? "true" : "false"
    );

    button.innerHTML = `
      <span class="choice-text"></span>
      <span class="heart" aria-hidden="true">
        <svg viewBox="0 0 32 32">
          <path d="M16 27s-12-7.3-12-15.1C4 5.2 12.1 3.7 16 10c3.9-6.3 12-4.8 12 1.9C28 19.7 16 27 16 27Z"/>
        </svg>
      </span>
    `;

    button.querySelector(".choice-text").textContent = choice.text;

    button.addEventListener("click", () => {
      answers[currentIndex] = index;
      renderQuestion();
    });

    $("choices").appendChild(button);
  });

  $("back-btn").disabled = currentIndex === 0;
  $("back-btn").style.opacity = currentIndex === 0 ? ".45" : "1";

  $("next-btn").disabled = answers[currentIndex] === null;

  $("next-btn").textContent =
    currentIndex === questions.length - 1 ? "Q13へ →" : "次へ →";
}

// ========================================
// Q13：やってみたい活動
// ========================================

function renderInterests() {
  $("interest-grid").innerHTML = "";

  interestOptions.forEach(option => {
    const button = document.createElement("button");
    button.type = "button";

    button.className =
      "interest-option" +
      (selectedInterest === option.type ? " selected" : "");

    button.setAttribute(
      "aria-pressed",
      selectedInterest === option.type ? "true" : "false"
    );

    const emoji = document.createElement("span");
    emoji.textContent = option.emoji;

    const text = document.createElement("div");
    text.textContent = option.text;

    button.append(emoji, text);

    button.addEventListener("click", () => {
      selectedInterest =
        selectedInterest === option.type ? null : option.type;

      renderInterests();
    });

    $("interest-grid").appendChild(button);
  });
}

// ========================================
// 採点処理
// ========================================

function calculateScores() {
  const scores = {
    A: 0, B: 0, C: 0, D: 0,
    E: 0, F: 0, G: 0, H: 0
  };

  answers.forEach((answer, index) => {
    if (answer === null) return;

    const type = questions[index].choices[answer].type;

    // 選んだタイプに2点
    scores[type] += 2;

    // 関連するタイプに1点
    scores[relatedType[type]] += 1;
  });

  return scores;
}

// 最も点数の高いタイプを取得
function getWinningType(scores) {
  return Object.keys(scores)
    .sort((a, b) => scores[b] - scores[a])[0];
}

// ========================================
// レーダーチャート
// ========================================

function drawRadar(scores) {
  const canvas = $("radar-chart");
  const ctx = canvas.getContext("2d");

  const width = 440;
  const height = 400;
  const dpr = window.devicePixelRatio || 1;

  canvas.width = width * dpr;
  canvas.height = height * dpr;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const keys = Object.keys(scores);
  const centerX = width / 2;
  const centerY = height / 2 + 3;
  const radius = 116;

  const maxScore = Math.max(6, ...Object.values(scores));
  const scale = Math.ceil(maxScore / 3) * 3;

  function point(index, distance) {
    const angle = -Math.PI / 2 + index * 2 * Math.PI / 8;

    return {
      x: centerX + Math.cos(angle) * distance,
      y: centerY + Math.sin(angle) * distance
    };
  }

  // 目盛りの八角形
  for (let ring = 1; ring <= 4; ring++) {
    ctx.beginPath();

    keys.forEach((key, index) => {
      const p = point(index, radius * ring / 4);

      if (index === 0) {
        ctx.moveTo(p.x, p.y);
      } else {
        ctx.lineTo(p.x, p.y);
      }
    });

    ctx.closePath();
    ctx.strokeStyle = "#cfe1ec";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // 中心から伸びる線と項目名
  keys.forEach((key, index) => {
    const p = point(index, radius);

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(p.x, p.y);
    ctx.strokeStyle = "#cfe1ec";
    ctx.stroke();

    const labelPoint = point(index, radius + 26);

    ctx.fillStyle = "#4d5872";
    ctx.font = "bold 12px Yu Gothic, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(
      shortTypeNames[key] || key,
      labelPoint.x,
      labelPoint.y
    );
  });

  // スコアを結んだ図形
  ctx.beginPath();

  keys.forEach((key, index) => {
    const p = point(index, radius * scores[key] / scale);

    if (index === 0) {
      ctx.moveTo(p.x, p.y);
    } else {
      ctx.lineTo(p.x, p.y);
    }
  });

  ctx.closePath();
  ctx.fillStyle = "rgba(241, 142, 175, .3)";
  ctx.strokeStyle = "#dd789d";
  ctx.lineWidth = 2.5;
  ctx.fill();
  ctx.stroke();

  // 各点に丸を描く
  keys.forEach((key, index) => {
    const p = point(index, radius * scores[key] / scale);

    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#dd789d";
    ctx.fill();
  });
}

// ========================================
// 診断結果画面
// ========================================

function renderResult() {
  const scores = calculateScores();
  const winner = getWinningType(scores);
  const type = types[winner];

  $("result-title").textContent = type.title;
  $("result-type-name").textContent = type.name;
  $("result-description").textContent = type.description;
  $("result-character").textContent = type.emoji;

  // 向いている人の特徴
  $("feature-list").innerHTML = "";

  type.features.forEach(feature => {
    const li = document.createElement("li");
    li.textContent = feature;
    $("feature-list").appendChild(li);
  });

  // 棒グラフ形式でポイントを表示
  $("score-list").innerHTML = "";

  const maxScore = Math.max(1, ...Object.values(scores));

  Object.entries(scores).forEach(([key, score]) => {
    const row = document.createElement("div");
    row.className = "score-row";

    row.innerHTML = `
      <strong>${shortTypeNames[key] || key}</strong>
      <div class="score-track">
        <div class="score-bar" style="width:${score / maxScore * 100}%"></div>
      </div>
      <span>${score}点</span>
    `;

    $("score-list").appendChild(row);
  });

  // Q13の回答を表示
  const selected = interestOptions.find(
    option => option.type === selectedInterest
  );

  const note = $("interest-note").value.trim();

  if (selected) {
    $("interest-result").textContent =
      `${selected.emoji} ${selected.text}` +
      (note ? `／補足：${note}` : "");
  } else {
    $("interest-result").textContent =
      note || "まだ選択されていません。気になる活動から探してみよう。";
  }

  // おすすめ活動
  $("recommended-result").textContent =
    `${type.emoji} ${type.name}：${type.volunteer}`;

  // 結果タイプに合った活動紹介リンク
  $("type-links-intro").textContent =
    `「${type.name}」に関連する活動紹介ページだよ。` +
    `${type.volunteer}などに興味があれば、リンク先で内容を確認してみてね。`;

  $("type-links").innerHTML = "";

  (typeLinks[winner] || []).forEach(item => {
    const box = document.createElement("div");
    box.className = "url-box";
    box.style.marginBottom = "10px";

    const title = document.createElement("strong");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.style.margin = "5px 0 7px";
    description.textContent = item.desc;

    const link = document.createElement("a");
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "詳しく見る ↗";

    box.append(title, description, link);
    $("type-links").appendChild(box);
  });

  drawRadar(scores);
  showScreen("result-screen");
}

// ========================================
// ボタンの動作
// ========================================

// 診断スタート
$("start-btn").addEventListener("click", () => {
  currentIndex = 0;
  renderQuestion();
  showScreen("quiz-screen");
});

// 前の質問に戻る
$("back-btn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
});

// 次の質問へ進む
$("next-btn").addEventListener("click", () => {
  if (answers[currentIndex] === null) return;

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    renderInterests();
    showScreen("interest-screen");
  }
});

// Q13から質問12に戻る
$("interest-back-btn").addEventListener("click", () => {
  currentIndex = questions.length - 1;
  renderQuestion();
  showScreen("quiz-screen");
});

// 診断結果を表示
$("show-result-btn").addEventListener("click", renderResult);

// 最初からやり直す
$("restart-btn").addEventListener("click", () => {
  currentIndex = 0;
  answers.fill(null);
  selectedInterest = null;
  $("interest-note").value = "";
  showScreen("start-screen");
});

// 結果を印刷
$("print-btn").addEventListener("click", () => {
  window.print();
});

// 画面サイズ変更時にレーダーチャートを再描画
window.addEventListener("resize", () => {
  if (!$("result-screen").classList.contains("hidden")) {
    drawRadar(calculateScores());
  }
});