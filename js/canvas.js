console.log("script.js loaded");

window.onload = function () {


    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");

    bottomOfGallow(ctx)
    middleOfGallow(ctx);
    topGallow(ctx)
    gallowTopDrop(ctx);
    hangmanHead(ctx)



    function bottomOfGallow(ctx) {
        ctx.beginPath();
        ctx.moveTo(90, 275);
        ctx.lineTo(250, 275);
        ctx.strokeStyle = "black";
        ctx.stroke();
    }


    function middleOfGallow(ctx) {
        ctx.beginPath();
        ctx.moveTo(175, 275);
        ctx.lineTo(175, 60);
        ctx.stroke();
    }


    function topGallow(ctx) {
        ctx.beginPath();
        ctx.moveTo(110, 60);
        ctx.lineTo(175, 60);
        ctx.strokeStyle = "black";
        ctx.stroke();

    }

    function gallowTopDrop(ctx) {
        ctx.beginPath();
        ctx.moveTo(110, 60);
        ctx.lineTo(110, 110);
        ctx.strokeStyle = "black";
        ctx.stroke();
    }


    function hangmanHead(ctx) {
        ctx.beginPath();
        ctx.arc(110, 123, 15, 0, 2 * Math.PI);
        ctx.stroke();
    }
}