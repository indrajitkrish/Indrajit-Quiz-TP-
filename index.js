var questions = [{
  question: "Where do I live?" + "\n" + "a: Chennai" + "\n" + "b: Thanjavur" + "\n" + "c: Trichy" + "\n" + "-> ",
  answer: "b"
},{question: "what is educational qualification ? " + "\n" + "a: Bachelors" + "\n" + "b: Masters" + "\n" + "c: Doctrate" + "\n" + "-> ",
  answer: "b"
},{
  question: "What is his favourite sports?" + "\n" + "a: cricket" + "\n" + "b: Football" + "\n" + "c: Badminton" + "\n" + "-> ",
  answer: "a"
}, {
  question: "what's his favourite color" + "\n" + "a:Red" + "\n" + "b:Blue" + "\n" + "c:Green" + "\n" + "-> ",
  answer: "b"
}, {
  question: "What's his age? " + "\n" + "a:27" + "\n" + "b:21" + "\n" + "c:23" + "\n" + "-> ",
  answer: "c"
}, {
  question: "who's his favourite actor?" + "\n" + "a:surya" + "\n" + "b:vijay" + "\n" + "c:vikram" + "\n" + "-> ",
  answer: "b"
}];
var readlinesync = require("readline-sync");
var highscore = [{
  name: "Indrajit",
  sco: "6"
},
{
  name: "Nissan",
  sco: "5"
},
{
  name: "N",
  sco: "5"
}]

var ans = readlinesync.question("What's your name? ");
console.log("Welcome " + ans);
var score = 0;
console.log("......................................................");
console.log("Enter the option(a/b/c) for answers.");
console.log("......................................................");
var ans1 = readlinesync.question("Do you know INDRAJIT (Yes/No)"+"\n"+"->");


function play(ques, answ) {
  var answerrrr = readlinesync.question(ques)
  if (answ.toUpperCase() === answerrrr.toUpperCase()) {
    console.log("You are Right! :) ");
    score++;
  }
  else
    console.log("You are Wrong");
}



//console.log(questions.length);
if(ans1.toUpperCase() === "YES")
{
for (i = 0; i < questions.length; i++) {
  var s = questions[i];
  play(s.question, s.answer);
}
console.log("Your score is: " + score);

console.log("--------------------------------------------------");
for (i = 0; i < highscore.length; i++) {
  var k = i;
  console.log(++k + "." + "Name: " + highscore[i].name);
  console.log("Score: " + highscore[i].sco);
}
console.log("If you have beaten the highscore send me a screenshot of that and I will upadte your name");
}
else
{
  console.log("Thank you for visting my project :)");
}