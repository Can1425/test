def on_forever():
    basic.show_string("Hello World.")
    if cbit_传感器类.IR_Sensor(DigitalPin.P0, cbit_传感器类.enIR.GET):
        basic.show_string("Hello!")
        Math.random()
basic.forever(on_forever)
