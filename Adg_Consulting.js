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


anime.timeline({loop: true})
  .add({
    targets: '.ml16 .letter  ',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.ml16 .letter  ',
    opacity: 0,
    duration: 10000000,
    easing: "easeOutExpo",
    delay: 1000
  });

  var textWrapper = document.querySelector('.ml17');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")


anime.timeline({loop: true})
  .add({
    targets: '.ml17 .letter  ',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.ml17 .letter  ',
    opacity: 0,
    duration: 10000000,
    easing: "easeOutExpo",
    delay: 1000
  });

  var textWrapper = document.querySelector('.ml18');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")


anime.timeline({loop: true})
  .add({
    targets: '.ml18 .letter  ',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.ml18 .letter  ',
    opacity: 0,
    duration: 10000000,
    easing: "easeOutExpo",
    delay: 1000
  });

 const goTop = Document.querySelector(".gotopbtn");

 window.addEventListener("scroll", () =>{
   if (window.pageYOffset > 100) {
     goTop.classList.add("active");
   } else {
     goTop.classList.remove("active");
   }
 })
       