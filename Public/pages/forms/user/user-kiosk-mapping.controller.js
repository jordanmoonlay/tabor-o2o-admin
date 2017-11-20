angular.module('CrudAngular')
    .controller("UserKioskMappingController", UserKioskMappingController)


UserKioskMappingController.$inject = ['User', 'Kiosk', "Constants", "$http", '$stateParams','AuthenticationState']
function UserKioskMappingController(User, Kiosk, Constants, $http, $stateParams,AuthenticationState) {
    var main = this;
    main.selectedKiosk = {};
    main.USER_BASE_URL = Constants.BASE_API + "/users";
    main.KIOSK_BASE_URL = Constants.BASE_API + "/kiosks";
    main.KIOSKUSER_BASE_URL = Constants.BASE_API + "/kioskusers";
    main.userKiosk = {};
    main.mappedKiosk = [];

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

    function getKiosk(val) {
        return $http.get(main.KIOSK_BASE_URL, {
            params: {
                filter: JSON.stringify({
                    page: 1, limit: 10, where: {
                        "and": [
                            {
                                "or": [{
                                    Name: { like: `%${val}%` }
                                },
                                {
                                    Code: { like: `%${val}%` }
                                }]
                            }
                            ,
                            { Deleted: 0 }, { Active: 1 }
                        ]
                    }
                })
            }
        }).then(result => {
            return result.data;
        })
    }
    main.getKiosk = getKiosk;

    function selectKiosk(selectedKiosk) {
        main.userKiosk.KioskCode = selectedKiosk.Code || "";
    }
    main.selectKiosk = selectKiosk;

    function saveKioskMapping() {
        return $http.post(main.KIOSKUSER_BASE_URL + "/mapping", { data: main.userKiosk }).then(
            result => {
                if (result.data) {
                    main.userKiosk = {};
                    main.selectedKiosk = {};
                }
                getMappedKiosk(main.UserId);
            }
        )
    }
    main.saveKioskMapping = saveKioskMapping;

    function getMappedKiosk(id) {
        main.mappedKiosk = [];
        return $http.get(main.KIOSKUSER_BASE_URL, {
            params: {
                filter: {
                    where: {
                        UserId: id
                    },
                    include: {
                        relation: "Kiosk"
                    }
                }
            }
        }).then(result => {
            console.log(result.data);
            main.mappedKiosk = result.data;
        })
    }
    main.getMappedKiosk = getMappedKiosk;

    function removeKiosk(role) {
        if (confirm("Are you sure want to unmap this kiosk?")) {
            $http.delete(`${main.KIOSKUSER_BASE_URL}/${role.id}`).then(
                result => {
                    if (result && result.data.count > 0) {
                        getMappedKiosk(main.UserId);
                    }
                }
            ).catch(
                error => {
                }
                )
        }
    }
    main.removeKiosk = removeKiosk;

    (function () {
        main.UserId = $stateParams.id;
        main.userKiosk.UserId = main.UserId;
        getUserById(main.UserId);
        getMappedKiosk(main.UserId);
    })();
}