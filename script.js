// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback

//Global variables
var mistake = 0; 
var max_mistakes = 3; 
var pattern = [];  
var totalSound = 8; 
var index_of_last_button = 6; 
var progress = 0; 
var gamePlaying = false; 
var tonePlaying = false; 
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0; 

function startGame() { 
  //initialize game variables
  mistake = 0; 
  progress = 0; 
  gamePlaying = true; 
  for (var i = 0; i < totalSound; i++) { 
    pattern[i] = getRandomInt(index_of_last_button) + 1; //adding one because result includes 0
    console.log("button at index " + i + " is: " + pattern[i]);
  }
  
  //swat the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence(); 
}

function stopGame() { 
  //initialize game variables
  gamePlaying = false; 
  
  //swat the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5:540,
  6: 680
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0; 
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  } 
  
  else { 
    if (btn != pattern[guessCounter]) { 
      mistake++;
      console.log(mistake + " mistakes made.");
      if (mistake == max_mistakes) {
        loseGame();
      }
    }
    else { 
      if (guessCounter < progress) { //Checking the next guess
        guessCounter++; 
      }
      
      else { //All guesses checked
        if (guessCounter == pattern.length - 1) { //All 8 correct guesses 
          winGame();
        }
        else { //Adding one more button to game
          progress++; 
          playClueSequence();
        }
      }  
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}