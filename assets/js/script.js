const questions = [{
    question:"When a vehicle is stopped in a tunnel due to congestion what should a driver do?",
    answers: [
        "Switch off the engine",
        "Keep the engine ticking over in a low gear",
        "Switch on the fog lights", 
        "Only give hand signals."],
    image: "assets/images/cars-in-tunnel.jpg",
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
    image: "assets/images/car-smoke.png",
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
    image: "assets/images/driver-schedule2.png",
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
image: "assets/images/car-lights.jpg",
correct: "3",
},
{
    question: "How can a driver help the environment?",
    answers: [
        "By increasing speed.",
        "By harsh acceleration.",
        "By reducing speed.", 
        "By braking harshly."
    ],
    image: "assets/images/eco-driving-tips.avif",
    correct: "3",
    }
];

// Randomize array of questions
const shuffledArr = questions.sort(() => Math.random() - 0.5);

let imgBox = document.getElementById("quiz-image");
let headerContainer = document.getElementById("quiz-header");
let listContainer = document.getElementById("list");
let submitButton = document.getElementById("submit"); 

let score = 0; //Counter of correct answers
let indexOfQuestions = 0; //Current question


clearBox();
displayQuestion();

submitButton.onclick = checkAnswer;

function clearBox(){
    imgBox.innerHTML = "";
    headerContainer.innerHTML = "";
    listContainer.innerHTML = "";
}


function displayQuestion(){

    let imgTempl = `<img class='question-img' src = "${shuffledArr[indexOfQuestions]['image']}">`;

    imgBox.innerHTML= imgTempl;
    

    let headerTepl = `<h2 class="question-title">${shuffledArr[indexOfQuestions]["question"]}</h2>`;
    
    headerContainer.innerHTML= headerTepl;

    let indexNumber = 1;
        
    for( answer of shuffledArr[indexOfQuestions]["answers"]){
        console.log(indexNumber, answer);
        
        let listTempl = `<li>
        <label>
            <input value="${indexNumber}" type="radio" class="answer" name="answer">
            <span>${answer}</span>
        </label>
        </li>`;
       
        listContainer.innerHTML += listTempl;

        indexNumber++;
    }
}

function checkAnswer (){
    console.log("Check Answer started!")
    let checkedElement = listContainer.querySelector('input:checked')
    
//If no answer selected, do nothing. Come out from function.
    if (!checkedElement){
        submitButton.blur();
        return;
    } 
   
    //Get user selected number
    let userSelection = checkedElement.value;

    console.log(userSelection, shuffledArr[indexOfQuestions]["correct"]);

   if (userSelection === shuffledArr [indexOfQuestions]["correct"]){
         score++;
        }

     if(indexOfQuestions !== shuffledArr.length-1){
        console.log("This is NOT the last question!");
        indexOfQuestions++;
        clearBox();
        displayQuestion()
     }else{
        console.log("This is the last question!");
        clearBox();
        displayResults();
     }
 }

 function displayResults() {
    console.log("Show results started!");
    console.log("You got " + score + " points!");

    let title, message, result, resultImage;
    
    if(score === shuffledArr.length){

        resultImage = `<img class='result-image' src = "assets/images/fireworks.gif">`;
        title = "Congratulations!";
        message = "You got all answers correct!";
        
    }else if ((score *100) / shuffledArr.length >=50 ){
        title = "Not bad result!";
        message = "You got more then half answers correct!";
    } else {
        title = "You could do better."
        message = "You got less then half answers correct.";
    }

    result = `${score} out of ${shuffledArr.length}`;
  
    let resultTempl = `
    <div class="results-image-box">${resultImage}</div>
    <h2 class="results-title">${title}</h2>
    <h3 class="summary">${message}</h2>
    <p class="result">${result}</p>`;

   //Display results to HTML
    headerContainer.innerHTML = resultTempl;

   // Update button to Play again
    submitButton.blur();
    submitButton.innerHTML = "Play again";
    submitButton.onclick = function(){
        history.go();
    }

 }