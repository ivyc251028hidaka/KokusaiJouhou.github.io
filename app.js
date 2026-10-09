const TYPES = {

  A: {
    name: "活気あふれる街頭・イベントタイプ",
    short: "街頭・イベント"
  },

  B: {
    name: "笑顔を届ける子ども・交流タイプ",
    short: "子ども・交流"
  },

  C: {
    name: "じっくり支える学習支援タイプ",
    short: "学習支援"
  },

  D: {
    name: "コツコツ形にする事務・クリエイティブタイプ",
    short: "事務・クリエイティブ"
  },

  E: {
    name: "地球にやさしい環境・美化タイプ",
    short: "環境・美化"
  },

  F: {
    name: "文化を伝える地域・国際交流タイプ",
    short: "地域・国際交流"
  },

  G: {
    name: "災害・復興支援タイプ",
    short: "災害・復興支援"
  },

  H: {
    name: "医療・福祉タイプ",
    short: "医療・福祉"
  }

};


const questions = [

  {
    text: "友達がたくさんの荷物を持って歩いています。あなたならどうする？",

    choices: [
      ["「持とうか？」と声をかけて、一緒に運ぶ", "A"],
      ["「こっち持つよ！」とすぐに手伝い始める", "B"],
      ["何を持てばいいか聞いて、運びやすいように分ける", "C"],
      ["相手が大変そうか様子を見てから声をかける", "D"]
    ]
  },


  {
    text: "友達が学校のことで悩んでいると話してきました。あなたならどうする？",

    choices: [
      ["まず話を最後まで聞いて、一緒に考える", "E"],
      ["「こうしてみたら？」と具体的な方法を考える", "F"],
      ["悩んでいることを整理して、一つずつ考える", "G"],
      ["相手が少しでも安心できるように話を聞く", "H"]
    ]
  },


  {
    text: "グループで作業をしていて、一人だけ作業が遅れています。あなたならどうする？",

    choices: [
      ["「一緒にやろう」と声をかける", "A"],
      ["自分ができる作業を見つけて、すぐ手伝う", "E"],
      ["残っている作業を整理して、分担し直す", "B"],
      ["その人が困っていることを聞いてから手伝う", "F"]
    ]
  },


  {
    text: "学校で新しく入った人が、まだ周りになじめていません。あなたならどうする？",

    choices: [
      ["自分から話しかけて、みんなの輪に誘う", "C"],
      ["楽しめそうなことに誘って、一緒に過ごす", "G"],
      ["学校のことやルールを分かりやすく教える", "D"],
      ["その人のペースに合わせて、少しずつ話す", "H"]
    ]
  },


  {
    text: "家族が忙しそうにしているとき、あなたはどうすることが多い？",

    choices: [
      ["「何か手伝おうか？」と声をかける", "A"],
      ["自分からできそうなことを見つけて動く", "F"],
      ["やることを整理して、効率よく進める", "C"],
      ["家族が困っていそうなことを考えて手伝う", "H"]
    ]
  },


  {
    text: "友達が勉強で分からないところがあると言っています。あなたならどうする？",

    choices: [
      ["隣で一緒に問題を解いてみる", "B"],
      ["ゲームや例えを使って、楽しく教える", "G"],
      ["どこから分からないのか確認して、一つずつ説明する", "D"],
      ["相手が分かるペースに合わせて教える", "E"]
    ]
  },


  {
    text: "みんなで地域のイベントの準備をしています。作業がなかなか進みません。あなたならどうする？",

    choices: [
      ["「みんなでやろう！」と声をかけて動き始める", "A"],
      ["楽しくできる方法を考えて、みんなを盛り上げる", "H"],
      ["やることを書き出して、順番に進める", "E"],
      ["それぞれが無理なくできる仕事を考える", "F"]
    ]
  },


  {
    text: "電車やバスで、年配の人が立っています。席が空いたらどうする？",

    choices: [
      ["「どうぞ」と声をかける", "B"],
      ["すぐに立って席を譲る", "C"],
      ["相手が座りやすいように周りの状況も確認する", "D"],
      ["相手が必要としているか様子を見てから声をかける", "G"]
    ]
  },


  {
    text: "友達がみんなの前で発表することになり、緊張しています。あなたならどうする？",

    choices: [
      ["「大丈夫！」と声をかけて、元気づける", "A"],
      ["一緒に練習して、発表を盛り上げる", "F"],
      ["発表する内容を一緒に整理する", "D"],
      ["緊張している気持ちを聞いて、落ち着けるようにする", "H"]
    ]
  },


  {
    text: "誰かの誕生日会をみんなで準備することになりました。あなたは何をする？",

    choices: [
      ["みんなに声をかけて、準備を進める", "B"],
      ["サプライズや楽しい企画を考える", "E"],
      ["必要なものや予定をまとめる", "C"],
      ["本人が喜びそうなことを考える", "G"]
    ]
  },


  {
    text: "友達と街を歩いていて、道に迷っている人を見かけました。あなたならどうする？",

    choices: [
      ["自分から声をかけて、道を教える", "A"],
      ["一緒に地図を見ながら目的地を探す", "G"],
      ["場所や行き方を調べて、分かりやすく説明する", "D"],
      ["相手が困っている様子を見ながら、必要なら声をかける", "F"]
    ]
  },


  {
    text: "誰かのために何かをするとき、あなたはどんなことを大切にする？",

    choices: [
      ["周りの人にも声をかけて、一緒に取り組むこと", "B"],
      ["相手が楽しんだり、笑顔になったりすること", "H"],
      ["必要なことをきちんと整理して、役に立つこと", "C"],
      ["相手の気持ちや状況を考えて行動すること", "E"]
    ]
  }

];


