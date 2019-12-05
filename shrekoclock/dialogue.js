let dialogueOptions = [];
let bottomBoxHeight = 1.19;
let a;
let b;
let c;
let d;


function dialogue(){
    dialogueOptions.push( new StoryText("Ok Boomer", windowWidth/2, windowHeight/bottomBoxHeight, 500, 100, false));
    dialogueOptions.push( new StoryText("Ok Boomer Ok Boomer Ok Boomer Ok Boomer Ok Boomer Ok Boomer Ok Boomer Ok Boomer Ok Boomer Ok Boomer Ok Boomer Ok Boomer", windowWidth/2, windowHeight/bottomBoxHeight, 500 , 100));
    dialogueOptions.push( new StoryText("youre may", windowWidth/2, windowHeight/bottomBoxHeight, 500 , 100, false));
    dialogueOptions.push( new StoryText(" ", windowWidth/2, windowHeight/bottomBoxHeight, 500 , 100, true));
    dialogueOptions.push( new StoryText("WHAT ARE YE DOIN EN MA SWAMP!", windowWidth/2, windowHeight/bottomBoxHeight, 500 , 100, false));
    dialogueOptions.push( new StoryText(" ", windowWidth/2, windowHeight/bottomBoxHeight, 500 , 100, true));
}
