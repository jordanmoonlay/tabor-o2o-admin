angular.module('CrudAngular')
    .controller("UserController", UserController);

UserController.$inject = ['User', "Constants", "$http",'AuthenticationState']

function UserController(User, Constants, $http,AuthenticationState) {
    var main = this;
    main.hello = "";
    var query = {
        page: 1,
        limit: 10,
        keyword: ""
    };
    main.query = query;

    var test = function () {
        main.hello = "Hello World";
    }

    function getUsersPaging() {
        var req = [];
        req.push(getUsers(query));
        req.push(countUser(query));

        return Promise.all(req)
            .then((results) => {
                main.users = results[0];
                main.totalData = results[1].count || 0;
            })
    }

    function getUsers(query) {
        return new Promise((resolve, reject) => {
            var q = {
                limit: query.limit,
                skip: (query.page - 1) * query.limit
            };

            $http.get(Constants.BASE_API + '/users?access_token=' +  AuthenticationState.getToken(), { params: { filter: JSON.stringify(q) } })
                .then(results => {
                    main.users = results.data;
                });
        });
    }

    function countUser(query) {
        return new Promise((resolve, reject) => {
            var q = {
                keyword: query.keyword
            }
            $http.get(Constants.BASE_API + '/users/count?access_token=' +  AuthenticationState.getToken(), { params: { filter: JSON.stringify(q) } })
                .then(results => {
                    main.totalData = results.data.count;
                    main.totalPage = Math.ceil(main.totalData / query.limit);
                });
        });
    }

    function first() {
        query.page = 1;
        getUsersPaging();
    }
    function next() {
        console.log(query.page);
        console.log(Math.ceil(main.totalData / query.limit));
        if (query.page < Math.ceil(main.totalData / query.limit)) {
            query.page += 1;
            getUsersPaging();
        }
    }
    function prev() {
        if (query.page > 1) {
            query.page -= 1;
            getUsersPaging();
        }
    }
    function last() {
        query.page = Math.ceil(main.totalData / query.limit);
        getUsersPaging();
    }

    (function () {
        main.first = first;
        main.last = last;
        main.next = next;
        main.prev = prev;
        getUsersPaging();
    })();

}