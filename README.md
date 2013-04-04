# Rift

Javascript Toolkit for Game Devs. This is not a game engine but a math library. This solves writing the same math formulas over and over. Rift is similar to the Math class, it has no state and its global.

## Install

Rift supports NodeJS and every modern browser.

    npm install rift

## Usage

Below are some use cases of Rift.

### Tile-based Games

    var tileSize = 30;

    .on("mousemove", function(x, y){

        var tileX = Rift.tile(x, tileSize);
        var tileY = Rift.tile(y, tileSize);

        player.x = tileX * size;
        player.y = tileY * size;

    });

### Isometric Games

    var tileSize = 30;

    .on("mousemove", function(x, y){

        var isoX = Rift.isoX(x, y, tileSize);
        var isoY = Rift.isoY(x, y, tileSize);

        player.x = Rift.worldIsoX(isoX, isoY, tileSize);
        player.y = Rift.worldIsoY(isoX, isoY, tileSize);

    });

### Random Helpers

    var player = new Player();

    // return integer number between 20 - 100
    var randomGold = Rift.randomInt(20, 100);

    player.giveGold(randomGold);

    // return random element
    var randomItem = Rift.random([item1, item2]);

    player.giveItem(randomItem);

    player.stats = {str: 10, dex: 5, vit: 4, int: 7};

    // return random property
    var randomStatDown = Rift.random(player.stats);

    player.stats[randomStatDown] /= 2;

### Math

    var player = new Player();
    var monster = new Monster();

    var distance = Rift.distance(player.x, player.y, monster.x, monster.y);

    if(Rift.hitTest(player.x, player.y, player.width, player.height,
        monster.x, monster.y, monster.width, monster.height)){
            // we hit
    }

## Change Log

**0.1.0**

* First release