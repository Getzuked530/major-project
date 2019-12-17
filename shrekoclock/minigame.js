let miniGameDisplaying = false
let rotateAngle;
let mobsMove = false;
let enemies = [];
let enemiesDisplaying = false;
let bullets = [];
let score = 0;
function makeMap(){
    //frameRate(10)
    push()
    rectMode(CORNER);
    miniGameDisplaying = true;
    rect(0, 0, width/1.5, height/1.5);
    pop()
    
    faceMouse();
    if (enemiesDisplaying === true){
        for (let i = 0; i < enemies.length; i++){

            enemies[i].draw();
        }
    }
    push()
    fill(0);
    text(score, windowWidth/2, windowHeight/5)
    pop()
}
function move(){
 
    if (keyIsDown(68) && miniGameSpriteX <= width/1.5){
        miniGameSpriteX += 8;
        
    }
    if (keyIsDown(65) && miniGameSpriteX >= 0 ){
        miniGameSpriteX -= 8;
        
    }
    if (keyIsDown(87) && miniGameSpriteY >= 0){
        miniGameSpriteY -= 8;
        
    }
    if (keyIsDown(83) && miniGameSpriteY <= height/1.5){
        miniGameSpriteY += 8;
        
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
    
}
function spawnMobs(){
    console.log("spawn")
    
    if (newMobsGoal - 100 < millis() && newMobsGoal + 100 > millis()){
        console.log(millis())
        newMobsGoal = millis() + 1000 
        for (let i = 0; i < 1; i++){

            enemies.push(new Mobs(random(0, width/1.5) ,random(0, height/1.5), 100, 20, 20, random(3,6)));
        }
        enemiesDisplaying = true
        mobsMove = true
        
    }
    // if (millis() - 100 > newMobsGoal){
    //     console.log("yes")
    //     newMobsGoal = millis() + 100
    // }
    
    
    
    
}
function fire() {
    let thisBullet = {
      x: miniGameSpriteX,
      y: miniGameSpriteY,
      radius: 10,
      angle: rotateAngle,
      speed: 1
    };
    bullets.push(thisBullet);
    //spawnMobs();
    updateBullets();
  }
  function updateBullets() {
    for (let i = bullets.length - 1; i >= 0; i--) {
      if (bullets[i].x < 0 || bullets[i].x > width/1.5 ||
          bullets[i].y < 0 || bullets[i].y > height/1.5) {
            bullets.splice(i, 1);
      }
      else {
        for (let j = 0; j < 10; j ++){
            for (let g = 0; g < enemies.length; g++){
                enemies[g].didHit(g)

            }
            bullets[i].x += bullets[i].speed * cos(bullets[i].angle);
            bullets[i].y += bullets[i].speed * sin(bullets[i].angle);
        }
        circle(bullets[i].x, bullets[i].y, bullets[i].radius);
      }
    }
  }


