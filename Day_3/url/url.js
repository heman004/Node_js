const url = require("url");

const myUrl ="https://7man.co.in/products/mens-stylish-regular-fit-cargo-pant-black";

const parsedUrl = url.parse( myUrl, true );

// console.log(parsedUrl);

console.log("profocol :", parsedUrl.protocol);

console.log("Host :", parsedUrl.host);

console.log("pathname : ", parsedUrl.path);

console.log("Query :", parsedUrl.query);

console.log("Product Id :", parsedUrl.query.pid);

console.log( "color :", parsedUrl.query.color );