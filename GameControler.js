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

    desenhar(){
        contexto.drawImage(
            sprites,
            Nave.spriteX, Nave.spriteY, // onde o Recorte deve começar (em PX)
            Nave.largura, Nave.altura, // Tamanho do recorte
            Nave.x, Nave.y, // Posição no canvas 
            19, 16 // tamanho de exibição 
        
        )
    }
}

function Loop(){

    Nave.desenhar()

    requestAnimationFrame(Loop)
}
Loop()