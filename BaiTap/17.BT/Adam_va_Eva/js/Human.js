class Human {
    constructor(name, gender, weight) {
    this.name = name
    this.gender = gender
    this.weight = weight
}

    getName() {
        return this.name
    }
    isMale() {
        return this.gender === true
    }
    setGender(gender) {
        this.gender = gender
    }
    checkApple(apple) {
        return apple.isEmpty()
    }
    eat(apple) {
        if (!this.checkApple(apple)) {
            apple.decrease()
            this.weight += 1
        }
    }
    setName(name) {
        this.name = name
    }
    getWeight() {
        return this.weight
    }
    setWeight(weight) {
        this.weight = weight
    }
}
