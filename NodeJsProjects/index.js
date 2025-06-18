const { log } = require('console');
const fs = require('fs');
const fileName = './data.json'

// console.log("To run the file type: \n'node filename.js <read, write or delete> <YourName> <YourRole>'");

let choice = process.argv[2];
let nameArg = process.argv[3];
let roleArg = process.argv[4];

// reading
function readFromFile() {
    try {
        let rawDatas = fs.readFileSync(fileName);
        return JSON.parse(rawDatas);
    } catch (err) {
        return []; // returning empty array if file is empty
    }
}

function printData(datas) {
    datas.forEach((data, index) => {
        console.log(`Record: ${index + 1}`);
        console.log(`Name: ${data.name}\nRole: ${data.role}\n\n`);
    });
}

function writeToFile(name, role){
    let prevData = readFromFile();
    let index = prevData.length;
    
    prevData.push({index, name, role});
    let writeData = JSON.stringify(prevData);

    try {
        fs.writeFileSync(fileName,writeData)
        console.log("Data Saved Successfully");
    } catch (error) {
        console.log("Error Occured", error);
    } 
}

// main program to handle function calls
if (choice === "read") {
    let datas = readFromFile();
    printData(datas); // for printing
}
else if (choice === "write") {
    writeToFile(nameArg, roleArg)
}
else if (choice === "delete") {
    deleteFromFile(nameArg)
}
