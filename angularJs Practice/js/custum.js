var app=angular.module('myApp', []);
app.controller('person',function($scope)
{
    $scope.firstName="AJ";
    $scope.lastName="Ali";
    $scope.getFullName=function()
    {
        return $scope.firstName +" "+ $scope.lastName;
    };
    
});


app.controller('person1',function($scope)
{
    $scope.firstName="AJ";
    $scope.middleName="AJ";
    $scope.lastName="Ali";
    $scope.getFullName=function()
    {
        return $scope.firstName + " " +$scope.middleName +" "+ $scope.lastName;
    };
    
});

