//Code goes here
var app = angular.module ("myApp",[]);
app.controller("myCtrl", function ($scope){
    console.log("My controller.....");

    $scope.Products = [
        {name: "Product One", price: "$22.50"},
        {name: "Product Two", price: "$15.00"},
        {name: "Product Four", price: "$123.82"},
        {name: "Product Five", price: "$123.75",},
    ];
    $scope.addProduct = function (){
        $scope.Products.push($scope.newUser);
        $scope.newProduct={};
        $scope.message = "New Product Added successfully"
    };
    $scope.selectProduct = function (user){
        console.log(user);
        $scope.clickedProduct = user;
    };
    $scope.editProduct = function (){
        $scope.message = "Product Edited successfully";
    };
    $scope.deleteProduct = function (){
        $scope.Products.splice($scope.Products.indexOf($scope.clickedProduct));
        $scope.message = "Product Deleted successfully";
    };
    $scope.clearMessage = function (){
        $scope.message = "";
    };
});