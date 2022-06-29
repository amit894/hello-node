const path = require("path");
const util = require ("util");

const {getHeapSpaceStatistics} = require ("v8"); // Declaring required function out of the entire module

// const dirUploads = path.join(__dirname, "www", "files", "uploads");
// console.log(dirUploads);

// util.log(path.basename(__filename));
// util.log(" The name of the file is ^");

util.log(getHeapSpaceStatistics());