let isUpdate = false;
let employeePayrollObj = {};
const save = () => {
    try{
      let employee = saveData();
      createAndUpdateStorage(employee);
    }catch(e){
      return;
    }
 };
 
 function createAndUpdateStorage(employee){
   let employeeList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
   if(employeeList != undefined) employeeList.push(employee);
   else employeeList = [employee];
 
  
   localStorage.setItem("EmployeePayrollList", JSON.stringify(employeeList));
   alert(employeeList.toString());
  }
 
 const getSelectedValues = (property) => {
    let allItems = document.querySelectorAll(property);
    let setItems = [];
    allItems.forEach(item => {
      if(item.checked) setItems.push(item.value);
    });
    return setItems;
  };
  
 function saveData(){
    let employee = new EmployeePayrollData();
    employee.id= Date.now();
    employee.name= document.getElementById("name").value;
    employee.picture = document.querySelector('input[name = profile]:checked').value;
    employee.gender = document.querySelector('input[name = gender]:checked').value;
    employee.department =getSelectedValues('[name=department]');
    employee.salary = document.getElementById("salary").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    employee.note = document.getElementById("notes").value;
    employee.startDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    
   return employee;
  } 

  const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
  };
  
  const unsetSelectedValues = (propertyValue) =>{
   let allItems = document.querySelectorAll(propertyValue);
   allItems.forEach(item => {
     item.checked = false;
   });
  };

  
  
  const resetForm = () => {
    setValue("#name", "");
    unsetSelectedValues("[name=profile]");
    unsetSelectedValues("[name=gender]");
    unsetSelectedValues("[name=department]");
    setValue("#salary", "");
    setValue("#notes", "");
    setSelectedIndex("#day", 0);
    setSelectedIndex("#month", 0);
    setSelectedIndex("#year", 0);
  };

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
    const day = document.querySelector("#day");
    const month = document.querySelector("#month");
    const year = document.querySelector("#year");
    const dateError = document.querySelector(".date-error");
    startDate.addEventListener("input", function(){
   try{
    new EmployeePayrollData().startDate = new Date( Date.UTC(year.value, month.value - 1, day.value));
    dateError.textContent = "";
    }catch(e){
        dateError.textContent = e;
  }
});
checkForUpdate();
});
    
const checkForUpdate = () => {
  const employeePayrollJson = localStorage.getItem("editEmp");
  isUpdate = employeePayrollJson ? true : false;
  if(!isUpdate) return;
  employeePayrollObj = JSON.parse(employeePayrollJson);
  setForm();
};

const setSelectedValues = (propertyValue, value) => {
  let allItems = document.querySelectorAll(propertyValue);
  allItems.forEach(item => {
     if(Array.isArray(value)){
       if(value.includes(item.value)) item.checked = true;
     }
     else if(item.value == value) item.checked = true;
  });
};

const setSelectedIndex = (id, index) => {
  const element = document.querySelector(id);
  element.selectedIndex = index;
};

const setForm = () => {
  setValue("#name", employeePayrollObj._name);
  setSelectedValues("[name=profile]", employeePayrollObj._picture);
  setSelectedValues("[name=gender]", employeePayrollObj._gender);
  setSelectedValues("[name=department]", employeePayrollObj._department);
  setValue("#salary", employeePayrollObj._salary);
  setTextValue(".salary-output", employeePayrollObj._salary);
  setValue("#notes", employeePayrollObj._note);
  let date = stringifyDate(employeePayrollObj._startDate).split(" ");
  let month = new Date(date).getMonth() + 1;
  setValue("#day", date[0]);
  setValue("#month", month);
  setValue("#year", date[2]);
};

   
