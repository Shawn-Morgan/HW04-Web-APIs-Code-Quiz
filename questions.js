const questionDictionary = [{question: "Commonly used data types DO NOT include:", option1: "strings", option2: "booleans", option3: "alerts", option4: "numbers", correct: 3}, 
                            {question: "The condition in an if / else statement is enclosed within ____.", option1: "quotes", option2: "curly brackets", option3: "parentheses", option4: "square brackets", correct: 3},
                            {question: "Who invented JavaScript?", option1: "Douglas Crockford", option2: "Sheryl Sandberg", option3: "Brendan Eich", option4: "Mickey Mouse", correct: 3},
                            {question: "Which one of these is a JavaScript package manager?", option1: "Node.js", option2: "npm", option3: "TypeScript", option4: "python", correct: 2},
                            {question: "Which tool can you use to ensure code quality?", option1: "Angular", option2: "jQuery", option3: "RequireJS", option4: "ESLint", correct: 4}];


var localStorage = Window.localStorage

//holds question user is on
var questionNum = 0;
//holds the score
var score = 0;

//variables associated with timer
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var container = document.querySelector("#container");

// 15 seconds left per question:
var secondsLeft = 60;
// Holds interval time
var holdInterval = 0;
// Holds penalty time
var penalty = 5;

//when timer runs out - new Date represents the current date/time
var expirationDate = new Date()
expirationDate.setMinutes(expirationDate.getMinutes() + 1)
var x = setInterval(function(){
    document.getElementById("timer").innerHTML="time left " + Math.floor((expirationDate-new Date())/1000) + "s"
    if (new Date() > expirationDate) {
        document.getElementById("questionContainer").innerHTML="Times up"
        var timer = document.getElementById("timer")
        timer.style.display="none"
    }
},10)



function answerGiven(optionNumber) {
    
    var element = event.target;

    if (optionNumber === questionDictionary[questionNum].correct){
        //this is for handling correct responses
        //increase time or score
        score++
        expirationDate.setSeconds(expirationDate.getSeconds()+5)
        console.log("the score is: " + score);
        console.log("this is question number: " + questionNum);
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        createDiv.textContent = "Nice job! That is correct! The answer is: " + questionDictionary[questionNum].correct;
        console.log(createDiv.textContent);
        //alert(createDiv.textContent), alert("the score is: " + score), alert("this is question number: " + questionNum);  
    }
        else {//for handling incorrect responses}
        //decrease time or score 
        score--
        expirationDate.setSeconds(expirationDate.getSeconds()-5)
        console.log("the score is: " + score);
        console.log("this is question number: " + questionNum);
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        createDiv.textContent = "Oh sorry, that is not correct. The answer is: " + questionDictionary[questionNum].correct;
        console.log(createDiv.textContent);
        //alert(createDiv.textContent), alert("the score is: " + score), alert("this is question number: " + questionNum);  
    }
    questionNum++;
    //questionNum += 1;
    //set of the question and button text to the next question
    resetQuestion ();
}

function resetQuestion(){
    if (questionNum >= questionDictionary.length) {
        var questionContainer = document.getElementById("questionContainer");
        questionContainer.style.display="none"
        //hide timer
        var timer = document.getElementById("timer")
        timer.style.display="none"
        var finalResults = document.getElementById("finalResults");
        finalResults.style.display="block"
        finalResults.innerHTML="Score: " + score;

        //var highScores=localStorage.getItem("High Scores")

    }   else {
        var question = document.getElementById("question");

        question.innerHTML = questionDictionary[questionNum].question
        var option1 = document.getElementById("opt1");
        option1.innerHTML = questionDictionary[questionNum].option1
        var option2 = document.getElementById("opt2");
        option2.innerHTML = questionDictionary[questionNum].option2
        var option3 = document.getElementById("opt3");
        option3.innerHTML = questionDictionary[questionNum].option3
        var option4 = document.getElementById("opt4");
        option4.innerHTML = questionDictionary[questionNum].option4
    }

}

resetQuestion()
//global variable for correct answers given
//html element that reports correct or incorrect selection - start with display none


//function showReults()

//timer function
//timer.addEventListener("click", function())
/*
   // set to zero to start
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                Done();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});
*/








