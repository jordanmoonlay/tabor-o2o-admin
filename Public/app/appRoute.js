var app = angular.module("myApp", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/pages/forms/coba.html"
            })
            .otherwise({
                redirectTo: "/index.html"
            })
    })

    app.controller('mainController', function ($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });