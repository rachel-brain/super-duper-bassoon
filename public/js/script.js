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

// Add score 
function drawScore() {
    ctx.font = "14px Impact";
    ctx.fillStyle = "black";
    ctx.fillText("Score: "+ score, 8, 20);
  }

let timeToNextVillager = 0;
let villagerInterval = 1000;
let lastTime = 0;


let villagers = [];

class villager {
    constructor(){
        this.spriteWidth = 32;
        this.spriteHeight = 48;
        this.sizeModifier = Math.random() * 0.6 + 0.4;
        this.width = this.spriteWidth * this.sizeModifier;
        this.height = this.spriteHeight * this.sizeModifier;
        this.x = canvas.width;
        this.y = Math.random() * (canvas.height - this.height);
        this.directionX = Math.random() * 1 + 1;
        this.directionY = Math.random() * 3 - 2.5;
        this.markedForDeletion = false;
        this.image = new Image();
        this.image.src = "/assets/monsters/blacksmith.png";
        this.frameX = 0;
        this.frameY = 1;
        this.frame = 0;
        this.maxFrame = 2;
        this.timeSinceStep = 0;
        this.stepInterval = Math.random() * 100 + 100;
    };
    update(deltatime){
        if (this.y < 0 || this.y > canvas.height - this.height){
            this.directionY = this.directionY * -1;
        }
        this.x -= this.directionX;
        this.y += this.directionY;
        if (this.x < 0 - this.width) this.markedForDeletion = true;
        this.timeSinceStep += deltatime;
        if (this.timeSinceStep > this.stepInterval){
            if (this.frame > this.maxFrame) this.frame = 0;
            else this.frame++;
            this.timeSinceStep = 0;
        };
    };
    draw(){
        // ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.frame * this.spriteWidth, this.spriteHeight * this.frameY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    };
};

const Villager = new villager();

// starts animation
// startAnimating(20);

function animate(timestamp){
    ctx.clearRect(0,0,canvas.width, canvas.height);

    ctx.drawImage(background, 0, 2, canvas.width, canvas.height);

    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, (player.width / 2), (player.height / 2));

    Villager.update();
    Villager.draw();

    drawScore(score++);

    movePlayer();

    handlePlayerFrame();

    let deltatime = timestamp - lastTime;
    lastTime = timestamp;
    timeToNextVillager += deltatime;
    console.log(deltatime);
    if (timeToNextVillager > villagerInterval){
        villagers.push(new villager());
        timeToNextVillager = 0;
    };
    [...villagers].forEach(object => object.update(deltatime));
    [...villagers].forEach(object => object.draw());
    villagers = villagers.filter(object => !object.markedForDeletion);
    requestAnimationFrame(animate);
};

animate(0);