var accesstoken = "A0sHANIiZHnI8xFGWVcUG9UOws3xtRBmeMkFZP1ewFy10DxVbgdDMrZtmkCGNRGl";

angular.module('CrudAngular')
    .controller("UserRegisterController", UserRegisterController);

UserRegisterController.$inject = ['User', "Constants", "$http"]

function UserRegisterController(User, Constants, $http) {
    var main = this;
    main.user = {
        username: "",
        email: "",
        password: "",
        cpassword: ""
    }

    main.errors = {
        details: {
            messages: {}
        }
    };

    function register() {
        main.errors = {
            details: {
                messages: {}
            }
        };
        if (main.user.cpassword != main.user.password) {
            main.errors.details.messages.cpassword = [];
            main.errors.details.messages.cpassword.push("password and confirm password must be same");
            console.log(main.errors.details.messages.cpassword[0]);

            return false;
        }
        
        var newUser = {
            username: main.user.username,
            email: main.user.email,
            password: main.user.password,
            realm: "user",
            emailVerified: true
        }
        console.log(newUser);
        User.create(newUser,
            function (result) {
                console.log(result);
                main.user = {
                    username: "",
                    email: "",
                    password: "",
                    cpassword: ""
                }
            }, function (errors) {
                main.errors = errors.data.error;
                console.log(main.errors.details.messages.email[0]);
            }
        );
    }

    main.register = register;

}