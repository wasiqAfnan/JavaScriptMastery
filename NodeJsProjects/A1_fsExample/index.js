const fs = require('fs');
const fileName = './data.json'

// console.log("To run the file type: \n'node filename.js <read, write or delete> <YourName> <YourRole>'");

let choice = process.argv[2];
let nameArg = process.argv[3];
let roleArg = process.argv[4];
let max = -1;

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

function writeToFile(name, role) {
    let prevData = readFromFile();
    if (prevData.length > 0) {
        // getting the maximum index value of the current records
        max = Math.max(...prevData.map(data => data.index))
    }

    let index = max + 1; // seeting index value for newly data to be inserted

    prevData.push({ index, name, role });
    let writeData = JSON.stringify(prevData);

    try {
        fs.writeFileSync(fileName, writeData)
        console.log("Data Saved Successfully");
    } catch (error) {
        console.log("Error Occured", error);
    }
}

function deleteFromFile(name) {
    let prevData = readFromFile();
    let foundData = prevData.find((data) => data.name === name);
    if (foundData != undefined) {
        prevData.splice(foundData.index, 1); // removing the requested object
        // console.log(prevData);
        fs.writeFileSync(fileName, ''); // clearing all content of the file
        // writing new data to the file
        fs.writeFileSync(fileName, JSON.stringify(prevData)); 
        console.log(`Data of ${name} deleted successfully`);
    }
    else {
        console.log("No records found");
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
else if (choice === "clear") {
    try {
        fs.writeFileSync(fileName,'');
        console.log("All Data has been deleted successfully");
    } catch (error) {
        console.log("Some error occured!");
    }
}
else {
    console.log("Wrong Command!\nCommands: read, write, delete and clear");
}