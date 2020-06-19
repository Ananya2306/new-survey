var canvas;
var database;

var gameState = 0;
var voterCount;

var form,game,voter;

function setup(){
  canvas = createCanvas(1010,500);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
background("yellow")
}