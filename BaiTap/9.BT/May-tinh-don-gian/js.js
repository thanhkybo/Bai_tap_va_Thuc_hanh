function input(number) {
    document.getElementById("text1").value += number;
}
function tong() {
    let input = document.getElementById("text1").value;
    result = eval(input);
    document.getElementById('text1').value = result;
}
function clearC() {
    document.getElementById('text1').value = '';
}