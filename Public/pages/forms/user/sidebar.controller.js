angular.module("CrudAngular")
.controller("SidebarController",SidebarController);

SidebarController.$inject = ['AuthenticationService','AuthenticationState'];

function SidebarController(AuthenticationService,AuthenticationState){
    var main = this;
    main.Hallo = 'helloworld';

(function(){
    main.authenticatedUser = AuthenticationState.getUser();
})();

    function logout() {
        AuthenticationService.signOut()
        AuthenticationState.remove();

        $state.go('authentication.login');
    }
    main.logout = logout;
    // main.logout = logout;
}