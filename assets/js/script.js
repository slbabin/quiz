//Array of objects with questions and answers
const questions = [{
    question: "When a vehicle is stopped in a tunnel due to congestion what should a driver do?",
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
    image: "assets/images/eco-driving-tips.jpg",
    correct: "3",
}
];

// A pop-up box with rules 
let rulesButton;
let rulesBox;
let closePopup;

rulesButton.addEventListener("click", function () {
    rulesBox.classList.add("show");
});
closePopup.addEventListener("click", function () {
    rulesBox.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == rulesBox) {
        rulesBox.classList.remove("show");
    }
});


// Randomize array of questions
const shuffledArr = questions.sort(() => Math.random() - 0.5);

let imgBox = document.getElementById("quiz-image");
let headerContainer = document.getElementById("quiz-header");
let listContainer = document.getElementById("list");
let submitButton = document.getElementById("submit");

let score = 0; //Counter of correct answers
let indexOfQuestions = 0; //Current question

let minutesTxt = document.getElementById("minutes");
let secondsTxt = document.getElementById("seconds");

//Function to display the timer
function startTimer() {
    let startTime = new Date().getTime(); // Get the current timestamp in milliseconds

    setInterval(function () {
        let currentTime = new Date().getTime(); // Get the current timestamp in milliseconds
        let elapsedTime = currentTime - startTime; // Calculate the elapsed time in milliseconds

        // Convert the elapsed time into minutes, and seconds
        let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        // Display the elapsed time
        minutesTxt.innerHTML = minutes.toString().padStart(2, '0');
        secondsTxt.innerHTML = seconds.toString().padStart(2, '0');

    }, 1000); // Update the timer every second (1000 milliseconds)
}


//Clear html template 
clearBox();

// Start the timer
startTimer();

//Display questions
displayQuestion();

// Check answers on button click
submitButton.onclick = checkAnswer;

//Function to clear html template
function clearBox() {
    imgBox.innerHTML = "";
    headerContainer.innerHTML = "";
    listContainer.innerHTML = "";
}


let startTime = new Date().getTime();

//Function to generate and display a question with the choise of answers
function displayQuestion() {

    let imgTempl = `<img class='question-img' src = "${shuffledArr[indexOfQuestions]['image']}">`;
    imgBox.innerHTML = imgTempl;    //Display an image of a question

    let headerTepl = `<h2 class="question-title">${shuffledArr[indexOfQuestions]["question"]}</h2>`;
    headerContainer.innerHTML = headerTepl; // Display a question

    let indexNumber = 1;

    //Loop through the object and generate a list of answers
    for (let answer of shuffledArr[indexOfQuestions]["answers"]) {
        let listTempl =
            `<li>
        <label>
            <input value="${indexNumber}" type="radio" class="answer" name="answer">
            <span>${answer}</span>
        </label>
        </li>`;

        listContainer.innerHTML += listTempl; //Dislay an unordered list of answers

        indexNumber++;
    }
}

// Check answer function
function checkAnswer() {
    let checkedElement = listContainer.querySelector('input:checked'); //Getting a selected option and placing it in a variable. 

    //If no answer selected, alert the user to make a selection.
    if (!checkedElement) {
        window.alert("Please make a selection!");
        //submitButton.blur();        
        return;
    }

    //Get user selected number
    let userSelection = checkedElement.value;

    //Compairing user's selection with the correct answer and increment
    if (userSelection === shuffledArr[indexOfQuestions]["correct"]) {
        score++;
    }

    //Checking if it is not the last question then clear template and display the next question
    if (indexOfQuestions !== shuffledArr.length - 1) {
        indexOfQuestions++;
        clearBox();
        displayQuestion();
    } else {
        clearBox();
        displayResults();
    }
}

//Function to hide the timer on the results page
function hideFrontTimer() {
    var timerDiv = document.getElementById("front-timer");
    timerDiv.style.display = "none";
}

//Display results function
function displayResults() {
    let endTime = new Date().getTime();
    let totalTime = (endTime - startTime) / 1000; // Calculate time spent in seconds

    let title, message, result, resultImage;

    //Display the image and the corresponding message depending on the amount of answered questions
    if (score === shuffledArr.length) {

        resultImage = `<img class='result-image' src = "assets/images/fireworks.gif" alt="Gif image of a fireworks">`;
        title = "Congratulations!";
        message = "You got all answers correct!";

    } else if ((score * 100) / shuffledArr.length >= 50) {
        resultImage = `<img class='result-image' src = "assets/images/not-bad.webp" alt="Emoji in glasses and thumbs up">`;
        title = "Not bad result!";
        message = "You got more then half answers correct!";
    } else {
        resultImage = `<img class='result-image' src = "assets/images/bad-result.webp" alt="Emoji with thumbs down">`;
        title = "You could do better.";
        message = "You got less then half answers correct.";
    }

    result = `${score} out of ${shuffledArr.length}`;

    let resultTempl = `
    <div class="results-image-box">${resultImage}</div>
    <h2 class="results-title">${title}</h2>
    <h3 class="summary">${message}</h2>
    <p class="result">${result}</p>
    <p class="timer">It took you ${totalTime.toFixed(1)} seconds</p>`;

    hideFrontTimer();

    //Display results to HTML
    headerContainer.innerHTML = resultTempl;

    // Update button to Play again
    submitButton.blur();
    submitButton.innerHTML = "Play again";
    submitButton.onclick = function () {
        history.go();
    };

}