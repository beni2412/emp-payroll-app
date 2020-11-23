window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
 });
 
 const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    const innerHtml = `${headerHtml}
    <tr>
    <td>
        <img class="profile" alt="" src="../assets/profile-images/profile3.jpg" width="50px">
     </td>
     <td>Hardaman Singh</td>
       <td>Male</td>
     <td>
        <div class="dept-label">Sales</div>
        <div class="dept-label">Finance</div>
     </td>
     <td>50000</td>
     <td>16 Sept 2020</td>
     <td>
        <img id="1" onclick="remove(this)" alt="delete" src="../assets/images/delete.jpg" width="30px">
        <img id="1" alt="edit" onclick="update(this)" src="../assets/images/edit.jpg" width="30px">
     </td>
    </tr>
    `;
    document.querySelector("#display").innerHTML = innerHtml;
 }; 