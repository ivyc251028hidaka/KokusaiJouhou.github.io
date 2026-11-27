// ========================================
// ボランティア診断 app.js
// Q1〜Q12：各回答1点
// Q13：採点対象外
// ========================================

// ---------- 質問データ ----------
// scene に画像の保存場所を指定します。
// 画像は images フォルダに入れてください。

const questions = [
  {
    text: "友達がたくさんの荷物を持って歩いています。あなたならどうする？",
    scene: "images/S画像1.png",
    label: "荷物を持っている友達",
    choices: [
      "自分から声をかけて、一緒に運ぶ",
      "すぐに手伝い始める",
      "何を持てばいいか聞いて、手伝う",
      "相手が大変そうか様子を見てから声をかける"
    ]
  },
  {
    text: "友達が学校のことで悩んでいると話してきました。あなたならどうする？",
    scene: "images/q2.png",
    label: "悩みを話す友達",
    choices: [
      "身近な環境を教えたり、気分転換できる方法を提案する",
      "「こうしてみたら？」と伝える",
      "悩みを整理して、一つずつ考える",
      "相手が少しでも安心できるように話を聞く"
    ]
  },
  {
    text: "グループで作業をしていて、一人だけ作業が遅れています。あなたならどうする？",
    scene: "images/q3.png",
    label: "みんなで取り組む作業",
    choices: [
      "「一緒にやろう」と声をかける",
      "自分ができる作業を見つけて、すぐに手伝う",
      "アドバイスを考える",
      "その人が困っていることを聞いてから手伝う"
    ]
  },
  {
    text: "学校に転校生が来た。周りになじめるために、あなたならどうする？",
    scene: "images/q4.png",
    label: "転校してきた人",
    choices: [
      "自分から話しかけて、みんなの輪に誘う",
      "楽しめそうなことに誘って、一緒に過ごす",
      "学校のことやルールを分かりやすく教える",
      "その人のペースに合わせながら関わりを持つ"
    ]
  },
  {
    text: "家族が忙しそうにしているとき、あなたはどうすることが多い？",
    scene: "images/q5.png",
    label: "忙しそうな家族",
    choices: [
      "兄弟の面倒を進んで見る",
      "インターホンの対応をする",
      "やることを整理して、効率よく進める",
      "優先順位を考えて、手伝う"
    ]
  },
  {
    text: "友達が勉強で分からないところがあると言っています。あなたならどうする？",
    scene: "images/q6.png",
    label: "勉強で困っている友達",
    choices: [
      "隣で一緒に問題を解いてみる",
      "ゲームや例えを使って楽しく教える",
      "どこが分からないのか確認して、説明する",
      "相手のペースに合わせてゆっくり教える"
    ]
  },
  {
    text: "みんなで地域のイベントの準備をしています。作業がなかなか進みません。あなたならどうする？",
    scene: "images/q7.png",
    label: "地域イベントの準備",
    choices: [
      "「みんなでやろう！」と声をかけて働き始める",
      "楽しくできる方法を考えて、みんなを盛り上げる",
      "やることを書き出して、順番に進める",
      "それぞれが無理なくできる仕事を考える"
    ]
  },
  {
    text: "電車やバスで、年配の人が立っています。席が空いたらどうする？",
    scene: "images/q8.png",
    label: "バスや電車の座席",
    choices: [
      "「どうぞ」と声をかける",
      "すぐに立って席を譲る",
      "相手が笑顔になれるように、明るく優しく声をかける",
      "必要か様子を見てから声をかける"
    ]
  },
  {
    text: "学校で友達がみんなの前で発表することになり、前日に「緊張する」と相談してきた。あなたならどうする？",
    scene: "images/q9.png",
    label: "発表を前に緊張する友達",
    choices: [
      "「大丈夫！」と声をかけて元気づける",
      "一緒に練習して発表を盛り上げる",
      "内容を一緒に整理する",
      "気持ちを聞いて落ち着けるようにする"
    ]
  },
  {
    text: "友達の誕生日会をみんなで準備することになりました。あなたは何をする？",
    scene: "images/q10.png",
    label: "誕生日会の準備",
    choices: [
      "みんなに声をかけて、準備を進める",
      "サプライズや楽しい企画を考える",
      "ゴミを減らせる飾りや、繰り返し使える道具を選ぶ",
      "外国の料理や遊びを紹介して、みんなで楽しめるようにする"
    ]
  },
  {
    text: "友達と街を歩いていて、道に迷っている人を見かけました。あなたならどうする？",
    scene: "images/q11.png",
    label: "道に迷っている人",
    choices: [
      "道案内の看板や周辺の様子を確認し、分かりやすい道を探す",
      "一緒に地図を見ながら目的地を探す",
      "場所や行き方を調べて、分かりやすく説明する",
      "相手が困っている様子を見ながら、必要なら声をかける"
    ]
  },
  {
    text: "誰かのために何かをするとき、あなたはどんなことを大切にする？",
    scene: "images/q12.png",
    label: "誰かを思いやる気持ち",
    choices: [
      "自然や環境を大切にし、みんなが気持ちよく過ごせる場所を作ること",
      "相手が楽しんだり、笑顔になったりすること",
      "必要なことを整理して、役に立つこと",
      "相手の気持ちや状況を考えて行動すること"
    ]
  }
];

