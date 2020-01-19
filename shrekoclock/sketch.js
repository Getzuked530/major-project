let menuState = "startMenu";
let noEscape = "Options? What options? You are playing a game desinged by me. What did you think you would find in here.";
let normalShrek;
let swampBack;
let wakeUp;
let showingGame = false;
let clickedOnTextBox = false;
let yourName;
let moveDialogue = 0;
let allowDialogueChange = false;
let alarm;
let alreadyShown = false;
let tempTextAllowX;
let tempTextAllowY;
let continueWithScene;
let progress = 0;
let needsToPlay = false;
let alreadyPlayed = false;
let showWakeUp = false;
let progressUpdated = false;
let bedroom;
let thisIsBlank;
let gateWay = false;
let testerByPass = true;
let miniGameSpriteX = 500;
let miniGameSpriteY = 500;
let newMobsGoal = 0;
let bugCoverUp = false;
let frontDesk;
let choices = [];
let dialoguePathCorrect = false;
let jumpToCharisma = null;
let jumpToFlirt = null;
let jumpToIntelligence = null;
let jumpToSass = null;
let gameEnd = false;
let diningRoom;
let titanic;
let charismaChosen = false;
let intelligenceChosen = false;
let flirtChosen = false;
let sassChosen = false;
// let standingShrek;
  
function setup() {
dialogue();
canvasWidth = windowWidth;
canvasHeight = windowHeight;
createCanvas(canvasWidth, canvasHeight)
background(255)
}


function mouseClicked(){
  console.log(allowDialogueChange)
  
  if (mouseX >= windowWidth/2 - 250 && mouseX <= windowWidth/2 + 500 && mouseY <= windowHeight/1.5 + 75 && mouseY >= windowHeight/1.5 - 50){
    clickedOnTextBox = true;

  }
  else{
    clickedOnTextBox = false;
  }
  if (allowDialogueChange === true && moveDialogue === 20){
    allowDialogueChange = false;
    moveDialogue = jumpToFlirt
    //flirt oh really ten more seconds
    
    
    console.log(moveDialogue)
    displayText();
    changeDialogue(tempTextAllowX, tempTextAllowY);
    

  
    
  }
  if (allowDialogueChange === true && moveDialogue === 17){
    allowDialogueChange = false;
    moveDialogue = 21
    //intel why be in a hurry be out with me
    
    
    console.log(moveDialogue)
    displayText();
    changeDialogue(tempTextAllowX, tempTextAllowY);
    

  
    
  }
  if (allowDialogueChange === true && moveDialogue === 18){
    allowDialogueChange = false;
    moveDialogue = 22
    // sass but anakin
    
    
    console.log(moveDialogue)
    displayText();
    changeDialogue(tempTextAllowX, tempTextAllowY);


  
    
  }
  if (allowDialogueChange === true && moveDialogue === 19){
    allowDialogueChange = false;
    moveDialogue = 23
    // char why be in the office
    
    
    console.log(moveDialogue)
    displayText();
    changeDialogue(tempTextAllowX, tempTextAllowY);
    


  
    
  }
  if (allowDialogueChange === true && dialoguePathCorrect === false){
    allowDialogueChange = false;
    moveDialogue += 1;
    
    
    console.log(moveDialogue)
    displayText();
    changeDialogue(tempTextAllowX, tempTextAllowY);

  
    
  }
  if (!notDead){
    notDead = true;
    playerHealth = 10
}

  
  if(miniGameDisplaying){
    fire();
  }
}
function keyTyped(){
  if (clickedOnTextBox && menuState === "startGame"){
    nameBox.inputTextName(key);
  }
  


}
function keyPressed(){

  if (keyCode === BACKSPACE && progress === 5){
    location.reload();
  }
  if (keyCode === BACKSPACE && clickedOnTextBox){

    nameBox.deleteText();
  }

  if (keyCode === ENTER && clickedOnTextBox){

    menuState = "intro"
    clickedOnTextBox = false;
  }

  if (key === "c"){
    newMobsGoal = millis() + 1000;
   
      
      spawnMobs();
    
  }
  if (keyCode === ESCAPE && menuState === "options"){
    menuState = "startMenu"
    
  }


}







function preload(){
  normalShrek = loadImage("assets/shrek_PNG2.png")
  swampBack = loadImage("assets/phatswamp.jpg")
  wakeUp = loadImage("assets/wakeupscene.jpg")
  alarm = loadSound("assets/alarm.wav");
  bedroom = loadImage("assets/bedroom.jpg");
  frontDesk = loadImage("assets/frontdesk.jpg")
  diningRoom = loadImage("assets/diningroom.jpg")
  titanic = loadImage("assets/Titanic.jpg")
  // standingShrek = loadImage("assets/standingshrek.png")
  
}

