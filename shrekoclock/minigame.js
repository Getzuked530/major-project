let = miniGameDisplaying = false
function makeMap(){
    miniGameDisplaying = true;
    rect(windowWidth/2, windowHeight/2, windowWidth/1.5, windowHeight/1.5);
    ellipse(miniGameSpriteX, miniGameSpriteY, 20);
 
}
function move(){
    if (keyIsDown(68)){
        miniGameSpriteX += 5;
    }
    if (keyIsDown(65)){
        miniGameSpriteX -= 5;
    }
    if (keyIsDown(87)){
        miniGameSpriteY -= 5;
    }
    if (keyIsDown(83)){
        miniGameSpriteY += 5;
    }
}
