/* balloon popping game!

A landing page that welcomes the user with a button to click saying begin the game. the button will hide (using hide()) and the page will switch to the game using on click functions.

At the top of the page there will be an h1 tag saying 'welcome to the balloon popping game'. A hidden h2 tag that says you have popped all the balloons will appear on completion of balloon pops (using .show()).

The main window will be a grid of divs with either coloured circles or images of balloons.
Using on click events will track the user clicks on the balloons that will switch from the image
to the word POP! (or another image that says pop). THe switching will be done with either hidding a div behind the balloon or potentially using .add and .remove to facilitate the switch. 

bottom of the page will have a reset button allowing the user to start again using on click. 


******************

stretch goals:
1) would be to have the balloons reappear if you take to long to pop all the balloons.
2) timer that limits the amount of time you have which will fail you with it's own message.
3. animate 'balloons' where each row goes a different direction.


*/



const newGame = {};
const resetValue = $(".balloonGallery").clone();

$(".balloonGallery").hide()
$(".victory").hide()

$("#start").click(function() {
    $(".title").hide();
    $(".balloonGallery").show();
    $("#reset").show();
    newGame.userPrompt();    
});

newGame.userPrompt = () => {
    userSelect = prompt("how many balloons would you like to pop? if all, type 'all'");
    if (userSelect === "all") {
        newGame.start(parseInt(48));
    } else {
        userSelectNum = parseInt(userSelect);
        console.log(userSelectNum);
        newGame.start(userSelectNum);
    }
};

newGame.start = (input) => {
    let popped = 0;

    $(".balloon").one("click", function () {
        $(this).toggleClass("balloonHidden");
        $(this).text("POP!")
        popped++;
    
        if (popped === input) {
            console.log("YOU WIN!");
            $(".balloonGallery").hide();
            $(".victory").show();
        }
    })
};

$("#reset").click(function() {
    $(".balloonGallery").replaceWith(resetValue.clone());
    $(".balloonGallery").show();
    $(".victory").hide();
    newGame.userPrompt();
});

newGame.init = () => {
    console.log("init!");
    newGame.start();
};

$(function() {
    // newGame.init();
});