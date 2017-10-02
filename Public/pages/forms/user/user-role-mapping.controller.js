angular.module('CrudAngular')
    .controller("UserRoleMappingController", UserRoleMappingController)


UserRoleMappingController.$inject = ['User', "Constants", "$http", '$stateParams','AuthenticationState']
function UserRoleMappingController(User, Constants, $http, $stateParams,AuthenticationState) {
    var main = this;
    main.selectedRole = {};
    main.USER_BASE_URL = Constants.BASE_API + "/users";
    main.ROLE_BASE_URL = Constants.BASE_API + "/roles";
    main.ROLEMAPPING_BASE_URL = Constants.BASE_API + "/rolemappings";
    main.rolemapping = {"principalType":"USER"};
    main.mappedRole = [];

    function getUserById(id) {
        // User.findById(id).then(result => {
        //     main.User = result.data;
        // });
        $http.get(main.USER_BASE_URL + "/" + id + "?access_token=" + AuthenticationState.getToken()).then(
            result => {
                main.user = result.data;
            }
        )
    }
    main.getUserById = getUserById;

    function getRole(val) {
        return $http.get(main.ROLE_BASE_URL, {
            params: {
                filter: JSON.stringify({
                    page: 1, limit: 10, where: {
                                    name: { like: `%${val}%` }
                    }
                })
            }
        }).then(result => {
            console.log(result.data);
            return result.data;
        })
    }
    main.getRole = getRole;

    function selectRole(selectedRole) {
        main.rolemapping.roleId = selectedRole.id || "";
    }
    main.selectRole = selectRole;

    function roleMappingExists(rolemapping){
        return new Promise((resolve, reject) => {
            var f = {
                        where : {
                            roleId : rolemapping.roleId, 
                            principalId : rolemapping.principalId,
                            principalType : rolemapping.principalType
                        }
                    };
                    console.log(JSON.stringify(f));
                    return $http.get(main.ROLEMAPPING_BASE_URL, {params: {
                        filter : JSON.stringify(f)
                    }})
                    .then(
                        result => {
                            if(result.data.length > 0){
                                resolve(true);
                            }
                            resolve(false);
                        }
                    )
        });
    }
    main.roleMappingExists = roleMappingExists; 

    function saveRoleMapping() {
        if(main.rolemapping.roleId){
            roleMappingExists(main.rolemapping).then(
                isExists=>{
                    if(!isExists){
                        return $http.post(main.ROLEMAPPING_BASE_URL , JSON.stringify(main.rolemapping)).then(
                        result => {
                            if (result.data) {
                                main.rolemapping = {"principalType":"USER"};
                                main.rolemapping.principalId = main.UserId;
                                main.selectedRole = {};
                            }
                            getMappedRole(main.UserId);
                        }
                    )
                    }
                }
            )
        }
    }
    main.saveRoleMapping = saveRoleMapping;

    function getMappedRole(id) {
        main.mappedRole = [];
        var f = { where: { principalId: id }, include: { relation: "role" } };
        return $http.get(main.ROLEMAPPING_BASE_URL, {
            params: {
                filter: JSON.stringify(f)
            }
        }).then(result => {
            console.log(result.data);
            main.mappedRole = result.data;
        })
    }
    main.getMappedRole = getMappedRole;

    (function () {
        main.UserId = $stateParams.id;
        main.rolemapping.principalId = main.UserId;
        getUserById(main.UserId);
        getMappedRole(main.UserId);
    })();
}