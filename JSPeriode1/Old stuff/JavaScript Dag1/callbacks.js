// Foreach, filter, map reduce and join.

let names = ["Kasper", "Bo", "Hazem", "phillip"];

let rows = names.map(function(name){
    return "<td>" + name.toUpperCase() + "</td>"
});

let rowsStr = rows.join(" ");
/*
let names2 = names.filter(function(name) {
    return name.length >= 3;
});
*/

let table = `<table><tbody>${rowsStr}</tbody><table>`;
//let table = "<table><tbody>" + rowsStr + "</tbody></table>";
console.log(table);
//console.log(names2);
