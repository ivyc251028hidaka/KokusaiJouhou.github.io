// イラスト画像を用意したら、各質問の illustration に "images/q1.png" などを指定してください。
const questions=[
{text:"友達がたくさんの荷物を持って歩いています。あなたならどうする？",scene:"🧑‍🤝‍🧑🛍️",label:"荷物を持っている友達",illustration:"",choices:[{text:"自分から声をかけて、一緒に運ぶ",type:"A"},{text:"すぐに手伝い始める",type:"B"},{text:"何を持てばいいか聞いて、手伝う",type:"G"},{text:"相手が大変そうか様子を見てから声をかける",type:"H"}]},
{text:"友達が学校のことで悩んでいると話してきました。あなたならどうする？",scene:"💬🧑‍🤝‍🧑",label:"悩みを話す友達",illustration:"",choices:[{text:"身近な環境を教えたり、気分転換できる方法を提案する",type:"E"},{text:"「こうしてみたら？」と伝える",type:"C"},{text:"悩みを整理して、一つずつ考える",type:"D"},{text:"相手が少しでも安心できるように話を聞く",type:"H"}]},
{text:"グループで作業をしていて、一人だけ作業が遅れています。あなたならどうする？",scene:"🧑‍💻📚",label:"みんなで取り組む作業",illustration:"",choices:[{text:"「一緒にやろう」と声をかける",type:"A"},{text:"自分ができる作業を見つけて、すぐに手伝う",type:"E"},{text:"アドバイスを考える",type:"G"},{text:"その人が困っていることを聞いてから手伝う",type:"C"}]},
{text:"学校に転校生が来た。周りになじめるために、あなたならどうする？",scene:"🏫👋",label:"転校してきた人",illustration:"",choices:[{text:"自分から話しかけて、みんなの輪に誘う",type:"A"},{text:"楽しめそうなことに誘って、一緒に過ごす",type:"F"},{text:"学校のことやルールを分かりやすく教える",type:"C"},{text:"その人のペースに合わせながら関わりを持つ",type:"H"}]},
{text:"家族が忙しそうにしているとき、あなたはどうすることが多い？",scene:"🏠🧺",label:"忙しそうな家族",illustration:"",choices:[{text:"兄弟の面倒を進んで見る",type:"B"},{text:"インターホンの対応をする",type:"F"},{text:"やることを整理して、効率よく進める",type:"D"},{text:"優先順位を考えて、手伝う",type:"G"}]},
{text:"友達が勉強で分からないところがあると言っています。あなたならどうする？",scene:"✏️📖",label:"勉強で困っている友達",illustration:"",choices:[{text:"隣で一緒に問題を解いてみる",type:"C"},{text:"ゲームや例えを使って楽しく教える",type:"D"},{text:"どこが分からないのか確認して、説明する",type:"B"},{text:"相手のペースに合わせてゆっくり教える",type:"H"}]},
{text:"みんなで地域のイベントの準備をしています。作業がなかなか進みません。あなたならどうする？",scene:"🎪📦",label:"地域イベントの準備",illustration:"",choices:[{text:"「みんなでやろう！」と声をかけて働き始める",type:"A"},{text:"楽しくできる方法を考えて、みんなを盛り上げる",type:"F"},{text:"やることを書き出して、順番に進める",type:"D"},{text:"それぞれが無理なくできる仕事を考える",type:"H"}]},
{text:"電車やバスで、年配の人が立っています。席が空いたらどうする？",scene:"🚌💺",label:"バスや電車の座席",illustration:"",choices:[{text:"「どうぞ」と声をかける",type:"F"},{text:"すぐに立って席を譲る",type:"G"},{text:"相手が笑顔になれるように、明るく優しく声をかける",type:"B"},{text:"必要か様子を見てから声をかける",type:"H"}]},
{text:"学校で友達がみんなの前で発表することになり、前日に「緊張する」と相談してきた。あなたならどうする？",scene:"🎤😟",label:"発表を前に緊張する友達",illustration:"",choices:[{text:"「大丈夫！」と声をかけて元気づける",type:"A"},{text:"一緒に練習して発表を盛り上げる",type:"B"},{text:"内容を一緒に整理する",type:"C"},{text:"気持ちを聞いて落ち着けるようにする",type:"H"}]},
{text:"友達の誕生日会をみんなで準備することになりました。あなたは何をする？",scene:"🎂🎈",label:"誕生日会の準備",illustration:"",choices:[{text:"みんなに声をかけて、準備を進める",type:"A"},{text:"サプライズや楽しい企画を考える",type:"D"},{text:"ゴミを減らせる飾りや、繰り返し使える道具を選ぶ",type:"E"},{text:"外国の料理や遊びを紹介して、みんなで楽しめるようにする",type:"F"}]},
{text:"友達と街を歩いていて、道に迷っている人を見かけました。あなたならどうする？",scene:"🗺️🚶",label:"道に迷っている人",illustration:"",choices:[{text:"道案内の看板や周辺の様子を確認し、分かりやすい道を探す",type:"E"},{text:"一緒に地図を見ながら目的地を探す",type:"C"},{text:"場所や行き方を調べて、分かりやすく説明する",type:"D"},{text:"相手が困っている様子を見ながら、必要なら声をかける",type:"F"}]},
{text:"誰かのために何かをするとき、あなたはどんなことを大切にする？",scene:"💗🤲",label:"誰かを思いやる気持ち",illustration:"",choices:[{text:"自然や環境を大切にし、みんなが気持ちよく過ごせる場所を作ること",type:"E"},{text:"相手が楽しんだり、笑顔になったりすること",type:"B"},{text:"必要なことを整理して、役に立つこと",type:"D"},{text:"相手の気持ちや状況を考えて行動すること",type:"H"}]}
];

