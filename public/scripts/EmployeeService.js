myApp.service('EmployeeService', function($http) {
var sv = this;

sv.addEmployee = function(newEmployee) {
  console.log('in service sending:', newEmployee);
  return $http({
method: 'POST',
url:'/employee',
data: newEmployee
  }).then(function(response){
    console.log('back from addEmployee:', response);
  }); // end $http
}; // end addEmployee


sv.getEmployee = function(){
  console.log('in service, getEmployee');
  return $http({
    method:'GET',
    url: '/employee'
  }).then(function(response){
    console.log('in service back from server with:', response);
    sv.data = response.data;
  }); // end $http
}; // end getEmployee


sv.deleteEmployee = function(id) {
  return $http({
    method: 'DELETE',
    url:'/employee/' + id,
  }).then(function(response){
  }); // end $http
}; // end deleteEmployee



}); // end service
