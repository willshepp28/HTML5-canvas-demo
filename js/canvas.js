console.log("script.js loaded");

window.onload = function () {


    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");

/*
|--------------------------------------------------------------------------
| Sets the coordinates of the gallows
|--------------------------------------------------------------------------
*/
    var bottomOfGallow = setcoordinates(90,275,250,275);
    var middleOfGallow = setcoordinates(175,275,175,60);
    var topGallow = setcoordinates(110,60,175,60);
    var gallowDrop = setcoordinates(110,60,110,108);



/*
|--------------------------------------------------------------------------
| Sets the coordinates of the hangman
|--------------------------------------------------------------------------
*/
    var head = circle(110,123,15);
    var torso = setcoordinates(110,137,110,188);



    // creates a circle
    function circle(xAxis,yAxis, radius ) {
        ctx.beginPath();
        ctx.arc(xAxis, yAxis, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }




    // Sets the coordinates of lines
    function setcoordinates(moveStart, moveEnd, lineStart,lineEnd) {
        ctx.beginPath();
        ctx.moveTo(moveStart, moveEnd);
        ctx.lineTo(lineStart, lineEnd);
        ctx.strokeStyle = "black";
        ctx.stroke();
    }
   

}


