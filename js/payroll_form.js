const salary = document.querySelector('#salary');
const salaryOutput = document.querySelector('.salary-output');
salary.oninput = function(){
    salaryOutput.textContent = salary.value;
}
