controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
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
