let b = document.getElementById("carogame"),
    board = [],
    data = ""

for (let i = 0; i < 3; i++) {
    board[i] = new Array(".", ".", ".")
}

for (let i = 0; i < 3; i++) {
    data += "<br/>"
    for (let j = 0; j < 3; j++) {
        data += board[i][j] + "&ensp;"
    }
}

data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
b.innerHTML = "<hr/>" + data

let luot = true

function changeValue() {
    let positionX = +prompt("Hàng: ") - 1,
        positionY = +prompt("Cột: ") - 1
    data = ""

    if (luot === true) {
        board[positionX][positionY] = "x"
        luot = false
    } else {
        board[positionX][positionY] = "o"
        luot = true
    }

    for (let i = 0; i < 3; i++) {
        data += "<br/>"
        for (let j = 0; j < 3; j++) {
            data += board[i][j] + "&emsp;"
        }
    }

    data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
    b.innerHTML = "<hr/>" + data

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if ((board[i][j] === 'x' || board[i][j] === 'o') && ((board[i][j] === board[i][j+1] && board[i][j] === board[i][j+2]) ||
                (board[i][j] === board[i+1][j] && board[i][j] === board[i+2][j]) ||
                (board[i][j] === board[i+1][j+1] && board[i][j] === board[i+2][j+2])
            )) {
                if (board[i][j] === 'x') {
                    alert("Người chơi thứ nhất thắng cuộc")
                } else {
                    alert("Người chơi thứ 2 thắng cuộc")
                }
            }
        }
    }
}