// ---------- 得点配分 ----------
// 各質問の①②③④の順番です。
// 選んだ回答のカテゴリーに1点だけ加算します。

const choiceTypeMap = [
  ["A", "B", "G", "H"], // Q1
  ["E", "C", "D", "H"], // Q2
  ["A", "E", "G", "C"], // Q3
  ["A", "F", "C", "H"], // Q4
  ["B", "F", "D", "G"], // Q5
  ["C", "D", "B", "H"], // Q6
  ["A", "F", "D", "H"], // Q7
  ["F", "G", "B", "H"], // Q8
  ["A", "B", "C", "H"], // Q9
  ["A", "D", "E", "F"], // Q10
  ["E", "C", "D", "F"], // Q11
  ["E", "B", "D", "H"]  // Q12
];

// ---------- 診断タイプ ----------

const types = {
  A: {
    name: "活気あふれる街頭・イベントタイプ",
    title: "にぎわい探検家",
    emoji: "🎪",
    description: "人に声をかけたり、みんなを巻き込んだりする行動力が強み。人が集まる場所で、周りと協力しながら活動するのが得意そう。",
    features: [
      "自分から声をかけられる",
      "人と協力して動くのが好き",
      "にぎやかな場所が好き"
    ],
    volunteer: "募金活動、地域のお祭り、スポーツイベントの運営"
  },

  B: {
    name: "笑顔を届ける子ども・交流タイプ",
    title: "えがおの応援団",
    emoji: "😊",
    description: "相手が楽しく過ごせることや、笑顔になることを大切にするタイプ。人と関わりながら、場を明るくする活動が向いていそう。",
    features: [
      "人を笑顔にするのが好き",
      "明るく声をかけられる",
      "誰かと一緒に活動するのが好き"
    ],
    volunteer: "子どもの遊び相手、交流会、地域のイベント補助"
  },

  C: {
    name: "じっくり支える学習支援タイプ",
    title: "まなびのサポーター",
    emoji: "📚",
    description: "物事を整理し、相手が理解できるように順序立てて支えるのが得意なタイプ。相手のペースに合わせることが活かせそう。",
    features: [
      "順番に整理して考えられる",
      "分かるまで丁寧に説明できる",
      "コツコツ支えるのが好き"
    ],
    volunteer: "学習支援、子どもの勉強サポート、教材づくり"
  },

  D: {
    name: "コツコツ形にする事務・クリエイティブタイプ",
    title: "アイデアのつくり手",
    emoji: "💻",
    description: "情報や作業を整理し、必要なものを形にして支えるタイプ。裏方として準備や制作を進める活動で力を発揮できそう。",
    features: [
      "情報を整理するのが得意",
      "細かい作業に集中できる",
      "パソコンや制作に関心がある"
    ],
    volunteer: "チラシ・資料づくり、広報、事務作業、動画制作"
  },

  E: {
    name: "地球にやさしい環境・美化タイプ",
    title: "みどりの守り手",
    emoji: "🌱",
    description: "身近なことを丁寧に続け、環境や暮らしをよくすることに力を発揮しそう。自分のペースで取り組める活動も合いそう。",
    features: [
      "自然や環境に関心がある",
      "自分のペースで作業できる",
      "体を動かすことが好き"
    ],
    volunteer: "公園や街の清掃、花壇の手入れ、自然保護活動"
  },

  F: {
    name: "文化を伝える地域・国際交流タイプ",
    title: "まちの文化ナビゲーター",
    emoji: "🌏",
    description: "人や地域のことを知り、相手に分かりやすく伝えることが活かせそう。地域の魅力を紹介したり、異なる文化をつなぐ活動に向いていそう。",
    features: [
      "地域の魅力を伝えたい",
      "異なる文化に関心がある",
      "人の話を聞き、伝えるのが好き"
    ],
    volunteer: "地域案内、文化交流、国際交流イベントの補助"
  },

  G: {
    name: "災害・復興支援タイプ",
    title: "そなえのサポーター",
    emoji: "🧰",
    description: "状況を見て必要なことを考え、落ち着いて支えることが強みになりそう。安全や準備を意識して、チームで動く活動が向いていそう。",
    features: [
      "状況を見て行動できる",
      "準備や確認を大切にする",
      "困っている人を支えたい"
    ],
    volunteer: "防災イベント、支援物資の整理、復興支援活動"
  },

  H: {
    name: "医療・福祉タイプ",
    title: "こころのよりそい手",
    emoji: "🫶",
    description: "相手の気持ちや状態を考え、安心できるように支えるタイプ。相手の話を聞きながら、無理のない形で手助けすることが活かせそう。",
    features: [
      "相手の気持ちを考えられる",
      "話を落ち着いて聞ける",
      "人を支えることに関心がある"
    ],
    volunteer: "福祉施設の交流補助、高齢者との交流、支援団体の活動補助"
  }
};

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

