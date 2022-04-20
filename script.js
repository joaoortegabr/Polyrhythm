const btn1 = document.getElementById('box1');
const btn2 = document.getElementById('box2');
const scoreDisplay = document.getElementById('scoreDisplay');
const defaultSpeed = 1000; // ms
let beatFrequency = document.getElementById('beatFrequency').value;
let beatInterval = '';
let score = 0;
let speed1 = 1;
let speed2 = 1;

// 4 BEATS, 4 SECONDS
// default speed: 1s
// default time: 1x


const sound = new Audio('mp3/tic.mp3');

function start() {
    removeBlinkClass();
    stopBeat();
    startBeat();
    addBlinkClass();
}

function stopBeat() {
    clearInterval(beatInterval);
}

function startBeat() {
    updateBeatFrequency()
    beatInterval = setInterval(() => {
        sound.play();
    }, defaultSpeed / beatFrequency);
    console.log(beatFrequency);
}

function updateBeatFrequency() {
    beatFrequency = document.getElementById('beatFrequency').value;
}

function defineBlinkSpeed() {
    if (document.getElementById('bt1speed1').checked) {
        speed1 = document.getElementById('bt1speed1').value;
        } else if (document.getElementById('bt1speed2').checked) {
            speed1 = document.getElementById('bt1speed2').value;
        } else {
            speed1 = document.getElementById('bt1speed4').value;
    }

    if (document.getElementById('bt2speed1').checked) {
        speed2 = document.getElementById('bt2speed1').value;
        } else if (document.getElementById('bt2speed2').checked) {
            speed2 = document.getElementById('bt2speed2').value;
        } else {
            speed2 = document.getElementById('bt2speed4').value;
    }

    updateBlinkSpeed(btn1, speed1);
    updateBlinkSpeed(btn2, speed2);
    console.log("speed1: " + speed1 + ", speed2: " + speed2);
}

function updateBlinkSpeed(element, duration) {
    element.style.animationDuration = (defaultSpeed / duration) + "ms";
}

function addBlinkClass() {
    defineBlinkSpeed();
    btn1.classList.add('blink');
    btn2.classList.add('blink');
}

function removeBlinkClass() {
    btn1.classList.remove('blink');
    btn2.classList.remove('blink');
}

function validateTouch() {
    // if (btn1.style.opactity > 0) {
    {
        addScore();
    }
}

function addScore() {
    score++;
    updateScore();

}

function updateScore() {
    scoreDisplay.classList.add('score');
    scoreDisplay.innerHTML = score;
    scoreDisplay.classList.remove('score');
}
 
/*
const boxbtn = document.querySelector(".box-button");

const wait = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  while (true) {
    boxbtn.classList.add("blink");
    boxbtn.disabled = false;
    await wait(1000);
    boxbtn.classList.remove("blink");
    boxbtn.disabled = true;
    await wait(1000);
  }
})();

boxbtn.addEventListener('click', () => {
  console.log("clicked!");
});


*/

// btn1.addEventListener('click', validateTouch);
// btn2.addEventListener('click', validateTouch);
