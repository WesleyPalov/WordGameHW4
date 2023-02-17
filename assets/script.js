var questions = [
    
    {question: "Commonly used data types DO NOT include:", 
    options: ["strings", "booleans", "alerts", "numbers"], 
    answer: "alerts"},

    {question: "The condition in an 'if/else' statement is enclosed within ______.", 
    options: ["quotes", "curly brackets", "parentheses", "square brackets"], 
    answer: "parentheses"},

    {question: "Arrays in Javascript can be used to store ______.", 
    options: ["numbers & strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"},

    {question: "String values must be enclosed within ______ when being assigned to variables.", 
    options: ["commas", "curly brackets", "quotes", "parantheses"], 
    answer: "quotes"},

    {question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
    options: ["Javascript", "terminal/bash", "for loops", "console.log"], 
    answer: "terminal/bash"}
];
// init global variable used to start timer
var starTime = 35;
// variables declaration
display = document.getElementById("time");

var startContainer =  document.getElementById("start-container");
var startQuizButton = document.getElementById("start-quiz");
var quizfild = document.getElementById("quiz-fild");
var quizQ = document.getElementById("QuizQ");
var ansOne = document.getElementById("ansOne");
var ansTwo = document.getElementById("ansTwo");
var ansThree = document.getElementById("ansThree");
var ansFour = document.getElementById("ansFour");
var holdQuestion = 0;
var score = document.getElementById("score");
var finish = document.getElementById("finish");
var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");
var next = document.getElementById("next");
var points = document.getElementById("score");
var count = 0;
// start quiz


function startQuiz() {
    //hides start window
    startContainer.classList.add('hide');
  //shows questions window
    quizfild.classList.remove('hide');
   


    //TIMER 
   setTime();
  // console.log(questions[2].question );
  
};



startQuizButton.addEventListener("click", startQuiz, displayQ());
// this function should start if user wants to play agane
function agane() {


   
}

function  answerchecker (event) {
  if (event.target.textContent === questions[0].answer) {
         score++;  
    console.log("true2515");
         count++;
   points.textContent = count;
   console.log(score);
        
    correct.classList.remove('hide');
    next.addEventListener('click', displayQ,); 
  console.log("256789")
    }
     else {
     
      // if answer is wrong , subtracts 15 seconds from  the timer.
    //  console.log("False");
      starTime = starTime - 15;
     incorrect.classList.remove('hide'); 
      next.addEventListener('click', displayQ );  
      //incorrect.classList.add('');
     
     }
     // adds one to shift to the next question
     holdQuestion++;


    displayQ;
    
};

function remove() {
  correct.classList.add('hide')
}

// timer function
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      starTime--;
      display.textContent = starTime ;
  
      if(starTime < 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        quizfild.textContent = " You lost !!!";
       agane()
      }
  
    }, 1000);
  }
  // this function  literats through the questions 
  

function displayQ () {


  quizQ.textContent = questions[holdQuestion].question;
  ansOne.textContent = questions[holdQuestion].options[0];
  ansTwo.textContent = questions[holdQuestion].options[1];
  ansThree.textContent = questions[holdQuestion].options[2];
  ansFour.textContent = questions[holdQuestion].options[3];

  console.log(holdQuestion);
  

};







ansOne.addEventListener("click", answerchecker );
ansTwo.addEventListener("click", answerchecker );
ansThree.addEventListener("click", answerchecker );
ansFour.addEventListener("click", answerchecker );
