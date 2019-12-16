let whatScene;
let menuState = "startMenu";
let noEscape = "Options? What options? You are playing a game desinged by me. What did you think you would find in here.";
let normalShrek;
let swampBack;
let wakeUp;
let showingGame = false;
// let testAudio;
let clickedOnTextBox = false;
let yourName;
let money;
let moveDialogue = 0;
let allowDialogueChange = false;
let updateBg = false;
let bkColor = "black";
let showingIntro = false;
let alarm;
let alreadyShown = false;
let tempTextAllowX;
let tempTextAllowY;
let continueWithScene;
let progress = 0;
let needsToPlay = false;
let alreadyPlayed = false;
let showWakeUp = false;
let notSaid = true;
let progressUpdated = false;
let stopTextDisplay = false;
let bedroom;
let thisIsBlank;
let gateWay = false;
let testerByPass = true;
let miniGameSpriteX = 500;
let miniGameSpriteY = 500;

  
function setup() {
  dialogue();
canvasWidth = windowWidth;
canvasHeight = windowHeight;
createCanvas(canvasWidth, canvasHeight)
background(255)
// if (getItem("progress") !== null){
//   progress = getItem("progress")
// }
}


function mousePressed(){
  console.log(allowDialogueChange)
  
  if (mouseX >= windowWidth/2 - 250 && mouseX <= windowWidth/2 + 500 && mouseY <= windowHeight/1.5 + 75 && mouseY >= windowHeight/1.5 - 50){
    clickedOnTextBox = true;

  }
  else{
    clickedOnTextBox = false;
  }
  if (allowDialogueChange === true){
    
    moveDialogue += 1;
    allowDialogueChange = false;
    
    console.log(moveDialogue)
    displayText();
    changeDialogue(tempTextAllowX, tempTextAllowY);
    // if (continueWithScene && moveDialogue === tempTextAllowY){
    //   stopTextDisplay = true;
    // }


  
    
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
  console.log("ppls")
  if (keyCode === BACKSPACE){
    console.log("ehhhhhhh")
  }
  if (keyCode === BACKSPACE && clickedOnTextBox){

    nameBox.deleteText();
  }

  if (keyCode === ENTER && clickedOnTextBox){
    console.log("cont to game")
    menuState = "intro"
    clickedOnTextBox = false;
  }

  if (key === "c"){
    for (let i = 0; i < 12; i++){

      spawnMobs();
    }
  }

}







function preload(){
  normalShrek = loadImage("assets/shrek_PNG2.png")
  swampBack = loadImage("assets/phatswamp.jpg")
  wakeUp = loadImage("assets/wakeupscene.jpg")
  // testAudio = loadSound("assets/sharpbreath.mp3");
  alarm = loadSound("assets/alarm.wav");
  bedroom = loadImage("assets/bedroom.jpg");
  
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
  if (mobsMove){
    for (let i = 0; i < enemies.length; i++){
      if (bullets.length >= 1){
        if(enemies[i].didHit(i)&& bullets.length >= 1){
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
  }
  dialogueOptions[moveDialogue].blankText();
  if (testerByPass){
    firstScene();
  }
  //frameRate(1);
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


function startMenu(){
  
  imageMode(CENTER)
  image(swampBack, windowWidth/2, windowHeight/2, windowWidth, windowHeight)

  textAlign(CENTER, TOP)
  fill("white")
  stroke("black")
  text("Welcome to Hell on Earth aka Shrek Dating Sim", width/2, 100)

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
  showingIntro = true;
  if (!progressUpdated){
    progressUpdated = true;
    progress = 1;
    // storeItem("progress", progress);
  }
  if (progress === 1){
    backgroundUpdate();
    // background(0);
    textAlign(CENTER)
    // dialogue();
    // text("ok boomer", 500, 300)
    if (moveDialogue <= 0){
      allowDialogueChange = true;
    }
    else{
      allowDialogueChange = false;
    }
    updateBg = true;
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
  progressUpdated = false;
  if (!progressUpdated){
    progressUpdated = true;
    progress = 2
    // storeItem("progress", progress)
  }
  if (progress === 2){

    image(wakeUp, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
    
    changeDialogue(0, 3);
    displayText();
    
    
    // continueScene();
    if (continueWithScene || gateWay){
      gateWay = true;
      image(bedroom, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
      image(normalShrek, 500, windowHeight - 200, width/2, height/2)
      if (moveDialogue <= tempTextAllowY){
        continueWithScene = false;
        changeDialogue(3, 5);
        
        
        displayText();
      }
      //console.log("happening")
      if (continueWithScene === true){
        
        progress = 3;
        // storeItem("progress", progress)
        
      }
    }
    if (progress === 3){
      image(bedroom, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
      makeMap();
      
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
    console.log("umm")

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
  if (!continueWithScene && !thisIsBlank){

    dialogueOptions[moveDialogue].draw();
  }
  // else if(continueWithScene && mousePressed && moveDialogue === tempTextAllowY){
  //   console.log("hello")
  // }
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
    showingIntro = false;
     showIntro();
  }
}

function backgroundUpdate(){

    if (menuState === "intro"){
      background(0)
      console.log("black")
      updateBg = false;
    }
    if (showWakeUp){
      image(wakeUp, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
    }
    
  
}




// function keyPressed(){
//   if(keyCode = 83){
//     cookieSave();
//   }
//   if(keyCode = 72){
//     cookieLoad();
//   }
// }
// function cookieSave(){
//   document.cookie = "menu=" + menuState + "; ya";
// }
// function cookieLoad(){
//   document.cookie.split(";")
// }

// function setup() {
//   createCanvas(100, 100, WEBGL);
//   noStroke();
// }
// function draw() {
//   background(0);
//   let locX = mouseX - width / 2;
//   let locY = mouseY - height / 2;
//   translate(-25, 0, 0);
//   lightFalloff(1, 0, 0);
//   pointLight(250, 250, 250, locX, locY, 50);
//   sphere(20);
//   translate(50, 0, 0);
//   lightFalloff(0.9, 0.01, 0);
//   pointLight(250, 250, 250, locX, locY, 50);
//   sphere(20);
// }

// CREEPY SHREKY FUN TIME SCENE
// image(bedroom, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
// image(normalShrek, 500, windowHeight - 200, width/2, height/2)
