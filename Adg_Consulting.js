let videoSource = new Array();
videoSource[0] = "videos/conciergerie.mp4";
videoSource[1] = "videos/car.mp4";
let i = 0; // global
const videoCount = videoSource.length;
const element = document.getElementById("myvideo");
 
function videoPlay(videoNum) {
    element.setAttribute("src", videoSource[videoNum]);
    element.autoplay = true;
    element.load();
    element.play();
}
document.getElementById('myvideo').addEventListener('ended', myHandler, false);
 
videoPlay(0); // play the video
 
function myHandler() {
    i++;
    if (i == videoCount) {
        i = 0;
        videoPlay(i);
    } else {
        videoPlay(i);
    }
}

const animatedTexts = document.querySelectorAll('.animated-text');

  function animateText(animatedText) {
      const text = animatedText.textContent;
      let speed = animatedText.getAttribute("speed");
      let delay = animatedText.getAttribute("delay");
      if (speed == null) {
          speed = 150;
      }
      if (delay == null){
          delay = 0;
      }
  
    animatedText.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] == ' ') {
            animatedText.innerHTML +=' ';
        }
        animatedText.innerHTML += `<span>${text[i]}</span>`;
    }
  
    setTimeout(function(){
      let idx = 0;
    function writeChar() {
        const span = animatedText.querySelectorAll('span')[idx];
        span.classList.add('fade');
        idx++;
        if (idx == text.length) {
            clearInterval(writeCharInterval);
        }
    }
  
    let writeCharInterval = setInterval(writeChar, speed);
    },delay);
  
  }
  animatedTexts.forEach(animateText);


var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 1000
  });

  var textWrapper = document.querySelector('.ml16');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")






  


       