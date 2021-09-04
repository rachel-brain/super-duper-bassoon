const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// canvas.width = 800;
// canvas.height = 500;

let score = 0;

// Character movement and object 
const keys = [];

const player = {
    x: 75,
    y: 50,
    width: 32,
    height: 48,
    // across sprite sheet
    frameX: 0,
    // down sprite sheet
    frameY: 2,
    speed: 2,
    moving: false
};

const playerSprite = new Image();
playerSprite.src = "/assets/witch/Alchemist.png";

const background = new Image();
background.src = "/assets/backgroundTwo.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
    player.moving = true;
    console.log(keys);
    e.preventDefault();
});

window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
    player.moving = false;
});

function movePlayer(){
    // 38 = up arrow
    if (keys[38] && player.y > 25){
        player.y -= player.speed;
        // change player frame on sprite sheet
        player.frameY = 3;
        player.moving = true;
    };
    // 37 = left arrow
    if (keys[37] && player.x > 10){
        player.x -= player.speed;
        // change player frame on sprite sheet
        player.frameY = 1;
        player.moving = true;
    };
    // 40 = down arrow
    if (keys[40] && player.y < 115){
        player.y += player.speed;
        // change player frame on sprite sheet
        player.frameY = 0;
        player.moving = true;
    };
    // 39 = right arrow
    if (keys[39] && player.x < canvas.width - player.width){
        player.x += player.speed;
        // change player frame on sprite sheet
        player.frameY = 2;
        player.moving = true;
    };

};

function handlePlayerFrame(){
    if (player.frameX < 3 && player.moving) player.frameX++
    else player.frameX = 0;
};

// function animate() {

//     ctx.clearRect(0,0,canvas.width, canvas.height);

//     ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

//     drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, (player.width / 2), (player.height / 2));

//     movePlayer();

//     handlePlayerFrame();

//     requestAnimationFrame(animate);
// }
// animate();

// Gloabl varials for animation and fps

let fps, fpsInterval, startTime, now, then, elapsed; 

function startAnimating(fps){
    // fpsInterval is found using 1 second (1000milliseconds)
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate();
};

function animate(){
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval){
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0,0,canvas.width, canvas.height);

        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, (player.width / 2), (player.height / 2));

        Villager.update();
        Villager.draw();

        movePlayer();

        handlePlayerFrame();
    };
};

let villagers = [];
class villager {
    constructor(){
        this.width = 100;
        this.height = 50;
        this.x = canvas.width;
        this.y = Math.random() * (canvas.height - this.height);
        this.directionX = Math.random() * 5 + 3;
        this.directionY = Math.random() * 5 - 2.5;
    };
    update(){
        this.x -= this.directionX;
    };
    draw(){
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
};

const Villager = new villager();

// starts animation
startAnimating(30);
