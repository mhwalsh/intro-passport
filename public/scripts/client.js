// console.log('sourced');

var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/register', {
      templateUrl: '/views/register.html',
      controller: 'RegistrationController'
    }).
    when('/login', {
      templateUrl: '/views/login.html',
      controller: 'LoginController'
    }).
    otherwise({
      redirectTo: '/home'
    });
}]);

myApp.controller('LoginController',['$scope', '$http', '$location', function($scope, $http, $location){
    console.log("Login controller loaded");
    $scope.login = function(username, password){

      var dataToSend = {
        username: username,
        password: password
      };

      $http.post('/', dataToSend).then(
        function successCallback(response) {
          console.log(response);
          $location.path('/home');
        },
        function errorCallback(response) {
          console.log(response);
          // $location.path('/failure');
        }
      );
  };
}]);

myApp.controller('RegistrationController',['$scope', '$http', function($scope, $http){
  console.log("Registration controller loaded");
    $scope.register = function(username, password){
      console.log("register clicked");

      var dataToSend = {
        username: username,
        password: password
      };

      $http.post('/register', dataToSend).then(
        function successCallback(response) {
          console.log(response);
          // $location.path('/login');
        },
        function errorCallback(response) {
          console.log(response);
          // $location.path('/failure');
        }
      );
  };
}]);
