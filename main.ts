basic.forever(function on_forever() {
    basic.showString("Hello World.")
    if (cbit_传感器类.IR_Sensor(DigitalPin.P0, cbit_传感器类.enIR.Get)) {
        basic.showString("Hello!")
        Math.random()
    }
    
})
