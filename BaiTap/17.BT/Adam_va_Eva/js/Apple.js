class Apple {
    constructor() {
        this.weight = 10
    }

    isEmpty() {
        return this.weight === 0
    }
    getWeight() {
        return this.weight
    }
    decrease() {
        this.weight -= 1
    }
}