var myApp = angular.module('myApp', []);

myApp.controller('EmployeeController', function(EmployeeService) {
  var vm = this;
  vm.salary = 0;
  vm.employee = [];


  vm.addEmployee = function() {
    var newEmployee = {
      name: vm.name,
      position: vm.position,
      income: vm.income
    };
    console.log('in controller sending:', newEmployee);
    EmployeeService.addEmployee(newEmployee).then(function() {
      console.log('back in controller after adding employee');
      vm.getEmployee();
    });
    vm.name = '';
    vm.position = '';
    vm.income = '';
  }; // end addEmployee


  vm.getEmployee = function() {
    console.log('in controller, getEmployee');
    EmployeeService.getEmployee().then(function() {
      vm.employee = EmployeeService.data;

      console.log('back in controller with:', vm.employee);
      vm.updateSalary(vm.employee);
      
    });
  }; // end getEmployee


  vm.deleteEmployee = function(employee) {
    console.log('in delete', employee);
    EmployeeService.deleteEmployee(employee._id).then(function() {
      vm.getEmployee();
    });
  }; // end deleteEmployee


  vm.updateSalary = function(arr){
    console.log('in update');
    vm.salary = 0;
    console.log('back in controller with:', arr);
    for(var i = 0; i < arr.length; i++){
      vm.salary += arr[i].income;
      console.log('income');
    }
  };

}); // end controller
