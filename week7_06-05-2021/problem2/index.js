var p1 = document.getElementById("para1")
var p2 = document.getElementById("para2")

var colors = ["red", "green", "blue", "black"];

p1.addEventListener('click', (e) => {
    p1.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
})

p2.addEventListener('click', (e) => {
    p2.style.color = colors[Math.floor(Math.random() * colors.length)];
})