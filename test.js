/** @format */

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "text/plain",
//   });
//   res.end("hello ,preeti");
// });
// server.listen(3000, () => {
//   console.log(`Server is running on http://localhost:3000`);
// });

// const next = require("./counter.js");

// console.log(next())
// console.log(next())
// console.log(next())
// console.log(next())
// // console.log(require.cache)
// console.log(require.cache.path)

// manually  Cache   clear
// delete require.cache[path];

// // const fs = require("fs");

// // const stream = fs.createReadStream("large-video.mp4");

// // stream.on("data",(chunk)=>{
// //   console.log("Recieved chunk",chunk.length)
// // })
// // stream.on("end",()=>{
// //   console.log("Finished")
// // })

// // const util = require("util");

// // console.log(util.format("Hello %s, age %d", "Priti", 25));

// // const buffer = Buffer.from("Hello");

// // console.log(buffer);//<Buffer 48 65 6c 6c 6f>
// // console.log(buffer.toString());

// const http = require("http");

// const server = http.createServer((req, res) => {
//   let body = "";

//   req.on("data", (chunk) => {
//     console.log(chunk)
//     body += chunk;
//   });

//   req.on("end", () => {
//     console.log(body);

//     // const data = JSON.parse(body);

//     // console.log(data.name);
//     // console.log(data.age);

//     res.end("User received");
//   });
// });

// server.listen(3000, () => {
//   console.log(`Server is running on http://localhost:3000`);
// });

// console.log(process);
// console.log(process.pid);
// console.log(process.platform);
// console.log(process.version);
// console.log(process.env);
console.log(process.argv);
// console.log(process.exit());