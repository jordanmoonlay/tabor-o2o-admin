'use strict';

angular.module('app.authentication')
    .controller('LoginController', LoginController);

LoginController.$inject = ['AuthenticationService', 'AuthenticationState', '$localStorage', '$state'];

function LoginController(AuthenticationService, AuthenticationState, $localStorage, $state) {
    var vm = this;

    vm.user = {
        email: 'administrator@jetexpress.co.id',
        password: 'Standar123.'
    };

    vm.login = login;

    function login(user) {
        vm.loading = true;
        vm.message = '';
        var authenticatedUser = {};

        AuthenticationService.signIn(user)
            .then(response => {
                AuthenticationService.isAdmin(response.userId).then(
                    result => {
                        if (result) {
                            AuthenticationState.setToken(response);
                            return AuthenticationService.getAuthenticatedUser(response.userId).then(userResult => {
                                authenticatedUser.id = userResult.id;
                                authenticatedUser.email = userResult.email;
                                authenticatedUser.username = userResult.username;
                                AuthenticationState.setUser(authenticatedUser);
                                $state.go('app.home');
                            })
                        }else{
                            vm.message = "Error : Unauthorized user. Please login as admin";
                        }
                    }
                ).catch(err => {
                    vm.message = "Error : Unauthorized user. Please login as admin";
                })

            })
            .catch(function (err) {
                console.log(err);
            })
            .finally(function () {
                vm.loading = false;
            });
    }
}
