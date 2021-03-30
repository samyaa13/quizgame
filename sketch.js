var canva;
var gameSate = 0;
var contestantCount, database, quiz, question, contestant;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup(){
  canvas = createCanvas(850,400);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  database = firebase.database();
}


function draw(){
  background("pink");

  
}
