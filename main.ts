namespace SpriteKind {
    export const Object = SpriteKind.create()
    export const DashOrb = SpriteKind.create()
    export const DeathCam = SpriteKind.create()
    export const Enemy_Projectile = SpriteKind.create()
    export const Chest = SpriteKind.create()
    export const End_Portal = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy_Projectile, SpriteKind.Player, function (sprite33, otherSprite23) {
    Playerwamoushindeiru = true
    timer.after(15, function () {
        game.over(false)
    })
})
function setplayerdirection () {
    animation.stopAnimation(animation.AnimationTypes.All, Player_1)
    if (playerisfacingright == true) {
        Player_1.setImage(img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `)
    } else {
        Player_1.setImage(assets.image`Player facing backward`)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Cutscene == false) {
        if (Screen != 1) {
            if (Player_1.vy == 0) {
                Player_1.vy = -200
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Spike`, function (sprite, location) {
    enemywamoushindeiru = true
    timer.after(15, function () {
        game.over(false)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.DashOrb, function (sprite2, otherSprite) {
    GainDash()
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.End_Portal, function (sprite, otherSprite) {
    animation.runImageAnimation(
    otherSprite,
    assets.animation`Portal open`,
    50,
    true
    )
    timer.after(300, function () {
        game.over(true)
    })
})
function SpawnEnemies () {
    for (let value of tiles.getTilesByType(assets.tile`Spawn Tile`)) {
        Sriram = sprites.create(assets.image`Monkey Facing Right`, SpriteKind.Enemy)
        tiles.placeOnTile(Sriram, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Screen == 1) {
        Screen += 1
        scene.cameraShake(4, 500)
    }
})
function GainDash () {
    animation.runImageAnimation(
    Dash_Orb,
    assets.animation`Orb Gain Animation`,
    75,
    false
    )
    Cutscene = true
    controller.moveSprite(Player_1, 0, 0)
    setplayerdirection()
    story.printText("\"Dash Gained\"", 80, 60)
    story.printText("\"Press SPACE to dash\"", 80, 60)
    timer.after(400, function () {
        Cutscene = false
        controller.moveSprite(Player_1, 75, 0)
        Player_1.vx = 0
    })
    Dash_Unlocked = true
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite32, otherSprite22) {
    enemywamoushindeiru = true
    sprite32.destroy()
    timer.after(50, function () {
        tiles.setTileAt(otherSprite22.tilemapLocation(), assets.tile`Tombstone`)
    })
    otherSprite22.destroy()
    timer.after(500, function () {
        enemywamoushindeiru = false
    })
})
function dash () {
    if (lastdirection == true) {
        controller.moveSprite(Player_1, 0, 0)
        Player_1.vx = 200
        timer.after(70, function () {
            Player_1.vx = 200
        })
        timer.after(140, function () {
            Player_1.vx = 200
        })
        timer.after(210, function () {
            Player_1.vx = 200
        })
        timer.after(280, function () {
            Player_1.vx = 200
        })
        timer.after(350, function () {
            Player_1.vx = 200
        })
        dashing = true
        Player_1.setImage(assets.image`Dash right`)
        timer.after(350, function () {
            controller.moveSprite(Player_1, 75, 0)
            Player_1.vx = 0
            Player_1.setImage(img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `)
            dashing = false
        })
    } else {
        controller.moveSprite(Player_1, 0, 0)
        Player_1.vx = -200
        timer.after(70, function () {
            Player_1.vx = -200
        })
        timer.after(140, function () {
            Player_1.vx = -200
        })
        timer.after(210, function () {
            Player_1.vx = -200
        })
        timer.after(280, function () {
            Player_1.vx = -200
        })
        timer.after(350, function () {
            Player_1.vx = -200
        })
        dashing = true
        timer.after(350, function () {
            controller.moveSprite(Player_1, 75, 0)
            Player_1.vx = 0
            Player_1.setImage(assets.image`Player facing backward`)
            dashing = false
        })
        Player_1.setImage(assets.image`Dashleft`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite5, otherSprite3) {
    if (dashing == false) {
        Playerwamoushindeiru = true
        timer.after(15, function () {
            game.over(false)
        })
    } else {
        enemywamoushindeiru = true
        otherSprite3.destroy()
        timer.after(50, function () {
            tiles.setTileAt(otherSprite3.tilemapLocation(), assets.tile`Tombstone`)
        })
        timer.after(500, function () {
            enemywamoushindeiru = false
        })
    }
})
function attack () {
    if (current_weapon == weapons_list[1]) {
        shot = sprites.create(assets.image`Common Shot`, SpriteKind.Projectile)
        timer.after(100, function () {
            shot.destroy()
        })
        if (lastdirection == true) {
            shot.setVelocity(500, 0)
        } else {
            shot.setVelocity(-500, 0)
        }
    } else if (current_weapon == weapons_list[2]) {
        shot = sprites.create(assets.image`Uncommon Shot`, SpriteKind.Projectile)
        timer.after(150, function () {
            shot.destroy()
        })
        if (lastdirection == true) {
            shot.setVelocity(500, 0)
        } else {
            shot.setVelocity(-500, 0)
        }
    } else {
    	
    }
    shot.setFlag(SpriteFlag.DestroyOnWall, true)
    shot.setFlag(SpriteFlag.AutoDestroy, true)
    shot.setPosition(Player_1.x, Player_1.y)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Chest, function (sprite3, otherSprite2) {
    animation.runImageAnimation(
    Chest_sprite,
    assets.animation`Chest Animation`,
    250,
    false
    )
    Cutscene = true
    controller.moveSprite(Player_1, 0, 0)
    setplayerdirection()
    story.printText("New Weapon Unlocked:    Rapier", sprite3.x, sprite3.y - 30)
    current_weapon = weapons_list[2]
    Cutscene = false
    controller.moveSprite(Player_1, 75, 0)
    Player_1.vx = 0
    Reload_Time = 750
    tiles.setTileAt(Chest_sprite.tilemapLocation(), assets.tile`Opened Chest`)
    Chest_sprite.destroy()
})
function EnemyShot (Enemy_shooter: Sprite) {
    if (Playerwamoushindeiru == false) {
        if (Screen == 2) {
            if (enemywamoushindeiru == false) {
                shot = sprites.create(assets.image`Monkey Shot`, SpriteKind.Enemy_Projectile)
                shot.setPosition(Enemy_shooter.x, Enemy_shooter.y)
                if (enemywamoushindeiru == false) {
                    if (Player_1.tilemapLocation().column > Enemy_shooter.tilemapLocation().column) {
                        shot.setVelocity(150, 0)
                        Enemy_shooter.setImage(assets.image`Monkey Facing Right`)
                    } else {
                        shot.setVelocity(-150, 0)
                        Enemy_shooter.setImage(assets.image`Monkey Facing Left`)
                    }
                    shot.setFlag(SpriteFlag.DestroyOnWall, true)
                    shot.setFlag(SpriteFlag.AutoDestroy, true)
                }
            }
        }
    }
}
let downdash = false
let attacking = false
let playerstill = false
let shot: Sprite = null
let dashing = false
let Sriram: Sprite = null
let enemywamoushindeiru = false
let playerisfacingright = false
let Playerwamoushindeiru = false
let Player_1: Sprite = null
let Chest_sprite: Sprite = null
let End_Portal: Sprite = null
let Dash_Orb: Sprite = null
let lastdirection = false
let Dash_Unlocked = false
let Screen = 0
let Cutscene = false
let Reload_Time = 0
let current_weapon = ""
let weapons_list: string[] = []
weapons_list = [
"fist",
"sword",
"rapier",
"broadsword",
"excaliber"
]
current_weapon = weapons_list[1]
Reload_Time = 1000
Cutscene = true
Screen = 1
Dash_Unlocked = false
lastdirection = true
story.setSoundEnabled(false)
while (Screen == 1) {
    scene.setBackgroundImage(assets.image`Start Screen`)
    story.printText("Press SPACE to start!", 80, 60)
}
if (Screen == 2) {
    scene.setBackgroundImage(assets.image`Level 1 Background`)
    tiles.setCurrentTilemap(tilemap`level1 tilemap`)
    Dash_Orb = sprites.create(assets.image`Dash Orb`, SpriteKind.DashOrb)
    End_Portal = sprites.create(assets.image`End Portal Sprite`, SpriteKind.End_Portal)
    Chest_sprite = sprites.create(assets.image`Closed Chest`, SpriteKind.Chest)
    tiles.placeOnTile(End_Portal, tiles.getTileLocation(49, 4))
    tiles.placeOnTile(Chest_sprite, tiles.getTileLocation(49, 10))
    tiles.placeOnTile(Dash_Orb, tiles.getTileLocation(0, 6))
    Player_1 = sprites.create(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Player)
    Player_1.ay = 550
    scene.cameraFollowSprite(Player_1)
    tiles.placeOnTile(Player_1, tiles.getTileLocation(0, 16))
    SpawnEnemies()
    story.printText("\"Level 1 - Start\"", 80, 200)
    Cutscene = false
    controller.moveSprite(Player_1, 75, 0)
}
game.onUpdate(function () {
    if (Cutscene == false) {
        if (Player_1.vx < 0) {
            playerisfacingright = false
            playerstill = false
            lastdirection = false
        }
        if (Player_1.vx > 0) {
            playerisfacingright = true
            playerstill = false
            lastdirection = true
        }
        if (Player_1.vx == 0) {
            playerstill = true
        }
        if (controller.right.isPressed() == true) {
            if (dashing == false) {
                if (attacking == false) {
                    if (downdash == false) {
                        timer.throttle("move", 300, function () {
                            animation.runImageAnimation(
                            Player_1,
                            assets.animation`Run forward animation`,
                            75,
                            true
                            )
                        })
                    }
                }
            }
        } else if (controller.left.isPressed() == true) {
            if (dashing == false) {
                if (attacking == false) {
                    if (downdash == false) {
                        timer.throttle("move", 300, function () {
                            animation.runImageAnimation(
                            Player_1,
                            assets.animation`Run Backward animation`,
                            75,
                            true
                            )
                        })
                    }
                }
            }
        } else if (controller.B.isPressed() == true) {
            timer.throttle("attack", Reload_Time, function () {
                attacking = true
                if (lastdirection == true) {
                    animation.runImageAnimation(
                    Player_1,
                    assets.animation`Attack Common Sword Right`,
                    100,
                    false
                    )
                    attack()
                    timer.after(300, function () {
                        Player_1.setImage(img`
                            . . . . . . f f f f f f . . . . 
                            . . . . f f e e e e f 2 f . . . 
                            . . . f f e e e e f 2 2 2 f . . 
                            . . . f e e e f f e e e e f . . 
                            . . . f f f f e e 2 2 2 2 e f . 
                            . . . f e 2 2 2 f f f f e 2 f . 
                            . . f f f f f f f e e e f f f . 
                            . . f f e 4 4 e b f 4 4 e e f . 
                            . . f e e 4 d 4 1 f d d e f . . 
                            . . . f e e e 4 d d d d f . . . 
                            . . . . f f e e 4 4 4 e f . . . 
                            . . . . . 4 d d e 2 2 2 f . . . 
                            . . . . . e d d e 2 2 2 f . . . 
                            . . . . . f e e f 4 5 5 f . . . 
                            . . . . . . f f f f f f . . . . 
                            . . . . . . . f f f . . . . . . 
                            `)
                    })
                    timer.after(1000, function () {
                        attacking = false
                    })
                } else {
                    animation.runImageAnimation(
                    Player_1,
                    assets.animation`Attack Common Sword Left`,
                    100,
                    false
                    )
                    attack()
                    timer.after(300, function () {
                        Player_1.setImage(assets.image`Player facing backward`)
                    })
                    timer.after(1000, function () {
                        attacking = false
                    })
                }
            })
        } else if (controller.down.isPressed() == true && Player_1.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`)) {
            Player_1.setImage(assets.image`Downward Strike Sprite Image`)
            controller.moveSprite(Player_1, 0, 0)
            downdash = true
            dashing = true
            Player_1.setVelocity(0, 400)
        } else if (lastdirection == true) {
            if (attacking == false) {
                if (dashing == false) {
                    Player_1.setImage(img`
                        . . . . . . f f f f f f . . . . 
                        . . . . f f e e e e f 2 f . . . 
                        . . . f f e e e e f 2 2 2 f . . 
                        . . . f e e e f f e e e e f . . 
                        . . . f f f f e e 2 2 2 2 e f . 
                        . . . f e 2 2 2 f f f f e 2 f . 
                        . . f f f f f f f e e e f f f . 
                        . . f f e 4 4 e b f 4 4 e e f . 
                        . . f e e 4 d 4 1 f d d e f . . 
                        . . . f e e e 4 d d d d f . . . 
                        . . . . f f e e 4 4 4 e f . . . 
                        . . . . . 4 d d e 2 2 2 f . . . 
                        . . . . . e d d e 2 2 2 f . . . 
                        . . . . . f e e f 4 5 5 f . . . 
                        . . . . . . f f f f f f . . . . 
                        . . . . . . . f f f . . . . . . 
                        `)
                }
            }
        } else if (attacking == false) {
            if (dashing == false) {
                Player_1.setImage(assets.image`Player facing backward`)
            }
        } else {
        	
        }
        if (controller.A.isPressed() == true) {
            if (Screen == 1) {
                Screen += 1
                scene.cameraShake(4, 500)
            } else if (Dash_Unlocked == true) {
                timer.throttle("dash", 500, function () {
                    dash()
                })
            }
        }
    }
    if (dashing == true) {
        if (downdash == false) {
            if (lastdirection == true) {
                Player_1.setImage(assets.image`Dash right`)
            } else {
                Player_1.setImage(assets.image`Dashleft`)
            }
        }
    }
})
game.onUpdate(function () {
    if (downdash) {
        if (Player_1.isHittingTile(CollisionDirection.Bottom)) {
            dashing = false
            controller.moveSprite(Player_1, 75, 0)
            downdash = false
            if (lastdirection == true) {
                Player_1.setImage(img`
                    . . . . . . f f f f f f . . . . 
                    . . . . f f e e e e f 2 f . . . 
                    . . . f f e e e e f 2 2 2 f . . 
                    . . . f e e e f f e e e e f . . 
                    . . . f f f f e e 2 2 2 2 e f . 
                    . . . f e 2 2 2 f f f f e 2 f . 
                    . . f f f f f f f e e e f f f . 
                    . . f f e 4 4 e b f 4 4 e e f . 
                    . . f e e 4 d 4 1 f d d e f . . 
                    . . . f e e e 4 d d d d f . . . 
                    . . . . f f e e 4 4 4 e f . . . 
                    . . . . . 4 d d e 2 2 2 f . . . 
                    . . . . . e d d e 2 2 2 f . . . 
                    . . . . . f e e f 4 5 5 f . . . 
                    . . . . . . f f f f f f . . . . 
                    . . . . . . . f f f . . . . . . 
                    `)
            } else {
                Player_1.setImage(assets.image`Player facing backward`)
            }
        }
    }
})
game.onUpdate(function () {
    if (true) {
    	
    }
})
game.onUpdateInterval(randint(750, 1250), function () {
    for (let value3 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (randint(5, 6) != 6) {
            if (Playerwamoushindeiru == false) {
                if (enemywamoushindeiru == false) {
                    if (Player_1.tilemapLocation().column > value3.tilemapLocation().column) {
                        value3.setImage(assets.image`Monkey Facing Right`)
                    } else {
                        value3.setImage(assets.image`Monkey Facing Left`)
                    }
                    if (Player_1.tilemapLocation().column > value3.tilemapLocation().column) {
                        animation.runImageAnimation(
                        value3,
                        assets.animation`Monkey Shoot Left0`,
                        50,
                        false
                        )
                        timer.after(300, function () {
                            EnemyShot(value3)
                            value3.setImage(assets.image`Monkey Facing Right`)
                        })
                    } else {
                        animation.runImageAnimation(
                        value3,
                        assets.animation`Monkey Shoot Left`,
                        50,
                        false
                        )
                        timer.after(300, function () {
                            EnemyShot(value3)
                            value3.setImage(assets.image`Monkey Facing Left`)
                        })
                    }
                }
            }
        }
    }
})
