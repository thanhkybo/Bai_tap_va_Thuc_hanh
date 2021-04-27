function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; ' +
            ' left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 3;
        console.log('ok: ' + this.left);
    }
    this.moveDown = function () {
        this.top += 3
    }
    this.moveLeft = function () {
        this.left -= 3
    }
    this.moveUp = function () {
        this.top -= 3
    }
}

var hero = new Hero('zombie.png', 20, 30, 200);
var dieukien = true
function start(){
    if (dieukien === true) {
        if (hero.left < window.innerWidth - hero.size) {
            hero.moveRight();
        } else {
            if (hero.top < window.innerHeight - hero.size) {
                hero.moveDown();
            } else {
                dieukien = false
            }
        }
    } else {
        if (hero.left > 0) {
            hero.moveLeft();
        } else {
            if (hero.top > 0) {
                hero.moveUp();
            } else {
                dieukien = true
            }
        }
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 1)
}

start();