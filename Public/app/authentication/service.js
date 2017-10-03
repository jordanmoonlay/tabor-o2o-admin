angular.module('app.authentication').service('AuthenticationService', AuthenticationService);

AuthenticationService.$inject = [
    '$http',
    'Constants',
    '$localStorage'
];
function AuthenticationService($http, Constants,$localStorage) {
    var currentUser;

    return {
        signIn: signIn,
        signOut: signOut,
        getAuthenticatedUser: getAuthenticatedUser,
        getKioskUser: getKioskUser,
        isAdmin: isAdmin
    };

    function signIn(user) {
        return $http.post(Constants.BASE_API + '/users/login', user)
            .then(handleSuccess);
    }

    function signOut() {
        return $http.post(Constants.BASE_API + '/users/logout?access_token=' +$localStorage.token )
            .then(handleSuccess);
    }

    function getAuthenticatedUser(id) {
        return $http.get(Constants.BASE_API + '/users/' + id)
            .then(handleSuccess);
    }

    function isAdmin(id) {
        var f = { where: { principalId: id }, include: { relation: "role" } };
        return $http.get(Constants.BASE_API + '/rolemappings', { params:{filter: JSON.stringify(f) }}).then(result => { 
            var role = result.data.find(x=> x.role.name === "admin");
            return role != undefined;
        });
    }

    function getKioskUser(id) {
        var q = {
            filter: {
                where: {
                    'UserId': id
                },
                include: [
                    'Kiosk'
                ]
            }
        }

        return $http.get(Constants.BASE_API + '/kioskusers?' + $.param(q))
            .then(handleSuccess);
    }

    function handleSuccess(res) {
        return res.data;
    }

}