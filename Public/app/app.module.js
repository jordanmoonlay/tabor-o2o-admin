angular.module('CrudAngular', [
    'ui.router',
    'ui.bootstrap',
    'ngStorage',
    'fcsa-number',
    'toastr',

    'app.authentication' // bukan library
]);

runBlock.$inject = [
    '$state',
    '$transitions',
    'AuthenticationState'
];

function runBlock($state, $transitions, AuthenticationState) {
    debugger
    console.log("test");
    $transitions.onStart({}, function (trans) {
        if (!AuthenticationState.isLoggedIn()) {
            $state.go('authentication.login');
        }
    });
}

angular
    .module('CrudAngular')
    .run(runBlock);
