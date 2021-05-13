var dis = document.getElementById("answer");
var btn1 = document.getElementById("clear");
var btn2 = document.getElementById("equal")
var res = 0;
dis.value = "";

// btn1.addEventListener('click', () => {
//     dis.value = '';
// })

// btn2.addEventListener('click', (e) => {
//     let input = dis.value.split(' ');
//     res = eval(input)
//     console.log(res)
//     dis.value = res;
// })

function clearBtn() {
    dis.value = "";
}

function equalBtn(e) {
    let input = dis.value.split(' ');
    res = eval(input)
    //console.log(res)
    dis.value = res;
}

function eval(input) {
    // console.log(input)
    let val = 0;
    let choice = input[1];
    switch(choice) {
        case '+': val = parseInt(input[0]) + parseInt(input[2]); return val; break;
        case '-': val = parseInt(input[0]) - parseInt(input[2]); return val; break;
        case '*': val = parseInt(input[0]) * parseInt(input[2]); return val; break;
        case '/': 
            if(parseInt(input[2]) == 0)
                return "Error!"
            val = parseInt(input[0]) / parseInt(input[2]); return val; break;
    }
    // console.log(input)
}

function insert(num){
    dis.value = dis.value + num + ' ';
}

function clear()
{
    dis.value=" ";
}