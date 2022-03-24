@namespace
class SpriteKind:
    Object = SpriteKind.create()
    DashOrb = SpriteKind.create()
    DeathCam = SpriteKind.create()
    Enemy_Projectile = SpriteKind.create()
    Chest = SpriteKind.create()
    End_Portal = SpriteKind.create()

def on_on_overlap(sprite33, otherSprite23):
    global Playerwamoushindeiru
    Playerwamoushindeiru = True
    
    def on_after():
        game.over(False)
    timer.after(15, on_after)
    
sprites.on_overlap(SpriteKind.Enemy_Projectile,
    SpriteKind.player,
    on_on_overlap)

def setplayerdirection():
    animation.stop_animation(animation.AnimationTypes.ALL, Player_1)
    if playerisfacingright == True:
        Player_1.set_image(img("""
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
        """))
    else:
        Player_1.set_image(assets.image("""
            Player facing backward
        """))

def on_up_pressed():
    if Cutscene == False:
        if Screen != 1:
            if Player_1.vy == 0:
                Player_1.vy = -200
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_overlap_tile(sprite, location):
    global enemywamoushindeiru
    enemywamoushindeiru = True
    
    def on_after2():
        game.over(False)
    timer.after(15, on_after2)
    
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        Spike
    """),
    on_overlap_tile)

def on_on_overlap2(sprite2, otherSprite):
    GainDash()
    otherSprite.destroy()
sprites.on_overlap(SpriteKind.player, SpriteKind.DashOrb, on_on_overlap2)

def on_on_overlap3(sprite3, otherSprite2):
    animation.run_image_animation(otherSprite2,
        assets.animation("""
            Portal open
        """),
        50,
        True)
    
    def on_after3():
        game.over(True)
    timer.after(300, on_after3)
    
sprites.on_overlap(SpriteKind.player, SpriteKind.End_Portal, on_on_overlap3)

def SpawnEnemies():
    global Sriram
    for value in tiles.get_tiles_by_type(assets.tile("""
        Spawn Tile
    """)):
        Sriram = sprites.create(assets.image("""
                Monkey Facing Right
            """),
            SpriteKind.enemy)
        tiles.place_on_tile(Sriram, value)
        tiles.set_tile_at(value, assets.tile("""
            transparency16
        """))

def on_a_pressed():
    global Screen
    if Screen == 1:
        Screen += 1
        scene.camera_shake(4, 500)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def GainDash():
    global Cutscene, Dash_Unlocked
    animation.run_image_animation(Dash_Orb,
        assets.animation("""
            Orb Gain Animation
        """),
        75,
        False)
    Cutscene = True
    controller.move_sprite(Player_1, 0, 0)
    setplayerdirection()
    story.print_text("\"Dash Gained\"", 80, 60)
    story.print_text("\"Press SPACE to dash\"", 80, 60)
    
    def on_after4():
        global Cutscene
        Cutscene = False
        controller.move_sprite(Player_1, 75, 0)
        Player_1.vx = 0
    timer.after(400, on_after4)
    
    Dash_Unlocked = True

def on_on_overlap4(sprite32, otherSprite22):
    global enemywamoushindeiru
    enemywamoushindeiru = True
    sprite32.destroy()
    
    def on_after5():
        tiles.set_tile_at(otherSprite22.tilemap_location(),
            assets.tile("""
                Tombstone
            """))
    timer.after(50, on_after5)
    
    otherSprite22.destroy()
    
    def on_after6():
        global enemywamoushindeiru
        enemywamoushindeiru = False
    timer.after(500, on_after6)
    
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap4)

def dash():
    global dashing
    if lastdirection == True:
        controller.move_sprite(Player_1, 0, 0)
        Player_1.vx = 200
        
        def on_after7():
            Player_1.vx = 200
        timer.after(70, on_after7)
        
        
        def on_after8():
            Player_1.vx = 200
        timer.after(140, on_after8)
        
        
        def on_after9():
            Player_1.vx = 200
        timer.after(210, on_after9)
        
        
        def on_after10():
            Player_1.vx = 200
        timer.after(280, on_after10)
        
        
        def on_after11():
            Player_1.vx = 200
        timer.after(350, on_after11)
        
        dashing = True
        Player_1.set_image(assets.image("""
            Dash right
        """))
        
        def on_after12():
            global dashing
            controller.move_sprite(Player_1, 75, 0)
            Player_1.vx = 0
            Player_1.set_image(img("""
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
            """))
            dashing = False
        timer.after(350, on_after12)
        
    else:
        controller.move_sprite(Player_1, 0, 0)
        Player_1.vx = -200
        
        def on_after13():
            Player_1.vx = -200
        timer.after(70, on_after13)
        
        
        def on_after14():
            Player_1.vx = -200
        timer.after(140, on_after14)
        
        
        def on_after15():
            Player_1.vx = -200
        timer.after(210, on_after15)
        
        
        def on_after16():
            Player_1.vx = -200
        timer.after(280, on_after16)
        
        
        def on_after17():
            Player_1.vx = -200
        timer.after(350, on_after17)
        
        dashing = True
        
        def on_after18():
            global dashing
            controller.move_sprite(Player_1, 75, 0)
            Player_1.vx = 0
            Player_1.set_image(assets.image("""
                Player facing backward
            """))
            dashing = False
        timer.after(350, on_after18)
        
        Player_1.set_image(assets.image("""
            Dashleft
        """))

def on_on_overlap5(sprite5, otherSprite3):
    global Playerwamoushindeiru, enemywamoushindeiru
    if dashing == False:
        Playerwamoushindeiru = True
        
        def on_after19():
            game.over(False)
        timer.after(15, on_after19)
        
    else:
        enemywamoushindeiru = True
        otherSprite3.destroy()
        
        def on_after20():
            tiles.set_tile_at(otherSprite3.tilemap_location(),
                assets.tile("""
                    Tombstone
                """))
        timer.after(50, on_after20)
        
        
        def on_after21():
            global enemywamoushindeiru
            enemywamoushindeiru = False
        timer.after(500, on_after21)
        
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap5)

def attack():
    global shot
    if current_weapon == weapons_list[1]:
        shot = sprites.create(assets.image("""
            Common Shot
        """), SpriteKind.projectile)
        
        def on_after22():
            shot.destroy()
        timer.after(100, on_after22)
        
        if lastdirection == True:
            shot.set_velocity(500, 0)
        else:
            shot.set_velocity(-500, 0)
    elif current_weapon == weapons_list[2]:
        shot = sprites.create(assets.image("""
                Uncommon Shot
            """),
            SpriteKind.projectile)
        
        def on_after23():
            shot.destroy()
        timer.after(150, on_after23)
        
        if lastdirection == True:
            shot.set_velocity(500, 0)
        else:
            shot.set_velocity(-500, 0)
    else:
        pass
    shot.set_flag(SpriteFlag.DESTROY_ON_WALL, True)
    shot.set_flag(SpriteFlag.AUTO_DESTROY, True)
    shot.set_position(Player_1.x, Player_1.y)

def on_on_overlap6(sprite34, otherSprite24):
    global Cutscene, current_weapon, Reload_Time
    animation.run_image_animation(Chest_sprite,
        assets.animation("""
            Chest Animation
        """),
        250,
        False)
    Cutscene = True
    controller.move_sprite(Player_1, 0, 0)
    setplayerdirection()
    story.print_text("New Weapon Unlocked:    Rapier",
        sprite34.x,
        sprite34.y - 30)
    current_weapon = weapons_list[2]
    Cutscene = False
    controller.move_sprite(Player_1, 75, 0)
    Player_1.vx = 0
    Reload_Time = 750
    tiles.set_tile_at(Chest_sprite.tilemap_location(),
        assets.tile("""
            Opened Chest
        """))
    Chest_sprite.destroy()
sprites.on_overlap(SpriteKind.player, SpriteKind.Chest, on_on_overlap6)

def EnemyShot(Enemy_shooter: Sprite):
    global shot
    if Playerwamoushindeiru == False:
        if Screen == 2:
            if enemywamoushindeiru == False:
                shot = sprites.create(assets.image("""
                        Monkey Shot
                    """),
                    SpriteKind.Enemy_Projectile)
                shot.set_position(Enemy_shooter.x, Enemy_shooter.y)
                if enemywamoushindeiru == False:
                    if Player_1.tilemap_location().column > Enemy_shooter.tilemap_location().column:
                        shot.set_velocity(150, 0)
                        Enemy_shooter.set_image(assets.image("""
                            Monkey Facing Right
                        """))
                    else:
                        shot.set_velocity(-150, 0)
                        Enemy_shooter.set_image(assets.image("""
                            Monkey Facing Left
                        """))
                    shot.set_flag(SpriteFlag.DESTROY_ON_WALL, True)
                    shot.set_flag(SpriteFlag.AUTO_DESTROY, True)
downdash = False
attacking = False
playerstill = False
shot: Sprite = None
dashing = False
Sriram: Sprite = None
enemywamoushindeiru = False
playerisfacingright = False
Playerwamoushindeiru = False
Player_1: Sprite = None
Chest_sprite: Sprite = None
End_Portal2: Sprite = None
Dash_Orb: Sprite = None
lastdirection = False
Dash_Unlocked = False
Screen = 0
Cutscene = False
Reload_Time = 0
current_weapon = ""
weapons_list: List[str] = []
weapons_list = ["fist", "sword", "rapier", "broadsword", "excaliber"]
current_weapon = weapons_list[1]
Reload_Time = 1000
Cutscene = True
Screen = 1
Dash_Unlocked = False
lastdirection = True
story.set_sound_enabled(False)
while Screen == 1:
    scene.set_background_image(assets.image("""
        Start Screen
    """))
    story.print_text("Press SPACE to start!", 80, 60)
if Screen == 2:
    scene.set_background_image(assets.image("""
        Level 1 Background
    """))
    tiles.set_current_tilemap(tilemap("""
        level1 tilemap
    """))
    Dash_Orb = sprites.create(assets.image("""
        Dash Orb
    """), SpriteKind.DashOrb)
    End_Portal2 = sprites.create(assets.image("""
            End Portal Sprite
        """),
        SpriteKind.End_Portal)
    Chest_sprite = sprites.create(assets.image("""
        Closed Chest
    """), SpriteKind.Chest)
    tiles.place_on_tile(End_Portal2, tiles.get_tile_location(49, 4))
    tiles.place_on_tile(Chest_sprite, tiles.get_tile_location(49, 10))
    tiles.place_on_tile(Dash_Orb, tiles.get_tile_location(0, 6))
    Player_1 = sprites.create(img("""
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
        """),
        SpriteKind.player)
    Player_1.ay = 550
    scene.camera_follow_sprite(Player_1)
    tiles.place_on_tile(Player_1, tiles.get_tile_location(0, 16))
    SpawnEnemies()
    story.print_text("\"Level 1 - Start\"", 80, 200)
    Cutscene = False
    controller.move_sprite(Player_1, 75, 0)

def on_on_update():
    global playerisfacingright, playerstill, lastdirection, downdash, dashing, Screen
    if Cutscene == False:
        if Player_1.vx < 0:
            playerisfacingright = False
            playerstill = False
            lastdirection = False
        if Player_1.vx > 0:
            playerisfacingright = True
            playerstill = False
            lastdirection = True
        if Player_1.vx == 0:
            playerstill = True
        if controller.right.is_pressed() == True:
            if dashing == False:
                if attacking == False:
                    if downdash == False:
                        
                        def on_throttle():
                            animation.run_image_animation(Player_1,
                                assets.animation("""
                                    Run forward animation
                                """),
                                75,
                                True)
                        timer.throttle("move", 300, on_throttle)
                        
        elif controller.left.is_pressed() == True:
            if dashing == False:
                if attacking == False:
                    if downdash == False:
                        
                        def on_throttle2():
                            animation.run_image_animation(Player_1,
                                assets.animation("""
                                    Run Backward animation
                                """),
                                75,
                                True)
                        timer.throttle("move", 300, on_throttle2)
                        
        elif controller.B.is_pressed() == True:
            
            def on_throttle3():
                global attacking
                attacking = True
                if lastdirection == True:
                    animation.run_image_animation(Player_1,
                        assets.animation("""
                            Attack Common Sword Right
                        """),
                        100,
                        False)
                    attack()
                    
                    def on_after24():
                        Player_1.set_image(img("""
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
                        """))
                    timer.after(300, on_after24)
                    
                    
                    def on_after25():
                        global attacking
                        attacking = False
                    timer.after(1000, on_after25)
                    
                else:
                    animation.run_image_animation(Player_1,
                        assets.animation("""
                            Attack Common Sword Left
                        """),
                        100,
                        False)
                    attack()
                    
                    def on_after26():
                        Player_1.set_image(assets.image("""
                            Player facing backward
                        """))
                    timer.after(300, on_after26)
                    
                    
                    def on_after27():
                        global attacking
                        attacking = False
                    timer.after(1000, on_after27)
                    
            timer.throttle("attack", Reload_Time, on_throttle3)
            
        elif controller.down.is_pressed() == True and Player_1.tile_kind_at(TileDirection.BOTTOM,
            assets.tile("""
                transparency16
            """)):
            Player_1.set_image(assets.image("""
                Downward Strike Sprite Image
            """))
            controller.move_sprite(Player_1, 0, 0)
            downdash = True
            dashing = True
            Player_1.set_velocity(0, 200)
        elif lastdirection == True:
            if attacking == False:
                if dashing == False:
                    Player_1.set_image(img("""
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
                    """))
        elif attacking == False:
            if dashing == False:
                Player_1.set_image(assets.image("""
                    Player facing backward
                """))
        else:
            pass
        if controller.A.is_pressed() == True:
            if Screen == 1:
                Screen += 1
                scene.camera_shake(4, 500)
            elif Dash_Unlocked == True:
                
                def on_throttle4():
                    dash()
                timer.throttle("dash", 500, on_throttle4)
                
    if dashing == True:
        if downdash == False:
            if lastdirection == True:
                Player_1.set_image(assets.image("""
                    Dash right
                """))
            else:
                Player_1.set_image(assets.image("""
                    Dashleft
                """))
game.on_update(on_on_update)

def on_on_update2():
    global dashing
    if downdash:
        if Player_1.is_hitting_tile(CollisionDirection.BOTTOM):
            dashing = False
            controller.move_sprite(Player_1, 75, 0)
            if lastdirection == True:
                Player_1.set_image(img("""
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
                """))
            else:
                Player_1.set_image(assets.image("""
                    Player facing backward
                """))
game.on_update(on_on_update2)

def on_update_interval():
    for value3 in sprites.all_of_kind(SpriteKind.enemy):
        if randint(5, 6) != 6:
            if Playerwamoushindeiru == False:
                if enemywamoushindeiru == False:
                    if Player_1.tilemap_location().column > value3.tilemap_location().column:
                        value3.set_image(assets.image("""
                            Monkey Facing Right
                        """))
                    else:
                        value3.set_image(assets.image("""
                            Monkey Facing Left
                        """))
                    if Player_1.tilemap_location().column > value3.tilemap_location().column:
                        animation.run_image_animation(value3,
                            assets.animation("""
                                Monkey Shoot Left0
                            """),
                            50,
                            False)
                        
                        def on_after28():
                            EnemyShot(value3)
                            value3.set_image(assets.image("""
                                Monkey Facing Right
                            """))
                        timer.after(300, on_after28)
                        
                    else:
                        animation.run_image_animation(value3,
                            assets.animation("""
                                Monkey Shoot Left
                            """),
                            50,
                            False)
                        
                        def on_after29():
                            EnemyShot(value3)
                            value3.set_image(assets.image("""
                                Monkey Facing Left
                            """))
                        timer.after(300, on_after29)
                        
game.on_update_interval(randint(750, 1250), on_update_interval)
