let = miniGameDisplaying = false
let rotateAngle;
let boxX = 10;
let boxY = 10;
let enemies = [];
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
        boxX += 5;
    }
    if (keyIsDown(65) && miniGameSpriteX >= 0 ){
        miniGameSpriteX -= 5;
        boxX -= 5;
    }
    if (keyIsDown(87) && miniGameSpriteY >= 0){
        miniGameSpriteY -= 5;
        boxY -= 5;
    }
    if (keyIsDown(83) && miniGameSpriteY <= height/1.5){
        miniGameSpriteY += 5;
        boxY += 5;
    }
    if (miniGameSpriteX >= width/1.5){
        console.log("greater")
    }
    }

function faceMouse(){
    push()
    translate(miniGameSpriteX, miniGameSpriteY);
    rotateAngle = atan2(mouseY - miniGameSpriteY, mouseX - miniGameSpriteX);
    rotate(rotateAngle)
    push()
    noStroke()
    fill(255, 255, 255, 0)
    rect(0, 0, 30, 30 );
    pop();
    rect(0, 0, 20, 20);
    pop()
}
function attack(){
    console.log("attack")
    
    spawnMobs();
    enemies.didHit();
}
function spawnMobs(){
    console.log('called')
    enemies.push(new Mobs(50, 50, 100, 20, 20, 50));
    enemies.draw();
}

