var listy = document.querySelectorAll("li");
var letter = document.getElementsByTagName("LI")

var obj = {
    status: "undecided",
    num: 0,
    guess: 0
};
var num = Math.floor((Math.random() * 1000) + 1);
var guess = [];
var uniq = 0;

function checkWinLose() {
    if( uniq == num ) {
        console.log("You won!")
        obj["status"] = "winner";
        obj["num"] = num;
        obj["guess"] = uniq;
        console.log(obj);

    }
    else {
        console.log("tough luck, you lost.")
        obj["status"] = "loser";
        obj["num"] = num;
        obj["guess"] = uniq;
        console.log(obj);
    }
}

function checkLength() {
    if(guess.length >= 6) {
        console.log("You have maxed your guesses");
        uniq = parseInt([...new Set(guess)].join(''));
        checkWinLose()
    } 
}

listy.forEach(li => { 
    li.addEventListener('click', (e) => {
        guess.push(li.innerText)
        console.log(guess)
        console.log(... new Set(guess))
        checkLength()
    })
})

listy.forEach(li => { 
    li.addEventListener('mouseover', (e) => {
        console.log("test")
        checkLength()
    })
})

// letter.addEventListener('click', (e) => {
//     guess.push(letter.this.children.innerText)
//     console.log(guess)
// })