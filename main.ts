let right_distance = 0
let left_distance = 0
robotbit.Servo(robotbit.Servos.S1, 90)
basic.pause(1000)
robotbit.Servo(robotbit.Servos.S1, 0)
basic.pause(1000)
let distance = left_distance
robotbit.Servo(robotbit.Servos.S1, 180)
distance = right_distance
basic.pause(1000)
basic.showString("" + (left_distance))
basic.pause(1000)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
})
