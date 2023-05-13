const questions = [{
    question:"When a vehicle is stopped in a tunnel due to congestion what should a driver do?",
    answers: [
        "Switch off the engine",
        "Keep the engine ticking over in a low gear",
        "Switch on the fog lights", 
        "Only give hand signals."],
    correct: "1",
},
{
    question: "What does blue smoke coming from the vehicle's exhaust generally mean?",
    answers: [
        "The engine is overheating.",
        "The catalytic converter is worn out.",
        "The engine is burning oil.", 
        "The air filter needs to be replaced."
    ],
    correct: "3",
},
{
    question: "What should a driver do if they are behind schedule in reaching a destination at an appointed time?",
    answers: [
        "Drive on the hard shoulder where available.",
        "Exceed the speed limit if necessary to make up the time.",
        "Drive on smartly and overtake any vehicles preventing progress.", 
        "Be patient and drive so as to arrive safely."
    ],
    correct: "4",
},
{
question: "What lights should a vehicle show at dusk?",
answers: [
    "Daytime Running Lights (DRLs) only.",
    "Fog lights.",
    "Dipped headlights.", 
    "Full headlights."
],
correct: "3",
}
];

let headerContainer = document.getElementById("quiz-header");
let listContainer = document.getElementById("list");
let submitButton = document.getElementById("submit"); 

let score = 0; //Counter of correct answers
let indexOfQuestions = 0; //Current question

clearBox();
displayQuestion();

submitButton.onclick = checkAnswer;

function clearBox(){
    headerContainer.innerHTML = "";
    listContainer.innerHTML = "";
}

function displayQuestion(){

    let headerTepl = `<h2 class="quiz-title">${questions[indexOfQuestions]["question"]}</h2>`;
    
    headerContainer.innerHTML= headerTepl;
        
    for(answer of questions[indexOfQuestions]["answers"]){
        let listTempl = `<li>
        <label>
            <input type="radio" class="answer" name="answer">
            <span>${answer}</span>
        </label>
        </li>`;
       
        listContainer.innerHTML += listTempl;
    }
}

function checkAnswer (){
    console.log("Check Answer started!")
    let checkedElement = listContainer.querySelector('input:checked')
    console.log(checkedElement);

    if (!checkedElement){
        submitButton.blur();
        return;
    } 
}