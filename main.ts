radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 3) {
        RobotCar_Keyestudio.Motors.move(20)
    } else if (receivedNumber == 4) {
        RobotCar_Keyestudio.Motors.move(-20)
    } else if (receivedNumber == 1) {
        RobotCar_Keyestudio.Motors.spin(-20)
    } else if (receivedNumber == 2) {
        RobotCar_Keyestudio.Motors.spin(20)
    }
})
radio.setGroup(128)
