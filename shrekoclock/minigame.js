// variables for mini game
let miniGameDisplaying = false
let rotateAngle;
let mobsMove = false;
let enemies = [];
let enemiesDisplaying = false;
let bullets = [];
let score = 0;
let playerHealth = 100;
let notDead = true;
let notWin = true;
let neededScore = 100;
// creates the map and tells instructions for mini game
function makeMap(){
    if (notDead && notWin){

        push()
        rectMode(CORNER);
        miniGameDisplaying = true;
        rect(0, 0, width/1.5, height/1.5);
        pop()
        
        faceMouse();
        // calls function to display enemies
        if (enemiesDisplaying === true){
            for (let i = 0; i < enemies.length; i++){
    
                enemies[i].draw();
            }
        }
        push()
        fill(0);
        text(score, windowWidth/2, windowHeight/5)
        pop()
        isDead();
        isWin();
        text("WASD to move, Click to shoot, Press C to start the game", windowWidth/2, windowHeight/2 + 200)
    }
    
}
// moves your character
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
// makes your character face towards the mouse, based off of class demo code
function faceMouse(){
    push()
    rectMode(CENTER);
    translate(miniGameSpriteX, miniGameSpriteY);
    rotateAngle = atan2(mouseY - miniGameSpriteY, mouseX - miniGameSpriteX);
    rotate(rotateAngle)
    rect(0, 0, 20, 20);
    pop()
}
function attack(){
    
    spawnMobs();
    
}
// spawns mobs every second
function spawnMobs(){
    console.log("spawn")
    
    if (newMobsGoal - 100 < millis() && newMobsGoal + 100 > millis()){
        console.log(millis())
        newMobsGoal = millis() + 1000
        for (let i = 0; i < 1; i++){

            enemies.push(new Mobs(random(0, width/1.5) - miniGameSpriteX/3,random(0, height/1.5) - miniGameSpriteY/3, 100, 20, 20, random(10,15)));
        }
        enemiesDisplaying = true
        mobsMove = true
        
    }

    
    
    
    
}
// shoots a bullet toward the mouse based off of class demo code
function fire() {
    
    let thisBullet = {
      x: miniGameSpriteX,
      y: miniGameSpriteY,
      radius: 10,
      angle: rotateAngle,
      speed: 1
    };
    bullets.push(thisBullet);
    updateBullets();
  }
  // updates bullets location, based off of class demo code
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

// checks if the player is dead, refreshs the page if is dead
function isDead(){
    if (playerHealth <= 0){
        notDead = false;
        miniGameDisplaying = false;
        background(0)
        enemiesDisplaying = false
        mobsMove = false
        score = 0
        for (let j = enemies.length; j >= 0; j--){
            enemies.splice(j, 1)
        }
        console.log("lose")
        location.reload();
    }
    
}
// checks if youve one ends the date if won to decide on the ending you get
function isWin(){
    if (score === neededScore){
        progress = 4
        notWin = false;
        miniGameDisplaying = false;
        background(0)
        enemiesDisplaying = false
        mobsMove = false
        score = 0
        for (let j = enemies.length; j >= 0; j--){
            enemies.splice(j, 1)
        }
        endOfDate();
    }
}