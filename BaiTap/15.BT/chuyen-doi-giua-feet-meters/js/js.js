function footToMeter(meter) {
    let x = document.getElementById('import').value
    meter = 0.305 * x
    document.getElementById('show').innerHTML = meter
}
function meterToFoot(foot) {
    let x = document.getElementById('import').value
    foot = 3.279 * x
    document.getElementById('show').innerHTML = foot
}
