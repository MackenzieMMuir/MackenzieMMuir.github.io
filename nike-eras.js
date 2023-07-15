
       
       
       
       
       //JAVASCRIPT COMPONENT #1: Recording text input
//1: Store text input (name) when user clicks 'start button'
//2: Use this input to customise text in quiz result page
var userResponses = {
    q1: "",
    q2: "",
    q3: "",
    q4: ""
};

//recording user's name input

function recordName() {
    var userNameInput = document.getElementById("userNameInput").value;
    document.getElementsByClassName("user-name")[0].innerHTML = userNameInput;
    document.getElementsByClassName("user-name")[1].innerHTML = userNameInput;
    console.log(userNameInput);
    document.getElementById ('question1').style.display = "grid";
    document.getElementById('question1').scrollIntoView();

    
    var tl_q1_text = gsap.timeline({});
    tl_q1_text.from (".quiz-question1-text", { y: -20, opacity:0, duration: .75}, 0.2)
   .from(".left-bar", {opacity: 0, duration: 1}, 0.3);

};

//function for scrolling onto/displaying page

function goToQuestion2 () {
    document.getElementById ('question2').style.display = "grid";
    document.getElementById('question2').scrollIntoView();
    displayNextButton(false,"nextButtonq1");

    var tl_q2_text = gsap.timeline({});
    tl_q2_text.from (".quiz-question2-text", { y: -20, opacity:0, duration: .75}, 0.2);
    
    let animation;

    animation= bodymovin.loadAnimation({
        container: document.getElementById('burstanimation1'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path:'burstdata.json'
    });

    
};

function goToQuestion3 () {
    document.getElementById ('question3').style.display = "grid";
    document.getElementById('question3').scrollIntoView();
    displayNextButton(false, "nextButtonq2");

    var tl_q3_text = gsap.timeline({});
    tl_q3_text.from (".quiz-question3-text", { y: -20, opacity:0, duration: .75}, 0.2);
    
    let animation;

    animation= bodymovin.loadAnimation({
        container: document.getElementById('burstanimation2'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path:'burstdata.json'
    });
};

function goToQuestion4 () {
    document.getElementById ('question4').style.display = "grid";
    document.getElementById('question4').scrollIntoView();
    displayNextButton(false, "nextButtonq3");

    var tl_q4_text = gsap.timeline({});
    tl_q4_text.from (".quiz-question4-text", { y: -20, opacity:0, duration: .75}, 0.2);

    let animation;

    animation= bodymovin.loadAnimation({
        container: document.getElementById('burstanimation3'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path:'burstdata.json'
    });
};

function goToResultConfirm () {
    
    // ***Hiding all left timelines on click (help sourced from :https://stackoverflow.com/questions/45012378/cant-change-style-display-using-getelementbyclassname)****
    var x = document.getElementsByClassName("left-bar");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    };


    document.getElementById ('resultConfirm').style.display = "inline-block";
    document.getElementById('interactiveResults').scrollIntoView();
    displayNextButton(false, "nextButtonq4");
    
    var tl_tick = gsap.timeline({});
    tl_tick.from(".logo-container", {opacity: 0, duration: 1 },0.25) 
    .to(".loading-bar", {opacity: 0, duation: 3}, 16)
    .from(".results-button", {opacity: 0, duration: 2},17)
   

    let animation;

    animation= bodymovin.loadAnimation({
        container: document.getElementById('loadingBar'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path:'LoadingBar.json'
    });
};` `

function goToQuizResult() {


    document.getElementById ('quizResult').style.display = "inline-block";
    document.getElementById('quizResult').scrollIntoView();
    
    $("#loadingBar").css("display", "none");
    $("#resultsButton").css("display", "none");
    $("#logoContainer").css("display", "none");



// ***** RESULTS PAGE ANIMATIONS (triggered after user clicks on to page) ******    

    var tl_resultspage = gsap.timeline({});

    tl_resultspage.from(".navigation-buttons", {opacity: 0, duration: 1}, .5)
    .from(".eras-result-text", {x: -100, opacity:0, duration: 1}, 0.8)
    .from(".user-shoe", {x: 200, opacity: 0, duration: 1}, 1)
    .from(".tag", {y:-50, opacity: 0, duration: 0.8, stagger: 0.2}, 1.5 )
    .from(".shoe-info-text", {x:-50, opacity: 0, duration: 1}, 1.5)
    .from(".shop-range-button", {opacity: 0, duration: 1.5}, 2.25)
    
    

    var userTotals = {
        totalA: 0,
        totalB: 0
    }
//***** recording answer totals

    for(key in userResponses){
        var value = userResponses[key];
        // console.log(value);

        if(value == "A"){
            userTotals.totalA++;
        }
        else if(value == "B"){
            userTotals.totalB++;
        }
    }
    console.log(userTotals);

    // NikeEra Personality A>B :
    // NikeEra Personality A<B : 
    // NikeEra Personality A==B :   

    var shoeType = "";
    var shoeImage ="";
    var shoeDescription ="";
    var releasedTag = "";
    var designerTag = "";
    var tagTags = "";

    if (userTotals.totalA > userTotals.totalB) {
        shoeType = "Blazer";
        shoeImage = "ShoeImages/nike-blazer.png";
        shoeDescription = "If you were a shoe, you would be a Nike Blazer - classic, stylish, and always in vogue. You would be the perfect shoe for any occasion, whether it's a casual night out with friends or a high-energy workout at the gym. With your sleek design and comfortable fit, you would make everyone feel at ease around you. And just like the Nike Blazer, you would be versatile, adaptable, and ready for anything life throws your way. So if you're looking for a shoe that's as dynamic and exciting as you are, look no further than the Nike Blazer - or should we say, look no further than you!";
        releasedTag = "1972";
        designerTag = "Kathy Gomez";
        tagTags = "basketball, retro, streetwear";

    }
    else if (userTotals.totalA < userTotals.totalB) {
        shoeType = "VaporMax";
        shoeImage = "ShoeImages/nike-vapormax.png";
        shoeDescription = "If you were a shoe, you'd be a Nike VaporMax - sleek, stylish, and ready to take on any challenge! You've got a strong foundation, just like the VaporMax's supportive sole, and you're always ready to push yourself to the limits. Whether you're running a marathon or just taking a stroll around the block, you're always up for an adventure. And just like the VaporMax's bold design, you're not afraid to stand out from the crowd and be your own unique self. So lace up your shoes and get ready to conquer the world - just like a true VaporMax!";
        releasedTag = "2017";
        designerTag = "Bill Bowerman";
        tagTags = "modern, comfort, runner";
    }
    else if (userTotals.totalA == userTotals.totalB) {
        shoeType = "Air Force 1";
        shoeImage = "ShoeImages/nike-airforce1.png";
        shoeDescription = "If you were a shoe, you'd be a Nike Air Force 1 - sleek, stylish, and always ready to step up to the plate! Just like this iconic sneaker, you're a classic, with a timeless appeal that never goes out of style. Whether you're running around town or hitting the court, you're always up for a challenge and ready to take on whatever life throws your way. So lace up those sneakers, get out there, and show the world what you're made of!";
        releasedTag = "1982";
        designerTag = "Bruce Kilgore";
        tagTags = "sneaker, classic, streetwear";

    }

    document.getElementById('shoeName').innerHTML = shoeType;
    document.getElementById('eraShoe').src = shoeImage;
    document.getElementById('releasedTag').innerHTML += releasedTag;
    document.getElementById('designerTag').innerHTML += designerTag;
    document.getElementById('tagTag').innerHTML += tagTags;
    document.getElementById('shoeDescription').innerHTML = shoeDescription;
    };



//JAVASCRIPT COMPONENT #2: Recording and storing user quiz answer responses
//(idea adapted from week 8 lecture)
        //1: When user clicks an answer, detect the question value (A,B)
        //2: When user clicks an answer, detect the question name
        //3: Store user responses in an object/array
        //4: Once quiz is complete, tally question responses

    //function to toggle button on once an answer is selected has also been included, hence funcion name****
      

$(document).on("click", ".quiz-button", function(event){
    //***** access the answer ID *******
    var userAnswer = $(this).data("answer");
    console.log(userAnswer);

    //***** finding question ID- traverse DOM to get to parent *******  
    var question = $(this).parent().data("question");
    console.log(question);

    userResponses[question] = userAnswer;
    console.log(userResponses);

    var nextButton = "nextButton" + question
    console.log(nextButton)
    displayNextButton(true, nextButton);

});


function displayNextButton(questionSelected, buttonName) {
    //***** toggle on buton *******
    const button = document.getElementById(buttonName) 
    if (questionSelected) {
        button.style.display = "inline-block"
        
      } else {
        button.style.display = "none"
    }
}


