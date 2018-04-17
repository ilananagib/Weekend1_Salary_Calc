console.log('Jquery is ready');

$(document).ready(readyNow);

let addEmployee = 0;
let monthlyCost = 0;

function readyNow(){
    $('.button').on('click', clickClick);
    console.log('Button works');
}

function clickClick(){
    updateMonthlyTotal();
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

function updateMonthlyTotal(){
    let hardFunction = ($('#annualSalary').val() / 12);
    monthlyCost += hardFunction;
    //$('#totalSalaries').remove();
    $('#totalSalaries').text('Total Monthly: $' + monthlyCost);
    if (monthlyCost > 20000) {
        $('#totalSalaries').css('background-color', 'red');
}
}
