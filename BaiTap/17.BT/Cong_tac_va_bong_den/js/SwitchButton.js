class SwitchButton {
    constructor() {
        this.status = false
    }

    connectToLamp (lamp) {
        this.lamp = lamp
    }
    switchOff () {
        this.lamp.turnOff()
        alert('Đã tắt')
    }
    switchOn () {
        this.lamp.turnOn()
        alert('Đã bật')
    }
}