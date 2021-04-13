const canv = document.getElementById("canvas"),
	ctx = canv.getContext("2d");
let x = 20,
	y = 500;
canv.height = 1000;
canv.width = 1000;
canv.style.border = "5px solid black";

ctx.fillStyle = "black";
ctx.arc(x, y, 15, 0, Math.PI * 2);
ctx.fill();
document.addEventListener("keydown", function (event) {
	if (event.code == "ArrowUp") {
		function moveUp() {
			ctx.clearRect(0, 0, canv.width, canv.height);
			ctx.beginPath();
			ctx.arc(x, y, 15, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fillStyle = "black";
			ctx.fill();
			y--;
			if(y>=1000) {
				y=0;
			}
			requestAnimationFrame(moveUp);
		}
		moveUp();
	}
});
document.addEventListener("keydown", function (event) {
	if (event.code == "ArrowDown") {
		function moveDown() {
			ctx.clearRect(0, 0, canv.width, canv.height);
			ctx.beginPath();
			ctx.arc(x, y, 15, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fillStyle = "black";
			ctx.fill();
			y++;
			if(y>=1000) {
				y=0;
			}
			requestAnimationFrame(moveDown);
		}
		moveDown();
	}
});
document.addEventListener("keydown", function (event) {
	if (event.code == "ArrowLeft") {
		function moveLeft() {
			ctx.clearRect(0, 0, canv.width, canv.height);
			ctx.beginPath();
			ctx.arc(x, y, 15, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fillStyle = "black";
			ctx.fill();
			x--;
			if(x>=1000) {
				x=0;
			}
			requestAnimationFrame(moveLeft);
		}
		moveLeft();
	}
});
document.addEventListener("keydown", function (event) {
	if (event.code == "ArrowRight") {
		function moveRight() {
			ctx.clearRect(0, 0, canv.width, canv.height);
			ctx.beginPath();
			ctx.arc(x, y, 15, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fillStyle = "black";
			ctx.fill();
			x++;
			if(x>=1000) {
				x=0;
			}
			
			requestAnimationFrame(moveRight);
		}
		moveRight();
	}
});