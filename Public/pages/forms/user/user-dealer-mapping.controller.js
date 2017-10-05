angular.module('CrudAngular')
    .controller("UserDealerMappingController", UserDealerMappingController)


UserDealerMappingController.$inject = ['User', 'Dealer', "Constants", "$http", '$stateParams','AuthenticationState']
function UserDealerMappingController(User, Dealer, Constants, $http, $stateParams,AuthenticationState) {
    var main = this;
    main.selectedDealer = {};
    main.USER_BASE_URL = Constants.BASE_API + "/users";
    main.DEALER_BASE_URL = Constants.BASE_API + "/dealers";
    main.DEALERUSER_BASE_URL = Constants.BASE_API + "/dealerusers";
    main.userDealer = {};
    main.mappedDealer = [];

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

    function getDealer(val) {
        return $http.get(main.DEALER_BASE_URL, {
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
    main.getDealer = getDealer;

    function selectDealer(selectedDealer) {
        main.userDealer.DealerCode = selectedDealer.Code || "";
    }
    main.selectDealer = selectDealer;

    function saveDealerMapping() {
        return $http.post(main.DEALERUSER_BASE_URL + "/mapping", { data: main.userDealer }).then(
            result => {
                if (result.data) {
                    main.selectedDealer = {};
                }
                getMappedDealer(main.UserId);
            }
        )
    }
    main.saveDealerMapping = saveDealerMapping;

    function getMappedDealer(id) {
        main.mappedDealer = [];
        return $http.get(main.DEALERUSER_BASE_URL, {
            params: {
                filter: {
                    where: {
                        UserId: id
                    },
                    include: {
                        relation: "Dealers"
                    }
                }
            }
        }).then(result => {
            console.log(result.data);
            main.mappedDealer = result.data;
        })
    }
    main.getMappedDealer = getMappedDealer;

    function removeDealer(role) {
        if (confirm("Are you sure want to unmap this dealer?")) {
            $http.delete(`${main.DEALERUSER_BASE_URL}/${role.id}`).then(
                result => {
                    if (result && result.data.count > 0) {
                        getMappedDealer(main.UserId);
                    }
                }
            ).catch(
                error => {
                }
                )
        }
    }
    main.removeDealer = removeDealer;

    (function () {
        main.UserId = $stateParams.id;
        main.userDealer.UserId = main.UserId;
        getUserById(main.UserId);
        getMappedDealer(main.UserId);
    })();
}