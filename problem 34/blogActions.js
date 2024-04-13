// Write your code here
const fs = require("fs");

// To read file content using blocking code
console.log("Starting to Read")

const buffer = fs.readFileSync('myblog.txt', { encoding: 'utf8' })
console.log(buffer)

try{
    fs.writeFileSync('myblog.txt', ' ')
} catch (err) {
    console.log(err)
}

fs.appendFileSync("myblog.txt", " ")


