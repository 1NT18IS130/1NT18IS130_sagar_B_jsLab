//Title: Prime Number Checking using Promises
// Description: Resolve if Prime, reject if not prime
// Author: Sagar M (1NT18IS130)
// Date: 17/06/2021

let rand_num = Math.floor(Math.random() * 10000);
console.log(`Test Number is ${rand_num}`)

const check_non_prime = (num) => {
    return new Promise((resolve, reject) => {
        let flag = true; // number is prime
        if(num > 1) {
            for(let i=2; i < num; i++) {
                if (num % i == 0) {
                    flag = false; //number is not prime
                    break;
                }
            }
        }
        if (flag) {
            resolve(num);
        } else {
            reject(new Error('Number is not Prime!'))
        }
    })
}

let promise1 = check_non_prime(rand_num)
              .then(
                  success => console.log("Success! Number is Prime!"),
                  error => console.log(`Error: ${error.message}`)
              )
            
let promise2 = check_non_prime(13)
                .then(
                    success => console.log("Success! Number is Prime!"),
                    error => console.log(`Error: ${error.message}`)
                )