let helpobj=require('./commands/help');
let treeobj=require('./commands/tree');
let organizeobj=require('./commands/organize');


const process=require('process');
const { organizeFn } = require('./commands/organize');


let inputArr=process.argv.slice(2);

let command=inputArr[0];
let path=inputArr[1];

switch(command){

case "help":
    helpobj.helpFn();
    break;
case "organize":
        organizeobj.organizeFn(path);
        break;
case "tree":
    treeobj.treeFn(path);
    break;
    
default:
    console.log("invalid command");
    break;

}
