const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

const keys = [];

const player = {
    x: 0,
    y: 0,
    width: 64,
    height: 64,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false
};

const playerSprite = new Image();
playerSprite.src = "./assets/Mage1/character1.png";

const background = new Image();
background.src = "/assets/backgroundTwo.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate() {

    ctx.clearRect(0,0,canvas.width, canvas.height);

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    drawSprite(playerSprite, 4, 0, player.width, player.height, player.x, player.y, (player.width * 2), (player.height * 2));

    movePlayer();

    requestAnimationFrame(animate);
}
animate();

window.addEventListener("keydown", function(e){
    keys[e.key] = true;
    console.log(keys);
});

window.addEventListener("keyup", function(e){
    delete keys[e.key];
});

function movePlayer(){
    if (keys[38]){
        player.y -= player.speed;
    }
}