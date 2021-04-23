var n = 0,
    number = 0,
    data = "",
    isSoNguyenTo = true
while (n < 20) {
    if (number === 0 || number === 1 || number === 2) {
        n++
        data += number + " "
    } else {
        for (var i = 2; i < (number - 1); i++){
            if (number % i == 0) {
                isSoNguyenTo = false
                break
            }
        }

        if(isSoNguyenTo) {
            n++;
            data += number + " "
        }
    }
    number++
    isSoNguyenTo = true
}

document.write(data)