const types={
A:{name:"活気あふれる街頭・イベントタイプ",title:"にぎわい探検家",emoji:"🎪",description:"人に声をかけたり、みんなを巻き込んだりする行動力が強み。人が集まる場所で、周りと協力しながら活動するのが得意そう。",features:["自分から声をかけられる","人と協力して動くのが好き","にぎやかな場所が好き"],volunteer:"募金活動、地域のお祭り、スポーツイベントの運営"},
B:{name:"笑顔を届ける子ども・交流タイプ",title:"えがおの応援団",emoji:"😊",description:"相手が楽しく過ごせることや、笑顔になることを大切にするタイプ。人と関わりながら、場を明るくする活動が向いていそう。",features:["人を笑顔にするのが好き","明るく声をかけられる","誰かと一緒に活動するのが好き"],volunteer:"子どもの遊び相手、交流会、地域のイベント補助"},
C:{name:"じっくり支える学習支援タイプ",title:"まなびのサポーター",emoji:"📚",description:"物事を整理し、相手が理解できるように順序立てて支えるのが得意なタイプ。相手のペースに合わせることが活かせそう。",features:["順番に整理して考えられる","分かるまで丁寧に説明できる","コツコツ支えるのが好き"],volunteer:"学習支援、子どもの勉強サポート、教材づくり"},
D:{name:"コツコツ形にする事務・クリエイティブタイプ",title:"アイデアのつくり手",emoji:"💻",description:"情報や作業を整理し、必要なものを形にして支えるタイプ。裏方として準備や制作を進める活動で力を発揮できそう。",features:["情報を整理するのが得意","細かい作業に集中できる","パソコンや制作に関心がある"],volunteer:"チラシ・資料づくり、広報、事務作業、動画制作"},
E:{name:"地球にやさしい環境・美化タイプ",title:"みどりの守り手",emoji:"🌱",description:"身近なことを丁寧に続け、環境や暮らしをよくすることに力を発揮しそう。自分のペースで取り組める活動も合いそう。",features:["自然や環境に関心がある","自分のペースで作業できる","体を動かすことが好き"],volunteer:"公園や街の清掃、花壇の手入れ、自然保護活動"},
F:{name:"文化を伝える地域・国際交流タイプ",title:"まちの文化ナビゲーター",emoji:"🌏",description:"人や地域のことを知り、相手に分かりやすく伝えることが活かせそう。地域の魅力を紹介したり、異なる文化をつなぐ活動に向いていそう。",features:["地域の魅力を伝えたい","異なる文化に関心がある","人の話を聞き、伝えるのが好き"],volunteer:"地域案内、文化交流、国際交流イベントの補助"},
G:{name:"災害・復興支援タイプ",title:"そなえのサポーター",emoji:"🧰",description:"状況を見て必要なことを考え、落ち着いて支えることが強みになりそう。安全や準備を意識して、チームで動く活動が向いていそう。",features:["状況を見て行動できる","準備や確認を大切にする","困っている人を支えたい"],volunteer:"防災イベント、支援物資の整理、復興支援活動（募集条件を確認）"},
H:{name:"医療・福祉タイプ",title:"こころのよりそい手",emoji:"🫶",description:"相手の気持ちや状態を考え、安心できるように支えるタイプ。相手の話を聞きながら、無理のない形で手助けすることが活かせそう。",features:["相手の気持ちを考えられる","話を落ち着いて聞ける","人を支えることに関心がある"],volunteer:"福祉施設の交流補助、高齢者との交流、支援団体の活動補助"}
};

