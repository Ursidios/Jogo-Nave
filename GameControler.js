const sprites = new Image();
sprites.src = './images/SpriteSheet.gif';

const canvas = document.querySelector("canvas")
const contexto = canvas.getContext("2d")

const Nave = {
    spriteX: 39,
    spriteY: 0,
    largura: 39,
    altura: 36,
    x: 140,
    y: 110,
    velocidade: 1,
    desenhar(){
        contexto.drawImage(
            sprites,
            Nave.spriteX, Nave.spriteY, // onde o Recorte deve começar (em PX)
            Nave.largura, Nave.altura, // Tamanho do recorte
            Nave.x, Nave.y, // Posição no canvas 
            19, 16 // tamanho de exibição 
        
        );
    }
}

const Tiro = {
    spriteX: 0,
    spriteY: 130,
    largura: 7,
    altura: 10,
    x: Nave.x,
    y: Nave.y,
    velocidade: 3,
    desenhar(){
        contexto.drawImage(
            sprites,
            Tiro.spriteX, Tiro.spriteY, // onde o Recorte deve começar (em PX)
            Tiro.largura, Tiro.altura, // Tamanho do recorte
            Tiro.x, Tiro.y, // Posição no canvas 
            Tiro.largura, Tiro.altura // tamanho de exibição 
        
        );
    }
}
const fundo = {
    desenhar(){
        contexto.fillStyle = '#000000'
        contexto.fillRect(0,0, canvas.width, canvas.height);
    }
}



let KeyA = false
let KeyD = false
let KeyW = false
let KeyS = false

let Shoot = false

window.addEventListener('keyup', function(KeyDetect){
    KeyDetect = KeyDetect || window.event;
    KeyIsPressed = false

    if(KeyDetect.key == 'a'){
        KeyA = false
    }
    if(KeyDetect.key == 'd'){
        KeyD = false
    }
    if(KeyDetect.key == 'w'){
        KeyW = false
    }
    if(KeyDetect.key == 's'){
        KeyS = false
    }  

})

window.addEventListener('keydown', function(KeyDetect){
    KeyDetect = KeyDetect || window.event;
    KeyIsPressed = true

    if(KeyDetect.key == 'a'){
        KeyA = true
    }
    if(KeyDetect.key == 'd'){
        KeyD = true
    }
    if(KeyDetect.key == 'w'){
        KeyW = true
    }
    if(KeyDetect.key == 's'){
        KeyS = true
    }  
})

window.addEventListener('click', function(){
    Tiro.y = Nave.y
    Tiro.x = Nave.x
    Shoot = true
    
})
function Loop(){
    fundo.desenhar()
        if(KeyA){
            Nave.x -= Nave.velocidade;
            console.log("Apertou (<-A->)", KeyA)
        }
        if(KeyD){
            Nave.x += Nave.velocidade;
            console.log("Apertou (<-D->)", KeyD)
        }
        if(KeyW){
            Nave.y -= Nave.velocidade;
            console.log("Apertou (<-W->)", KeyW)
        }
        if(KeyS){
            Nave.y += Nave.velocidade;
            console.log("Apertou (<-S->)", KeyS)
        }  
      
        if(Shoot){
            
            Tiro.y -= Tiro.velocidade
            Tiro.desenhar()
            console.log("Atirou")
        }else{
            Tiro.y = Nave.y
            Tiro.x = Nave.x
        }

    
    
    Nave.desenhar()

    requestAnimationFrame(Loop)
}
Loop()