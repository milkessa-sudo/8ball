// we define answers
var answers = ["yes", "no", "maybe" ,"definitely","You may rely on it", 
  "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes",
  "Don't count on it","My reply is no","My sources say no", 
  "Outlook not so good", "Very doubtful", "Reply hazy, try again", 
  "Ask again later", ];

// grabbinig html element with js
window.onload = function () {
  var eight = document.getElementById("eight");
  var answer = document.getElementById("answer");
  var eightball = document.getElementById("eight-ball");
  var question = document.getElementById("question");
  //we check if a question has been entered. If not,an alert to  enter a question
  //& a random answer in our array of answers
  eightball.addEventListener("click", function () {
    if (question.value.length < 1) {
      alert("Enter a question!");
    } else {
      eight.innerText = "";
      var num = Math.floor(Math.random() * Math.floor(answers.length));
      answer.innerText = answers[num];
    }
  });
};
