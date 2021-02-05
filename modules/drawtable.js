import {paddles} from "./gamelogic.js";
import {ball} from "./gamelogic.js";

var canvas = document.getElementById("pongTable");
var ctx = canvas.getContext("2d");

function drawPaddle(paddle) {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.paddleWidth, paddle.paddleLength);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.strokeStyle = "rgba(0, 255, 0, 1)";
    ctx.stroke();
    ctx.closePath();
};

function drawBall(ball) {
    ctx.beginPath();
    ctx.arc(ball.xPos, ball.yPos, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();
};

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    paddles.forEach(paddle => drawPaddle(paddle));           
    drawBall(ball);
};

setInterval(draw, 10);