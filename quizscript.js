const questions = [
    {
        question: "Wann wurde der FC Bayern München gegründet?",
        answers: [
            {text: "1900", correct: true},
            {text: "1920", correct: false},
            {text: "1932", correct: false},
        ]
    },
    {
        question: "Wie lautet der Spitzname des Vereins?",
        answers: [
            {text: "Die Roten", correct: true},
            {text: "Die Blauen", correct: false},
            {text: "Die Schwarzen", correct: false},
        ]
    },
    {
        question: "In welchem Stadion trägt der FC Bayern seine Heimspiele aus?",
    answers: [
            {text: "Allianz Arena", correct: true},
            {text: "Olympiastadion München", correct: false},
            {text: "Signal Iduna Park", correct: false},
        ]
    },
    {
        question: "Wer war der erste Trainer des FC Bayern?",
    answers: [
            {text: "Udo Lattek", correct: false},
            {text: "Richard Dombi", correct: true},
            {text: "Dettmar Cramer", correct: false},
        ]
    },
    {
        question: "Wer war der erste deutsche Weltfußballer aus Bayern?",
    answers: [
            {text: "Franz Beckenbauer", correct: false},
            {text: "Lothar Matthäus", correct: true},
            {text: "Gerd Müller", correct: false},
        ]
    },
    {
        question: "Welcher Spieler gilt als „Bomber der Nation“?",
    answers: [
            {text: "Karl-Heinz Rummenigge", correct: false},
            {text: "Gerd Müller", correct: true},
            {text: "Franz Beckenbauer", correct: false},
        ]
    },
    {
        question: "Wie viele Champions-League-Titel hat Bayern (Stand 2025)?",
    answers: [
            {text: "5", correct: false},
            {text: "6", correct: true},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Wer war der Gegner im Champions-League-Finale 2013?",
    answers: [
            {text: "Real Madrid", correct: false},
            {text: "Chelsea FC", correct: false},
            {text: "Borussia Dortmund", correct: true},
        ]
    },
    {
        question: "Welche Vereinsfarben hat der FC Bayern?",
    answers: [
            {text: "Blau und Gelb", correct: false},
            {text: "Rot und Weiß", correct: true},
            {text: "Grün und Schwarz", correct: false},
        ]
    },
    {
        question: "Welches Spitzname-Duo prägte den FC Bayern über Jahre?",
    answers: [
            {text: "Magic-Müller", correct: false},
            {text: "Killer-Kalle", correct: false},
            {text: "Robbery ", correct: true},
        ]
    },
    {
        question: "Wer war der langjährige Präsident des Vereins?",
    answers: [
            {text: "Uli Hoeneß", correct: true},
            {text: "Franz Beckenbauer", correct: false},
            {text: "Karl Hopfner", correct: false},
        ]
    },
    {
        question: "Welcher Spieler trug die Nummer 25 und wurde zur Legende?",
    answers: [
            {text: "Bastian Schweinsteiger", correct: false},
            {text: "Thomas Müller", correct: true},
            {text: "Philipp Lahm", correct: false},
        ]
    },
    {
        question: "Wie heißt das Maskottchen des FC Bayern?",
    answers: [
            {text: "Fritzi", correct: false},
            {text: "Leo", correct: false},
            {text: "Berni", correct: true},
        ]
    },
    {
        question: "Welcher Klub ist der größte Rivale in Deutschland?",
    answers: [
            {text: "Schalke 04", correct: false},
            {text: "Borussia Dortmund", correct: true},
            {text: "Hamburger SV", correct: false},
        ]
    },
    {
        question: "Wie viele Deutsche Meisterschaften hat Bayern (Stand 2025)?",
    answers: [
            {text: "30", correct: false},
            {text: "32", correct: true},
            {text: "28", correct: false},
        ]
    },
    {
        question: "Wer war Kapitän beim Champions-League-Sieg 2001?",
    answers: [
            {text: "Oliver Kahn", correct: false},
            {text: "Stefan Effenberg", correct: true},
            {text: "Lothar Matthäus", correct: false},
        ]
    },
    {
        question: "Welcher Spieler kam 2023 von Tottenham Hotspur?",
    answers: [
            {text: "Harry Kane", correct: true},
            {text: "Son Heung-min", correct: false},
            {text: "Dele Alli", correct: false},
        ]
    },
    {
        question: "Wer war der Trainer beim Triple 2013?",
    answers: [
            {text: "Ottmar Hitzfeld", correct: false},
            {text: "Pep Guardiola", correct: false},
            {text: "Jupp Heynckes", correct: true},
        ]
    },{
        question: "Welche Stadt ist die Heimat des FC Bayern?",
    answers: [
            {text: "Nürnberg", correct: false},
            {text: "München", correct: true},
            {text: "Augsburg", correct: false},
        ]
    },
    {
        question: "Wer war der Gegner im „Finale dahoam“ 2012?",
    answers: [
            {text: "Real Madrid", correct: false},
            {text: "Inter Mailand", correct: false},
            {text: "Chelsea FC", correct: true},
        ]
    },
    {
        question: "Welcher Spieler war bekannt für seine Flanken von rechts?",
    answers: [
            {text: "Franck Ribéry", correct: false},
            {text: "Arjen Robben", correct: true},
            {text: "Philipp Lahm", correct: false},
        ]
    },
    {
        question: "Wie heißt die Vereins-Hymne?",
    answers: [
            {text: "Forever Bayern", correct: false},
            {text: "Mia san mia", correct: false},
            {text: "Stern des Südens", correct: true},
        ]
    },
    {
        question: "Wer war der erste ausländische Trainer des Vereins?",
    answers: [
            {text: "Zlatko Čajkovski", correct: true},
            {text: "Giovanni Trapattoni", correct: false},
            {text: "Louis van Gaal", correct: false},
        ]
    },
    {
        question: "Welcher Spieler erzielte das Siegtor im CL-Finale 2013?",
    answers: [
            {text: "Mario Mandžukić", correct: false},
            {text: "Arjen Robben", correct: true},
            {text: "Thomas Müller", correct: false},
        ]
    },
    {
        question: "Wie viele Zuschauer fasst die Allianz Arena ungefähr?",
    answers: [
            {text: "80.000", correct: false},
            {text: "60.000", correct: false},
            {text: "75.000", correct: true},
        ]
    },
    {
        question: "Wer war der Torwart-Legende mit Spitznamen „Titan“?",
    answers: [
            {text: "Oliver Kahn", correct: true},
            {text: "Sepp Maier", correct: false},
            {text: "Manuel Neuer", correct: false},
        ]
    },
    {
        question: "Welcher Spieler war bekannt für den „linken Hammer“?",
    answers: [
            {text: "Franck Ribéry", correct: false},
            {text: "Bastian Schweinsteiger", correct: true},
            {text: "Mehmet Scholl", correct: false},
        ]
    },
    {
        question: "Wer war der Trainer nach Jupp Heynckes 2013?",
    answers: [
            {text: "Carlo Ancelotti", correct: false},
            {text: "Louis van Gaal", correct: false},
            {text: "Pep Guardiola", correct: true},
        ]
    },
    {
        question: "Welche Zahl trägt Manuel Neuer auf dem Trikot?",
    answers: [
            {text: "12", correct: false},
            {text: "22", correct: false},
            {text: "1", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerbuttons");
const nextButton = document.getElementById("nextbutton");

let score = 0;
let QuestionIndex = 0;

function startQuiz(){
    QuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[QuestionIndex];
    let questionCounter = QuestionIndex + 1;
    questionElement.innerHTML = questionCounter + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("buttons");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(event){
    const selectedButton = event.currentTarget;
    const isTrue = selectedButton.dataset.correct == "true";
    if(isTrue){
        selectedButton.classList.add("correct");
        score += 1;
    }
    else{
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Du hast ${score} von ${questions.length} Punkten erreicht!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    QuestionIndex += 1;
    if(QuestionIndex < questions.length){
        showQuestion();
    }
    else {
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(QuestionIndex < questions.length){
        handleNextButton();}
    else {
        startQuiz();
    }
    }
)

startQuiz()