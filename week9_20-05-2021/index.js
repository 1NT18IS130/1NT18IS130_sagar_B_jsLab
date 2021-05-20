// Title: Array Looping
// Description: a small code to demonstrate looping in js 
// Author : Sagar M (1NT18IS130)
// Date: 20/05/2021


let arr = [19, "what", "is", "42", 12.5, {id: 1}, {status: "active"}, {cost: 1895}]

for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] == "object") {
        for(key in arr[i]) {
            console.log(`value of ${key} = ${arr[i][key]}`)
        }
        continue;
    }
    console.log(arr[i]);
}