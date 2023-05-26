class Bola{
    //definir os atributos do objeto
    constructor(x){
        this.body = Bodies.circle(x, 100, 30);
        World.add(world, this.body);
    }
    //show, aparecer, mostrar,exibir, desenhar, display
    show(){
        //cor da bolinha
        fill ("gray");
        //desenha bolinha na mesma posição que o corpo
        image(frutaImg, this.body.position.x, this.body.position.y,60,60)
    }
}