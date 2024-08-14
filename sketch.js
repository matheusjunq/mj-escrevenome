//variaveis da bolinha 
let xBolinha = 300;
let yBolinha = 200;
let Diametro = 22;
let Raio = Diametro / 2;

//velocidadae
let  velocidadexBolinha = 10;
let  velocidadeyBolinha = 10;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("black");
  mostraBolinha();
  movimentaBolinha();
  verificacolisaoBorda();
 
  
}

 function mostraBolinha(){ 
 circle(xBolinha, yBolinha, Diametro); 
 }
 
function movimentaBolinha(){ 
 xBolinha += velocidadexBolinha;
 yBolinha += velocidadeyBolinha; 
}


function verificacolisaoBorda(){ 
 
  if(xBolinha + Raio > width || xBolinha - Raio< 0 ){ 
  velocidadexBolinha *= -1;
  }
  { 
   if (yBolinha + Raio > height ||    
      yBolinha - Raio < 0 ) 
    velocidadeyBolinha *= -1;
    
  }

}
