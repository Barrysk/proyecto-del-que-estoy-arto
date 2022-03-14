class Game{
    constructor(){

    }
    getState(){
    //obtener el estda del juego desde la base de datos 
    var gameStateRef=database.ref("gameState")
    gameStateRef.on("value",function(data){gameState=data.val()})
    }
    update(){
    //actualisar la referrencia de la base de datos
    database.ref("/").update({gameState: state})
    }
    async start(){
        //as que cuando el estado del juego sea 0 cre e un nuevo jugador
        if(gameState===0){
        player1=new Player();
        var playerCountRef=await database.ref("playarCount").once("value")
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player1.getCount();
            }
        form1=new Form();
        form1.display();
        }
    }

play(){
    //ocultar el formulario al aser clic
    form.hide();
    textSize(30)
    text("el juego empiesa en 3 2 1 xd contador de 1000 euros",400,300)
    Player.getPlayerInfo();

    //condicion de distinto undefine
    if (allplayers !==undefined){
        var display_position=150
        for(var plr in allplayers){
        if(plr==="player"+player1.index)
            fill("red")
        else 
            fill("black")
            display_position+=20
            textSize(30)
            text(allplayers[plr].name + ": "+allplayers[plr].distance,120,display_position)
            if (keyisDown(UP_ARROW)&& player1.index!==null){
                player1.distance+=50
                player1.update();
            }
        }//Fin for
    }//fin if allplayer

    if(keyIsDown(UP_ARROW) && player1.index !== null){ //Si se presiona la flecha de arriba y el jugador es distinto de nullo
        player1.distance +=50; //Actualiza la distancia de los jugadores
        player1.update(); //Actualiza información en la base de datos
    }//fin if keyIsDown
    
}//fin play

}//fin de la clase game