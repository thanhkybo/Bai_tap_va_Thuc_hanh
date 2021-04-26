class Mobile {
    constructor(name) {
        this.bettery = 100
        this.name = name
        this.message = ''
        this.inBox = []
        this.outBox = []
        this.status = false
    }
    //
    checkOnOff () {
        if (this.status === true) {
            alert('Điện thoại đang bật')
        } else {
            alert('Điện thoại đang tắt')
        }
        this.bettery--
    }
    //
    turnOn () {
        this.status = true
        this.bettery--
    }
    //
    turnOff () {
        this.status = false
        this.bettery--
    }
    //
    chargeBattery () {
        if (this.status !== true) {
            alert('Điện thoại ' + this.name + ' đang tắt không sử dụng được')
            return
        }
        this.bettery += 1
    }
    //
    writeMessage (txt) {
        if (this.status !== true) {
            alert('Điện thoại ' + this.name + ' đang tắt không sử dụng được')
            return
        }
        this.message = (txt)
        this.bettery--
    }
    //
    sendMessage (phone) {
        if (this.status !== true) {
            alert('Điện thoại ' + this.name + ' đang tắt không sử dụng được')
            return
        }
        phone.inBox.push(this.message)
        this.outBox.push(this.message)
        this.bettery--
    }
    //
    getInBox () {
        if (this.status !== true) {
            alert('Điện thoại ' + this.name + ' đang tắt không sử dụng được')
            return
        }
        this.bettery--
        return this.inBox
    }
    //
    getOutBox () {
        if (this.status !== true) {
            alert('Điện thoại ' + this.name + ' đang tắt không sử dụng được')
            return
        }
        this.bettery--
        return this.outBox
    }
}

let nokia = new Mobile('nokia')
let iphone = new Mobile('iphone')

nokia.turnOn()
iphone.turnOn()
nokia.writeMessage('Nokia gửi cho iphone \'Xin chào\'')
nokia.sendMessage(iphone)
alert(iphone.getInBox())
alert(iphone.getOutBox())

iphone.writeMessage('Iphone đã nhận được tin nhắn của Nokia')
iphone.sendMessage(nokia)
alert(nokia.getInBox())
alert(nokia.getOutBox())
iphone.turnOff()
nokia.turnOff()
