var names = ["Kasper", "Bo", "Hazem", "phillip"];

var rows = names.map(function(name){
    return "<li>" + name + "</li>"
});

var rowsStr = rows.join(" ");

const table = `<ul>${rowsStr}</ul>`;

console.log(table);

var persons = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

var rows2 = persons.map(function(person){
    return "<tr> <td>" + person.name + "</td>" + "<td>" + person.phone + "</td> </tr>"
});

var rowsStr2 = rows2.join(" ");

const table2 = `<table>${rowsStr2}</table>`;

document.getElementById("ul").innerHTML = table;
document.getElementById("table").innerHTML = table2;