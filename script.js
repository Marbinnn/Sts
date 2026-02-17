(() => {
  // ======================
  // 30 QUESTIONS (E/M/H)
  // NOTE: We will RANDOMIZE choices per question at runtime,
  // so correct answer won't always be A/B.
  // ======================
  const QUESTIONS = [
    // ----- EASY (10) -----
    { diff:"Easy", topic:"STS", q:"What does STS stand for?",
      choices:["Science, Technology, and Society","Social Technology Systems","Science and Technical Systems","Systems, Tools, and Software"],
      a:0, explain:"STS studies how science & tech affect society, and how society shapes them."
    },
    { diff:"Easy", topic:"Science", q:"Science is mainly the…",
      choices:["application of knowledge to build tools","systematic study of the natural world through observation and experimentation","set of laws made by government","art of creating machines only"],
      a:1, explain:"Science uses observation + experiments to understand nature."
    },
    { diff:"Easy", topic:"Technology", q:"Technology is best described as…",
      choices:["only computers and phones","a political system","application of knowledge to create tools/processes that solve problems","the same as science"],
      a:2, explain:"Technology applies knowledge to build tools and systems to solve problems."
    },
    { diff:"Easy", topic:"History", q:"Roman Aqueducts were engineered mainly to…",
      choices:["carry water to cities","create electricity","build phones","edit genes"],
      a:0, explain:"Aqueducts delivered water for public use like baths and fountains."
    },
    { diff:"Easy", topic:"History", q:"Gutenberg’s printing press helped society by…",
      choices:["mass producing books and written materials","inventing antibiotics","creating electric power","discovering DNA"],
      a:0, explain:"Printing made knowledge spread faster and cheaper."
    },
    { diff:"Easy", topic:"Ethics", q:"Respect for people in research includes…",
      choices:["informed consent and privacy protection","testing without permission","sharing personal data publicly","forcing participation"],
      a:0, explain:"Ethics requires consent + protecting privacy."
    },
    { diff:"Easy", topic:"Philippines", q:"Banaue Rice Terraces are an example of…",
      choices:["indigenous engineering for irrigation and farming","modern robotic farming","roman architecture","space technology"],
      a:0, explain:"They’re a major engineering achievement adapted to mountain farming."
    },
    { diff:"Easy", topic:"STS", q:"In STS, science and technology are…",
      choices:["interdependent","always separate","enemies of society","only school subjects"],
      a:0, explain:"Discoveries enable tech, and tech enables new discoveries."
    },
    { diff:"Easy", topic:"Health", q:"Penicillin is important because it is an…",
      choices:["antibiotic","engine","phone","writing system"],
      a:0, explain:"Penicillin treated bacterial infections and changed medicine."
    },
    { diff:"Easy", topic:"Data", q:"A computer is best described as…",
      choices:["a tool that processes data using instructions","a type of law","a human organ","a farming method"],
      a:0, explain:"Computers process input → follow instructions → produce output."
    },

    // ----- MEDIUM (10) -----
    { diff:"Medium", topic:"Scientific Method", q:"Which order best matches the scientific method?",
      choices:["Observe → Hypothesis → Experiment → Analyze → Conclusion","Experiment → Observe → Guess → Finish","Conclusion → Hypothesis → Observe → Forget","Analyze → Conclusion → Observe → Stop"],
      a:0, explain:"Science usually starts with observation, then testing a hypothesis."
    },
    { diff:"Medium", topic:"Industrial Revolution", q:"The steam engine mainly boosted…",
      choices:["mechanized production and productivity","only art and music","space travel","writing systems"],
      a:0, explain:"Steam power drove machines and factories."
    },
    { diff:"Medium", topic:"Ethics", q:"Fair access in technology means…",
      choices:["more people can benefit, not only the rich","only experts can use it","it should be secret","it must be expensive"],
      a:0, explain:"Fair access reduces inequality in who can use the technology."
    },
    { diff:"Medium", topic:"Society", q:"A major effect of smartphones on society is…",
      choices:["faster communication + new privacy issues","ending all diseases","stopping education","removing electricity use"],
      a:0, explain:"They improve communication but raise privacy/security concerns."
    },
    { diff:"Medium", topic:"Environment", q:"Which is a technology-related environmental problem?",
      choices:["e-waste from old gadgets","gravity","photosynthesis","earth’s rotation"],
      a:0, explain:"E-waste is harmful if not disposed/recycled properly."
    },
    { diff:"Medium", topic:"Innovation", q:"A ‘trade-off’ in technology means…",
      choices:["a benefit comes with a cost","no disadvantages exist","only disadvantages exist","technology never changes"],
      a:0, explain:"Example: convenience vs privacy."
    },
    { diff:"Medium", topic:"Biotech", q:"CRISPR-Cas9 is mainly used for…",
      choices:["gene editing","water transport","printing books","making steam"],
      a:0, explain:"CRISPR allows targeted edits to DNA."
    },
    { diff:"Medium", topic:"Information", q:"Social media algorithms mainly aim to…",
      choices:["show content that keeps you engaged longer","make everyone agree","remove all ads","stop communication"],
      a:0, explain:"They optimize for engagement, which can also create filter bubbles."
    },
    { diff:"Medium", topic:"Philippines", q:"A good example of ‘local innovation’ is…",
      choices:["using tech to solve community problems (like disaster alerts)","copying a product with no changes","stopping all development","avoiding new ideas"],
      a:0, explain:"Local innovation adapts solutions to local needs."
    },
    { diff:"Medium", topic:"Ethics", q:"Accountability in technology means…",
      choices:["taking responsibility for harms and fixing issues","blaming users always","never updating products","hiding risks"],
      a:0, explain:"Accountability means owning outcomes and improving safety."
    },

    // ----- HARD (10) -----
    { diff:"Hard", topic:"STS Thinking", q:"Which best describes a socio-technical system?",
      choices:["technology + people + rules all working together","only a machine","only social media","only science theories"],
      a:0, explain:"Systems like transport or healthcare include tech, people, and policies."
    },
    { diff:"Hard", topic:"Ethics", q:"A common ethical risk of AI in hiring is…",
      choices:["bias and discrimination from training data","infinite energy creation","stopping the internet","eliminating math"],
      a:0, explain:"If training data is biased, decisions can become biased too."
    },
    { diff:"Hard", topic:"Privacy", q:"Which choice is the BEST privacy practice?",
      choices:["collect only needed data and protect it","collect everything forever","share data publicly","avoid security updates"],
      a:0, explain:"Data minimization + protection reduces privacy risk."
    },
    { diff:"Hard", topic:"Society", q:"A ‘digital divide’ refers to…",
      choices:["unequal access to internet/devices/skills","a broken phone screen","too much online gaming","computers being slow"],
      a:0, explain:"Some people have access + skills, others don’t."
    },
    { diff:"Hard", topic:"Media", q:"A ‘filter bubble’ happens when…",
      choices:["you mostly see content that matches your views","everyone sees the same news","all posts are deleted","internet becomes free"],
      a:0, explain:"Algorithms can narrow what you see and reinforce beliefs."
    },
    { diff:"Hard", topic:"Risk", q:"Which is a good example of the precautionary principle?",
      choices:["test and limit risky tech until safety is proven","release first and fix later always","ignore possible harms","ban all innovation forever"],
      a:0, explain:"Precaution means careful rollout when harms could be serious."
    },
    { diff:"Hard", topic:"Science Policy", q:"Why do ethics boards (IRB) exist?",
      choices:["to protect participants and reduce harm","to make experiments faster only","to hide research results","to sell products"],
      a:0, explain:"IRBs review research to protect people and ensure ethics."
    },
    { diff:"Hard", topic:"Cybersecurity", q:"Phishing is best described as…",
      choices:["tricking people into giving passwords/info","a hardware upgrade","legal encryption","a browser extension"],
      a:0, explain:"It’s social engineering—attacking humans, not just machines."
    },
    { diff:"Hard", topic:"Innovation", q:"Which shows ‘unintended consequences’ of tech?",
      choices:["cars enable travel but also pollution/traffic","books increase literacy only","medicine always harms","phones have zero effects"],
      a:0, explain:"Tech can solve one problem while creating new ones."
    },
    { diff:"Hard", topic:"Ethics", q:"When is surveillance technology most ethically risky?",
      choices:["when used without consent/oversight and can target groups","when used to protect passwords","when used only for recycling","when used for school IDs with consent"],
      a:0, explain:"Consent, oversight, and limits matter—without them it can be abused."
    },
  ];

  // ==============
  // SETTINGS
  // ==============
  const TIME_MS = 15000;        // 15s timer
  const NEXT_OK_MS = 1200;      // faster next on correct
  const NEXT_WRONG_MS = 4500;   // more time to read explanation
  const NEXT_TIMEOUT_MS = 3500; // time up read time

  // ==============
  // STATE
  // ==============
  let pool = [];
  let idx = 0;
  let locked = false;

  let score = 0;
  let correct = 0;
  let wrong = 0;
  let streak = 0;
  let answered = 0;

  let raf = null;

  // ==============
  // DOM
  // ==============
  const qNumEl = document.getElementById("qNum");
  const qTotalEl = document.getElementById("qTotal");
  const qDiffEl = document.getElementById("qDiff");
  const diffChip = document.getElementById("diffChip");
  const streakEl = document.getElementById("streak");
  const barEl = document.getElementById("bar");
  const scorePill = document.getElementById("scorePill");

  const timerWrap = document.getElementById("timerWrap");
  const timerBar = document.getElementById("timerBar");
  const timerHint = document.getElementById("timerHint");

  const questionTextEl = document.getElementById("questionText");
  const questionSubEl = document.getElementById("questionSub");
  const choicesEl = document.getElementById("choices");

  const feedbackEl = document.getElementById("feedback");
  const resultBadgeEl = document.getElementById("resultBadge");
  const answerBadgeEl = document.getElementById("answerBadge");
  const explainEl = document.getElementById("explain");
  const readHintEl = document.getElementById("readHint");

  const startControlsEl = document.getElementById("startControls");
  const startBtn = document.getElementById("startBtn");

  const resultScreen = document.getElementById("resultScreen");
  const finalScoreBig = document.getElementById("finalScoreBig");
  const finalLine = document.getElementById("finalLine");
  const exportBtn = document.getElementById("exportBtn");
  const playAgainBtn = document.getElementById("playAgainBtn");

  const toast = document.getElementById("toast");
  const toastTxt = document.getElementById("toastTxt");

  // ==============
  // HELPERS
  // ==============
  function shuffle(arr){
    for(let i=arr.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    return arr;
  }
  function pct(n,d){ return d===0 ? 0 : Math.round((n/d)*100); }

  // Shuffle the choices of a single question AND update correct index
  function shuffleQuestionChoices(q){
    const items = q.choices.map((text, i) => ({ text, isCorrect: i === q.a }));
    shuffle(items);
    const newChoices = items.map(it => it.text);
    const newA = items.findIndex(it => it.isCorrect);
    return { ...q, choices: newChoices, a: newA };
  }

  function setToast(msg, good=true){
    toastTxt.textContent = msg;
    const b = toast.querySelector(".b");
    b.style.background = good ? "var(--accent2)" : "var(--bad)";
    b.style.boxShadow = good ? "0 0 0 3px rgba(34,197,94,.18)" : "0 0 0 3px rgba(251,113,133,.18)";
    toast.classList.add("show");
    setTimeout(()=>toast.classList.remove("show"), 900);
  }

  // Sounds (no external files)
  let audioCtx = null;
  function ensureAudio(){
    if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if(audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
  }
  function beep(type="ok"){
    const ctx = ensureAudio();
    const now = ctx.currentTime;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";

    let f1=660, f2=880, dur=0.12;
    if(type==="bad"){ f1=220; f2=165; dur=0.14; }
    if(type==="time"){ f1=330; f2=220; dur=0.16; }

    o.frequency.setValueAtTime(f1, now);
    o.frequency.exponentialRampToValueAtTime(Math.max(50,f2), now + dur);

    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.18, now + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    o.connect(g); g.connect(ctx.destination);
    o.start(now);
    o.stop(now + dur + 0.02);
  }

  function stopTimer(){
    if(raf) cancelAnimationFrame(raf);
    raf = null;
  }

  function startTimer(){
    stopTimer();
    timerWrap.style.display = "block";
    timerHint.style.display = "flex";
    timerBar.style.transform = "scaleX(1)";
    timerWrap.style.borderColor = "rgba(251,191,36,.45)";

    const tStart = performance.now();
    const tEnd = tStart + TIME_MS;

    const tick = (now) => {
      if(locked) return;
      const remaining = Math.max(0, tEnd - now);
      const p = remaining / TIME_MS;
      timerBar.style.transform = `scaleX(${p})`;

      if(remaining <= 3500){
        timerWrap.style.borderColor = "rgba(251,113,133,.55)";
      }

      if(remaining <= 0){
        stopTimer();
        timeUp();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
  }

  function timeUp(){
    if(locked) return;
    beep("time");
    choose(-1, true);
  }

  function updateTopBar(){
    scorePill.textContent = `Score: ${score}`;
    streakEl.textContent = streak;
  }

  function setDiffUI(diff){
    qDiffEl.textContent = diff;
    diffChip.classList.remove("diff-easy","diff-medium","diff-hard");
    if(diff === "Easy") diffChip.classList.add("diff-easy");
    if(diff === "Medium") diffChip.classList.add("diff-medium");
    if(diff === "Hard") diffChip.classList.add("diff-hard");
  }

  function loadQuestion(){
    if(idx >= pool.length){
      showEnd();
      return;
    }

    const q = pool[idx];
    locked = false;

    qNumEl.textContent = (idx + 1);
    qTotalEl.textContent = pool.length;
    setDiffUI(q.diff);

    const progress = idx / pool.length;
    barEl.style.width = `${Math.max(6, Math.round(progress * 100))}%`;

    questionTextEl.textContent = q.q;
    questionSubEl.textContent = `Topic: ${q.topic} · One correct answer.`;

    choicesEl.innerHTML = "";
    feedbackEl.classList.remove("show");
    explainEl.textContent = "";
    readHintEl.textContent = "";

    const letters = ["A","B","C","D"];
    q.choices.forEach((txt, i) => {
      const b = document.createElement("button");
      b.className = "btn";
      b.innerHTML = `<span class="key">${letters[i]}</span><div class="choiceText">${txt}</div>`;
      b.addEventListener("click", () => choose(i, false));
      choicesEl.appendChild(b);
    });

    startTimer();
  }

  function choose(i, timedOut=false){
    if(locked) return;
    locked = true;
    stopTimer();

    const q = pool[idx];
    const correctIndex = q.a;
    const isCorrect = (!timedOut && i === correctIndex);

    const buttons = [...choicesEl.querySelectorAll(".btn")];
    buttons.forEach(b => b.disabled = true);

    buttons[correctIndex]?.classList.add("good");
    if(!isCorrect && !timedOut && i >= 0) buttons[i]?.classList.add("bad");

    answered++;

    let nextDelay = NEXT_OK_MS;

    if(isCorrect){
      correct++;
      streak++;

      const bonus = Math.min(5, streak);
      const diffBoost = q.diff === "Hard" ? 3 : q.diff === "Medium" ? 2 : 1;
      score += (10 * diffBoost) + bonus;

      beep("ok");
      setToast(`Correct! +${(10*diffBoost)+bonus}`, true);

      resultBadgeEl.className = "badge good";
      resultBadgeEl.textContent = "✅ Correct";
      explainEl.textContent = "Nice. Keep going.";
      readHintEl.textContent = "";
      nextDelay = NEXT_OK_MS;

    } else {
      wrong++;
      streak = 0;
      score = Math.max(0, score - 3);

      beep(timedOut ? "time" : "bad");
      setToast(timedOut ? "Time's up 😭 -3" : "Wrong 😭 -3", false);

      resultBadgeEl.className = "badge " + (timedOut ? "warn" : "bad");
      resultBadgeEl.textContent = timedOut ? "⏱ Time's up" : "❌ Wrong";

      explainEl.textContent = q.explain || "Brief: the correct idea is the highlighted answer.";
      nextDelay = timedOut ? NEXT_TIMEOUT_MS : NEXT_WRONG_MS;

      const secs = Math.round(nextDelay / 1000);
      readHintEl.textContent = `Next question in ~${secs}s`;
    }

    answerBadgeEl.className = "badge";
    answerBadgeEl.textContent = `Answer: ${["A","B","C","D"][correctIndex]}`;

    feedbackEl.classList.add("show");
    updateTopBar();

    setTimeout(() => {
      idx++;
      if(idx < pool.length) loadQuestion();
      else showEnd();
    }, nextDelay);
  }

  function showEnd(){
    stopTimer();
    locked = true;

    timerWrap.style.display = "none";
    timerHint.style.display = "none";
    feedbackEl.classList.remove("show");

    choicesEl.innerHTML = "";
    questionTextEl.textContent = "Quiz Finished 👑";
    questionSubEl.textContent = "";

    barEl.style.width = "100%";

    const accuracy = pct(correct, answered);
    finalScoreBig.textContent = score;
    finalLine.textContent = `Accuracy: ${accuracy}% • Correct: ${correct} • Wrong: ${wrong}`;

    resultScreen.style.display = "block";
  }

  // Export Results Card
  function exportResultCard(){
    const W = 1080, H = 1350;
    const canvas = document.createElement("canvas");
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext("2d");

    const grad = ctx.createLinearGradient(0,0,W,H);
    grad.addColorStop(0, "#0b0b0f");
    grad.addColorStop(0.45, "#14141b");
    grad.addColorStop(1, "#0b0b0f");
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,W,H);

    function blob(x,y,r, color){
      const g = ctx.createRadialGradient(x,y,0, x,y,r);
      g.addColorStop(0, color);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fill();
    }
    blob(220, 200, 420, "rgba(124,58,237,.28)");
    blob(900, 160, 360, "rgba(34,197,94,.20)");
    blob(650, 1200, 520, "rgba(251,191,36,.12)");

    const pad = 70;
    const x = pad, y = pad, w = W - pad*2, h = H - pad*2;

    roundRect(ctx, x, y, w, h, 42);
    ctx.fillStyle = "rgba(255,255,255,.04)";
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgba(255,255,255,.10)";
    ctx.stroke();

    ctx.fillStyle = "#f5f5ff";
    ctx.font = "900 54px system-ui, -apple-system, Segoe UI, Roboto, Arial";
    ctx.fillText("STS Trivia Results", x + 56, y + 105);

    ctx.fillStyle = "rgba(185,185,214,.95)";
    ctx.font = "700 28px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
    ctx.fillText(`Timer: 15s  •  ${new Date().toLocaleString()}`, x + 56, y + 155);

    ctx.fillStyle = "#ffffff";
    ctx.font = "900 140px system-ui, -apple-system, Segoe UI, Roboto, Arial";
    ctx.fillText(`${score}`, x + 56, y + 320);

    ctx.fillStyle = "rgba(185,185,214,.95)";
    ctx.font = "900 30px system-ui, -apple-system, Segoe UI, Roboto, Arial";
    ctx.fillText("SCORE", x + 60, y + 360);

    const acc = Math.round((correct / Math.max(1, answered)) * 100);

    const boxY = y + 430;
    const gap = 22;
    const boxW = (w - 56*2 - gap) / 2;
    const boxH = 150;

    statBox(x + 56, boxY, boxW, boxH, "Accuracy", `${acc}%`, "rgba(34,197,94,.18)");
    statBox(x + 56 + boxW + gap, boxY, boxW, boxH, "Answered", `${answered}`, "rgba(124,58,237,.18)");
    statBox(x + 56, boxY + boxH + gap, boxW, boxH, "Correct", `${correct}`, "rgba(74,222,128,.18)");
    statBox(x + 56 + boxW + gap, boxY + boxH + gap, boxW, boxH, "Wrong", `${wrong}`, "rgba(251,113,133,.18)");

    ctx.fillStyle = "rgba(185,185,214,.70)";
    ctx.font = "600 22px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
    ctx.fillText("Made from STS slides • Trivia results card", x + 56, y + h - 60);

    const a = document.createElement("a");
    a.download = `sts_trivia_results_${Date.now()}.png`;
    a.href = canvas.toDataURL("image/png");
    a.click();

    setToast("Exported ✅", true);

    function roundRect(c, x, y, w, h, r){
      c.beginPath();
      c.moveTo(x+r, y);
      c.arcTo(x+w, y, x+w, y+h, r);
      c.arcTo(x+w, y+h, x, y+h, r);
      c.arcTo(x, y+h, x, y, r);
      c.arcTo(x, y, x+w, y, r);
      c.closePath();
    }
    function statBox(x,y,w,h,label,value, glow){
      roundRect(ctx, x, y, w, h, 28);
      ctx.fillStyle = "rgba(255,255,255,.03)";
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(255,255,255,.10)";
      ctx.stroke();

      const g = ctx.createRadialGradient(x+w*0.25, y+h*0.35, 0, x+w*0.25, y+h*0.35, Math.max(w,h));
      g.addColorStop(0, glow);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(x, y, w, h);

      ctx.fillStyle = "rgba(185,185,214,.95)";
      ctx.font = "900 26px system-ui, -apple-system, Segoe UI, Roboto, Arial";
      ctx.fillText(label, x+26, y+48);

      ctx.fillStyle = "#ffffff";
      ctx.font = "1000 64px system-ui, -apple-system, Segoe UI, Roboto, Arial";
      ctx.fillText(value, x+26, y+115);
    }
  }

  function playAgain(){ location.reload(); }

  // PC keyboard
  window.addEventListener("keydown", (e) => {
    const k = e.key.toUpperCase();
    const map = {A:0,B:1,C:2,D:3};
    if(map[k] !== undefined){
      const btns = choicesEl.querySelectorAll(".btn");
      if(btns[map[k]]) btns[map[k]].click();
    }
  });

  startBtn.addEventListener("click", () => {
    ensureAudio();
    startControlsEl.style.display = "none";
    resultScreen.style.display = "none";

    // RANDOM ORDER + RANDOM CHOICE POSITIONS
    pool = shuffle(QUESTIONS.slice()).map(shuffleQuestionChoices);

    idx = 0;
    score = 0; correct = 0; wrong = 0; streak = 0; answered = 0;

    updateTopBar();
    setToast("Go.", true);
    loadQuestion();
  });

  exportBtn.addEventListener("click", exportResultCard);
  playAgainBtn.addEventListener("click", playAgain);

  // init
  qTotalEl.textContent = 30;
  updateTopBar();
})();
