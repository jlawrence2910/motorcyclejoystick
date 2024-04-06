function on_button_event_p13_down() {
    joystickbit.Vibration_Motor(100)
    basic.showString("F")
    radio.sendString("forward")
}

// joystickbit.on_button_event(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.DOWN, on_button_event_p13_down)
function on_button_event_p14_down() {
    joystickbit.Vibration_Motor(100)
    basic.showString("B")
    radio.sendString("backward")
}

// joystickbit.on_button_event(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.DOWN, on_button_event_p14_down)
function on_button_event_p15_down() {
    joystickbit.Vibration_Motor(100)
    basic.showString("R")
    radio.sendString("right")
}

// joystickbit.on_button_event(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.DOWN, on_button_event_p15_down)
function on_button_event_p12_down() {
    joystickbit.Vibration_Motor(100)
    basic.showString("L")
    radio.sendString("left")
}

// joystickbit.on_button_event(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.DOWN, on_button_event_p12_down)
function on_button_event_B_down() {
    joystickbit.Vibration_Motor(100)
    basic.showString("S")
    radio.sendString("stop")
}

joystickbit.Vibration_Motor(100)
joystickbit.initJoystickBit()
radio.setGroup(1)
basic.forever(function on_forever() {
    if (input.buttonIsPressed(Button.B)) {
        on_button_event_B_down()
    }
    
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        music.playTone(330, music.beat(BeatFraction.Half))
        on_button_event_p12_down()
    }
    
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        music.playTone(349, music.beat(BeatFraction.Half))
        on_button_event_p13_down()
    }
    
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        music.playTone(392, music.beat(BeatFraction.Half))
        on_button_event_p14_down()
    }
    
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        music.playTone(440, music.beat(BeatFraction.Half))
        on_button_event_p15_down()
    }
    
})
