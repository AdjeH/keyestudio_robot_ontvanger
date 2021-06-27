radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 3) {
        RobotCar_Keyestudio.Motors.move(Snelheid_vooruit)
    } else if (receivedNumber == 4) {
        RobotCar_Keyestudio.Motors.move(-10)
    } else if (receivedNumber == 1) {
        RobotCar_Keyestudio.Motors.spin(-10)
    } else if (receivedNumber == 2) {
        RobotCar_Keyestudio.Motors.spin(10)
    } else if (receivedNumber == 5) {
        Snelheid_vooruit += 10
    } else if (receivedNumber == 6) {
        Snelheid_vooruit += -10
    }
})
let Snelheid_vooruit = 0
radio.setGroup(128)
Snelheid_vooruit = 10
