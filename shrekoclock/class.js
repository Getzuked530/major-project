// class for dialogue in the game 
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
      rectMode(CENTER)
      rect(this.xPos, this.yPos, this.w, this.h);
      fill(0);
      textSize(20); 
      text(this.text, this.xPos, this.yPos, this.w, this.h);
      pop();
      
    }
    // checks if the dialoguye is blank
    blankText(){
      if(dialogueOptions[moveDialogue].isBlank === true){
        return thisIsBlank = true;
      }
      else{
        return thisIsBlank = false;
      }

    }
  }
  // class for entering you name into the custom text box
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
    // adds letters to string inputText = last key you typed
    inputTextName(inputText){
      if (this.textData.length < this.maxLimit){  
       
        this.textData += inputText;
        
        
        nameBox.draw();
        // your final name
        yourName = this.textData;
        console.log(yourName)
      }
    }
    // deletes letters from the string
    deleteText(){
      this.textData = this.textData.slice(0, -1);
      nameBox.draw();
    }
  }
  // class for the mobs of the mini game
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
    
    }
  }
  // checks if the enemy was hit and should die
  didHit(enemy){
    for (let i = 0; i <bullets.length; i++){
      if (bullets[i].x + bullets[i].radius/2 > enemies[enemy].mX - 10 && bullets[i].x + bullets[i].radius/2 < enemies[enemy].mX + 10 + enemies[enemy].mSize1 && bullets[i].y + bullets[i].radius/2 > enemies[enemy].mY - 10 && bullets[i].y + bullets[i].radius/2 < enemies[enemy].mY + 10 + enemies[enemy].mSize2){
        console.log("hit")
        
        return true;
      }
    }
  }
  // moves the mobs towards your position based on their speed
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
      // if player is touched by a mob it subtracts their health and kills the mob
      if(enemies[mob].mX + 10 > miniGameSpriteX && enemies[mob].mY - 10 < miniGameSpriteY && enemies[mob].mX - 10 < miniGameSpriteX && enemies[mob].mY +10 > miniGameSpriteY){
          enemies.splice(mob, 1)
          playerHealth -= 10
          console.log(playerHealth)
      }
        
    
  }
}
// class for multiple dialogue options
class MultipleDialogue {
  constructor(text, x, y, height, width, type){
    this.text = text;
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    this.type = type;

  }
  draw(){
    allowDialogueChange = false;
    push();
    rectMode(CORNER)
    rect(this.x, this.y, this.w, this.h);
    push()
    fill(0);
    textSize(20);
    text(this.text, this.x, this.y, this.w, this.h)
    pop();
    // changes color of options when mouse is over it
    if (mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.y && mouseY <= this.y + this.h){
      push();
      rectMode(CORNER)
      fill("yellow")
      rect(this.x, this.y, this.w, this.h);
      pop();
      push()
      fill(0);
      textSize(20);
      text(this.text, this.x, this.y, this.w, this.h)
      pop();

      
    }
  }
  // checks which option is clicked on
  clickedOnOption(){
    moveDialogue - 1
    allowDialogueChange = false;
    console.log(mouseX, this.x, mouseY, this.y)
    if (mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.y && mouseY <= this.y + this.h){
      console.log(this.type)
      if(this.type === "charisma"){
        moveDialogue = jumpToCharisma;
        charismaChosen = true;
        return "charisma";
      }
      if(this.type === "sass"){
        moveDialogue = jumpToSass ;
        sassChosen = true;
      }
      if(this.type === "intelligence"){
        moveDialogue = jumpToIntelligence ;
        intelligenceChosen = true;
      }
      if(this.type === "flirt"){
        moveDialogue = jumpToFlirt;
        flirtChosen = true;
      }
      if(this.type === "yes"){
        moveDialogue =  branchingPathYes;
    
      }
      if(this.type === "no"){
        if (moveDialogue < 30){
          gameEnd = true;
        }
        else{
          moveDialogue = branchingPathNo;
          
        }
      }
      dialoguePathCorrect = true;
    }
  }
}