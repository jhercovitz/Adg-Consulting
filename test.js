let videoSource = new Array();
videoSource[0] = "videos/conciergerie.mp4";
videoSource[1] = "videos/car.mp4";
let i = 0; // global
const videoCount = videoSource.length;
const element = document.getElementById("videoPlayer");
 
function videoPlay(videoNum) {
    element.setAttribute("src", videoSource[videoNum]);
    element.autoplay = true;
    //element.load();
    element.play();
}
document.getElementById('videoPlayer').addEventListener('ended', myHandler, false);
 
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