const fs = require("fs");

fs.readFile("message.txt","utf8",function(err,data){
 console.log(data);
});