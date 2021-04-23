let english = ['cat','dog', 'house', 'boy', 'girl', 'baby'],
    vietnamese = ['mèo', 'chó', 'nhà', 'cậu bé', 'cô gái', 'em bé']
function translest() {
    let tiengAnh = document.getElementById('English').value,
        index = -1
    for (let i = 0; i < english.length; i++) {
        if (english[i] === tiengAnh) {
            index = i
        }
    }
    if (index != -1) {
        document.getElementById('Vietnamese').value = vietnamese[index]
    } else {
        alert('Không tìm thấy')
    }
}