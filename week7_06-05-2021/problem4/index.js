var row, col;
var arr = [];

function generateTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let z = 0; z < col; z++) {
        let th = document.createElement("th");
        let text = document.createTextNode(z);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table) {
    for (let a = 0; a < row; a++) {
        let row = table.insertRow();
        for (let b = 0; b < col; b++) {
            let cell = row.insertCell();
            let text = document.createTextNode(arr[a][b]);
            cell.appendChild(text);
        }
    }
}

function populateArray(rows, columns) {
    arr = new Array(rows)
    for (var i=0; i < rows; i +=1) {
        arr[i]=new Array(columns)
    }
}

function getSize() {
    row = prompt("enter row size")
    col = prompt("enter col size")
    populateArray(row,col)
}

function getInput() {
    for (let x = 0; x < row; x++) {
        for (let y = 0; y < col; y++){
            arr[x][y] = prompt("enter value for row=" + x + " column=" + y )
        }
    }
}

function startProcess() {
    getSize();
    getInput();

    let table = document.querySelector("table");
    generateTableHead(table);
    generateTable(table);
}

startProcess();

