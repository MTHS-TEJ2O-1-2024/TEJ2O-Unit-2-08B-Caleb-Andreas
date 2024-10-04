/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Caleb Andreas
 * Created on: Oct 2024
 * This program scrolls through RGB LED colours
*/

// Happy face at start
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// RGB LED scroll through 7 colours when A button pressed.
input.onButtonPressed(Button.A, function() {
    //Red
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString("Red")
    basic.pause(1000)
    basic.clearScreen()

    //Blue
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.showString("Blue")
    basic.pause(1000)
    basic.clearScreen()

    //Green
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.showString("Green")
    basic.pause(1000)
    basic.clearScreen()

    //Magenta
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString("Magenta")
    basic.pause(1000)
    basic.clearScreen()

    //Yellow
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.showString("Yellow")
    basic.pause(1000)
    basic.clearScreen()

    //Cyan
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString("Cyan")
    basic.pause(1000)
    basic.clearScreen()

    //White
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString("White")
    basic.pause(1000)
    basic.clearScreen()

    // Turn off RGB LED
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // Happy face
    basic.showIcon(IconNames.Happy)
})