// ---------- ボランティア紹介リンク ----------

const typeLinks = {
  A: [
    {
      title: "イベント・地域活動のボランティア",
      desc: "スポーツや地域交流の場、イベント運営などの活動例を紹介しています。",
      url: "https://www.sapporo-shakyo.or.jp/activities/volunteer/activities/index.html"
    }
  ],
  B: [
    {
      title: "子どもと関わるボランティア",
      desc: "子どもの遊びやレクリエーション、スポーツ教室などの活動例を紹介しています。",
      url: "https://www.sapporo-shakyo.or.jp/activities/volunteer/activities/index.html"
    }
  ],
  C: [
    {
      title: "学習・教育を支えるボランティア",
      desc: "学習ボランティアや教育活動への協力などの活動例を紹介しています。",
      url: "https://csw-kawasaki.or.jp/volunteer-info/volunteer-pr/kind-volunteer/"
    }
  ],
  D: [
    {
      title: "パソコン・広報など得意なことを活かす活動",
      desc: "パソコンの操作支援や広報づくりなどの活動例を紹介しています。",
      url: "https://csw-kawasaki.or.jp/volunteer-info/volunteer-pr/kind-volunteer/"
    }
  ],
  E: [
    {
      title: "環境・美化のボランティア",
      desc: "清掃やリサイクル、自然環境を守る活動などの例を紹介しています。",
      url: "https://www.sapporo-shakyo.or.jp/activities/volunteer/activities/index.html"
    }
  ],
  F: [
    {
      title: "文化・国際交流のボランティア",
      desc: "地域文化の継承や外国の人との交流などの活動例を紹介しています。",
      url: "https://www.sapporo-shakyo.or.jp/activities/volunteer/activities/index.html"
    }
  ],
  G: [
    {
      title: "災害・復興支援のボランティア",
      desc: "防災イベントや支援物資の仕分けなどの活動例を紹介しています。",
      url: "https://www.gov-online.go.jp/article/201909/entry-8761.html"
    }
  ],
  H: [
    {
      title: "病院・福祉に関わるボランティア",
      desc: "病院内の案内や高齢者との交流などの活動例を紹介しています。",
      url: "https://www.toyotachiiki-mc.or.jp/volunteer/"
    },
    {
      title: "地域の福祉ボランティア",
      desc: "見守りや話し相手、交流の場づくりなどの活動例を確認できます。",
      url: "https://www.sapporo-shakyo.or.jp/activities/volunteer/activities/index.html"
    }
  ]
};

// ---------- Q13：やってみたい活動 ----------
// Q13は採点しません。

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

// ---------- 診断の状態 ----------

