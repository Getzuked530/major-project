let = miniGameDisplaying = false
function makeMap(){
    push()
    rectMode(CORNER);
    miniGameDisplaying = true;
    rect(0, 0, width/1.5, height/1.5);
    pop()
    
    faceMouse();
 
}
function move(){
 
    if (keyIsDown(68) && miniGameSpriteX <= width/1.5){
        miniGameSpriteX += 5;
    }
    if (keyIsDown(65) && miniGameSpriteX >= 0 ){
        miniGameSpriteX -= 5;
    }
    if (keyIsDown(87) && miniGameSpriteY >= 0){
        miniGameSpriteY -= 5;
    }
    if (keyIsDown(83) && miniGameSpriteY <= height/1.5){
        miniGameSpriteY += 5;
    }
    if (miniGameSpriteX >= width/1.5){
        console.log("greater")
    }
    }

function faceMouse(){
    
    push()
    translate(miniGameSpriteX, miniGameSpriteY)
    rotate(mouseX)
    rect(0, 0, 20, 20);
    pop()
}
