"""
Created by: Caleb Andreas
Created on: Ocy 2024
This module is a Micro:bit MicroPython program that scrolls through RGB LED colours.
"""

from microbit import *
from time import sleep

# setup
display.clear()
display.show(Image.HAPPY)


while True:
    if button_a.is_pressed():
        # Red
        display.clear()
        pin13.write_digital(1)
        pin14.write_digital(0)
        pin15.write_digital(0)
        display.scroll("Red")
        sleep(1)

        # Blue
        display.clear()
        pin13.write_digital(0)
        pin14.write_digital(0)
        pin15.write_digital(1)
        display.scroll("Blue")
        sleep(1)

        # Green
        display.clear()
        pin13.write_digital(0)
        pin14.write_digital(1)
        pin15.write_digital(0)
        display.scroll("Green")
        sleep(1)

        # Magenta
        display.clear()
        pin13.write_digital(1)
        pin14.write_digital(0)
        pin15.write_digital(1)
        display.scroll("Magenta")
        sleep(1)

        # Yellow
        display.clear()
        pin13.write_digital(1)
        pin14.write_digital(1)
        pin15.write_digital(0)
        display.scroll("Yellow")
        sleep(1)

        # Cyan
        display.clear()
        pin13.write_digital(0)
        pin14.write_digital(1)
        pin15.write_digital(1)
        display.scroll("Cyan")
        sleep(1)

        # White
        display.clear()
        pin13.write_digital(1)
        pin14.write_digital(1)
        pin15.write_digital(1)
        display.scroll("White")
        sleep(1)

        # Turn off RGB LED
        pin13.write_digital(0)
        pin14.write_digital(0)
        pin15.write_digital(0)

        # Happy face
        display.clear
        display.show(Image.HAPPY)
