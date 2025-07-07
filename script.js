const quizData = [
  {
    question: "1. Negara, negara apa yg gak akan hilang?",
    a: "A. Singapura",
    b: "B. Indonesia",
    c: "C. Kanada",
    d: "D. Irlandia",
    correct: "c",
  },
  {
    question: "2. Es, Es apa yg sholeh",
    a: "A. Es Doger",
    b: "B. Marimas Kurma",
    c: "C. Es Teh Solo",
    d: "D. Es Nutri Syar'i ",
    correct: "d",
  },

  {
    question: "3. ada bebek 5, dikali 2, berapa  total semua bebek?",
    a: "A. 5",
    b: "B. 15",
    c: "C. 10",
    d: "D. 7",
    correct: "a",
  },
  {
    question: "4. Jika AdA 10 Pejuang Indonesia yg berperang lalu ada satu yg gugur. ada berpa orang yg akan kembali ke makas",
    a: "A. 9 Orang",
    b: "B. 100 orang",
    c: "C. 109 orang",
    d: "D. 1009 ORANG",
    correct: "d",
  },
  {
    question: "5. Buah-buah apa yg selalu ketawa?",
    a: "A. Buahasa thailand",
    b: "B. Buah Dadaa janda",
    c: "C. Buah hati2 dijalan",
    d: "D. Buahahaaaaa",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

const jawabanBenar = ()=>{
  jwbBnr = quizData.correct
  console.log(jwbBnr)
}

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = true));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2 style="text-align: center;">HASIL TEST : <br> 
       Jawaban Benar ${score}/${quizData.length}</h2>
      <h1 style="text-align: center; color: red">Selamat Anda Mendapatkan Hadiah Xiaomi Note 11 Pro</h1>
      <audio controls style="display: block; margin: 0 auto; padding:50px;">
        <source src="./tapi boong.mp3" type="audio/mpeg">
        <p>Browser Anda tidak mendukung elemen audio.</p>
      </audio>
      
      <button onclick="location.reload()" style="display: block; margin: 0 auto;">COBALAGI</button>
      
            `;
    }
  }
});
