// Have to add in our code from HTML 
 var time = document.querySelector("#timeleft");
 var challenge = document.querySelector("#challengeStart"); 
 var  startQuiz = document.querySelector("#startQuiz"); 
 var usersQuestions = document.querySelector (".selection"); 
 var  question1 = document.querySelector ("#question1"); 
 var  question2 = document.querySelector ("#question2"); 
 var  question3 = document.querySelector ("#question3"); 
 var  question4 = document.querySelector ("#question4"); 
 var  buttonA = document.querySelector (".buttonA");
 var  buttonB = document.querySelector (".buttonB");
 var  buttonC = document.querySelector (".buttonC");
 var  buttonD = document.querySelector (".buttonD");
 var correct = document.querySelector ("#answertext"); 
 var highscores = document.querySelector("#highscore"); 
 var viewhighscore = document.querySelector ("#Highscores"); 
 var finalPage = document.querySelector(".FinalScore"); 
 var gameScore= document.querySelector(".gameScore"); 
 var timeLeft = 120;
 var submit = document.querySelector(".submit"); 

submit.innerHTML = "Hello"; 
console.log(submit); 
// This is an array of questions and answers 
const questions = [
    {
        question: "Inside which HTML element do we attach the JavaScript file?",
        answers: [
            "A - javascript",
            "B - js",
            "C - script",
            "D - scripting"],
        correctAnswer: "C - script"
    },

    {
        question: "Javascript starts counting at what number?",
        answers: [
            "A - 0",
            "B - 1",
            "C - 2",
            "D - 3"],
        correctAnswer: "A - 0"
    },

    {
        question: "What is NOT a method of an Array ",
        answers: ["A-find","B-Filter","C-Concat","D-toUpperCase"],
        correctAnswer: "D-toUpperCase"
    },

    {
        question: "What symbol contains an object ",
        answers: ["A-{}","B-[]","C-``","D-''"],
        correctAnswer: "A-{}"
    },

    {
        question: "When using API's what is the method we pass the URL to",
        answers: ["A-.bring()","B-.return()","C-.then()","D-.fetch()"],
        correctAnswer: "D-.fetch()"
    },


]








// This is the start quiz button also generates the question array 

 startQuiz.addEventListener("click", function(){
      setTimer();
      setQuestions();
      firstPage()  });
 


// This is the function to populate the questions from the array and moves to next questions 
let i = 0; 
     
function setQuestions(){
    question1.innerHTML= questions[i].question; 
    buttonA.innerHTML=questions[i].answers[0];
    buttonB.innerHTML=questions[i].answers[1];
    buttonC.innerHTML=questions[i].answers[2];
    buttonD.innerHTML=questions[i].answers[3];
    
  
}



if (questions[4] !== true ){
    console.log ("works");  
}
       console.log (questions[4])
 



// This is checks for the correct or incorrect answer and prints it to the screen
let userScore = 0 ; 
function answersOutput (event){
    
    if (event.target.textContent === questions[i].correctAnswer){
        correct.innerHTML= "Correct"; 
        userScore=userScore+20;
        console.log("SCORE",userScore); 

        
    
    } else {
        correct.innerHTML= "Incorrect Answer"; 
        timeLeft=timeLeft-10; 
       
        
    }
    setTimeout(function(){setQuestions(); }, 4000);        
    i++; 
    console.log (event); 
   
}

// This is the button event listeners 

    buttonA.addEventListener("click", function(event){
        console.log(event.target.textContent); 
        answersOutput(event); 
        setQuestions(); 
        localStorage.setItem("userScore", JSON.stringify(userScore));
        

    });



    buttonB.addEventListener("click", function(event){
        console.log(event.target.textContent); 
        answersOutput(event); 
        setQuestions(); 
        localStorage.setItem("userScore", JSON.stringify(userScore));

    
    });



    buttonC.addEventListener("click", function(event){
        console.log(event.target.textContent);
        answersOutput(event);  
        setQuestions(); 
        localStorage.setItem("userScore", JSON.stringify(userScore));


    });




    buttonD.addEventListener("click", function(event){
        console.log(event.target.textContent); 
        answersOutput(event); 
        setQuestions(); 
        localStorage.setItem("userScore", JSON.stringify(userScore));

    });



// This allows for the first page to have the correct content it hides the intro page and high score page once the user click start quiz . 
function firstPage (){
    challenge.style.visibility = 'hidden';
    buttonA.style.visibility = 'visible'; 
    buttonB.style.visibility = 'visible';
    buttonC.style.visibility = 'visible';
    buttonD.style.visibility = 'visible'; 
    viewhighscore.style.visibility = 'hidden'; 

}


// This is the timer that is clicked once the user clicks start quiz 

function setTimer(){

    
    var timerId = setInterval(countdown, 1000);

    function countdown() {

  if (timeLeft == -1) {
    clearTimeout(timerId);
    doSomething();
  } else {
    time.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  } 
    }
}
    

// This allows the High Score Page to appear when the View Highscore button is clicked

highscores.addEventListener("click", function(){
    highScorePage() 
});

// This allows for the high score page to be viewable and hides buttons and start page
function highScorePage() {
    challenge.style.visibility = 'hidden';
    buttonA.style.visibility = 'hidden'; 
    buttonB.style.visibility = 'hidden';
    buttonC.style.visibility = 'hidden';
    buttonD.style.visibility = 'hidden';  
    viewhighscore.style.visibility = 'visible'; 
    question1.style.visibility='hidden'; 
    correct.style.visibility='hidden';
}



// function finalScore (){
// finalPage.style.visibility='visible'; 
// gameScore.innerHTML = userScore; 
// localStorage.setItem("userName", JSON.stringify(finalPage));

// }

finalScore(); 

if (questions [5].question === false ) {
    challenge.style.visibility = 'hidden';
    buttonA.style.visibility = 'hidden'; 
    buttonB.style.visibility = 'hidden';
    buttonC.style.visibility = 'hidden';
    buttonD.style.visibility = 'hidden';  
    viewhighscore.style.visibility = 'hidden'; 
    question1.style.visibility='hidden'; 
    correct.style.visibility='hidden';
    finalScore(); 
     
}

/* Things to still work on 
        When user clicks on option there it quickly moves onto the next question
            1. We could possibly add a set time out function 
        Once the user is finished (not time runs out) the following should happen
            1. The user is moved to Final Score Page 
            2. User is given final Score  */ 
