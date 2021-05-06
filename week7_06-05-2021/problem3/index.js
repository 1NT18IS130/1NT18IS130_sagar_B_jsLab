// Write a JavaScript function to get the values of First and Last name
const formInfo = () => {
    var fName = document.getElementById("fname");
    var lName = document.getElementById("lname");

    console.log("First Name: " + fname.value + "\nLast Name: " + lname.value)
}

// Create a function that takes two arguments. Both arguments are integers, a and b.
// Return true if one of them is 10 or if their sum is 10
// Ex: makesTen(9, 10) ➞ true, makesTen(9, 9) ➞ false, makesTen(1, 9) ➞ true

const makesTen = (a,b) => {
    if (a == 10 || b == 10) {
        return true;
    }
    else if ( a+b == 10) {
        return true;
    }
    else {
        return false;
    }
}

// Create a function that takes the number of wins, draws and losses
// and calculates the number of points a football team has obtained so far.
// wins get 3 points
// draws get 1 point
// losses get 0 points
// Ex: footballPoints(3, 4, 2) ➞ 13
// footballPoints(5, 0, 2) ➞ 15

const footballPoints = (w, d, l) => {
    let totalPoints = (w*3) + (d*1) + (l*0);
    return totalPoints;
}

const start = () => {
    console.log("10 + 9: " + makesTen(10,9))
    console.log("1 + 9: " + makesTen(1,9))
    console.log("9 + 9: " + makesTen(9,9))

    console.log("Football points for 3,4,2: " + footballPoints(3,4,2))
    console.log("Football points for 5,0,2: " + footballPoints(5,0,2))
}

start();
