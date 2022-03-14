var canvas, backgroundImage;
var form1, player1, game1, database
var gameState=0, playerCount=0
var allplayers, distance=0

function setup(){
  canvas = createCanvas(800,600);
  database = firebase.database();

  game1=new Game();
  game1.getState();
  game1.start();
}


function draw(){
  background ("red");
  //llamar a la funcion update para actualisar el estado del juego a 1
  if (playerCount===4){
    game1.update(1)
  }
  //llamar a la funcion play para iniciar el juego
 if (gameState===1){
   game1.play()
 }

}