let currentIndex = 0;
const answers = Array(questions.length).fill(null);
let selectedInterest = null;

const $ = (id) => document.getElementById(id);

// ---------- 画面切り替え ----------

function showScreen(screenId) {
  const screenIds = [
    "start-screen",
    "quiz-screen",
    "interest-screen",
    "result-screen"
  ];

  screenIds.forEach((id) => {
    const element = $(id);
    if (element) {
      element.classList.toggle("hidden", id !== screenId);
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---------- 質問画面 ----------

function renderQuestion() {
  const question = questions[currentIndex];

  $("step-label").textContent =
    `Q${currentIndex + 1} / ${questions.length}`;

  $("step-percent").textContent =
    `${Math.round(((currentIndex + 1) / questions.length) * 100)}%`;

  $("progress-fill").style.width =
    `${((currentIndex + 1) / questions.length) * 100}%`;

  $("question-text").textContent = question.text;
  $("question-text").dataset.question = currentIndex + 1;

  // scene に指定された画像を表示
  const sceneArea = $("scene-emoji");
  sceneArea.innerHTML = "";

  const image = document.createElement("img");
  image.src = question.scene;
  image.alt = question.label;
  image.className = "scene-photo";

  // 画像全体を表示し、切り抜かない
  image.style.width = "100%";
  image.style.height = "100%";
  image.style.maxWidth = "100%";
  image.style.maxHeight = "100%";
  image.style.objectFit = "contain";
  image.style.objectPosition = "center";

  image.onerror = () => {
    sceneArea.innerHTML = "";
    const message = document.createElement("p");
    message.className = "image-error";
    message.textContent =
      `画像が見つかりません。${question.scene} を確認してください。`;
    sceneArea.appendChild(message);
  };

  sceneArea.appendChild(image);
  $("scene-label").textContent = question.label;

  // 選択肢を作成
  $("choices").innerHTML = "";

  question.choices.forEach((choiceText, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "choice";

    if (answers[currentIndex] === index) {
      button.classList.add("selected");
    }

    button.setAttribute(
      "aria-pressed",
      answers[currentIndex] === index ? "true" : "false"
    );

    const text = document.createElement("span");
    text.className = "choice-text";
    text.textContent = choiceText;

    const heart = document.createElement("span");
    heart.className = "heart";
    heart.setAttribute("aria-hidden", "true");

    heart.innerHTML = `
      <svg viewBox="0 0 32 32">
        <path d="M16 27s-12-7.3-12-15.1C4 5.2 12.1 3.7 16 10c3.9-6.3 12-4.8 12 1.9C28 19.7 16 27 16 27Z"/>
      </svg>
    `;

    button.append(text, heart);

    button.addEventListener("click", () => {
      answers[currentIndex] = index;
      renderQuestion();
    });

    $("choices").appendChild(button);
  });

  $("back-btn").disabled = currentIndex === 0;

  $("next-btn").disabled = answers[currentIndex] === null;

  $("next-btn").textContent =
    currentIndex === questions.length - 1
      ? "Q13へ →"
      : "次へ →";
}

// ---------- Q13画面 ----------

function renderInterests() {
  $("interest-grid").innerHTML = "";

  interestOptions.forEach((option) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "interest-option";

    if (selectedInterest === option.type) {
      button.classList.add("selected");
    }

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

// ---------- 得点計算 ----------

function calculateScores() {
  const scores = {
    A: 0, B: 0, C: 0, D: 0,
    E: 0, F: 0, G: 0, H: 0
  };

  answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;

    const type = choiceTypeMap[questionIndex][answerIndex];

    // 選んだカテゴリーだけに1点加算
    scores[type] += 1;
  });

  return scores;
}

// ---------- 最高得点のタイプ ----------

function getWinningType(scores) {
  const order = ["A", "B", "C", "D", "E", "F", "G", "H"];

  let winner = order[0];

  order.forEach((type) => {
    if (scores[type] > scores[winner]) {
      winner = type;
    }
  });

  return winner;
}

// ---------- レーダーチャート ----------

function drawRadar(scores) {
  const canvas = $("radar-chart");

  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  const width = 440;
  const height = 400;
  const dpr = window.devicePixelRatio || 1;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = "100%";
  canvas.style.maxWidth = `${width}px`;
  canvas.style.height = "auto";

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const keys = Object.keys(scores);
  const centerX = width / 2;
  const centerY = height / 2 + 3;
  const radius = 116;

  const maxScore = Math.max(1, ...Object.values(scores));
  const scale = Math.max(3, Math.ceil(maxScore / 3) * 3);

  function point(index, distance) {
    const angle =
      -Math.PI / 2 + index * (2 * Math.PI / keys.length);

    return {
      x: centerX + Math.cos(angle) * distance,
      y: centerY + Math.sin(angle) * distance
    };
  }

  // 背景の目盛り
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
    ctx.strokeStyle = "#eadfe8";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // 中心から各項目への線とラベル
  keys.forEach((key, index) => {
    const p = point(index, radius);

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(p.x, p.y);
    ctx.strokeStyle = "#eadfe8";
    ctx.stroke();

    const labelPoint = point(index, radius + 27);

    ctx.fillStyle = "#5d5360";
    ctx.font = "12px Yu Gothic, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(
      shortTypeNames[key],
      labelPoint.x,
      labelPoint.y
    );
  });

  // 得点の形
  ctx.beginPath();

  keys.forEach((key, index) => {
    const p = point(
      index,
      radius * scores[key] / scale
    );

    if (index === 0) {
      ctx.moveTo(p.x, p.y);
    } else {
      ctx.lineTo(p.x, p.y);
    }
  });

  ctx.closePath();

  ctx.fillStyle = "rgba(241, 142, 175, 0.30)";
  ctx.strokeStyle = "#dd789d";
  ctx.lineWidth = 2.5;

  ctx.fill();
  ctx.stroke();

  // 得点位置の丸
  keys.forEach((key, index) => {
    const p = point(
      index,
      radius * scores[key] / scale
    );

    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#dd789d";
    ctx.fill();
  });
}

// ---------- 結果画面 ----------

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

  type.features.forEach((feature) => {
    const item = document.createElement("li");
    item.textContent = feature;
    $("feature-list").appendChild(item);
  });

  // 得点の内訳
  $("score-list").innerHTML = "";

  const maxScore = Math.max(1, ...Object.values(scores));

  Object.entries(scores).forEach(([key, score]) => {
    const row = document.createElement("div");
    row.className = "score-row";

    const name = document.createElement("strong");
    name.textContent = shortTypeNames[key];

    const track = document.createElement("div");
    track.className = "score-track";

    const bar = document.createElement("div");
    bar.className = "score-bar";
    bar.style.width = `${score / maxScore * 100}%`;

    track.appendChild(bar);

    const pointText = document.createElement("span");
    pointText.textContent = `${score}点`;

    row.append(name, track, pointText);
    $("score-list").appendChild(row);
  });

  // Q13：本人がやってみたい活動
  const selected = interestOptions.find(
    (option) => option.type === selectedInterest
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

  // 診断結果からおすすめする活動
  $("recommended-result").textContent =
    `${type.emoji} ${type.name}：${type.volunteer}`;

  // 紹介リンク
  $("type-links-intro").textContent =
    `「${type.name}」に関連する活動を紹介します。` +
    `${type.volunteer}などに興味があれば、リンク先で内容を確認してみてください。`;

  $("type-links").innerHTML = "";

  (typeLinks[winner] || []).forEach((item) => {
    const box = document.createElement("div");
    box.className = "url-box";

    const title = document.createElement("strong");
    title.textContent = item.title;

    const description = document.createElement("p");
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

// ---------- ボタンの動作 ----------

// 診断スタート
$("start-btn").addEventListener("click", () => {
  currentIndex = 0;
  renderQuestion();
  showScreen("quiz-screen");
});

// 前の質問へ
$("back-btn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
});

// 次の質問へ
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

// Q13から最後の質問へ戻る
$("interest-back-btn").addEventListener("click", () => {
  currentIndex = questions.length - 1;
  renderQuestion();
  showScreen("quiz-screen");
});

// 診断結果を表示
$("show-result-btn").addEventListener("click", () => {
  renderResult();
});

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

// 画面サイズが変わったらレーダーチャートを描き直す
window.addEventListener("resize", () => {
  const resultScreen = $("result-screen");

  if (resultScreen && !resultScreen.classList.contains("hidden")) {
    drawRadar(calculateScores());
  }
});