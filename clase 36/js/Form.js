class Form{
    constructor(){
    //cuadro de texto
    this.input=createInput("nombre");
    //boton para jugar
    this.button=createButton("play");
    //mensage de vienbenida
    this.greeting=createElement("h3")
    this.title=createElement("h1")
    this.title2=createElement("h2")
    }
    hide(){
    //cuando se aga clic oculta la bienvenida y introducir el nombre
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.button.hide();
    }

    display(){//titulos de bienvenida
    this.title.html("Bienvenido hamy primer juego multi jugador")
    this.title.position(200,250)
    this.title2.html("espero lo disfrutes gracias")
    this.title2.position(200,350)
    //cuadro de texto para el nobre y iniciar el juego

    this.input.position(300,500)
    this.button.position(350,550)
    //cortina para ocultar la carga del juego
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        //variante para poner el nombre del jugador
        player1.name=this.input.value();
        playerCount=+1
        player1.index=playerCount
        //sirve para lo mismo que la del nombre pero lo actualisa en la base de datos
        player1.update()
        //actualisa el numero de jugadores en la base de datos
        player1.updateCount(playerCount)
        //frase de bienvenida
        this.greeting.html("hola "+player1.name+" como estas espero disfrutes del juego")
        this.greeting.position(300,150)
    })
    }
}