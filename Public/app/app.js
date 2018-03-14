angular.module('CrudAngular', ['ui.router', 'ui.bootstrap', 'angularUtils.directives.dirPagination', 'ngStorage','lbServices', 'app.authentication'])

    .config(['$stateProvider', '$urlRouterProvider','$compileProvider', '$locationProvider', function ($stateProvider,
        $urlRouterProvider) {
       
        $stateProvider
        .state('app', {
            abstract: true,
            views: {
                root:{
                    templateUrl: 'pages/forms/layout/app-layout.html'
                }
            }
            })
            // .state('app.index', {
            //     url: '/',
            //     templateUrl: '/#!/login'
            // })
            .state('app.login', {
                url: '/login',
                templateUrl: 'app/authentication/login.html',
                data: { pageTitle: 'Login' }
            })
            .state('app.viewBrands', {
                url: '/viewBrands',
                templateUrl: 'pages/forms/brand/viewBrands.html'
            })
            .state('app.newBrand', {
                url: '/newBrand',
                templateUrl: 'pages/forms/brand/newBrand.html'
            })
            .state('app.viewProducts', {
                url: '/viewProducts',
                templateUrl: 'pages/forms/product/viewProducts.html'
            })
            .state('app.viewProductCategoryMap', {
                url: '/ProductCategory/map/:productId',
                templateUrl: 'pages/forms/product/newProductCategoryMap.html',
                controller: 'productCategoryMapCtrl',
                controllerAs: 'main',
            })
            .state('app.viewProductCategory', {
                url: '/ProductCategory',
                templateUrl: 'pages/forms/product/viewProductCategory.html'
            })
            .state('app.editProductCategory', {
                url: '/ProductCategory/edit/:pcId',
                templateUrl: 'pages/forms/product/editProductCategory.html',
                controller: 'productCategoryEditCtrl',
                controllerAs: 'main'
            })
            .state('app.newProduct', {
                url: '/newProduct',
                templateUrl: 'pages/forms/product/newProduct.html'
            })
            .state('app.editProduct', {
                url: '/editProduct/{id}',
                templateUrl: 'pages/forms/product/editProduct.html'
            })
            .state('app.detailProduct', {
                url: '/detailProduct/{id}',
                templateUrl: 'pages/forms/product/detailProduct.html'
            })
            .state('app.newProductCategory', {
                url: '/newProductCategory',
                templateUrl: 'pages/forms/product/newProductCategory.html'
            })
            .state('app.viewKiosks', {
                url: '/viewKiosks',
                templateUrl: 'pages/forms/kiosk/viewKiosks.html'
            })
            .state('app.viewKioskMap', {
                url: '/viewKiosks/map/:kioskId',
                templateUrl: 'pages/forms/kiosk/viewKioskMap.html',
                controller: 'kioskMapCtrl',
                controllerAs: 'main',
            })
            .state('app.newKiosk', {
                url: '/newKiosk',
                templateUrl: 'pages/forms/kiosk/newKiosk.html'
            })
            .state('app.viewDealers', {
                url: '/viewDealers',
                templateUrl: 'pages/forms/dealer/viewDealers.html'
            })
            .state('app.newDealer', {
                url: '/newDealer',
                templateUrl: 'pages/forms/dealer/newDealer.html'
            })
            .state('app.viewCompleteReport', {
                url: '/viewCompleteReport',
                templateUrl: 'pages/forms/report/viewCompleteReport.html'
            })
            .state('app.viewAllReport', {
                url: '/viewAllReport',
                templateUrl: 'pages/forms/report/viewAllReport.html'
            })
            .state('app.home', {
                url: '/index',
                templateUrl: 'pages/forms/home.html'
            }).state('app.users', {
                url: '/users',
                templateUrl: 'pages/forms/user/list.html',
                controller: 'UserController',
                controllerAs: 'vm'
            })
            .state('app.users-register', {
                url: '/users/register',
                templateUrl: 'pages/forms/user/register.html',
                controller: 'UserController',
                controllerAs: 'vm'
            })
            .state('app.users-mapping-kiosk', {
                url: '/users/{id}/mapping-kiosk',
                templateUrl: 'pages/forms/user/kiosk-mapping.html'
            })
            .state('app.users-mapping-dealer', {
                url: '/users/{id}/mapping-dealer',
                templateUrl: 'pages/forms/user/dealer-mapping.html'
            })
            .state('app.users-mapping-roles', {
                url: '/users/{id}/mapping-roles',
                templateUrl: 'pages/forms/user/role-mapping.html'
            })
            .state('blank', {
            abstract: true,
            views: {
                root: {
                    templateUrl: 'pages/forms/layout/blank-layout.html'
                }
            }
            })

                .state('blank.invoice', {
                    url: '/order/print/{id}',
                    templateUrl: 'pages/forms/report/printReport.html',
                    data: { pageTitle: 'Invoice' },
                    controller: 'PrintReportCtrl',
                    controllerAs: 'main'
                })

         $urlRouterProvider.otherwise('/');
    }])

    .filter('startFrom', function () {
        return function (input, start) {
            start = +start;
            return input.slice(start);
        }
    })
  

    .controller('productCategoryMapCtrl', function (ProductCategory, Product_productCategory, Product, $http, $stateParams, $q, $state) {
        var main = this;
        var defDate = new Date();
        main.productCategories = []
        main.productProductCategories = []
        main.product = {}

        //main.newMapProductCategory.ProductCode = $stateParams.productId


        function getProductCategoriesByBranchCode(code) {
            console.log(code)
            ProductCategory.find({
                filter: {
                    where: {
                        BrandCode: code
                    }
                }
            },
                function success(result) {
                    main.productCategories = result;
                    console.log(main.productCategories)

                },
                function error(err) {
                    main.errors = errors.data.error;
                });
        }

        function getProductCategoriesByProductCode(code) {
            Product_productCategory.find({
                filter: {
                    where: {
                        ProductCode: code
                    },
                    include: {
                        relation: 'ProductCategory',
                        scope: {
                            fields: ['Name']
                        }
                    }
                }
            },
                function success(result) {
                    main.productProductCategories = result;
                    console.log(main.productProductCategories)

                },
                function error(err) {
                    main.errors = errors.data.error;
                });
        }

        function createMapProductCategory() {
            Product_productCategory.upsert(main.newMapProductCategory
                , function success(result) {
                    getProductCategoriesByProductCode(main.product.Code)
                    //main.productProductCategories.push(result)
                    alert("Insert success")
                }, function error(err) {
                    main.errors = errors.data.error;
                });
        }

        function selectProductCategory(category) {
            main.newMapProductCategory.ProductCategoryCode = category.Code
        }

        function getProductDetail(code) {

            Product.findById({ Code: code }, function (result) {
                main.product = result;
                console.log(main.product)
                getProductCategoriesByBranchCode(main.product.BrandCode)
                getProductCategoriesByProductCode(main.product.Code)
            });
        }

        function removePPC(ppdId) {
            if (confirm("Are You Sure to Delete?")) {
                console.log(ppdId)
                Product_productCategory.deleteById({ Id: ppdId },
                    function (result) {
                        main.productProductCategories = main.productProductCategories.filter(function (ppd) {
                            return ppd.id != ppdId
                        })
                        alert("Deleted");
                    });
            } else {
                alert("Cancelled");
            }
        }

        function initForm() {
            main.newMapProductCategory = { ProductCode: $stateParams.productId, ProductCategoryCode: '', Active: 1, Deleted: 0, CreatedBy: 'AUTO', CreatedDate: defDate, CreateAgent: 'AUTO', UpdatedBy: 'AUTO', UpdatedDate: defDate, UpdateAgent: 'AUTO' }
        }

        // function back()
        // {
        //     $state.go('viewProducts')
        // }

        main.selectProductCategory = selectProductCategory
        main.createMapProductCategory = createMapProductCategory
        main.removePPC = removePPC
        //main.back = back

        getProductDetail($stateParams.productId);
        initForm()



    })

    .controller('productCategoryCtrl', function (ProductCategory, Brand, $http, $state) {
        var main = this;
        var defDate = new Date();
        var submain = this;

        function getProductCategories() {
            ProductCategory.find(
                function (result) {
                    main.productCategories = result;
                    console.log(main.productCategories)
                });
        }

        function getBrands() {
            Brand.find(
                function (result) {
                    main.brands = result;
                    console.log(main.brands)
                });
        }

        function createProductCategory(productCategory) {
            if (confirm("Are You Sure to Create?")) {
                ProductCategory.create(productCategory,
                    function (result) {
                        initCreateForm();
                        alert("Create Successfuly");
                    }, function (errors) {
                        main.errors = errors.data.error;
                        alert('Create Error:' + main.errors);
                    }
                );
            } else {
                alert("Cancelled");
            }
        }

        function removeProductCategory(code) {
            if (confirm("Are You Sure to Delete?")) {
                console.log(code)
                ProductCategory.deleteById({ Code: code },
                    function (result) {
                        getProductCategories()
                        alert("Deleted");
                    });
            } else {
                alert("Cancelled");
            }

        }

        function goToEditPage(code) {
            console.log(code)
            $state.go('app.editProductCategory', { pcId: code })
        }


        function initCreateForm() {
            main.newProductCategory = { BrandCode: '', Code: '', Name: '', Active: 1, Deleted: 0, CreatedBy: 'AUTO', CreatedDate: defDate, CreateAgent: 'AUTO', UpdatedBy: 'AUTO', UpdatedDate: defDate, UpdateAgent: 'AUTO' };
        }

        function selectBrand(brand) {
            main.newProductCategory.BrandCode = brand.Code;
        }

        main.newProductCategory = {}
        main.createProductCategory = createProductCategory
        main.selectBrand = selectBrand
        main.removeProductCategory = removeProductCategory
        main.goToEditPage = goToEditPage
        //main.getProductCategories = getProductCategories

        getBrands()
        getProductCategories()
        initCreateForm();


    })

    .controller('productCategoryEditCtrl', function (ProductCategory, Brand, $http, $state, $stateParams) {
        var main = this;
        var defDate = new Date();
        var submain = this;
        var pcId = $stateParams.pcId
        main.productCategory = {}
        function getProductCategory(pcId) {
            ProductCategory.findById({ Code: pcId },
                function (result) {
                    main.productCategory = result;
                    console.log(main.productCategory)
                });
        }

        function getBrands() {
            Brand.find(
                function (result) {
                    main.brands = result;
                    console.log(main.brands)
                });
        }


        function editProductCategory() {
            if (confirm("Are You Sure to Continue?") == true) {
                ProductCategory.replaceById({ Code: main.productCategory.Code }, main.productCategory,
                    function success(result) {
                        alert("update success")
                        $state.go('app.viewProductCategory')
                    }, function error(err) {
                        main.errors = err.data.error;
                        alert("Create Error");
                    })
            } else {
                alert("Cancelled");
            }

        }


        function selectBrand(brand) {
            main.productCategory.BrandCode = brand.Code;
        }

        main.editProductCategory = editProductCategory
        main.selectBrand = selectBrand

        //main.getProductCategories = getProductCategories

        getBrands()
        getProductCategory(pcId)


    })


    .controller('kioskCtrl', function (Kiosk, $http, $state) {
        var main = this;
        var defDate = new Date();
        var submain = this;

        function getKiosks() {
            Kiosk.find(
                function (result) {
                    main.kiosks = result;
                });
        }

        function getOutlets(key) {
            console.log(key)
            return $http({
                method: 'GET',
                url: 'http://jet-api-resource.azurewebsites.net/v1/dropboxes?keyword=' + key,
                data: {}
            }).then(function (result) {
                return result.data.data;
            })

                .catch(error => {
                    console.log(error)
                });
        }

        function createKiosk(kiosk) {
            if (confirm("Are You Sure to Continue?") == true) {
                Kiosk.create(kiosk,
                    function (result) {
                        initCreateForm();
                        getKiosks();
                        alert("Create Successfuly");
                    }, function (errors) {
                        main.errors = errors.data.error;
                        alert("Create Error");
                    }
                );
            } else {
                alert("Cancelled");
                initCreateForm();
            }
        }

        function updateKiosk(kiosk) {
            if (confirm("Are You Sure to Update?")) {
                Kiosk.upsert(kiosk,
                    function (result) {
                        cancelEditing();
                        getKiosks();
                    });
                alert("Update Successfuly");
            } else {
                alert("Update Failed");
            }
        }

        function deleteKiosk(kioskId) {
            if (confirm("Are You Sure To Delete?")) {
                Kiosk.deleteById({ Code: kioskId },
                    function (result) {
                        cancelEditing();
                        getKiosks();
                    });
                alert("Deleted");
            } else {
                alert("Cancelled");
            }

        }


        function initCreateForm() {
            main.newKiosk = { Code: '', Name: '', Address: '', PhoneNumber: '', OutletId: '', OutletCode: '', OutletName: '', BranchId: '', BranchCode: '', BranchName: '', Active: 1, Deleted: 0, CreatedBy: 'AUTO', CreatedDate: defDate, CreateAgent: 'AUTO', UpdatedBy: 'AUTO', UpdatedDate: defDate, UpdateAgent: 'AUTO' };
        }

        function setEditedKiosk(kiosk) {
            main.editedKiosk = angular.copy(kiosk);
            main.isEditing = true;
            main.isShow = false;
        }

        function isCurrentKiosk(kioskId) {
            return main.editedKiosk !== null && main.editedKiosk.Code === kioskId;
        }

        function cancelEditing() {
            main.editedKiosk = null;
            main.isEditing = false;
            main.isShow = true;
        }
        function selectOutlet(outlet) {
            console.log(outlet);
            main.newKiosk.OutletId = outlet.id;
            main.newKiosk.OutletCode = outlet.code;
            main.newKiosk.OutletName = outlet.name;
            main.newKiosk.BranchId = outlet.branchId;
            main.newKiosk.BranchCode = outlet.branchCode;
            main.newKiosk.BranchName = outlet.branchName;
            main.newKiosk.Address = outlet.address;
            main.newKiosk.Code = outlet.code;
            main.newKiosk.Name = outlet.name;
            main.newKiosk.PhoneNumbe = outlet.phoneNumber;

        }

        function goTo(kiosk) {

            $state.go('app.viewKioskMap', { kioskId: kiosk.Code });
        }



        main.kiosks = [];
        main.editedKiosk = null;
        main.isEditing = false;
        main.isShow = true;
        main.getKiosks = getKiosks;
        main.getOutlets = getOutlets;
        main.createKiosk = createKiosk;
        main.updateKiosk = updateKiosk;
        main.deleteKiosk = deleteKiosk;
        main.setEditedKiosk = setEditedKiosk;
        main.isCurrentKiosk = isCurrentKiosk;
        main.cancelEditing = cancelEditing;
        main.selectOutlet = selectOutlet;
        main.goTo = goTo;



        initCreateForm();
        getKiosks();
        getOutlets();

    })
    .controller('kioskMapCtrl', function (Kiosk, Product, KioskProductDealer, VKioskProductDealer, $http, $uibModal, $rootScope, $log, $scope, $stateParams, $q) {
        var main = this;
        var defDate = new Date();
        var submain = this;
        // var defer = $q.defer()
        // var promise = defer.promise
        main.products = [];
        main.kiosk = null
        main.dealers = [];

        function getProduct() {
            var d = $q.defer()
            Product.find(
                function (result) {
                    main.products = result
                    d.resolve(main.products)
                    //defer.resolve(main.products);
                });
            return d.promise;
        }

        function getKiosksDetail(code) {
            var d = $q.defer()
            console.log(code)
            Kiosk.findById({ Code: code }, function (result) {
                main.kiosk = result;
                d.resolve(main.kiosk)
                console.log(main.kiosk)
            });
            return d.promise
        }

        function getDealerFromKiosk(code_p, index) {
            //main.products[index].kioskDealer[index] = null   
            VKioskProductDealer.find({
                filter: {
                    where: {
                        and: [
                            {
                                KioskCode: main.kiosk.Code
                            },
                            {
                                ProductCode: code_p
                            }
                        ]
                    }
                }

            },
                function (result) {
                    main.products[index].kioskDealer = result;
                    //console.log(main.products[index])
                });
        }

        function removeMapping(id) {
            console.log(id)
            if (confirm("Are You Sure?")) {
                KioskProductDealer.deleteById({ Id: id }
                    , function success(result) {
                        alert("delete success")
                        init();
                    }, function error(err) {
                        alert("delete failed, see log")
                        $log.info(err)
                    })
            } else {
                alert("Update Failed");
            }
        }


        function init() {
            main.products = [];
            main.kiosk = null
            main.dealers = [];

            $q.all([
                getProduct(),
                getKiosksDetail($stateParams.kioskId)
            ])
                .then(function success(data) {
                    var index;
                    //console.log(data)
                    for (index = 0; index < data[0].length; ++index) {
                        getDealerFromKiosk(data[0][index].Code, index)
                    }
                }, function error(msg) {
                    $log.info(msg)
                })

        }

        main.openModal = function (size, kiosk, product) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'pages/forms/kiosk/modalKioskMap.html',
                controller: 'modalMapDealerCtrl',
                controllerAs: 'main',
                size: size,
                resolve: {
                    items: function () {
                        var data = {}
                        data.kiosk = kiosk
                        data.product = product
                        return data
                    },
                }
            });

            modalInstance.result.then(function (Obj) {
                if (confirm("Are You Sure?")) {
                    //console.log("id: " + Obj.id)
                    if (Obj.id == null) {
                        KioskProductDealer.upsert(Obj.data,
                            function (result) {
                                alert("Insert Successfuly");
                            });
                    } else {
                        KioskProductDealer.replaceById({ Id: Obj.id }, Obj.data,
                            function (result) {
                                alert("Update Successfuly");
                            });
                    }
                    init()

                } else {
                    alert("Update Failed");
                }
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        main.removeMapping = removeMapping
        init();

    })
    .controller('modalMapDealerCtrl', function ($uibModalInstance, items, VProductDealer, Product, $rootScope) {

        var vm = this;
        console.log(items)
        vm.items = items

        vm.dealers = []
        vm.products = []
        vm.dealer = null
        vm.codeDealer = null
        productDealer = null

        function getProductDealer() {
            // VProductDealer.find({"where":{"and":[{"BranchId":vm.branchId},{"ProductCode":vm.items.code}]}},
            VProductDealer.find({
                filter: {
                    where: {
                        // and: [
                        //     {
                        //         BranchCode: vm.items.kiosk.BranchCode
                        //     },
                            //{
                                ProductCode: vm.items.product.Code
                            //}
                        //]
                    }
                }

            },

                function (result) {
                    // console.log("masuk get product")
                    // console.log(vm.items.product.Code)
                    // console.log(vm.items.kiosk.BranchId)
                    // console.log(result)
                    vm.dealers = result;


                    //defaultValDealer();
                    //getProductDefault()
                    // if(vm.codeDealer == null && vm.dealers[0] != null)
                    // {
                    //     vm.dealer = vm.dealers[0]
                    // }
                    if (vm.items.product.hasOwnProperty("kioskDealer")) {
                        if (vm.items.product.kioskDealer.hasOwnProperty("0")) {
                            var list = $.grep(vm.dealers, function (element, index) {
                                return (element.id == vm.items.product.kioskDealer[0].ProductDealerId);
                            });
                            vm.dealer = list[0]
                        } else {
                            vm.dealer = vm.dealers[0]
                        }
                    } else {
                        vm.dealer = vm.dealers[0]
                    }
                });
        }
       


        function populateKioskProductDealer(data) {
            if (data != null) {
                objKioskProductDealer = {
                    KioskCode: vm.items.kiosk.Code,
                    ProductDealerId: data.id,
                    Active: 1,
                    Deleted: 0

                }
            }
        }


        function isEmptyKioskId() {
            if (vm.items.product.kioskDealer != null && vm.items.product.kioskDealer.length > 0)
                return false
            return true
        }

        getProductDealer();

        vm.ok = function () {
            populateKioskProductDealer(vm.dealer)
            var objReturn = {}
            objReturn.data = objKioskProductDealer

            if (!isEmptyKioskId())
                objReturn.id = vm.items.product.kioskDealer[0].id
            $uibModalInstance.close(objReturn);
        };

        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    })

    
    //     .controller('LoginController', ['$scope', '$state', 'authService', '$location', function ($scope, $state, authService, $location) {
    //         $scope.login = function () {
    //             debugger
    //             authService.login(this.username, this.password).then(function (response) {
    //                 $location.path('/home');
    //                 console.log(response);
    //             }, function (err) {
    //                 alert(err.data.error.message);
    //                 console.log(err);
    //             });
    //         };
    //     }])

    //    .run(['$rootScope', '$location', '$http', 'User', function ($rootScope, $location, $http, User) {
    //         console.log(User.isAuthenticated());    

    //         $rootScope
    //             .$on('$stateChangeStart',
    //             function (event, toState, toParams, fromState, fromParams) {
    //                 $("#ui-view").html("");
    //                 $(".page-loading").removeClass("hidden");
    //             });

    //         $rootScope
    //             .$on('$stateChangeSuccess',
    //             function (event, toState, toParams, fromState, fromParams) {
    //                 $(".page-loading").addClass("hidden");
    //             });


    //         $rootScope.$on('$locationChangeStart', function (event, next, current) {
    //             // redirect to login page if not logged in and trying to access a restricted page
    //             var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
    //             if (restrictedPage && !User.isAuthenticated()) {
    //                 debugger
    //                 console.log("Not Authenticated");
    //                 $location.path('/login');
    //             }

    //             if (User.isAuthenticated()) {
    //                 debugger
    //                 $location.path('/home');
    //             }
    //         });
    //     }])
    

    .directive("fileread", [
        function () {
            return {
                scope: {
                    fileread: "="
                },
                link: function (scope, element, attributes) {
                    element.bind("change", function (changeEvent) {
                        var reader = new FileReader();
                        reader.onload = function (loadEvent) {
                            scope.$apply(function () {
                                scope.fileread = loadEvent.target.result;
                            });
                        }
                        reader.readAsDataURL(changeEvent.target.files[0]);
                    });
                }
            }
        }
    ]);


runBlock.$inject = [
    '$state',
    'AuthenticationState',
    '$rootScope'
];

function runBlock($state, AuthenticationState, $rootScope) {

    $rootScope.$on("$locationChangeStart", function (event, next, current) {
        if (!AuthenticationState.isLoggedIn()) {
            console.log("transition changed")
            $state.go('app.login');
        }
    });
}

angular
    .module('CrudAngular')
    .run(
    runBlock
    );
