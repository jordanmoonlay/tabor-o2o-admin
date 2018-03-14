angular.module("CrudAngular")
.controller("SidebarController",SidebarController);

SidebarController.$inject = ['AuthenticationService','AuthenticationState','$state','$rootScope'];

function SidebarController(AuthenticationService,AuthenticationState,$state,$rootScope){
    var main = this;
    main.Hallo = 'helloworld';

(function(){
    main.authenticatedUser = AuthenticationState.getUser();
    $rootScope.$on("$locationChangeStart", function (event, next, current) {
        main.authenticatedUser = AuthenticationState.getUser();
    });
})();

    function logout() {
        AuthenticationService.signOut()
        AuthenticationState.remove();

        $state.go('app.login');
        main.authenticatedUser = AuthenticationState.getUser();
    }
    main.logout = logout;
}