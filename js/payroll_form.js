

function save(){
    let employee = new EmployeePayrollData();
    employee.name= document.getElementById("name").value;
    employee.picture = document.querySelector('input[name = profile]:checked').value;
    employee.gender = document.querySelector('input[name = gender]:checked').value;
    employee.department =document.querySelector('input[name = department]:checked').value;
    employee.salary = document.getElementById("salary").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    employee.note = document.getElementById("notes").value;
    employee.startDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    alert("Thank you, your data is saved: " + employee.toString());
  } 

  window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
      
    name.addEventListener('input', function(){
      if(name.value.length == 0){
        textError.textContent = "";
        return;
      }
      try{
        (new EmployeePayrollData()).name = name.value;
        textError.textContent = "";
      }catch(e){
        textError.textContent = e;
      }
    });
    const salary = document.querySelector('#salary');
    const salaryOutput = document.querySelector('.salary-output');
    salary.oninput = function(){
        salaryOutput.textContent = salary.value;
    }

    const startDate = document.querySelector("#startDate");
const day = document.getElementById("day").value;
const month = document.getElementById("month").value;
const year = document.getElementById("year").value;
const dateError = document.querySelector(".date-error");
startDate.addEventListener("input", async function(){
   try{
     (new EmployeePayrollData()).startDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    dateError.textContent = "";
    console.log(day, month, year);
  }catch(e){
    dateError.textContent = "Invalid Date";
  }
});
    
});
    
   
   
