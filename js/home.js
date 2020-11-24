window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
 });
 
 const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    let innerHtml = `${headerHtml}`
    let employeePayrollList = createEmployeePayrollJSON();
    for(const employee of employeePayrollList){
    innerHtml = `${innerHtml}
    <tr>
    <td>
        <img class="profile" alt="" src="${employee._picture}" width="50px">
     </td>
     <td>${employee._name}</td>
     <td>${employee._gender}</td>
     <td>${getDeptHtml(employee._department)}</td>
     <td>${employee._salary}</td>
     <td>${employee._startDate}</td>
     <td>
         <img id="${employee._id}" onclick="remove(this)" alt="delete" src="../assets/images/delete.jpg" width="30px">
         <img id="${employee._id}" alt="edit" onclick="update(this)" src="../assets/images/edit.jpg" width="30px">
     </td>
    </tr>
    `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
 }; 

 const createEmployeePayrollJSON = () => {
    let employeeListLocal = [
        {
        _name: "Hardaman",
        _gender: "Male",
        _department: ["Finance"],
        _salary: "50000",
        _startDate: "16 Sep 2020",
        _note: "",
        _id: new Date().getTime(),
        _picture: "../assets/profile-images/profile3.jpg" 
        },
    {
     _name: "Aman",
     _gender: "Female",
     _department: ["HR","Sales"],
     _salary: "70000",
     _startDate: "11 Nov 2018",
     _note: "",
     _id: new Date().getTime() + 1,
     _picture: "../assets/profile-images/profile1.jpg" 
    }
    ];
    return employeeListLocal;
 };
 
 const getDeptHtml = (deptList) => {
     let deptHtml = "";
     for(const dept of deptList){
         deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`
     }
     return deptHtml;
 }; 