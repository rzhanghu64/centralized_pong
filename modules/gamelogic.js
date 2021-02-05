import {Paddle} from "./gamestate.js";
import {Ball} from "./gamestate.js";

var canvas = document.getElementById("pongTable");
var paddleWidth = 10;


export var paddles = [];
paddles.push(new Paddle(50, canvas.height / 2 - 50, "w", "s", "p1"));
paddles.push(new Paddle(canvas.width - 50 - paddleWidth, canvas.height / 2 - 50, "o", "l", "p2"));
paddles.forEach(paddle => {
    console.log(paddle.id);
});

export var ball = new Ball(canvas);

function update() {
    paddles.forEach(paddle => {
        if (paddle.upKeyPressed) {
            paddle.y -= paddle.dy;
            if (paddle.y < 0) {
                paddle.y = 0;
            }
        } else if (paddle.downKeyPressed) {
            paddle.y += paddle.dx;
            if (paddle.y > canvas.height - 100) {
                paddle.y = canvas.height - 100;
            }
        }
    });


    if (ball.yPos + ball.balldy > canvas.height - ball.radius || ball.yPos + ball.balldy < ball.radius) {
        ball.balldy = -ball.balldy;
    }

    if (ball.xPos + ball.balldx > canvas.width - ball.radius || ball.xPos + ball.balldx < ball.radius) {
        ball.balldx = -ball.balldx;
    }

    ball.xPos += ball.balldx;
    ball.yPos += ball.balldy;
}

function keyDownHandler(e) {

    var data = {
        key: e.key
    };

    webSocket.send(JSON.stringify(data));

    paddles.forEach(paddle => {
        if (e.key === paddle.upKey) {
            paddle.upKeyPressed = true;
        } else if (e.key === paddle.downKey) {
            paddle.downKeyPressed = true;
        }
    });
}

function keyUpHandler(e) {
    paddles.forEach(paddle => {
        if (e.key === paddle.upKey) {
            paddle.upKeyPressed = false;
        } else if (e.key === paddle.downKey) {
            paddle.downKeyPressed = false;
        }
    });
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

setInterval(update, 10);
