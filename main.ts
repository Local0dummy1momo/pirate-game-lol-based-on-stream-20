namespace SpriteKind {
    export const Bottle = SpriteKind.create()
}
function createBottle () {
    if (!(foundBottle)) {
        messageInABottlelul = sprites.create(img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 d d d 6 6 6 6 6 6 6 6 
            6 6 6 6 6 9 6 9 6 6 6 6 6 6 6 6 
            6 6 6 6 6 9 6 9 6 6 6 6 6 6 6 6 
            6 6 6 6 6 9 6 9 6 6 6 6 6 6 6 6 
            6 6 6 6 9 6 6 6 9 6 6 6 6 6 6 6 
            6 6 6 6 9 5 5 5 9 6 6 6 6 6 6 6 
            6 6 6 6 9 5 5 5 9 6 6 6 6 6 6 6 
            6 6 6 6 9 5 5 5 9 6 6 6 6 6 6 6 
            6 6 6 6 9 5 5 5 9 6 6 6 6 6 6 6 
            6 6 6 6 9 5 5 5 9 6 6 6 6 6 6 6 
            6 6 6 6 9 9 9 9 9 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, SpriteKind.Bottle)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
        while (Math.abs(mySprite.x - messageInABottlelul.x) > 200 && mySprite.y - messageInABottlelul.y > 200) {
            tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
        }
    }
}
function loadGame () {
    mySprite.setPosition(blockSettings.readNumber("playerpositionX"), blockSettings.readNumber("playerpositionY"))
    foundBottle = blockSettings.readNumber("foundBottle") == 1
}
function createTreasure () {
	
}
function saveGame () {
    blockSettings.writeNumber("playerpositionX", mySprite.x)
    blockSettings.writeNumber("playerpositionY", mySprite.y)
    if (foundBottle) {
        blockSettings.writeNumber("foundBottle", 1)
    } else {
        blockSettings.writeNumber("foundBottle", 0)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bottle, function (sprite, otherSprite) {
    foundBottle = true
    otherSprite.destroy()
})
// DON'T ADD WHILE TRUE
let messageInABottlelul: Sprite = null
let foundBottle = false
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
let compassImages = [
img`
    . . . . . . f f f . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . f 1 1 1 1 1 2 1 1 1 1 1 f . . 
    . f 1 8 1 1 1 2 1 1 1 8 1 f . . 
    f 1 1 1 8 1 1 2 1 1 8 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 8 8 1 1 1 f 1 1 1 8 8 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 8 1 1 1 1 1 8 1 1 1 f . 
    . f 1 8 1 1 1 8 1 1 1 8 1 f . . 
    . f 1 1 1 1 1 8 1 1 1 1 1 f . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . . . . f f f f f f f . . . . . 
    `,
img`
    . . . . . . f f f . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . f 1 1 1 1 1 8 1 1 1 1 1 f . . 
    . f 1 8 1 1 1 8 1 1 1 2 1 f . . 
    f 1 1 1 8 1 1 8 1 1 2 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 8 8 1 1 1 f 1 1 1 8 8 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 8 1 1 1 1 1 8 1 1 1 f . 
    . f 1 8 1 1 1 8 1 1 1 8 1 f . . 
    . f 1 1 1 1 1 8 1 1 1 1 1 f . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . . . . f f f f f f f . . . . . 
    `,
img`
    . . . . . . f f f . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . f 1 1 1 1 1 8 1 1 1 1 1 f . . 
    . f 1 8 1 1 1 8 1 1 1 8 1 f . . 
    f 1 1 1 8 1 1 8 1 1 8 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 8 8 1 1 1 f 1 1 1 2 2 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 8 1 1 1 1 1 8 1 1 1 f . 
    . f 1 8 1 1 1 8 1 1 1 8 1 f . . 
    . f 1 1 1 1 1 8 1 1 1 1 1 f . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . . . . f f f f f f f . . . . . 
    `,
img`
    . . . . . . f f f . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . f 1 1 1 1 1 8 1 1 1 1 1 f . . 
    . f 1 8 1 1 1 8 1 1 1 8 1 f . . 
    f 1 1 1 8 1 1 8 1 1 8 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 8 8 1 1 1 f 1 1 1 8 8 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 8 1 1 1 1 1 2 1 1 1 f . 
    . f 1 8 1 1 1 8 1 1 1 2 1 f . . 
    . f 1 1 1 1 1 8 1 1 1 1 1 f . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . . . . f f f f f f f . . . . . 
    `,
img`
    . . . . . . f f f . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . f 1 1 1 1 1 8 1 1 1 1 1 f . . 
    . f 1 8 1 1 1 8 1 1 1 8 1 f . . 
    f 1 1 1 8 1 1 8 1 1 8 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 8 8 1 1 1 f 1 1 1 8 8 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 8 1 1 1 1 1 8 1 1 1 f . 
    . f 1 8 1 1 1 2 1 1 1 8 1 f . . 
    . f 1 1 1 1 1 2 1 1 1 1 1 f . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . . . . f f f f f f f . . . . . 
    `,
img`
    . . . . . . f f f . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . f 1 1 1 1 1 8 1 1 1 1 1 f . . 
    . f 1 8 1 1 1 8 1 1 1 8 1 f . . 
    f 1 1 1 8 1 1 8 1 1 8 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 8 8 1 1 1 f 1 1 1 8 8 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 2 1 1 1 1 1 8 1 1 1 f . 
    . f 1 2 1 1 1 8 1 1 1 8 1 f . . 
    . f 1 1 1 1 1 8 1 1 1 1 1 f . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . . . . f f f f f f f . . . . . 
    `,
img`
    . . . . . . f f f . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . f 1 1 1 1 1 8 1 1 1 1 1 f . . 
    . f 1 8 1 1 1 8 1 1 1 8 1 f . . 
    f 1 1 1 8 1 1 8 1 1 8 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 2 2 1 1 1 f 1 1 1 8 8 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 8 1 1 1 1 1 8 1 1 1 f . 
    . f 1 8 1 1 1 8 1 1 1 8 1 f . . 
    . f 1 1 1 1 1 8 1 1 1 1 1 f . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . . . . f f f f f f f . . . . . 
    `,
img`
    . . . . . . f f f . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . f 1 1 1 1 1 8 1 1 1 1 1 f . . 
    . f 1 2 1 1 1 8 1 1 1 8 1 f . . 
    f 1 1 1 2 1 1 8 1 1 8 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 8 8 1 1 1 f 1 1 1 8 8 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 8 1 1 1 1 1 8 1 1 1 f . 
    . f 1 8 1 1 1 8 1 1 1 8 1 f . . 
    . f 1 1 1 1 1 8 1 1 1 1 1 f . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . . . . f f f f f f f . . . . . 
    `
]
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 f f f 1 1 . . . . 
    . . . 1 1 1 1 1 f f 1 1 . . . . 
    . . . 1 1 1 1 f 1 f 1 1 . . . . 
    . . . 1 1 1 f 1 1 1 1 1 . . . . 
    . . . . . . . e . . . . . . . . 
    . . . . . . . e . . . . . . . . 
    . e e e e e e e e e e e e e . . 
    . c c c c c c c c c c c c c . . 
    . e e e e e e e e e e e e e . . 
    . c c c c c c c c c c c c c . . 
    . . e e e e e e e e e e e . . . 
    . . . c c c c c c c c c . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
foundBottle = false
loadGame()
createBottle()
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . 1 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 f f f 1 1 . . . . 
            . . . 1 1 1 1 1 f f 1 1 . . . . 
            . . . 1 1 1 1 f 1 f 1 1 . . . . 
            . . . 1 1 1 f 1 1 1 1 1 . . . . 
            . . . . . . . e . . . . . . . . 
            . . . . . . . e . . . . . . . . 
            . e e e e e e e e e e e e e . . 
            . c c c c c c c c c c c c c . . 
            . e e e e e e e e e e e e e . . 
            . c c c c c c c c c c c c c . . 
            . . e e e e e e e e e e e . . . 
            . . . c c c c c c c c c . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        mySprite.setImage(img`
            . . . . . f f f . . . . . . . . 
            . . . . f 1 1 1 f . . . . . . . 
            . . 5 . f 1 1 1 f . 5 . . . . . 
            . . 5 5 f f 1 f f 5 5 . . . . . 
            . . . . 3 7 b 7 3 . . . . . . . 
            . . . 3 3 b b b 3 3 . . . . . . 
            . . . . 5 . b . 5 . . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . 
            . . . 2 . 2 5 2 . 2 . . . . . . 
            . . . 2 . 2 2 2 . 2 . . . . . . 
            . . . 2 . 2 5 2 . 2 . . . . . . 
            . . . 5 . a a a . b . . . . . . 
            . . . . . a . a . . . . . . . . 
            . . . . . a . a . . . . . . . . 
            . . . . . e . a . . . . . . . . 
            . . . . . e . f . . . . . . . . 
            `)
    }
})
game.onUpdateInterval(100, function () {
    saveGame()
})
