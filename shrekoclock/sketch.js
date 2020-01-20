// variables for game
let menuState = "startMenu";
let noEscape = "Options? What options? You are playing a game desinged by me. What did you think you would find in here.";
let normalShrek;
let swampBack;
let wakeUp;
let showingGame = false;
let clickedOnTextBox = false;
let yourName = "text";
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
let testerByPass = false;
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
let branchingPathCharisma;
let branchingPathIntelligence;
let branchingPathFlirt;
let branchingPathSass;
let titanicSink;
let pathCorrect = false
let branchingPathYes = null;
let branchingPathNo = null;
let likeCount = 0;
let likedAnswer = null;
let alreadyCounted = false;
let dateConcluded = false;
let goToOtherThing = false;
let moveTo = 0;
let useNow = 0;
let killDialogue = false;
let goodEnding;

// set up scene
function setup() {
  dialogue();
  canvasWidth = windowWidth;
  canvasHeight = windowHeight;
  createCanvas(canvasWidth, canvasHeight)
  background(255)
}
// old test
function test(){
  console.log("yes")
  
}
// check if mouse pressed and then move dialogue to what moveTo is set to
function mousePressed(){
  console.log("mo" + goToOtherThing);
  if(goToOtherThing === true){
    moveDialogue = moveTo;
    goToOtherThing = false;
  }
}
// check if mouse is clicked
function mouseClicked(){
  console.log(allowDialogueChange)
  // return to a linear path after a branching path
  if ( moveDialogue > 30 && moveDialogue === branchingPathIntelligence || moveDialogue === branchingPathFlirt || moveDialogue === branchingPathCharisma || moveDialogue === branchingPathSass){
    if (moveDialogue > 30){
      allowDialogueChange = true;
      dialoguePathCorrect = false;
      moveDialogue = 41
    }
  }
  if (branchingPathYes != 25 && moveDialogue === branchingPathYes|| moveDialogue === branchingPathNo ){
    goToOtherThing = true
      
    
      
    
  }
  // figure out whether to allow you to type your name or not
  if (mouseX >= windowWidth/2 - 250 && mouseX <= windowWidth/2 + 500 && mouseY <= windowHeight/1.5 + 75 && mouseY >= windowHeight/1.5 - 50){
    clickedOnTextBox = true;

  }
  else{
    clickedOnTextBox = false;
  }
  // change dialogue during branching paths
  if (allowDialogueChange === true && moveDialogue === jumpToFlirt){
    pathCorrect = true;
    allowDialogueChange = false;
    moveDialogue = branchingPathFlirt;
    //flirt oh really ten more seconds
 
    
    console.log(moveDialogue)
    displayText();
    changeDialogue(tempTextAllowX, tempTextAllowY);
    

  
    
  }
  if (allowDialogueChange === true && moveDialogue === jumpToIntelligence){
    allowDialogueChange = false;
    // pathCorrect = true;
    moveDialogue = branchingPathIntelligence;
    //intel why be in a hurry be out with me
    
    
    console.log(moveDialogue)
    displayText();
    changeDialogue(tempTextAllowX, tempTextAllowY);
    

  
    
  }
  if (allowDialogueChange === true && moveDialogue === jumpToSass){
    allowDialogueChange = false;
    pathCorrect = true;
    moveDialogue = branchingPathSass;
    // sass but anakin
    
    
    console.log(moveDialogue)
    displayText();
    changeDialogue(tempTextAllowX, tempTextAllowY);


  
    
  }
  if (allowDialogueChange === true && moveDialogue === jumpToCharisma){
    console.log("flase")
    allowDialogueChange = false;
    pathCorrect = true;
    moveDialogue = branchingPathCharisma;
    // char why be in the office
    
    
    console.log(moveDialogue)
    displayText();
    changeDialogue(tempTextAllowX, tempTextAllowY);
    


  
    
  }
  else{
    pathCorrect = true;
  }
  // change linear dialogue 
  if (allowDialogueChange === true && dialoguePathCorrect === false && killDialogue === false){
    console.log("you idiot")
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
// allow you to type your name
function keyTyped(){
  if (clickedOnTextBox && menuState === "startGame"){
    nameBox.inputTextName(key);
  }
  


}

function keyPressed(){
  // refresh after game over
  if (keyCode === BACKSPACE && progress === 5){
    location.reload();
  }
  // delete text for your name
  if (keyCode === BACKSPACE && clickedOnTextBox){

    nameBox.deleteText();
  }
  //confirm your name
  if (keyCode === ENTER && clickedOnTextBox){

    menuState = "intro"
    clickedOnTextBox = false;
  }
  // spawn enemies in mini game
  if (key === "c"){
    newMobsGoal = millis() + 1000;
   
      
      spawnMobs();
    
  }
  // back out of the options menu
  if (keyCode === ESCAPE && menuState === "options"){
    menuState = "startMenu"
    
  }


}






// loads images and sounds
function preload(){
  normalShrek = loadImage("assets/shrek_PNG2.png")
  swampBack = loadImage("assets/phatswamp.jpg")
  wakeUp = loadImage("assets/wakeupscene.jpg")
  alarm = loadSound("assets/alarm.wav");
  bedroom = loadImage("assets/bedroom.jpg");
  frontDesk = loadImage("assets/frontdesk.jpg")
  diningRoom = loadImage("assets/diningroom.jpg")
  titanic = loadImage("assets/Titanic.jpg")
  titanicSink = loadImage("assets/titanicSink.jpg")
  
}
// resize window if changed mid game
function windowResized(){
  ui();
}
// creates the ui for the game
function ui(){
  createCanvas(windowWidth, windowHeight);
  textSize(50);
  showingGame = false;
}
function draw() {
 // move multiple paths back to a linear system
  if (pathCorrect){
    allowDialogueChange = true;
    pathCorrect = false;

  }
  if (gameEnd){ 
    gameOverMan();
  }
  if(!gameEnd && progress < 3){

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
  if (progress === 4){
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
  if (progress === 4){
    background(0);
    endOfDate();
  }
  if (moveDialogue === likedAnswer || moveDialogue === likedAnswer + 1 && likedAnswer != null){
    if (!alreadyCounted){
      alreadyCounted = true;
      likeCount += 1;
    }
    push()
    rectMode(CORNER)
    rect(0, 0, 200, 25);
    pop()
    push()
    textSize(20)
    fill(0)
    textAlign(CORNER)
    text("Shrek liked that.", 80, 10)
    pop()
    dialoguePathCorrect = false;
    pathCorrect = true;
  }
  if (moveDialogue === branchingPathYes + 1 && useNow === null){
    push()
    rectMode(CORNER)
    rect(0, 0, 200, 25);
    pop()
    push()
    textSize(20)
    fill(0)
    textAlign(CORNER)
    text("Shrek liked that.", 80, 10)
    pop()
  
  }
  if (moveDialogue > 40 && moveDialogue != likedAnswer && moveDialogue === branchingPathYes || moveDialogue === branchingPathNo){
    if (alreadyCounted === false){
      alreadyCounted = true;
      likeCount -= 1;
    }
    
    push()
    rectMode(CORNER)
    rect(0, 0, 200, 25);
    pop()
    push()
    textSize(20)
    fill(0)
    textAlign(CORNER)
    text("Shrek did not like that.", 96, 10)
    pop()
    dialoguePathCorrect = false;
    pathCorrect = true;
  }
  if (moveDialogue === branchingPathNo + 1 && branchingPathNo != null){
        push()
    rectMode(CORNER)
    rect(0, 0, 200, 25);
    pop()
    push()
    textSize(20)
    fill(0)
    textAlign(CORNER)
    text("Shrek did not like that.", 96, 10)
    pop()
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
  // displays options menu
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
  // opens scene where you can give your character a name
  showingGame = true;
  background("green");
  
  fill("white")
  text("What is your name? ", windowWidth/2, windowHeight/2);
  nameBox = new EnterText(windowWidth/2, windowHeight/1.5, 500, 50, 12);
  nameBox.draw();
  dialoguePathCorrect = true;
  
  

}

function showIntro(){
  // shows the intro scene plays the alarm clock sound 
  dialoguePathCorrect = false
  background(0)
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
      // refreshs dialogueOptions so your new name is included in the dialogue
      dialogueOptions.splice(0, 63)
      alreadyPlayed = true;
      dialogue();
      alarm.play();
    }
 
  }
  //starts the first scene
  if (showWakeUp){
     firstScene();
   }

}

function firstScene(){
  // fixes a bug in the dialogue
  if (!bugCoverUp){
    bugCoverUp = true;
    dialogueOptions.splice(1, 1)
  }
  // allows progress to be updated
  if (progress === 1 || progress === 2 || progress === 3){
    progressUpdated = false;
  }
  //updates progress
  if (!progressUpdated){
    progressUpdated = true;
    progress = 2
  }
  // sets up the scene4 and plays the dialogue for the second progress point
  if (progress >= 2){

    image(wakeUp, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
    
    changeDialogue(0, 3);
    displayText();
    
    //continues scene if needed
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
          // while on the 8th piece of dialogue multiple options will be given for a reasponse
          if (moveDialogue === 8){
            allowDialogueChange = false;
            if (choices.length < 4){
              branchingPathFlirt = 20;
              branchingPathIntelligence = 21
              branchingPathSass = 22;
              branchingPathCharisma = 23;
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
            // draws all present choices
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
          // removes oldd options and creates new ones
          if (dialoguePathCorrect === true && moveDialogue > 20 && moveDialogue < 25){
            choices.splice(0, 3)
            if (choices.length < 2){
              branchingPathYes = 25;
              choices.push(new MultipleDialogue("That sounds nice.", windowWidth/2 - 300, windowHeight/2 - 100, 100, 200, "yes"))
              choices.push(new MultipleDialogue("Actually I dont really dig the green. Sorry.", windowWidth/2 + 300, windowHeight/2 - 100, 100, 200, "no"))
              allowDialogueChange = false;
            }
              
            for(let i = 0; i < choices.length; i++){
              choices[i].draw()
              
            } 
          }
          // checks which option is picked
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
  // calls the seecond scene when the first scene has concluded
  if (moveDialogue === 28){
    progress = 3;
  }
}
}
function secondScene(){
  //initiates dialogue
  changeDialogue(28, 60)
  if(changeDialogue <=31){
    dialoguePathCorrect = false;
  }
  // displays transition picture
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
  // displays scenes 2 back ground and character/s
  if (moveDialogue >= 30){
    image(diningRoom, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
    image(normalShrek, 500, windowHeight - 200, width/2, height/2)
  }
  
  // displays more dialogue options and removes the old ones
  if (moveDialogue === 32 && !charismaChosen){
    branchingPathCharisma = 38;
    branchingPathSass = 39;
    branchingPathFlirt = 41;
    branchingPathIntelligence = 40;
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
  // displays more dialogue options and removes old ones
  if (moveDialogue === 42){
    choices.splice(0, 4)
    if (choices.length < 2){
      branchingPathYes = 43;
      branchingPathNo = 45;
      likedAnswer = 43;
      moveTo = 46;
      choices.push(new MultipleDialogue("Onions are my favourite of course I would.", windowWidth/2 - 300, windowHeight/2 - 100, 100, 200, "yes", true))
      choices.push(new MultipleDialogue("Ew no, Onions are gross", windowWidth/2 + 300, windowHeight/2 - 100, 100, 200, "no", false))
      allowDialogueChange = false;
    }
    for (let i = 0; i < 2; i++){
      choices[i].draw();
    }      
    if(mouseIsPressed && allowDialogueChange === false){
      for(let i = 0; i < choices.length; i++){
        choices[i].clickedOnOption();
      }
    
    }
  }
  // displays more dialogue options and removes old ones
  if (moveDialogue === 53){
    choices.splice(0, 2)
    if (choices.length < 2){
      alreadyCounted = false;
      branchingPathYes = 55;
      branchingPathNo = 57;
      likedAnswer = 54;
      moveTo = 58;
      useNow = null;
      choices.push(new MultipleDialogue("Let Shrek deal with it.", windowWidth/2 - 300, windowHeight/2 - 100, 100, 200, "no"))
      choices.push(new MultipleDialogue("Pay your portion of the bill.", windowWidth/2 + 300, windowHeight/2 - 100, 100, 200, "yes"))
      allowDialogueChange = false;
    }
    for (let i = 0; i < 2; i++){
      choices[i].draw();
    }      
    if(mouseIsPressed && allowDialogueChange === false){
      for(let i = 0; i < choices.length; i++){
        choices[i].clickedOnOption();
      }
    }
  }
  // finds where to jump to dialogue to depending on your answer
  if (moveDialogue === jumpToCharisma){
      moveDialogue = 34
      if (moveDialogue === 35){

        moveDialogue = 34
      }
      dialoguePathCorrect = true;
  }
  if (charismaChosen){
    if (moveDialogue === 35){

      moveDialogue = 34
    }
  }
  if (moveDialogue === jumpToFlirt){
    moveDialogue = 36
    dialoguePathCorrect = true;
  }
  if (flirtChosen){
    if (moveDialogue === 37){
      moveDialogue = 36
    }    
  }
  if (moveDialogue === jumpToIntelligence){
    moveDialogue = 36;
    dialoguePathCorrect = true;
  }
  if (intelligenceChosen){
    if (moveDialogue === 36){
      moveDialogue = 35
    }
  }
  if (moveDialogue === jumpToSass){
    moveDialogue = 37;
    dialoguePathCorrect = true;
  }
  if (sassChosen){
    if (moveDialogue === 38){
      moveDialogue = 37
    }  
  }
  //kills dialogue once it is no longer used
  if (moveDialogue === 61){
    allowDialogueChange = false;
    killDialogue = true;
  }
  displayText();
  // displays the mini game and starts the mini game script
  if (moveDialogue === 61){
    image(diningRoom, windowWidth/2, windowHeight/2, windowWidth, windowHeight)

    makeMap();
    // if (!notWin){
    //   progress = 4
    // }
  }

}

function continueScene(){
  
    if(moveDialogue === tempTextAllowY){
      
      return continueWithScene = true;
    }

}
// chooses which dialogue to allow to be displayed in the current scene
function changeDialogue(greater, less){
  if (moveDialogue >= greater && moveDialogue < less && dialoguePathCorrect === false){
    allowDialogueChange = true;
    tempTextAllowX = greater;
    tempTextAllowY = less;


  }
  // checks for a blank string to allow for no text being displayed
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
// displays the text to the screen
function displayText(){
 
  dialogueOptions[moveDialogue].blankText();
  // does not display if string is blank
  if (!thisIsBlank){
    dialogueOptions[moveDialogue].draw();
  }
}  
// finds which menu to display
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
// ends game if chosen to deny date
function gameOverMan(){
  progress = 5
  console.log("game over man, game over")
  image(bedroom, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  background(0);
  
  textSize(50);
  fill(255, 0, 0);
  text("Game Over", windowWidth/2, windowHeight/2);
}
//concludes date and decides which ending to give you based on your decisions
 function endOfDate(){  
  if (likeCount > 1){
    goodEnding = true;     
  }
  if (likeCount < 1){
    goodEnding = false;
  }
  if (goodEnding){
    text("Hey there laddie I had a ogrefull time tonight", windowWidth/2, windowHeight/2)
  }
  if (!goodEnding){
    image(titanicSink, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
    text("You were so horrible the titanic sank again", windowWidth/2, windowHeight/2)  
  }
}


