"use strict";
//main array
let details = ["ID", "Name", "Job title", "Years at company", "Email", "WFH address", "Skillset"];
let employees = [
    //each element in main is an object
    {
        id: "55007",
        name: "Karina Chambers",
        jobTitle: "Tech Lead",
        yearsAtCompany: 14,
        email: "karinachambers@ziore.com",
        wfhAdress: "640 Boynton Place, Faxon, Kentucky, 42071",
        skillSet: "Velit commodo voluptate id est. Fugiat magna enim quis exercitation duis fugiat non nisi consequat.",
        //each object has a property with an array as its value/key
        projectsAssignedTo: [
            //the inner array has object(s) representing the projects the person is working on
            //each object has information about the project
            {
                projectId: 112,
                name: "Cupidatat aute"
            }
        ]
    },
    {
        id: "23810",
        name: "Kasey Bowers",
        jobTitle: "Senior Programmer",
        yearsAtCompany: 19,
        email: "kaseybowers@ziore.com",
        wfhAdress: "969 Clarendon Road, Marshall, Vermont, 47859",
        skillSet: "Est et voluptate incididunt deserunt culpa excepteur.",
        projectsAssignedTo: [
            {
                projectId: 124,
                name: "Amet do deserunttate aliqua"
            }
        ]
    }
];
window.onload = () => {
    loadEmployeeNames();
    const getDropdown = document.getElementById("listOfEmployees");
    getDropdown.onchange = displayData;
}
function loadEmployeeNames() {
    const getDropdown = document.getElementById("listOfEmployees");
    let sortedNames = [];
    employees.forEach(x => sortedNames.push(x.name));
    sortedNames.sort();
    sortedNames.forEach(x => {
        let theOption = new Option(x, x.toLowerCase());
        getDropdown.appendChild(theOption);
    });
}
function displayData() {
    const valueSelected = document.getElementById("listOfEmployees").value;
    const getWholeTbody = document.getElementById("displayData");
    const getTableData = document.querySelectorAll("#displayData tr");
    //delete any rows before adding more;
    Array.from(getTableData).forEach(row => getWholeTbody.removeChild(row));

    //find which employee was selected; compare the value to each name property lowercased
    employees.forEach(x => {
        if (x.name.toLowerCase() === valueSelected) {
            //call the function to create rows and display data once found
            createRowsWithData(x);
        }
    });

}
function createRowsWithData(theEmployee) {
    const displayData = document.getElementById("displayData");
    //this index is to name the first cell in each row; I created another array for that: "details"
    let index = 0;
    for(let property in theEmployee){
       if(property !== "projectsAssignedTo"){
        let row = displayData.insertRow(-1);
        let cellLabel = row.insertCell(0);
        let cellData = row.insertCell(1);
        cellLabel.innerHTML = details[index];
        cellData.innerHTML = theEmployee[property];
        index++;
       }
       //only one other property and that's the array
       else {
        let row = displayData.insertRow(-1);
        let cellLabel = row.insertCell(0);
        let cellData = row.insertCell(1);
        cellLabel.innerHTML = "# of projects assigned";
        //give me just the length, since each element(object) represents one project
        cellData.innerHTML = theEmployee[property].length;
       }
    }
}
/*
const test = document.querySelector("#test");
 test.innerHTML = valueSelected;
*/