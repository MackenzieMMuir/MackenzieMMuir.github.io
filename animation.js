
// ******LANDING PAGE ANIMATIONS********
var tl1 = gsap.timeline({});

tl1.from(".welcome-shoe-left", {x: -1000, opacity: 0, duration: 1.25}, 1.25)
.from(".welcome-shoe-right", {x: 1000, opacity: 0, duration: 1.25}, 1.25) 
.from(".welcome-text",{opacity: 0, duration: 1.5}, .5) 
// .from(".header-logo", {y: -15, opacity: 0, duration: 1}, 0 )
.from(".first-name-box",{opacity: 0, duration: 1}, 2.75) 


// ******Q1 PAGE ANIMATIONS********
var tl_button1 = gsap.timeline({});
tl_button1.from(".quiz-button1",{y:-18, duration: 1.75, repeat: -1, yoyo: true, ease: "power1.inOut"}, 1)
.from(".shadow1",{scale: 1.5, duration: 1.75, opacity: 0.4, repeat: -1, yoyo: true, ease: "power1.inOut"}, 1)

var tl_button2 = gsap.timeline({});
tl_button2.from(".quiz-button2",{y:-18, duration: 1.75, repeat: -1, yoyo: true, ease: "power1.inOut"}, 1)
.from(".shadow2",{scale: 1.5, duration: 1.75, opacity: 0.4, repeat: -1, yoyo: true, ease: "power1.inOut"}, 1)

$(".quiz-button1").mouseover(function(){
    tl_button1.pause();
});

$(".quiz-button1").mouseleave(function(){
    tl_button1.play();
});

$(".quiz-button2").mouseover(function(){
    tl_button2.pause();
});

$(".quiz-button2").mouseleave(function(){
    tl_button2.play();
});

// ******Q2 PAGE ANIMATIONS********
var tl_button3 = gsap.timeline({});
tl_button3.from(".quiz-button3",{y:-18, duration: 1.75, repeat: -1, yoyo: true, ease: "power1.inOut"}, 1)
.from(".shadow3",{scale: 1.5, duration: 1.75, opacity: 0.4, repeat: -1, yoyo: true, ease: "power1.inOut"}, 1)

var tl_button4 = gsap.timeline({});
tl_button4.from(".quiz-button4",{y:-18, duration: 1.75, repeat: -1, yoyo: true, ease: "power1.inOut"}, 1)
.from(".shadow4",{scale: 1.5, duration: 1.75, opacity: 0.4, repeat: -1, yoyo: true, ease: "power1.inOut"}, 1)

$(".quiz-button3").mouseover(function(){
    tl_button3.pause();
});

$(".quiz-button3").mouseleave(function(){
    tl_button3.play();
});

$(".quiz-button4").mouseover(function(){
    tl_button4.pause();
});

$(".quiz-button4").mouseleave(function(){
    tl_button4.play();
});


// ******Q3 PAGE ANIMATIONS********
var tl_button5 = gsap.timeline({});
tl_button5.from(".quiz-button5",{y:-18, duration: 1.75, repeat: -1, yoyo: true, ease: "power1.inOut"}, 1)
.from(".shadow5",{scale: 1.5, duration: 1.75, opacity: 0.4, repeat: -1, yoyo: true, ease: "power1.inOut"}, 1)

var tl_button6 = gsap.timeline({});
tl_button6.from(".quiz-button6",{y:-18, duration: 1.75, repeat: -1, yoyo: true, ease: "power1.inOut"}, 1)
.from(".shadow6",{scale: 1.5, duration: 1.75, opacity: 0.4, repeat: -1, yoyo: true, ease: "power1.inOut"}, 1)

$(".quiz-button5").mouseover(function(){
    tl_button5.pause();
});

$(".quiz-button5").mouseleave(function(){
    tl_button5.play();
});

$(".quiz-button6").mouseover(function(){
    tl_button6.pause();
});

$(".quiz-button6").mouseleave(function(){
    tl_button6.play();
});


// ******Q4 PAGE ANIMATIONS********
var tl_button7 = gsap.timeline({});
tl_button7.from(".quiz-button7",{y:-18, duration: 1.75, repeat: -1, yoyo: true, ease: "power1.inOut"}, 1)
.from(".shadow7",{scale: 1.5, duration: 1.75, opacity: 0.4, repeat: -1, yoyo: true, ease: "power1.inOut"}, 1)

var tl_button8 = gsap.timeline({});
tl_button8.from(".quiz-button8",{y:-18, duration: 1.75, repeat: -1, yoyo: true, ease: "power1.inOut"}, 1)
.from(".shadow8",{scale: 1.5, duration: 1.75, opacity: 0.4, repeat: -1, yoyo: true, ease: "power1.inOut"}, 1)

$(".quiz-button7").mouseover(function(){
    tl_button7.pause();
});

$(".quiz-button7").mouseleave(function(){
    tl_button7.play();
});

$(".quiz-button8").mouseover(function(){
    tl_button8.pause();
});

$(".quiz-button8").mouseleave(function(){
    tl_button8.play();
});



// ****LOADING PAGE ANIMATION****
// IDEA INSPIRED BY THIS CODEPEN CREATION: https://codepen.io/carolineartz/pen/rNaGQYo

document.body.addEventListener("mousemove", evt => {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;
  
    gsap.set(".cursor", {
      x: mouseX,
      y: mouseY });
  
  
    gsap.to(".shape", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1 });
  
  });
