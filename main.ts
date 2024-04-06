joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function on_button_event_p13_down() {
    joystickbit.Vibration_Motor(100)
    basic.showString("F")
    radio.sendString("forward")
})
// radio.send_message('backward')
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function on_button_event_p14_down() {
    joystickbit.Vibration_Motor(100)
    basic.showString("B")
})
// def on_button_event_p12_down():
//     joystickbit.Vibration_Motor(100)
//     basic.show_string("L")
//     radio.send_string("left")
// joystickbit.on_button_event(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.DOWN, on_button_event_p12_down)
// def on_button_event_p15_down():
//     joystickbit.Vibration_Motor(100)
//     basic.show_string("R")
//     #radio.send_message('right')
// joystickbit.on_button_event(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.DOWN, on_button_event_p15_down)
function on_button_event_B_down() {
    joystickbit.Vibration_Motor(100)
    basic.showString("S")
}

// radio.send_message('stop')
joystickbit.Vibration_Motor(100)
joystickbit.initJoystickBit()
radio.setGroup(1)
basic.forever(function on_forever() {
    if (input.buttonIsPressed(Button.B)) {
        on_button_event_B_down()
    }
    
})
