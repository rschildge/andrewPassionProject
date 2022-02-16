input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("forward")
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
        servos.P0.run(-50)
        servos.P1.run(50)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (receivedString == "left") {
        servos.P0.run(-50)
        servos.P1.stop()
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (receivedString == "right") {
        servos.P0.stop()
        servos.P1.run(50)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        servos.P0.stop()
        servos.P1.stop()
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("stop")
    basic.showIcon(IconNames.No)
})
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
