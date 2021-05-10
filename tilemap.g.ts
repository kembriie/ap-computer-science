// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000101010101010101010101010101010101010101010101010101010101010101010101010101010103040404040c0101010101010101010105020606060701010101010101010101020906060607010101010101010808080808060606070101010101010108080808080b0a0a0b01010101010101080808080807010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010e0e0e0e0101010101010101010101010e0e0d0e0101010101010101010101010e0e0e0e010101010101010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.dungeon.stairLarge,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.floorDark0,sprites.dungeon.purpleOuterEast0,sprites.dungeon.floorLight0,sprites.dungeon.stairSouth,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerNorthEast,myTiles.tile1,sprites.castle.tileGrass1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
