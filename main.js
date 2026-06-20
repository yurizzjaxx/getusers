var t = document.getElementsByClassName("_log")[0]
t.textContent = navigator.userAgent


var t2 = document.getElementsByClassName("_log1")[0]
var sw = screen.width
var sh = screen.height

t2.textContent = `${sw}x${sh} Ratio: ${findGcd(sw, sh)}`;