const interestOptions = [

  ["子どもと一緒に遊んだり、交流したりする", "B"],

  ["勉強を教えたり、学習をサポートする", "C"],

  ["ポスター・資料・動画などを作る", "D"],

  ["公園や街をきれいにする", "E"],

  ["地域の文化や外国の人と交流する", "F"],

  ["災害が起きた地域の復旧を手伝う", "G"],

  ["高齢者や困っている人をサポートする", "H"],

  ["イベントの運営や会場づくりをする", "A"]

];


let currentQuestion = 0;
let answers = [];
let selectedInterest = null;


const screens = {

  home: document.getElementById("homeScreen"),

  quiz: document.getElementById("quizScreen"),

  interest: document.getElementById("interestScreen"),

  result: document.getElementById("resultScreen"),

  qr: document.getElementById("qrScreen")

};


function showScreen(screen) {

  Object.values(screens).forEach(
    s => s.classList.remove("active")
  );

  screen.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function renderQuestion() {

  const q = questions[currentQuestion];

  document.getElementById("questionNumber").textContent =
    `${currentQuestion + 1} / ${questions.length}`;

  document.getElementById("questionTag").textContent =
    `Q${currentQuestion + 1}`;

  document.getElementById("progressBar").style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  document.getElementById("questionText").textContent =
    q.text;


  const choices =
    document.getElementById("choices");

  choices.innerHTML = "";


  q.choices.forEach((choice, index) => {

    const button =
      document.createElement("button");

    button.className = "choice-btn";

    button.innerHTML = `
      <span class="choice-number">
        ${index + 1}
      </span>

      <span>
        ${choice[0]}
      </span>
    `;

    button.addEventListener(
      "click",
      () => selectAnswer(choice[1])
    );

    choices.appendChild(button);

  });

}


function selectAnswer(type) {

  answers[currentQuestion] = type;


  if (
    currentQuestion <
    questions.length - 1
  ) {

    currentQuestion++;

    renderQuestion();

  } else {

    renderInterestQuestion();

    showScreen(screens.interest);

  }

}


function renderInterestQuestion() {

  const container =
    document.getElementById("interestChoices");

  container.innerHTML = "";


  interestOptions.forEach(
    ([label, type]) => {

      const labelEl =
        document.createElement("label");

      labelEl.className =
        "interest-option";

      labelEl.innerHTML = `
        <input
          type="radio"
          name="interest"
          value="${type}"
        >

        <span>
          ${label}
        </span>
      `;


      const input =
        labelEl.querySelector("input");


      input.addEventListener(
        "change",
        () => {

          selectedInterest = type;

          document
            .querySelectorAll(".interest-option")
            .forEach(
              el => el.classList.remove("selected")
            );

          labelEl.classList.add("selected");

        }
      );


      container.appendChild(labelEl);

    }
  );

}


function calculateScores() {

  const scores =
    Object.fromEntries(
      Object.keys(TYPES)
        .map(key => [key, 0])
    );


  answers.forEach(type => {

    if (scores[type] !== undefined) {

      scores[type]++;

    }

  });


  return scores;

}


function getRanking(scores) {

  return Object.entries(scores)
    .sort(
      (a, b) => b[1] - a[1]
    );

}


function renderResult() {

  const scores =
    calculateScores();

  const ranking =
    getRanking(scores);

  const topType =
    ranking[0][0];


  document.getElementById("topType")
    .innerHTML = `
      <span>${topType}：</span>
      ${TYPES[topType].name}
    `;


  renderRadar(scores);

  renderScoreList(scores);

  renderComparison(
    ranking,
    selectedInterest
  );

}


function renderScoreList(scores) {

  const max =
    Math.max(
      ...Object.values(scores),
      1
    );


  const list =
    document.getElementById("scoreList");


  list.innerHTML =
    Object.entries(TYPES)
      .map(
        ([key, type]) => `

          <div class="score-row">

            <strong>${key}</strong>

            <div class="score-bar-bg">

              <div
                class="score-bar"
                style="
                  width:${(scores[key] / max) * 100}%
                "
              ></div>

            </div>

            <span>
              ${scores[key]}
            </span>

          </div>

        `
      )
      .join("");

}


function renderRadar(scores) {

  const canvas =
    document.getElementById("radarChart");

  const ctx =
    canvas.getContext("2d");


  const dpr =
    window.devicePixelRatio || 1;

  const size = 320;


  canvas.width =
    size * dpr;

  canvas.height =
    size * dpr;


  ctx.setTransform(
    dpr,
    0,
    0,
    dpr,
    0,
    0
  );


  ctx.clearRect(
    0,
    0,
    size,
    size
  );


  const keys =
    Object.keys(TYPES);

  const labels =
    keys.map(k => k);


  const center =
    size / 2;

  const radius =
    105;

  const maxScore =
    6;

  const startAngle =
    -Math.PI / 2;


  function point(i, r) {

    const angle =
      startAngle +
      (Math.PI * 2 * i) /
      keys.length;


    return {

      x:
        center +
        Math.cos(angle) *
        r,

      y:
        center +
        Math.sin(angle) *
        r

    };

  }


  ctx.strokeStyle =
    "#D9E8E5";

  ctx.lineWidth = 1;


  for (
    let level = 1;
    level <= maxScore;
    level++
  ) {

    ctx.beginPath();


    keys.forEach(
      (_, i) => {

        const p =
          point(
            i,
            radius *
            level /
            maxScore
          );


        if (i === 0) {

          ctx.moveTo(
            p.x,
            p.y
          );

        } else {

          ctx.lineTo(
            p.x,
            p.y
          );

        }

      }
    );


    ctx.closePath();

    ctx.stroke();

  }


  keys.forEach(
    (key, i) => {

      const p =
        point(i, radius);


      ctx.beginPath();

      ctx.moveTo(
        center,
        center
      );

      ctx.lineTo(
        p.x,
        p.y
      );

      ctx.stroke();

    }
  );


  ctx.beginPath();


  keys.forEach(
    (key, i) => {

      const valueRadius =
        radius *
        (scores[key] /
        maxScore);


      const p =
        point(
          i,
          valueRadius
        );


      if (i === 0) {

        ctx.moveTo(
          p.x,
          p.y
        );

      } else {

        ctx.lineTo(
          p.x,
          p.y
        );

      }

    }
  );


  ctx.closePath();


  ctx.fillStyle =
    "rgba(67,169,160,0.18)";

  ctx.fill();


  ctx.strokeStyle =
    "#43A9A0";

  ctx.lineWidth = 3;

  ctx.stroke();


  ctx.fillStyle =
    "#287A74";


  keys.forEach(
    (key, i) => {

      const p =
        point(
          i,
          radius + 24
        );


      ctx.font =
        "800 14px sans-serif";

      ctx.textAlign =
        "center";

      ctx.textBaseline =
        "middle";


      ctx.fillText(
        labels[i],
        p.x,
        p.y
      );

    }
  );

}


function renderComparison(
  ranking,
  interest
) {

  const content =
    document.getElementById(
      "compareContent"
    );


  const top =
    ranking[0][0];


  if (!interest) {

    content.innerHTML = `

      <div class="compare-box">

        <div class="compare-label">
          気質から見たおすすめ
        </div>

        <div class="compare-value">
          ${top}：
          ${TYPES[top].name}
        </div>

      </div>


      <div class="compare-box">

        <div class="compare-label">
          やってみたいボランティア
        </div>

        <div class="compare-value">
          未選択
        </div>

      </div>

    `;

    return;

  }


  const match =
    top === interest;


  content.innerHTML = `

    <div class="compare-box">

      <div class="compare-label">
        気質から見たおすすめ
      </div>

      <div class="compare-value">
        ${top}：
        ${TYPES[top].name}
      </div>

    </div>


    <div class="compare-box">

      <div class="compare-label">
        あなたがやってみたいボランティア
      </div>

      <div class="compare-value">
        ${interest}：
        ${TYPES[interest].name}
      </div>

    </div>


    <div class="compare-box">

      <div class="compare-label">
        見比べるポイント
      </div>

      <div class="compare-value">

        ${
          match

            ? "「やってみたい」と「向いている」が近い結果です。興味と気質の両方を活かせそうです。"

            : "「やってみたい」と「向いている」が違う結果です。気質とは違う分野でも、興味をきっかけに挑戦できます。"
        }

      </div>

    </div>

  `;

}


function resetQuiz() {

  currentQuestion = 0;

  answers = [];

  selectedInterest = null;

  renderQuestion();

  showScreen(
    screens.quiz
  );

}


function showQr() {

  const url =
    window.location.href;


  const qr =
    document.getElementById(
      "qrImage"
    );


  qr.src =
    `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(url)}`;


  document.getElementById(
    "currentUrl"
  ).textContent =
    url;


  showScreen(
    screens.qr
  );

}


document
  .getElementById("startBtn")
  .addEventListener(
    "click",
    () => {

      currentQuestion = 0;

      answers = [];

      renderQuestion();

      showScreen(
        screens.quiz
      );

    }
  );


document
  .getElementById("backBtn")
  .addEventListener(
    "click",
    () => {

      if (currentQuestion === 0) {

        showScreen(
          screens.home
        );

        return;

      }


      currentQuestion--;

      renderQuestion();

    }
  );


document
  .getElementById("showResultBtn")
  .addEventListener(
    "click",
    () => {

      renderResult();

      showScreen(
        screens.result
      );

    }
  );


document
  .getElementById("restartBtn")
  .addEventListener(
    "click",
    resetQuiz
  );


document
  .getElementById("shareBtn")
  .addEventListener(
    "click",
    async () => {

      if (navigator.share) {

        try {

          await navigator.share({

            title:
              "ボランティア診断",

            text:
              "自分に合うボランティアタイプを診断してみよう！",

            url:
              window.location.href

          });

        } catch (error) {

          // ユーザーが共有画面を閉じた場合などは何もしません。

        }

      } else {

        showQr();

      }

    }
  );


if ("serviceWorker" in navigator) {

  window.addEventListener(
    "load",
    () => {

      navigator.serviceWorker
        .register("./sw.js")
        .catch(
          error => {

            console.warn(
              "Service Workerの登録に失敗しました:",
              error
            );

          }
        );

    }
  );

}


window.addEventListener(
  "resize",
  () => {

    if (
      screens.result.classList.contains(
        "active"
      )
    ) {

      renderRadar(
        calculateScores()
      );

    }

  }
);


document
  .getElementById("closeQrBtn")
  .addEventListener(
    "click",
    () => {

      showScreen(
        screens.result
      );

    }
  );


renderQuestion();