function windowResized(){
  ui();
}
function ui(){
  createCanvas(windowWidth, windowHeight);
  textSize(50);
  showingGame = false;
}
function draw() {
  if (gameEnd){ 
    gameOverMan();
  }
  if(!gameEnd && progress < 3){
    if (mobsMove){
      for (let i = 0; i < enemies.length; i++){
        if (bullets.length >= 1){
          if(enemies[i].didHit(i)&& bullets.length >= 1){
            score += 10
            enemies.splice(i, 1);
          }
        }
        
      }
      
    }
    if (mobsMove){
      for (let i = 0; i < enemies.length; i++){
        enemies[i].moveMobs(i);
        
      }
    }
    if (miniGameDisplaying){
      move();
      spawnMobs()
      
    }
    dialogueOptions[moveDialogue].blankText();
    if (testerByPass){
      firstScene();
    }
   ;
    whichMenu();
    if (!alarm.isPlaying() && menuState === "intro" && alreadyShown === false && needsToPlay === true){
      image(wakeUp, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
      alreadyShown = true;
      showWakeUp = true;
      firstScene();
    }
    continueScene();
    updateBullets();

  }
  if (progress === 3 && !gameEnd){
    if (moveDialogue === 26){
      dialoguePathCorrect = false;
    }
    secondScene();
    if (mobsMove){
      for (let i = 0; i < enemies.length; i++){
        if (bullets.length >= 1){
          if(enemies[i].didHit(i)&& bullets.length >= 1){
            score += 10
            enemies.splice(i, 1);
          }
        }
        
      }
      
    }
    if (mobsMove){
      for (let i = 0; i < enemies.length; i++){
        enemies[i].moveMobs(i);
        
      }
    }
    if (miniGameDisplaying){
      move();
      spawnMobs()
      
    }
    if (bullets.length > 0){
      updateBullets();
    }
  }
  

  
}


function startMenu(){
  
  imageMode(CENTER)
  image(swampBack, windowWidth/2, windowHeight/2, windowWidth, windowHeight)

  textAlign(CENTER, TOP)
  fill("white")
  stroke("black")
  text("Shrekoclock", width/2, 100)

  //show start button
 
  rectMode(CENTER);
  fill(0, 255, 0, 125)
  rect(width/2, height/2 - 100, 400, 150);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(0);
  text("Start Game", width/2, height/2 - 100);
  
  

  //Show Options button
  fill(0, 255, 0, 125);
  rect(width/2, height/2 + 100, 400, 150);
  fill(0);
  text("Options", width/2, height/2 + 100);
  
  if (mouseX > width/2 - 200 && mouseX < width/2 + 200 &&
    mouseY > height/2 - 100 - 75 && mouseY < height/2 - 100 +75 && menuState === "startMenu" ){
   
      rectMode(CENTER);
      fill(255, 255, 0, 125)
      rect(width/2, height/2 - 100, 400, 150);
      textAlign(CENTER, CENTER);
      textSize(50);
      fill(0);
      text("Start Game", width/2, height/2 - 100);
  }
  if (mouseX > width/2 - 200 && mouseX < width/2 + 200 &&
    mouseY > height/2 + 100 - 75 && mouseY < height/2 + 100 + 75){
      fill(255, 255, 0, 125);
      rect(width/2, height/2 + 100, 400, 150);
      fill(0);
      text("Options", width/2, height/2 + 100);
    }

}

function checkIfMenuButtonClicked(){
  if (mouseIsPressed){
    // check start button
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 &&
        mouseY > height/2 - 100 - 75 && mouseY < height/2 - 100 +75){
          menuState = "startGame";

   

        }

     // check options button
     if (mouseX > width/2 - 200 && mouseX < width/2 + 200 &&
      mouseY > height/2 + 100 - 75 && mouseY < height/2 + 100 + 75){
        menuState = "options";
  }
}
}

function showOptions(){
  background("white")

  imageMode(CENTER)
  image(swampBack, windowWidth/2, windowHeight/2, windowWidth, windowHeight)


  textAlign(CENTER);
  textSize(30);
  fill("white");
  stroke("black");
  text(noEscape, width/2, height/2 - 100);


  textAlign(CENTER);
  text("Like seriously what?", width/2, height/2)

  textAlign(CENTER);
  text("I can give you the option to leave if you want?", width/2, height/2 + 100)
  text("ESC to go back", width/2, height/2 + 200)



  
}

