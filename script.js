const quizData = [
  {
    question: "1. Siapakah presiden Indonesia yang menjabat pada periode 2004-2014?",
    a: "A. Susilo Bambang Yudhoyono",
    b: "B. Joko Widodo",
    c: "C. Megawati Soekarnoputri",
    d: "D. Abdurrahman Wahid",
    correct: "a",
  },
  {
    question: "2. Apa nama ibu kota provinsi terkecil di Indonesia?",
    a: "A. Ambon",
    b: "B. Pontianak",
    c: "C. Manado",
    d: "D. Denpasar",
    correct: "d",
  },

  {
    question: "3. Apa nama jembatan yang menghubungkan Pulau Jawa dan Sumatera?",
    a: "A. Jembatan Bangka",
    b: "B. Jembatan Suramadu",
    c: "C. Jembatan Ampera",
    d: "D. Jembatan Selat Sunda",
    correct: "d",
  },
  {
    question: "4. Apa nama festival budaya yang diadakan di Yogyakarta setiap tahunnya?",
    a: "A. Festival Danau Toba",
    b: "B. Festival Lombok",
    c: "C. Festival Solo",
    d: "D. Festival Malioboro",
    correct: "d",
  },
  {
    question: "5. Siapa penulis novel Laskar Pelangi?",
    a: "A. Tere Liye",
    b: "B. Andrea Hirata",
    c: "C. Dewi Lestari",
    d: "D. Dee Lestari",
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
      <h2 style="text-align: center;">HASIL TEST : ${score}/${quizData.length}</h2>
      <h1 style="text-align: center;">Selamat Anda mendapatkan hadiah Xiaomi Note 11 Pro</h1>
      <audio controls>
        <source src="./tapi boong.mp3" type="audio/mpeg">
        <p>Browser Anda tidak mendukung elemen audio.</p>
      </audio>
      
      <button onclick="location.reload()" style="display: block; margin: 0 auto;">COBALAGI</button>
      
            `;
    }
  }
});
