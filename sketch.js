//namespacing
//criar uma variável de nome menor para referir a algo de nome maior
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


//variaveis
var engine;
var world;
var solo, bola;
var parado;
var mexendo;
var b1;
var conexao;
var botaoImg, fundoImg, coelhoImg, corda;
var coelho;
function preload(){
    fundoImg = loadImage("planodefundo.png");
    frutaImg = loadImage("fruta.png");
    coelhoImg = loadImage("coelho.png")
}

function setup() {
    createCanvas(500, 700);
    //cria o motor
    engine = Engine.create();
    world = engine.world;


    var parado = {isStatic:true};
    //cria corpo retangular
    solo = Bodies.rectangle(400,690,800,20, parado);  
    //adiciona no mundo
    World.add(world, solo);

    //criar um objeto da classe Bola
    bola = new Bola(100);
    corda = new Corda({x:250,y:80},bola.body);
    
    botaoImg = createImg("cortar.png");
    //tamanho? Posição?
    botaoImg.size(60,60);
    //definir a posição
    botaoImg.position(220,40);
    botaoImg.mouseClicked(cortar);

    coelho = createSprite(250,640);
    coelho.addImage(coelhoImg)
    coelho.scale = 0.2

    rectMode(CENTER);
    ellipseMode(RADIUS);
    imageMode(CENTER);
}


function draw() {
    background("cyan");    
    image(fundoImg, 250, 350,500,700);
    //atualiza o motor
    Engine.update(engine);

    //pinta o solo
    fill("brown")
    //desenha o retângulo no corpo
    rect (solo.position.x, solo.position.y, 800,20);

    //facilita a sua vida
    corda.show();
    bola.show();
   
    drawSprites()
   
}

function cortar(){
    corda.cut();
}