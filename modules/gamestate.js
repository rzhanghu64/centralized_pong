export function Paddle(xcoord, ycoord, upKey, downKey, id) {
    this.x = xcoord;
    this.y = ycoord;

    this.upKey = upKey;
    this.downKey = downKey;
    this.upKeyPressed = false;
    this.downKeyPressed = false;
    this.id = id;

    this.dx = 0;
    this.dy = 4;
    this.paddleWidth = 10;
    this.paddleLength = 100;
}

export function Ball(canvas) {
    this.radius = 10;
    this.xPos = canvas.width / 2;
    this.yPos = canvas.height / 2;
    this.balldx = 2;
    this.balldy = 2;
}