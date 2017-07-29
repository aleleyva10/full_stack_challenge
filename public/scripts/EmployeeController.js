var myApp = angular.module('myApp', []);

myApp.controller('EmployeeController', function(EmployeeService) {
  var vm = this;


  vm.addEmployee = function() {
    var newEmployee = {
      name: vm.name,
      position: vm.position,
      income: vm.income
    };
    vm.name = '';
    vm.position = '';
    vm.income = '';

    console.log('in controller sending:', newEmployee);
    EmployeeService.addEmployee(newEmployee).then(function() {
      console.log('back in controller after adding employee');
      vm.getEmployee();
    });
  }; // end addEmployee


  vm.getEmployee = function() {
    console.log('in controller, getEmployee');
    EmployeeService.getEmployee().then(function() {
      vm.employee = EmployeeService.data;
      console.log('back in controller with:', vm.employee);
    });
  }; // end getEmployee


  vm.deleteEmployee = function(employee){
    console.log('in delete', employee);
    EmployeeService.deleteEmployee(employee._id).then(function() {
      vm.getEmployee();
    });
  }; // end deleteEmployee

}); // end controller
