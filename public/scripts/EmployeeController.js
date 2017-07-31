var myApp = angular.module('myApp', []);

myApp.controller('EmployeeController', function(EmployeeService) {
  var vm = this;
  var salary = 0;

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
      // vm.updateSalary();
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
    });
  }; // end getEmployee


  vm.deleteEmployee = function(employee) {
    console.log('in delete', employee);
    EmployeeService.deleteEmployee(employee._id).then(function() {
      vm.getEmployee();
      //  vm.updateSalary();
    });
  }; // end deleteEmployee


  // vm.updateSalary = function(newSalary) {
  //   for (var i = 0; i < vm.employee.length; i++){
  //     if(vm.employee[i].id === selectedEmployee) {
  //       vm.employee[i].salary =  newSalary;
  //     }
  //   }
  // };

}); // end controller
