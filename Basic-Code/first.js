console.log("Learning node js.");

const fs = require('fs')

fs.writeFile("output.txt", "writing file", (err) => {
    if(err) console.log("Error Occured!!!");
    else console.log("file written successfully.");
});

fs.writeFile("bhumiFile", "dil ki battein" , (err) => {
    if(err) console.log("error occureed!!!");
    else console.log("Batt keh di successfully.");
})

console.log("Learning node js.");