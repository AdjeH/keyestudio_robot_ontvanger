radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 3) {
        RobotCar_Keyestudio.Motors.move(20)
    } else if (receivedNumber == 4) {
        RobotCar_Keyestudio.Motors.move(-20)
    } else if (receivedNumber == 1) {
        RobotCar_Keyestudio.Motors.spin(-20)
    } else if (receivedNumber == 2) {
        RobotCar_Keyestudio.Motors.spin(20)
    } else if (receivedNumber == 5) {
        RobotCar_Keyestudio.Motors.stop()
    }
})
radio.setGroup(128)
