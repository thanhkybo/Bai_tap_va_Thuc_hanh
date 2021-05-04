class cat {
    constructor(name, speed, weight) {
        this.name = name
        this.speed = speed
        this.weight = weight
    }

    talk(){
        alert('Meo Meo')
    }

    catch(mouse) {
        return this.speed >= mouse.speed
    }

    eat(mouse) {
        if (mouse.status === true) {
            this.weight += mouse.weight
        }
    }

}