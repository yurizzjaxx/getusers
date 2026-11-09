var t = document.getElementsByClassName("Log")[0]
t.textContent = navigator.userAgent


var t2 = document.getElementsByClassName("TagHeight")[0]
var sw = screen.width
var sh = screen.height

t2.textContent = `${sw}x${sh} Ratio: ${findGcd(sw, sh)}`;
