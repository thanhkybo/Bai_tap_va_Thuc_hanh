function processConfirm(answer) {
    let result = ""
    if (answer) {
        result = "Excellent. We'll play a nice game of chess."
    } else {
        result = "Maybe later then."
    }
    return result
}

    var confirmAnswaer = confirm('Shall we play a game?')
    var theAnswer = processConfirm(confirmAnswaer)
    alert(theAnswer)
