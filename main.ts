input.onGesture(Gesture.LogoUp, function () {
    pelotita.change(LedSpriteProperty.Y, -1)
    if (pelotita.get(LedSpriteProperty.Y) < 0) {
        pelotita.set(LedSpriteProperty.Y, 0)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    pelotita.change(LedSpriteProperty.X, 1)
    if (pelotita.get(LedSpriteProperty.X) > 4) {
        pelotita.set(LedSpriteProperty.X, 4)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    pelotita.change(LedSpriteProperty.X, -1)
    if (pelotita.get(LedSpriteProperty.X) < 0) {
        pelotita.set(LedSpriteProperty.X, 0)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    pelotita.change(LedSpriteProperty.Y, 1)
    if (pelotita.get(LedSpriteProperty.Y) > 4) {
        pelotita.set(LedSpriteProperty.Y, 4)
    }
})
let pelotita: game.LedSprite = null
pelotita = game.createSprite(2, 2)
let agujero = game.createSprite(randint(0, 4), randint(0, 4))
agujero.set(LedSpriteProperty.Blink, 200)
game.setScore(0)
game.startCountdown(20000)
basic.forever(function () {
    if (pelotita.isTouching(agujero)) {
        agujero.delete()
        agujero = game.createSprite(randint(0, 4), randint(0, 4))
        agujero.set(LedSpriteProperty.Blink, 200)
        game.addScore(1)
    }
})
