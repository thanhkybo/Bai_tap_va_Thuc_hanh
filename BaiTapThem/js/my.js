// tìm số lớn nhất trong mảng
function bai1() {
    let mangso = [-1, 0, 3, 5, 9, -2]
    let max = 0

    for (let i = 0; i < mangso.length; i++) {
        if (max < mangso[i]) {
            max = mangso[i]
        }
    }
    alert('Trong mảng ' + '\[' + mangso + '\]' + ' Số lớn nhất trong mảng là ' + max)
}

// tìm số nhỏ nhất trong mảng
function bai2() {
    let mangso = [-1, 0, 3, 5, 9, -2]
    let min = 0

    for (let i = 0; i < mangso.length; i++) {
        if (min > mangso[i]) {
            min = mangso[i]
        }
    }
    alert('Trong mảng ' + '\[' + mangso + '\]' + ' Số nhỏ nhất trong mảng là ' + min)
}

// tính tổng các số trong mảng
function bai3() {
    let mangso = [-1, 0, 3, 5, 9, -2]
    let tong = 0

    for (let i = 0; i < mangso.length; i++) {
        if (tong + mangso[i]) {
            tong += mangso[i]
        }
    }
    alert('Trong mảng ' + '\[' + mangso + '\]' + ' Tổng các số trong mảng là: ' + tong)
}

// tính tổng các số chẵn trong mảng
function bai4() {
    let mangso = [-1, 0, 3, 5, 9, 2, 4]
    let tong = 0

    for (let i = 0; i < mangso.length; i++) {
        if (mangso[i] % 2 !== 0) {
            continue
        }
        tong += mangso[i]
    }
    alert('Trong mảng ' + '\[' + mangso + '\]' + ' Tổng các số chẵn trong mảng là: ' + tong)
}

// hiển thị 30 số fibonacci
function bai5() {
    let F = 0, F0 = 0, F1 = 0
    let fibonacci = "";

    for (let i = 0; i < 30; i++) {
        if (i === 0) {
            F = 1
            F1 = 1
            fibonacci += F + ","
        } else {
            F = F0 + F1
            F0 = F1
            F1 = F
            fibonacci += F + ","
            console.log(i + " = " + F)
        }
    }
    document.write(fibonacci)
}

// đếm xem trong mảng có bao nhiêu giá trị K (K - giá trị truyề̀n vào)
function bai6() {
    let mangso = [-1, 0, 3, 5, 9, -2, -1, -1, 3]
    alert('Cho mảng số \[' + mangso + '\]' + ' tìm giá trị K = -1')
    let ketqua = 0
    let K = -1
    for (let i = 0; i < mangso.length; i++) {
        if (mangso[i] === K)
            ketqua++
    }
    alert('Có ' + ketqua + ' giá trị \( K = -1 \)')
}

// sắp xếp các phần tử trong mảng theo chiều tăng dần
function bai7() {
    let mangso = [-1, 0, 3, 5, 9, -2]
    alert('\[' + mangso + '\] sắp xếp các phần tử tăng dần')
    mangso.sort(function (a, b) {
        return a - b
    });
    alert('\[' + mangso + '\] là các phần tử trong mảng tăng dần')
}

// tạo lớp hình tròn
function bai8() {
    let canvas = document.getElementById('myCanvas')
    let pen = canvas.getContext('2d')

    class Bong {
        constructor(_x, _y, _radius, _color) {
            this.x = _x
            this.y = _y
            this.radius = _radius
            this.color = _color
            this.speed = 2
        }
        draw(pen) {
            pen.beginPath()
            pen.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
            pen.stroke()
            pen.strokeStyle = 'back'
            pen.lineWidth = 0
            pen.closePath()
        }
        moveRight() {
            this.x += this.speed;
        }

        moveLeft() {
            this.x -= this.speed;
        }

        moveUp(){
            this.y -= this.speed;
        }

        moveDown(){
            this.y += this.speed;
        }
    }

    let player = new Bong(150, 150, 30, 'black')

    function control(evt) {
        switch (evt.key) {
            case 'a':
                player.moveLeft()
                break
            case 'd':
                player.moveRight()
                break
            case 'w':
                player.moveUp()
                break
            case 's':
                player.moveDown()
                break
        }
    }
    window.addEventListener('keydown', control)

    function main() {
        pen.clearRect(0, 0, canvas.width, canvas.height)
        player.draw(pen)
    }
    setInterval(main,50)
}

/*let mainCanvas = canvas
function chooseCanvas(canvas) {
    mainCanvas = canvas;
    pen = mainCanvas.getContext('2d');
}*/