const shortTypeNames={A:"イベント",B:"子ども",C:"学習",D:"制作",E:"環境",F:"交流",G:"災害",H:"医療"};

const typeLinks={
A:[{title:"イベント・地域活動のボランティアって？",desc:"スポーツや地域交流の場、イベント運営など、みんなで場をつくる活動の例を紹介しています。",url:"https://www.sapporo-shakyo.or.jp/activities/volunteer/activities/index.html"}],
B:[{title:"子どもと関わるボランティアって？",desc:"子どもの遊びやレクリエーション、スポーツ教室、キャンプのサポートなどの活動例を紹介しています。",url:"https://www.sapporo-shakyo.or.jp/activities/volunteer/activities/index.html"}],
C:[{title:"学習・教育を支えるボランティアって？",desc:"学習ボランティアや教育活動への協力など、誰かの学びを支える活動例を紹介しています。",url:"https://csw-kawasaki.or.jp/volunteer-info/volunteer-pr/kind-volunteer/"}],
D:[{title:"パソコン・広報など得意なことを活かす活動",desc:"パソコンの操作支援や広報づくり、技術・特技を活かしたボランティアの例を紹介しています。",url:"https://csw-kawasaki.or.jp/volunteer-info/volunteer-pr/kind-volunteer/"}],
E:[{title:"環境・美化のボランティアって？",desc:"海辺や森林の清掃、リサイクル、自然環境を守る活動などの例を紹介しています。",url:"https://www.sapporo-shakyo.or.jp/activities/volunteer/activities/index.html"}],
F:[{title:"文化・国際交流のボランティアって？",desc:"美術館・博物館での活動や伝統文化の継承、外国の人への支援などの例を紹介しています。",url:"https://www.sapporo-shakyo.or.jp/activities/volunteer/activities/index.html"}],
G:[{title:"災害・復興支援のボランティアって？",desc:"被災地の片づけや困りごとの支援、物資の仕分けなど、災害時・復旧時の活動例を紹介しています。",url:"https://www.gov-online.go.jp/article/201909/entry-8761.html"}],
H:[{title:"病院ボランティアってどんなことをするの？",desc:"病院内の案内、車いすでの移動のお手伝い、患者さんやご家族のサポートなど、医療現場での活動例を紹介しています。",url:"https://www.toyotachiiki-mc.or.jp/volunteer/"},{title:"高齢者・障がいのある人を支える活動例",desc:"見守りや話し相手、交流の場づくり、移動の補助など、福祉分野の活動例も確認できます。",url:"https://www.sapporo-shakyo.or.jp/activities/volunteer/activities/index.html"}]
};

const interestOptions=[
{type:"A",emoji:"🎪",text:"イベント運営・会場づくり"},
{type:"B",emoji:"😊",text:"子どもと遊ぶ・人と交流する"},
{type:"C",emoji:"📚",text:"勉強や学習をサポートする"},
{type:"D",emoji:"💻",text:"チラシ・資料・動画などをつくる"},
{type:"E",emoji:"🌱",text:"公園や街をきれいにする"},
{type:"F",emoji:"🌏",text:"地域文化・国際交流に関わる"},
{type:"G",emoji:"🧰",text:"防災や災害復興を支える"},
{type:"H",emoji:"🫶",text:"高齢者や支援が必要な人と関わる"}
];

let currentIndex=0;
const answers=Array(questions.length).fill(null);
let selectedInterest=null;
const $=id=>document.getElementById(id);