function showGame(){
  
  showingGame = true;
  background("green");

  fill("white")
  text("What is your name? ", windowWidth/2, windowHeight/2);
  nameBox = new EnterText(windowWidth/2, windowHeight/1.5, 500, 50, 12);
  nameBox.draw();
  
  

}

function showIntro(){
  if (!progressUpdated){
    progressUpdated = true;
    progress = 1;

  }
  if (progress === 1){


    textAlign(CENTER)

    if (moveDialogue <= 0){
      allowDialogueChange = true;
    }
    else{
      allowDialogueChange = false;
    }
    needsToPlay = true;
    displayText();
    if (alreadyPlayed === false){
      alreadyPlayed = true;
      alarm.play();
    }
 
  }
  if (showWakeUp){
     firstScene();
   }
  
  
  
  
}


function firstScene(){
  if (!bugCoverUp){
    bugCoverUp = true;
    dialogueOptions.splice(1, 1)
  }
  if (progress === 1 || progress === 2 || progress === 3){
    progressUpdated = false;
  }
  if (!progressUpdated){
    progressUpdated = true;
    progress = 2

  }
  if (progress >= 2){

    image(wakeUp, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
    
    changeDialogue(0, 3);
    displayText();
    
    

    if (continueWithScene || gateWay){
      gateWay = true;
      image(bedroom, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
      
      if (moveDialogue <= tempTextAllowY){
        continueWithScene = false;
        changeDialogue(3, 28);
        if (moveDialogue > 3){

          image(frontDesk, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
          if (moveDialogue > 5){
            image(normalShrek, 500, windowHeight - 200, width/2, height/2)
          }
          if (moveDialogue === 8){
            allowDialogueChange = false;
            if (choices.length < 4){
              jumpToCharisma = 17;
              jumpToFlirt = 20;
              jumpToIntelligence = 19;
              jumpToSass = 18;
              choices.push(new MultipleDialogue("Im not in a hurry, im in an office.", windowWidth/2 - 300, windowHeight/2 - 100, 100, 200, "charisma"))
              choices.push(new MultipleDialogue("Couldn't bear not seeing you for ten less minutes in my day.", windowWidth/2 - 300, windowHeight/2 + 100, 100, 200, "flirt"))
              choices.push(new MultipleDialogue("I'm going to be late", windowWidth/2 + 300, windowHeight/2 - 100, 100, 200, "intelligence"))
              choices.push(new MultipleDialogue("That's none of your business.", windowWidth/2 + 300, windowHeight/2 + 100, 100, 200, "sass"))
              allowDialogueChange = false
            }
        
            for(let i = 0; i < choices.length; i++){
              choices[i].draw()
              
            } 
          
         
          }
          else{
            dialoguePathCorrect = false;
          }
          if (moveDialogue > 20){
            dialoguePathCorrect = true;
          }
          if (dialoguePathCorrect === true && moveDialogue > 20 && moveDialogue < 25){
            choices.splice(0, 3)
            if (choices.length < 2){
              choices.push(new MultipleDialogue("That sounds nice.", windowWidth/2 - 300, windowHeight/2 - 100, 100, 200, "yes"))
              choices.push(new MultipleDialogue("Actually I dont really dig the green. Sorry.", windowWidth/2 + 300, windowHeight/2 - 100, 100, 200, "no"))
              allowDialogueChange = false;
            }
              
            for(let i = 0; i < choices.length; i++){
              choices[i].draw()
              
            } 
          }
     
          if(mouseIsPressed && allowDialogueChange === false){
            for(let i = 0; i < choices.length; i++){
              
              choices[i].clickedOnOption();
         
            }
    
         
          }

      }
        
        displayText();
      }

    }
  if (moveDialogue >= 25){
    dialoguePathCorrect = false;
  }
  if (moveDialogue === 28){
    progress = 3;
  }
}
}
function secondScene(){
  
  changeDialogue(28, 45)
  if(changeDialogue <=31){
  

    dialoguePathCorrect = false;
  }
  if (moveDialogue === 28){
    image(titanic, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
    charismaChosen = false
    intelligenceChosen = false
    flirtChosen = false;
    sassChosen = false;
  }
  else{
    image(diningRoom, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  }
  if (moveDialogue >= 30){
    image(diningRoom, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
    image(normalShrek, 500, windowHeight - 200, width/2, height/2)
  }
  

  if (moveDialogue === 32 && !charismaChosen){
    jumpToCharisma = 34;
    jumpToFlirt = 35;
    jumpToIntelligence = 36;
    jumpToSass = 37;
    if (choices.length < 4){
      choices.splice(0, 2)
      choices.push(new MultipleDialogue("Thank Shrek for inviting you.", windowWidth/2 - 300, windowHeight/2 - 100, 100, 200, "charisma"))
      choices.push(new MultipleDialogue("Compliment Shreks apearance.", windowWidth/2 - 300, windowHeight/2 + 100, 100, 200, "flirt"))
      choices.push(new MultipleDialogue("Give Shrek a random statistic.", windowWidth/2 + 300, windowHeight/2 - 100, 100, 200, "intelligence"))
      choices.push(new MultipleDialogue("Inform him of your independence.", windowWidth/2 + 300, windowHeight/2 + 100, 100, 200, "sass"))
      allowDialogueChange = false;
    }
    for (let i = 0; i < 4; i++){
      choices[i].draw();
    }
         
    if(mouseIsPressed && allowDialogueChange === false){
      for(let i = 0; i < choices.length; i++){
        
        choices[i].clickedOnOption();
   
      }

   
    }

              
  }
  if (moveDialogue === jumpToCharisma){
      allowDialogueChange === true;
      moveDialogue = 34
      console.log("yay")
      dialoguePathCorrect = false;
      if (moveDialogue === 35){

        moveDialogue = 34
      }
     
  }
  if (charismaChosen){
    if (moveDialogue === 35){

      moveDialogue = 34
    }
  }
  if (moveDialogue === jumpToFlirt){
    allowDialogueChange === true;
    moveDialogue = 36
    dialoguePathCorrect = false;
  }
  if (flirtChosen){
    if (moveDialogue === 37){

      moveDialogue = 36
    }
  }
  if (moveDialogue === jumpToIntelligence){
    allowDialogueChange = true;
    moveDialogue = 36;
    dialoguePathCorrect = false;
  }
  if (intelligenceChosen){
    if (moveDialogue === 36){

      moveDialogue = 35
    }
  }
  if (moveDialogue === jumpToSass){
    allowDialogueChange = true;
    moveDialogue = 37;
    dialoguePathCorrect = false;
  }
  if (sassChosen){
    if (moveDialogue === 38){

      moveDialogue = 37
    }
  }


  displayText();
  if (progress === 4){
    image(diningRoom, windowWidth/2, windowHeight/2, windowWidth, windowHeight)

    makeMap();
    if (!notWin){
      progress = 4
    }
  }

}
function continueScene(){
  
    if(moveDialogue === tempTextAllowY){
      
      return continueWithScene = true;
    }
   
  
  
}
function changeDialogue(greater, less){
  if (moveDialogue >= greater && moveDialogue < less){
    allowDialogueChange = true;
    tempTextAllowX = greater;
    tempTextAllowY = less;


  }
  else{
    dialogueOptions[moveDialogue].blankText();
    if (thisIsBlank){
      
      allowDialogueChange = false;
     
      sceneChange = true;
      tempTextAllowY += 5;
      return continueWithScene = true;
      
    }
  }
}

function displayText(){
 
  dialogueOptions[moveDialogue].blankText();
  if (!thisIsBlank){
   
    dialogueOptions[moveDialogue].draw();
  }

}
  

function whichMenu() {
  if (menuState === "startMenu"){
    startMenu();
    checkIfMenuButtonClicked();

  }

  else if (menuState === "startGame" && showingGame === false){
    showingGame = false;
    showGame(); 
  }

  else if (menuState === "options"){
    
    showOptions();
  }

  else if (menuState ==="intro" ){

     showIntro();
  }
}

function charismaCheck() {
  
  if (charisma < 1){
    
  } 
  if (charisma < 1){
    
  } 
  if (charisma < 1){
    
  } 
}
function gameOverMan(){
  progress = 5
  console.log("game over man, game over")
  image(bedroom, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  background(0);
  
  textSize(50);
  fill(255, 0, 0);
  text("Game Over", windowWidth/2, windowHeight/2);
}


// CREEPY SHREKY FUN TIME SCENE
// image(bedroom, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
// image(normalShrek, 500, windowHeight - 200, width/2, height/2)

// reset minigame
// notDead = true;
// playerHealth = 100


// wake up, get ready, go to work, at work bump into shrek knock papers out of hands,
// shrek helps you up, and helps gather papers, go on date with shrek, charisma checks, if failed bad date, if succeed go to minigame, if minigame fail, ok date, if minigame win good date.