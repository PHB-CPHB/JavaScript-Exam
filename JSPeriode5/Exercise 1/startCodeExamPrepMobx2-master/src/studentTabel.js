import React from "react";

function studentTabel(props) {
function averageFilter(studentgrades) {
      var sum = 0;
      var count = 0;
      for (var j = 0; j < studentgrades.length; j++) {
        if (studentgrades[j].grade != undefined) {
          sum = parseInt(studentgrades[j].grade) + sum;
          count++;
        }
      }
      return sum / count;
    }

    let studentInfo = props.data;
    console.log(studentInfo)
    let students = studentInfo.students;
    let headers = studentInfo.headers;

    const rowHeaders = headers.map((header) =>
      <th>{header.courseName}</th>
    )
    const rows = students.map((student) =>
      <tr key={student.name}>
        <td>{student.name}</td>
        {student.grades.map((grade) =>
          <td> {grade.grade} </td>
        )}
        <td>{averageFilter(student.grades)}</td>
      </tr>
    )
    return (
      <div className="App">
        <div className="App-header">
          <h2>React - Exam Preparation Exercise</h2>
        </div>
        <div className="App-intro">
          <h4>Exercise 1 - Asingment 2</h4>
          <p>Here you can sort on average grade</p>
          <p>This is the tabel</p>
          <table className="table">
            <thead>
              <th>Name</th>
              {rowHeaders}
              <th>Average</th>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default studentTabel;