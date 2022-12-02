const fs = require('fs');

const rawdata = fs.readFileSync('rawdata', 'utf-8');

let totals = [];
let counter = 0;

rawdata.split(/\r?\n/).forEach((line) => {
    if (!line) {
        totals.push(Number(counter));
        counter = 0;
    }

    counter += Number(line);    
});

totals = totals.sort((a,b)=>a-b);

console.log("Part 1: " + totals.slice(-1));
console.log("Part 2: " + totals.slice(-3).reduce((a,b)=>a+b));
