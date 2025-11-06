const fs = require("fs");

fs.writeFile("file1.txt", "Welcome to Node File Handling", (err) => {
    if(err) throw err;
    console.log("This is my first programme in node");
})
fs.rename( "file1.txt", "file1.js", (err) => {
    if(err) throw err;
} )
fs.appendFile( "file1.txt", "\nThis is second line", (err) => {
    if(err) throw err;
    console.log( "This is my first programme and second line in node" )
} )

fs.writeFile( "file2.js", "Helow node", (err) => {
    if(err) throw err;
    console.log("I'm Here");
    fs.readFile( "file2.js", "utf-8", (err, data) => {
        if(err) throw err;
        console.log(data)
    } )
} )

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function oddOrEven(num){
    if( num % 2 === 0 ){
        return `${num} is Even Number`;
    } else {
        return `${num} is Odd Number`
    }
}
const findOddOrEven = oddOrEven(12);
fs.writeFile( "findEven.txt", findOddOrEven, (err) => {
    if(err) return err;
} )
console.log(findOddOrEven);
fs.rename( "findEven.txt", "findEven.js", (err) => {
    if(err) return err;
} )

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const name = "Hemanathan";
let count = 0;
for( let character of name ){
    if( character === "a" ){
        count ++;
    }
}
let findA = `${name} inside the letter "a" ${count} times appear`;
fs.writeFile( "findA.txt", findA, (err) => {
    if(err) throw err;
} )
console.log(findA);
fs.rename( "findA.txt", "findA.js", (err) => {
    if(err) throw err;
} )
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const a = 25;
let pattern = "";
for( let i = 1; i <= a; i++ ){
    const space = "".repeat(a-i);
    const star = "*".repeat( 2 * i - 1 )
    pattern += space + star + "\n";
}
fs.writeFile( "starPattern.txt", pattern, (err) => {
    if(err) throw err;
} )
console.log(pattern);
let starPttern = "";
for( let i = a; i >= 1; i-- ){
    const space = "".repeat(a - i);
    const star = "*".repeat( 2 * i - 1 );
    starPttern += space + star + "\n";
}
fs.appendFile( "starPattern.txt", "\n" + starPttern, (err) => {
    if(err) throw err;
} )
console.log(starPttern);
fs.rename( "starPattern.txt", "starPattern.js", (err) => {
    if(err) throw err;
} )
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
