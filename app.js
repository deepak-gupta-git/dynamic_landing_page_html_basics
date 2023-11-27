const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function videoconAnimation() {
    var videocon = document.querySelector(".video-container")
var playbtn = document.querySelector(".play")

videocon.addEventListener("mouseenter", function(){
    playbtn.style.opacity = 1,
    playbtn.style.scale = 1
})

videocon.addEventListener("mouseleave", function(){
    playbtn.style.opacity = 0,
    playbtn.style.scale = 0
})

videocon.addEventListener("mousemove", function(dets){
    gsap.to(playbtn, {
        left:dets.x,
        top:dets.y
    })
})

}
videoconAnimation()

function videoAnimation(){
gsap.from(".page1 h1", {
    y:100,
    opacity:0,
    dalay:0.5,
    duration:0.9,
    stagger:0.3,
}) 

gsap.from(".page1 .video-container", {
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.5
})
}
videoAnimation()

const cursor = document.querySelector(".cursor")
const child = document.querySelector(".child")
document.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
    left:dets.x,
        top:dets.y
})
})


document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
cursorAnimation();

var details = document.querySelector(".dets");
details.addEventListener("mouseenter", function(){
    $(".dets").slideDown();
})