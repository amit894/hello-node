const process = require ("process");

console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv);

function grab (flag){
    let indexAfterFlag = process.argv.indexOf(flag)+1;
    return process.argv[indexAfterFlag] ;
}

console.log(grab("--user"));
