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
  
function setup() {
canvasWidth = windowWidth;
canvasHeight = windowHeight;
createCanvas(canvasWidth, canvasHeight)
background(255)
}


function mousePressed(){
  if (mouseX >= windowWidth/2 - 250 && mouseX <= windowWidth/2 + 500 && mouseY <= windowHeight/1.5 + 75 && mouseY >= windowHeight/1.5 - 50){
    clickedOnTextBox = true;

  }
  else{
    clickedOnTextBox = false;
  }
  if (allowDialogueChange === true){
    allowDialogueChange = false;
    moveDialogue += 1;
    displayText();
    
  }
}
function keyTyped(){
  if (clickedOnTextBox){
    nameBox.inputTextName(key);
  }
  


}
function keyPressed(){
  if (keyCode === BACKSPACE && clickedOnTextBox){

    nameBox.deleteText();
  }

  if (keyCode === ENTER && clickedOnTextBox){
    console.log("cont to game")
    menuState = "intro"
    clickedOnTextBox = false;
  }
}







function preload(){
  // normalShrek = loadImage("assets/standingShrek.png")
  swampBack = loadImage("assets/phatswamp.jpg")
  wakeUp = loadImage("assets/wakeupscene.jpg")
  // testAudio = loadSound("assets/sharpbreath.mp3");
  alarm = loadSound("assets/alarm.wav");
  
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
  //frameRate(1);
  whichMenu();
  if (!alarm.isPlaying() && menuState === "intro" && alreadyShown === false){
    image(wakeUp, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
    alreadyShown = true;
    firstScene();
  }
  

  
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
  backgroundUpdate();
  // background(0);
  textAlign(CENTER)
  dialogue();
  // text("ok boomer", 500, 300)
  allowDialogueChange = true;
  updateBg = true;
  
  displayText();
  alarm.play();
  


  


  
  
  
}
function firstScene(){
  console.log("help me i want to kashoot myself i regret taking this class")
}

function displayText(){
  dialogueOptions[moveDialogue].draw();
  
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

  else if (menuState ==="intro" && showingIntro === false){
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
