// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1 tilemap":
            case "level1":return tiles.createTilemap(hex`3200140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d000d000e00000000000000000000000000000000000000000000000000000000000000000005000000000000000000000005000505050000000d0000000000000000000000000000000000000d00000000000000000000050000000500000d000005000000000000060106020000000000000000000005000000050000000500000500000000000d0000000000000000050000000000000000000000000000000d00000d000d000000000000000000000000000000000000000500000000050000000000000000000000000000000000000201020601020201000000000000000000000000000000050000000000000d0000000000000000000000000000000000000000000000000000000000000000000000000000000d0000000000000005050500000000000000000000000d000000000000000000000000000000000000000000000000000005050000000000000000000000000000000000000001010101010000000000000000000000000000000000000d0000050500000000000d0000000000000000000000000000000d01030103040000000000000000000000000000000000050500000000000000000505000000000d0000000000000d00000d010102010102000000000000000d00000d00000d000000000000000000000000000000000000050500000000000101000d010104070403070000000000000101010301010301010100000000000000000000000000000000000005000000000204010103010201070107000000000000010201070101030102070000000000000000000000000000000000000000000005010707070107010704070105050505050505050707050501070705000000000000000000000000000000000000000000000007010301070208080908090b0809080b0a0b09080908080908090b000000000000000000000000000000000000000000000008080809080908080809080b0809080b0a0b09080908080908090b0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0808080908090808080908`, img`
..................................................
..................................................
..................................................
..................................................
..................................................
.................................2...........2.222
.................................2...2.....2......
2222..........2...2...2..2..............2.........
...............................2....2.............
.....22222222...............2.....................
.................................222..............
........................22...................22222
.....................22......................22222
.................22........22...............222222
................................22.....22..2222222
......2222222222..................2....22222222222
......2222222222......................222222222222
2222222222222222.......................22222222222
2222222222222222.......................22222222222
2222222222222222.......................22222222222
`, [myTiles.transparency16,sprites.dungeon.floorLight4,sprites.dungeon.floorLight2,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight1,sprites.dungeon.floorLight0,sprites.dungeon.floorLight5,sprites.dungeon.floorMixed,sprites.dungeon.floorDark0,sprites.dungeon.floorDark2,sprites.dungeon.floorDark1,sprites.dungeon.floorDark5,myTiles.tile1,myTiles.tile2,myTiles.tile5], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Spike":
            case "tile1":return tile1;
            case "Spawn Tile":
            case "tile2":return tile2;
            case "Opened Chest":
            case "tile3":return tile3;
            case "Tombstone":
            case "tile4":return tile4;
            case "white tile":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
