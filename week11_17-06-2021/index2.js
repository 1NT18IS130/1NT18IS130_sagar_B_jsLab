//Title: Returing Objects using Promises
// Description: handle errors using catch method of promises
// Author: Sagar M (1NT18IS130)
// Date: 17/06/2021


let obj_list = [{'1': 'one'}, true, {'2': 'two'}, 4, {'3': 'three'}, 'char', 17.85]

const check_type = () => {
    return new Promise((resolve, reject) => {
        var item = obj_list[Math.floor(Math.random()*obj_list.length)];
        if(typeof(item) == "object") {
            let result = {
                'result': 'success',
                'value' : item
            }
            resolve(result)
        } else {
            let error = {
                'result': 'failed',
                'value' : 0
            }
            reject(new TypeError(`${JSON.stringify(error)}`))
        }
    })
}

let promise3 = check_type()
                .then(
                    success => console.log(JSON.stringify(success))
                )
                .catch((error) => {
                    if(error instanceof TypeError) {
                        console.log(`${error.message}`)
                    } else {
                        console.log('Cant handle such errors!')
                    }
                })