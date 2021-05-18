namespace SpriteKind {
    export const Key = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(13, 4), false)
    tiles.setWallAt(tiles.getTileLocation(13, 5), false)
    tiles.setTileAt(tiles.getTileLocation(13, 4), sprites.castle.tileGrass2)
    tiles.setTileAt(tiles.getTileLocation(13, 5), sprites.castle.tileGrass2)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . . 3 . 3 . . . . . . 
        . . . . . . 3 . . 3 . . . . . . 
        . . . . . . 3 . . 3 . . . . . . 
        . . . . . . 3 . . 3 . . . . . . 
        . . . . . . 3 . . 3 . . . . . . 
        . . . . . . 3 . . 3 . . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . . . 3 . . . . . . . . . 
        . . . . . . 3 3 3 3 3 . . . . . 
        . . . . . . 3 . . . 3 3 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . . . . . . . . 3 3 . . . . 
        . . . . . . . . . . 3 . . . . . 
        `, mySprite, -100, 50)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.splash("Congrats you have finished the easy maze! Push A to return to the start to try again to find the hard maze!")
    mySprite.setPosition(70, 70)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.splash("Congrats you have finished the hard maze! Push A to go to the next maze!")
    tiles.placeOnTile(mySprite, tiles.getTileLocation(44, 3))
})
let myEnemy: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . f f f f . . . . . 
    . . . . . f f f . . f . . . . . 
    . . . . . f . f . f f f . . . . 
    . . . . f f . . . . . f . . . . 
    . . . . f . . f f . f f . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . f f . . f . . . . . . 
    . . . . f f . . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(5000, function () {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 . . . . . . . 8 8 8 . . 
        . . 8 . . . . . . . . . . 8 8 . 
        . 8 8 . . 8 8 . . 8 8 . . . 8 . 
        8 8 . . . 8 8 . . 8 8 . . . 8 . 
        8 . . . . . . . . . . . . . 8 . 
        8 8 . . . 8 . . . . 8 8 . . 8 . 
        . 8 . . . 8 8 8 8 8 8 . . . 8 . 
        . . 8 . . . . . . . . . . 8 8 . 
        . . 8 8 8 . . . 8 8 8 8 8 8 . . 
        . . . . 8 8 8 8 . . . 8 8 . . . 
        . . . . 8 8 . . . . . 8 8 . . . 
        . . . . 8 8 . . . . . 8 8 . . . 
        . . . . 8 8 . . . . . 8 8 . . . 
        . . . 8 8 8 8 . . . 8 8 8 8 . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 50)
})
