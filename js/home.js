let employeePayrollList;
window.addEventListener("DOMContentLoaded", (event) => {
    employeePayrollList = getEmployeeFromStorage();
    console.log(employeePayrollList);
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
});

const getEmployeeFromStorage = () => {
    return localStorage.getItem("EmployeePayrollList") ? JSON.parse(localStorage.getItem("EmployeePayrollList")) : [];
};

const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    if (employeePayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`
    for (const employee of employeePayrollList) {
        innerHtml = `${innerHtml}
    <tr>
    <td>
        <img class="profile" alt="" src="${employee._picture}" width="50px">
     </td>
     <td>${employee._name}</td>
     <td>${employee._gender}</td>
     <td>${getDeptHtml(employee._department)}</td>
     <td>${employee._salary}</td>
     <td>${stringifyDate(employee._startDate)}</td>
     <td>
     <img id="${employee._name}" onclick="remove(this)" alt="delete" src="../assets/images/delete.jpg" width="30px"">
     <img id="${employee._id}" alt="edit" onclick="update(this)" src="../assets/images/edit.jpg" width="30px">   
     </td>
    </tr>
    `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
};

const getDeptHtml = (deptList) => {
    let deptHtml = "";
    for (const dept of deptList) {
        deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`
    }
    return deptHtml;
};

const remove = (node) => {
    let empPayrollData = employeePayrollList.find(emp => emp._name == node.id);
    if (!empPayrollData) return;
    const index = employeePayrollList.map(emp => emp._name).indexOf(empPayrollData._name);
    employeePayrollList.splice(index, 1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
}