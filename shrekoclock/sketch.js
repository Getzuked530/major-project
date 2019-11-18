let whatScene;
let menuState = "startMenu";
let noEscape = "Options? What options? You are playing a game desinged by me. What did you think you would find in here.";
let normalShrek;
let swampBack;
let showingGame = false;
let testAudio;
  
function setup() {
soundFormats("mp3")

canvasWidth = windowWidth;
canvasHeight = windowHeight;
createCanvas(canvasWidth, canvasHeight)
background(255)
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
    rect(this.x, this.y, this.w, this.h)
    text(textData, )
  }
}
function preload(){
  normalShrek = loadImage("assets/standingShrek.png")
  swampBack = loadImage("assets/phatswamp.jpg")
  testAudio = loadSound("assets/sharpbreath.mp3");
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
  whichMenu();

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
          console.log("hecker")
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
  console.log("deaf");

  textAlign(CENTER);
  text("Like seriously what?", width/2, height/2)

  textAlign(CENTER);
  text("I can give you the option to leave if you want?", width/2, height/2 + 100)



  
}

function showGame(){
  showingGame = true;
  background(0);
  console.log("dudud")
  fill("white")
  text("What is your name? ", windowWidth/2, windowHeight/2);
  nameBox = new EnterText(windowWidth/2, windowHeight/0.5, 150, 50, 1000);
  nameBox.draw();
  

}


function whichMenu() {
  if (menuState === "startMenu"){
    startMenu();
    checkIfMenuButtonClicked();
    console.log("dumbbitch")
  }

  else if (menuState === "startGame" && showingGame === false){
    showingGame = false;
    showGame(); 
  }

  else if (menuState === "options"){
    
    showOptions();
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
