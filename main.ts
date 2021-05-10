namespace SpriteKind {
    export const Key = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(13, 2), true)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
	
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
