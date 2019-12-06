
function makeMap(){
    rect(windowWidth/2, windowHeight/2, windowWidth/1.5, windowHeight/1.5);
    ellipse(miniGameSpriteX, miniGameSpriteY, 20);
 
}
function keyPressed(){
    if (key === "d"){
        miniGameSpriteX += 5;
    }
    if (key === "a"){
        miniGameSpriteX -= 5;
    }
    if (key === "w"){
        miniGameSpriteY -= 5;
    }
    if (key === "s"){
        miniGameSpriteY += 5;
    }
}