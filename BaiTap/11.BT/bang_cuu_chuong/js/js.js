let sout
sout = "<table border='1' widtd = cellspacing='0' cellpadding='3'>"
for (i = 1; i <= 9; i++) {
    sout += "<tr>"
    for (j = 1; j <= 10; j++) {
        sout += "<td>" +j + " x " + i +"="+ (j*i)
    }
    sout += "</tr>"
}
sout += "</table>"
document.write(sout)