def on_button_event_p13_down():
    joystickbit.Vibration_Motor(100)
    basic.show_string("F")
    radio.send_string('forward')
#joystickbit.on_button_event(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.DOWN, on_button_event_p13_down)


def on_button_event_p14_down():
    joystickbit.Vibration_Motor(100)
    basic.show_string("B")
    radio.send_string('backward')
#joystickbit.on_button_event(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.DOWN, on_button_event_p14_down)


def on_button_event_p15_down():
    joystickbit.Vibration_Motor(100)
    basic.show_string("R")
    radio.send_string('right')
#joystickbit.on_button_event(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.DOWN, on_button_event_p15_down)


def on_button_event_p12_down():
    joystickbit.Vibration_Motor(100)
    basic.show_string("L")
    radio.send_string('left')
#joystickbit.on_button_event(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.DOWN, on_button_event_p12_down)


def on_button_event_B_down():
    joystickbit.Vibration_Motor(100)
    basic.show_string("S")
    radio.send_string('stop')


joystickbit.Vibration_Motor(100)
joystickbit.init_joystick_bit()


radio.set_group(1)


def on_forever():
    if input.button_is_pressed(Button.B):
        on_button_event_B_down()

    if joystickbit.get_button(joystickbit.JoystickBitPin.P12):
        music.play_tone(330, music.beat(BeatFraction.HALF))
        on_button_event_p12_down()

    if joystickbit.get_button(joystickbit.JoystickBitPin.P13):
        music.play_tone(349, music.beat(BeatFraction.HALF))
        on_button_event_p13_down()

    if joystickbit.get_button(joystickbit.JoystickBitPin.P14):
        music.play_tone(392, music.beat(BeatFraction.HALF))
        on_button_event_p14_down()

    if joystickbit.get_button(joystickbit.JoystickBitPin.P15):
        music.play_tone(440, music.beat(BeatFraction.HALF))
        on_button_event_p15_down()
basic.forever(on_forever)