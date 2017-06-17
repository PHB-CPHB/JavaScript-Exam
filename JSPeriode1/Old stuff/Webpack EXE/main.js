require('./main.css');
import 'bootstrap/dist/css/bootstrap.css';

const name = 'Scotch.io';

setTimeout(() => console.log(`Hello there from ${name}`), 300);

function Person(fn,ln,s){
  this.firstName = fn;
  this.lastName = ln;
  this.favoriteSport = s;
}

const persons = [
  new Person("Kurt", "Wonnegut","Socker"),
  new Person("Jan", "Peterson","Hockey"),
  new Person("Jane", "Peterson","Skating"),
  new Person("John", "Hansen","Socker"),
]

function makeTable(persons){
/*
let header = "<th>First Name</th><th>Last Name</th><th>Favorite Sport</th>"

let rows = persons.map(function(person){
  return "<tr> <td>" + person.firstName + "</td>" +"<td>" + person.lastName + "</td>" +"<td>" + person.favoriteSport + "</td> </tr>";
});

let rowsStr = rows.join(" ");

let table = `<table class="table"><thead>${header}</thead><tbody>${rowsStr}</tbody></table>`
return table;
*/


}

const table = makeTable(persons);
document.getElementById('my-table').innerHTML = table;