let Circle = function(radius) {

    this.radius = radius
    this.getRadius = function () {
        return radius
    }
    this.getArea = function () {
        return Math.PI * radius * radius
    }
}
let circle = new Circle(4)

let radius = circle.getRadius()
let area = circle.getArea()

alert('radius' + radius + '; area: ' + area)
console.log(radius)
console.log(area)