function showScreen(id){
  ["start-screen","quiz-screen","interest-screen","result-screen"].forEach(x=>{
    $(x).classList.toggle("hidden",x!==id);
  });
  window.scrollTo({top:0,behavior:"smooth"});
}

function renderQuestion(){
  const q=questions[currentIndex];
  $("step-label").textContent=`Q${currentIndex+1} / ${questions.length}`;
  $("step-percent").textContent=`${Math.round((currentIndex+1)/questions.length*100)}%`;
  $("progress-fill").style.width=`${(currentIndex+1)/questions.length*100}%`;
  $("question-text").textContent=q.text;
  $("scene-emoji").textContent=q.scene;
  $("scene-label").textContent=q.label;

  const inner=$("illustration-inner");
  const old=inner.querySelector("img");
  if(old)old.remove();

  if(q.illustration){
    const img=document.createElement("img");
    img.src=q.illustration;
    img.alt=q.label;
    img.onerror=()=>img.remove();
    inner.appendChild(img);
  }

  $("choices").innerHTML="";
  q.choices.forEach((choice,index)=>{
    const b=document.createElement("button");
    b.type="button";
    b.className="choice"+(answers[currentIndex]===index?" selected":"");
    b.setAttribute("aria-pressed",answers[currentIndex]===index?"true":"false");
    b.innerHTML='<span class="choice-text"></span><span class="heart" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16 27s-12-7.3-12-15.1C4 5.2 12.1 3.7 16 10c3.9-6.3 12-4.8 12 1.9C28 19.7 16 27 16 27Z"/></svg></span>';
    b.querySelector(".choice-text").textContent=choice.text;
    b.addEventListener("click",()=>{
      answers[currentIndex]=index;
      renderQuestion();
    });
    $("choices").appendChild(b);
  });

  $("back-btn").disabled=currentIndex===0;
  $("back-btn").style.opacity=currentIndex===0?".45":"1";
  $("next-btn").disabled=answers[currentIndex]===null;
  $("next-btn").textContent=currentIndex===questions.length-1?"Q13へ →":"次へ →";
}

function renderInterests(){
  $("interest-grid").innerHTML="";
  interestOptions.forEach(o=>{
    const b=document.createElement("button");
    b.type="button";
    b.className="interest-option"+(selectedInterest===o.type?" selected":"");
    b.setAttribute("aria-pressed",selectedInterest===o.type?"true":"false");
    const s=document.createElement("span");
    s.textContent=o.emoji;
    const t=document.createElement("div");
    t.textContent=o.text;
    b.append(s,t);
    b.addEventListener("click",()=>{
      selectedInterest=selectedInterest===o.type?null:o.type;
      renderInterests();
    });
    $("interest-grid").appendChild(b);
  });
}

function calculateScores(){
  const scores={A:0,B:0,C:0,D:0,E:0,F:0,G:0,H:0};
  answers.forEach((answer,index)=>{
    if(answer===null)return;
    const type=questions[index].choices[answer].type;
    scores[type]+=1;
  });
  return scores;
}

function getWinningType(scores){
  return Object.keys(scores).sort((a,b)=>scores[b]-scores[a])[0];
}

function drawRadar(scores){
  const c=$("radar-chart");
  const ctx=c.getContext("2d");
  const w=440,h=400,dpr=window.devicePixelRatio||1;
  c.width=w*dpr;
  c.height=h*dpr;
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.clearRect(0,0,w,h);

  const keys=Object.keys(scores);
  const cx=w/2,cy=h/2+3,radius=116;
  const max=Math.max(6,...Object.values(scores));
  const scale=Math.ceil(max/3)*3;
  const point=(i,r)=>({
    x:cx+Math.cos(-Math.PI/2+i*2*Math.PI/8)*r,
    y:cy+Math.sin(-Math.PI/2+i*2*Math.PI/8)*r
  });

  for(let ring=1;ring<=4;ring++){
    ctx.beginPath();
    keys.forEach((_,i)=>{
      const p=point(i,radius*ring/4);
      i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y);
    });
    ctx.closePath();
    ctx.strokeStyle="#eadfe8";
    ctx.stroke();
  }

  keys.forEach((key,i)=>{
    const p=point(i,radius);
    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.lineTo(p.x,p.y);
    ctx.strokeStyle="#eadfe8";
    ctx.stroke();

    const lp=point(i,radius+26);
    ctx.fillStyle="#5d5360";
    ctx.font="12px Yu Gothic, sans-serif";
    ctx.textAlign="center";
    ctx.textBaseline="middle";
    ctx.fillText(shortTypeNames[key]||key,lp.x,lp.y);
  });

  ctx.beginPath();
  keys.forEach((key,i)=>{
    const p=point(i,radius*scores[key]/scale);
    i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y);
  });
  ctx.closePath();
  ctx.fillStyle="rgba(241,142,175,.3)";
  ctx.strokeStyle="#dd789d";
  ctx.lineWidth=2.5;
  ctx.fill();
  ctx.stroke();

  keys.forEach((key,i)=>{
    const p=point(i,radius*scores[key]/scale);
    ctx.beginPath();
    ctx.arc(p.x,p.y,4,0,Math.PI*2);
    ctx.fillStyle="#dd789d";
    ctx.fill();
  });
}

