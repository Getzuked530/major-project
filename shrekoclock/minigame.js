let miniGameDisplaying = false
let rotateAngle;

let enemies = [];
let enemiesDisplaying = false;
let bullets = [];
function makeMap(){
    push()
    rectMode(CORNER);
    miniGameDisplaying = true;
    rect(0, 0, width/1.5, height/1.5);
    pop()
    
    faceMouse();
    if (enemiesDisplaying === true){

        enemies[0].draw();
    }
 
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
    translate(miniGameSpriteX, miniGameSpriteY);
    rotateAngle = atan2(mouseY - miniGameSpriteY, mouseX - miniGameSpriteX);
    rotate(rotateAngle)
    push()
    // noStroke()
    // fill(255, 255, 255, 0)
    rect(10, 10, 30, 30 );
    pop();
    rect(0, 0, 20, 20);
    pop()
}
function attack(){
    
    spawnMobs();
    enemies[0].didHit();
}
function spawnMobs(){
    enemies.push(new Mobs(50, 50, 100, 20, 20, 50));
    enemiesDisplaying = true
    
}
function fire() {
    let thisBullet = {
      x: miniGameSpriteX,
      y: miniGameSpriteY,
      radius: 10,
      angle: rotateAngle,
      speed: 5
    };
    bullets.push(thisBullet);
  }
  function updateBullets() {
    for (let i = bullets.length - 1; i > 0; i--) {
      if (bullets[i].x < 0 || bullets[i].x > width ||
          bullets[i].y < 0 || bullets[i].y > height) {
            bullets.splice(i, 1);
      }
      else {
        bullets[i].x += bullets[i].speed * cos(bullets[i].angle);
        bullets[i].y += bullets[i].speed * sin(bullets[i].angle);
        circle(bullets[i].x, bullets[i].y, bullets[i].radius);
      }
    }
  }

