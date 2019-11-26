class StoryText {
    constructor(text1, xpos1, ypos1, w1, h1){
      this.text = text1;
      this.xPos = xpos1;
      this.yPos = ypos1;
      this.w = w1;
      this.h = h1;
    }
    draw(){
      push();
      fill(255);
      rect(this.xPos, this.yPos, this.w, this.h);
      fill(0); 
      text(this.text, this.xPos, this.yPos);
      pop();
      
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