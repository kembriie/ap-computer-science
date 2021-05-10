namespace SpriteKind {
    export const Key = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(13, 2), true)
    tiles.setWallAt(tiles.getTileLocation(13, 3), true)
    tiles.setWallAt(tiles.getTileLocation(13, 4), true)
    tiles.setWallAt(tiles.getTileLocation(13, 5), true)
    tiles.setWallAt(tiles.getTileLocation(13, 6), true)
})
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
        . . . 7 7 7 7 7 7 7 7 7 . . . . 
        . . 7 7 . . . . . . . 7 7 7 . . 
        . . 7 . . . . . . . . . . 7 7 . 
        . 7 7 . . 7 7 . . 7 7 . . . 7 . 
        7 7 . . . 7 7 . . 7 7 . . . 7 . 
        7 . . . . . . . . . . . . . 7 . 
        7 7 . . . 7 . . . . 7 7 . . 7 . 
        . 7 . . . 7 7 7 7 7 7 . . . 7 . 
        . . 7 . . . . . . . . . . 7 7 . 
        . . 7 7 7 . . . 7 7 7 7 7 7 . . 
        . . . . 7 7 7 7 . . . 7 7 . . . 
        . . . . 7 7 . . . . . 7 7 . . . 
        . . . . 7 7 . . . . . 7 7 . . . 
        . . . . 7 7 . . . . . 7 7 . . . 
        . . . 7 7 7 7 . . . 7 7 7 7 . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 50)
})
