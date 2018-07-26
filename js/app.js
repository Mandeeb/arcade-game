// Enemies our player must avoid

const Enemy = function(x, y, speed) {

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
  };


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {

// You should multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.

  this.x += this.speed * dt;

// Enemy starting again at left of canvas

  if (this.x > 550) {
    this.x = -50;
    this.speed = 100 + Math.floor(Math.random() * 200);
  }

// Check for player collision

  if (player.x + 25 <= this.x + 88 &&
    player.x + 76 >= this.x +11 &&
    player.y + 73 <= this.y + 135 &&
    player.y +131 >= this.y + 90) {

    player.reset();
  }
};


// Render enemy

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

const Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-pink-girl.png';
  };

Player.prototype.update = function() {

// Keep player on canvas
  if (this.y > 380) {
    this.y = 380;
  }

  if (this.x > 400) {
    this.x = 400;
  }

  if (this.x < 0) {
    this.x = 0;
  }

// Check for winning

  if (this.y < 0) {
    window.alert(`Congratulations! You won!`);

    player.reset();
  }
};


// Render player

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress) {
  switch (keyPress) {
    case 'left':
      this.x -= this.speed + 50;
      break;
    case 'up':
      this.y -= this.speed + 30;
      break;
    case 'right':
      this.x += this.speed + 50;
      break;
    case 'down':
      this.y += this.speed + 30;
      break;
  }
};


// Player Reset

Player.prototype.reset = function() {
  this.x = 200;
  this.y = 380;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const allEnemies = [];
const enemyPosition = [60, 140, 220];
let player = new Player(200, 380, 50);
let enemy;

enemyPosition.forEach(function(position) {
    enemy = new Enemy(0, position, 100 + Math.floor(Math.random() * 200));
    allEnemies.push(enemy);
});


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
