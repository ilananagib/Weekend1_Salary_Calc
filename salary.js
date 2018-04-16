console.log('Jquery is ready');

$(document).ready(readyNow);

let addEmployee = 0;

function readyNow(){
    $('.button').on('click', clickClick);
    console.log('Button works');

function clickClick(){
    addEmployee++;
    addNewEmployee();
    clearInputs();
}

function updateEmployees(){
$('.button').text(addEmployee);
}

function addNewEmployee(){
    $('#employeesList').append(
        '<tr>' +
            '<th>' + $('#firstName').val() + '</th>' +
            '<th>' + $('#lastName').val() + '</th>' +
            '<th>' + $('#employeeId').val() + '</th>' +
            '<th>' + $('#employeeTitle').val() + '</th>' +
            '<th>' + $('#annualSalary').val() + '</th>' +
        '</tr>'
);
}
function clearInputs(){
$('#firstName').val('');
$('#lastName').val('');
$('#employeeId').val('');
$('#employeeTitle').val('');
$('#annualSalary').val('');
}

}