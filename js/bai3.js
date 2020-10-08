class Circle {
    constructor(x,y,radius,color) {
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;
    }
}
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(10, 10, 100, 0, 2 * Math.PI);
ctx.fillStyle="#000000";
ctx.fill();
ctx.stroke();