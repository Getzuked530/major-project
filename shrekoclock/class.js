class StoryText {
    constructor(text1, xpos1, ypos1, w1, h1, blank){
      this.text = text1;
      this.xPos = xpos1;
      this.yPos = ypos1;
      this.w = w1;
      this.h = h1;
      
      this.isBlank = blank;


    }
    draw(){
      push();
      fill(255);
      rect(this.xPos, this.yPos, this.w, this.h);
      fill(0);
      textSize(20); 
      text(this.text, this.xPos, this.yPos, this.w, this.h);
      pop();
      
    }
    blankText(){
      if(dialogueOptions[moveDialogue].isBlank === true){
        return thisIsBlank = true;
      }
      else{
        return thisIsBlank = false;
      }

    }
  }
  class EnterText {
    constructor(x1, y1, w1, h1, maxLimit1){
      this.x = x1;
      this.y = y1;
      this.w = w1;
      this.h = h1;
      this.maxLimit = maxLimit1;
      this.textData = "text"
      
    }
    draw(){
      push()
      fill(255);
      rect(this.x, this.y, this.w, this.h)
      push()
      fill(0);
      text(this.textData, this.x, this.y)
      pop()
    }
    inputTextName(inputText){
      if (this.textData.length < this.maxLimit){  
       
        this.textData += inputText;
        
        
        nameBox.draw();
        yourName = this.textData;
      }
    }
    deleteText(){
      this.textData = this.textData.slice(0, -1);
      nameBox.draw();
    }
  }

  class Mobs {
    constructor(mobX1, mobY1, healthVal, size1, size2, speed,  ){
    this.mX = mobX1;
    this.mY = mobY1;
    this.health = healthVal;
    this.mSize1 = size1;
    this.mSize2 = size2;
    this.speedy = speed;
  }
  draw(){
    for(let i = 0; i < enemies.length; i++){
      rect(enemies[i].mX, enemies[i].mY, enemies[i].mSize1, enemies[i].mSize2)
      // console.log("enemy spawned")
    }
  }
  didHit(enemy){
    for (let i = 0; i <bullets.length; i++){
      if (bullets[i].x > enemies[enemy].mX && bullets[i].x < enemies[enemy].mX + enemies[enemy].mSize1 && bullets[i].y > enemies[enemy].mY && bullets[i].y < enemies[enemy].mY + enemies[enemy].mSize2){
        console.log("hit")
        enemies.slice(enemy, 1)
      }
    }
  }
  moveMobs(mob){
    
      if (enemies[mob].mX < miniGameSpriteX){
        enemies[mob].mX += enemies[mob].speedy
      }
      if (enemies[mob].mX > miniGameSpriteX){
        enemies[mob].mX -= enemies[mob].speedy
      }
      if (enemies[mob].mY < miniGameSpriteY){
        enemies[mob].mY += enemies[mob].speedy
      }
      if (enemies[mob].mY > miniGameSpriteY){
        enemies[mob].mY -= enemies[mob].speedy
      } 
  }
}