function renderResult(){
  const scores=calculateScores();
  const winner=getWinningType(scores);
  const type=types[winner];

  $("result-title").textContent=type.title;
  $("result-type-name").textContent=type.name;
  $("result-description").textContent=type.description;
  $("result-character").textContent=type.emoji;

  $("feature-list").innerHTML="";
  type.features.forEach(x=>{
    const li=document.createElement("li");
    li.textContent=x;
    $("feature-list").appendChild(li);
  });

  $("score-list").innerHTML="";
  const max=Math.max(1,...Object.values(scores));
  Object.entries(scores).forEach(([key,score])=>{
    const row=document.createElement("div");
    row.className="score-row";
    row.innerHTML=`<strong>${shortTypeNames[key]||key}</strong><div class="score-track"><div class="score-bar" style="width:${score/max*100}%"></div></div><span>${score}点</span>`;
    $("score-list").appendChild(row);
  });

  const selected=interestOptions.find(x=>x.type===selectedInterest);
  const note=$("interest-note").value.trim();

  $("interest-result").textContent=selected
    ?`${selected.emoji} ${selected.text}${note?"／補足："+note:""}`
    :(note||"まだ選択されていません。気になる活動から探してみよう。");

  $("recommended-result").textContent=`${type.emoji} ${type.name}：${type.volunteer}`;

  $("type-links-intro").textContent=`「${type.name}」に関連する活動紹介ページだよ。${type.volunteer}などに興味があれば、リンク先で内容を確認してみてね。`;

  $("type-links").innerHTML="";
  (typeLinks[winner]||[]).forEach(item=>{
    const box=document.createElement("div");
    box.className="url-box";
    box.style.marginBottom="10px";

    const title=document.createElement("strong");
    title.textContent=item.title;

    const desc=document.createElement("p");
    desc.style.margin="5px 0 7px";
    desc.textContent=item.desc;

    const link=document.createElement("a");
    link.href=item.url;
    link.target="_blank";
    link.rel="noopener noreferrer";
    link.textContent="詳しく見る ↗";

    box.append(title,desc,link);
    $("type-links").appendChild(box);
  });

  drawRadar(scores);
  showScreen("result-screen");
}

$("start-btn").addEventListener("click",()=>{
  currentIndex=0;
  renderQuestion();
  showScreen("quiz-screen");
});

$("back-btn").addEventListener("click",()=>{
  if(currentIndex>0){
    currentIndex--;
    renderQuestion();
  }
});

$("next-btn").addEventListener("click",()=>{
  if(answers[currentIndex]===null)return;

  if(currentIndex<questions.length-1){
    currentIndex++;
    renderQuestion();
  }else{
    renderInterests();
    showScreen("interest-screen");
  }
});

$("interest-back-btn").addEventListener("click",()=>{
  currentIndex=questions.length-1;
  renderQuestion();
  showScreen("quiz-screen");
});

$("show-result-btn").addEventListener("click",renderResult);

$("restart-btn").addEventListener("click",()=>{
  currentIndex=0;
  answers.fill(null);
  selectedInterest=null;
  $("interest-note").value="";
  showScreen("start-screen");
});

$("print-btn").addEventListener("click",()=>window.print());

window.addEventListener("resize",()=>{
  if(!$("result-screen").classList.contains("hidden")){
    drawRadar(calculateScores());
  }
});