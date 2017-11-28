angular.module('CrudAngular', ['ui.router', 'ui.bootstrap', 'angularUtils.directives.dirPagination', 'ngStorage','lbServices', 'app.authentication'])

    .config(['$stateProvider', '$urlRouterProvider','$compileProvider', function ($stateProvider,
        $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/authentication/login.html',
                data: { pageTitle: 'Login' }
            })
            .state('viewBrands', {
                url: '/viewBrands',
                templateUrl: 'pages/forms/brand/viewBrands.html'
            })
            .state('newBrand', {
                url: '/newBrand',
                templateUrl: 'pages/forms/brand/newBrand.html'
            })
            .state('viewProducts', {
                url: '/viewProducts',
                templateUrl: 'pages/forms/product/viewProducts.html'
            })
            .state('viewProductCategoryMap', {
                url: '/ProductCategory/map/:productId',
                templateUrl: 'pages/forms/product/newProductCategoryMap.html',
                controller: 'productCategoryMapCtrl',
                controllerAs: 'main',
            })
            .state('viewProductCategory', {
                url: '/ProductCategory',
                templateUrl: 'pages/forms/product/viewProductCategory.html'
            })
            .state('editProductCategory', {
                url: '/ProductCategory/edit/:pcId',
                templateUrl: 'pages/forms/product/editProductCategory.html',
                controller: 'productCategoryEditCtrl',
                controllerAs: 'main'
            })
            .state('newProduct', {
                url: '/newProduct',
                templateUrl: 'pages/forms/product/newProduct.html'
            })
            .state('editProduct', {
                url: '/editProduct/{id}',
                templateUrl: 'pages/forms/product/editProduct.html'
            })
            .state('detailProduct', {
                url: '/detailProduct/{id}',
                templateUrl: 'pages/forms/product/detailProduct.html'
            })
            .state('newProductCategory', {
                url: '/newProductCategory',
                templateUrl: 'pages/forms/product/newProductCategory.html'
            })
            .state('viewKiosks', {
                url: '/viewKiosks',
                templateUrl: 'pages/forms/kiosk/viewKiosks.html'
            })
            .state('viewKioskMap', {
                url: '/viewKiosks/map/:kioskId',
                templateUrl: 'pages/forms/kiosk/viewKioskMap.html',
                controller: 'kioskMapCtrl',
                controllerAs: 'main',
                // params:{
                //     obj:null
                // }

                // resolve:{
                //     listProduct:['$http', function($http){
                //         return $http({
                //             method: 'GET',
                //             url:"http://localhost:1337/api" + "/Products",
                //             data: {}
                //         }).then(function (result) {
                //             return result;
                //         })
                //     }
                //     ]} 
            })
            .state('newKiosk', {
                url: '/newKiosk',
                templateUrl: 'pages/forms/kiosk/newKiosk.html'
            })
            .state('viewDealers', {
                url: '/viewDealers',
                templateUrl: 'pages/forms/dealer/viewDealers.html'
            })
            .state('viewOrders', {
                url: '/viewOrders',
                templateUrl: 'pages/forms/order/viewOrders.html'
            })
            .state('newDealer', {
                url: '/newDealer',
                templateUrl: 'pages/forms/dealer/newDealer.html'
            })
            .state('newOrder', {
                url: '/newOrder',
                templateUrl: 'pages/forms/order/viewNewOrders.html'
            })
            .state('viewCompleteReport', {
                url: '/viewCompleteReport',
                templateUrl: 'pages/forms/report/viewCompleteReport.html'
            })
            .state('viewAllReport', {
                url: '/viewAllReport',
                templateUrl: 'pages/forms/report/viewAllReport.html'
            })
            .state('home', {
                url: '/index',
                templateUrl: 'pages/forms/home.html'
            }).state('users', {
                url: '/users',
                templateUrl: 'pages/forms/user/list.html',
                controller: 'UserController',
                controllerAs: 'vm'
            })
            .state('users-register', {
                url: '/users/register',
                templateUrl: 'pages/forms/user/register.html',
                controller: 'UserController',
                controllerAs: 'vm'
            })
            .state('users-mapping-kiosk', {
                url: '/users/{id}/mapping-kiosk',
                templateUrl: 'pages/forms/user/kiosk-mapping.html'
            })
            .state('users-mapping-dealer', {
                url: '/users/{id}/mapping-dealer',
                templateUrl: 'pages/forms/user/dealer-mapping.html'
            })
            .state('users-mapping-roles', {
                url: '/users/{id}/mapping-roles',
                templateUrl: 'pages/forms/user/role-mapping.html'
            })

        $urlRouterProvider.otherwise('/');
    }])
    .controller('MainCtrl', function (Brand) {
        var main = this;
        var defDate = new Date();

        function eraseText(brand) {
            document.getElementById("txtLogo").value = "";
        }


        function getBrands() {
            Brand.find(
                function (result) {
                    main.brands = result;
                });
        }

        function createBrand(brand) {
            if (confirm("Are you sure to Create?")) {
                Brand.create(brand,
                    function (result) {
                        initCreateForm();
                        getBrands();
                        alert("Create Successfuly");
                    }, function (errors) {
                        main.errors = errors.data.error;
                        alert("Error Create");
                    }
                );
            } else {
                alert("Cancelled");
            }
        }

        function updateBrand(brand) {
            if (confirm("Are You Sure to Update?")) {
                Brand.upsert(brand,
                    function (result) {
                        cancelEditing();
                        getBrands();
                        alert("Update Successfuly");
                    });

            } else {
                alert("Cancelled");
            }

        }

        function deleteBrand(brandId) {
            if (confirm("Are You Sure To Delete?")) {
                Brand.deleteById({ Code: brandId },
                    function (result) {
                        cancelEditing();
                        getBrands();
                        alert("Deleted");
                    });

            } else {
                alert("Cancelled");
            }

        }


        function initCreateForm() {
            main.newBrand = { Code: '', Name: '', Description: '', Logo: '', Active: 1, Deleted: 0, CreatedBy: 'AUTO', CreatedDate: defDate, CreateAgent: 'AUTO', UpdatedBy: 'AUTO', UpdatedDate: defDate, UpdateAgent: 'AUTO' };
        }

        function setEditedBrand(brand) {
            main.editedBrand = angular.copy(brand);
            main.isEditing = true;
            main.isShow = false;
        }


        function isCurrentBrand(brandId) {
            return main.editedBrand !== null && main.editedBrand.Code === brandId;
        }

        function cancelEditing() {
            main.editedBrand = null;
            main.isEditing = false;
            main.isShow = true;
        }
        function selectBrand(brand) {
            console.log(brand);
            main.newProduct.BrandCode = brand.Code;
        }



        main.brands = [];
        main.editedBrand = null;
        main.isEditing = false;
        main.isShow = true;
        main.getBrands = getBrands;
        main.createBrand = createBrand;
        main.updateBrand = updateBrand;
        main.deleteBrand = deleteBrand;
        main.setEditedBrand = setEditedBrand;
        main.isCurrentBrand = isCurrentBrand;
        main.cancelEditing = cancelEditing;
        main.eraseText = eraseText;



        initCreateForm();
        getBrands();
    })
    .controller('dealerCtrl', function (Dealer, $http) {
        var main = this;
        var defDate = new Date();


        function getDealers() {
            Dealer.find(
                function (result) {
                    main.dealers = result;
                });
        }

        function createDealer(dealer) {
            if (confirm("Are You Sure to Create?")) {
                Dealer.create(dealer,
                    function (result) {
                        initCreateForm();
                        getDealers();
                        alert("Create Successfuly");
                    }, function (errors) {
                        main.errors = errors.data.error;
                    });
            } else {
                alert("Cancelled");
            }

        }

        function updateDealer(dealer) {
            if (confirm("Are You Sure to Update?")) {
                Dealer.upsert(dealer,
                    function (result) {
                        cancelEditing();
                        getDealers();
                        alert("Update Successfuly");
                    });
            } else {
                alert("Cancelled");
            }

        }

        function deleteDealer(dealerId) {

            if (confirm("Are You Sure to Delete?")) {
                Dealer.deleteById({ Code: dealerId },
                    function (result) {
                        cancelEditing();
                        getDealers();
                        alert("Deleted");
                    });
            } else {
                alert("Cancelled");
            }


        }


        function initCreateForm() {
            main.newDealer = { Code: '', Name: '', BranchId: 0, BranchCode: '', BranchName: '', Description: '', Address: '', PhoneNumber: '', Active: 1, Deleted: 1, CreatedBy: 'AUTO', CreatedDate: defDate, CreateAgent: 'AUTO', UpdatedBy: 'AUTO', UpdatedDate: defDate, UpdateAgent: 'AUTO' };
        }

        function setEditedDealer(dealer) {
            main.editedDealer = angular.copy(dealer);
            main.isEditing = true;
            main.isShow = false;
        }

        function isCurrentDealer(dealerId) {
            return main.editedDealer !== null && main.editedDealer.Code === dealerId;
        }

        function cancelEditing() {
            main.editedDealer = null;
            main.isEditing = false;
            main.isShow = true;
        }

        function getBranches() {
            $http({
                method: 'GET',
                url: 'http://jet-api-resource.azurewebsites.net/v1/branches?size=100',
                data: {}
            }).then(function (result) {
                main.branches = result.data.data;
            });
        }


        function selectBranch(branch) {
            console.log(branch);
            main.newDealer.BranchId = branch.id;
            main.newDealer.BranchCode = branch.code;
            main.newDealer.BranchName = branch.name;
            main.editedDealer.BranchId = branch.id;
            main.editedDealer.BranchCode = branch.code;
            main.editedDealer.BranchName = branch.name;
        }

        main.dealers = [];
        main.editedDealer = null;
        main.isEditing = false;
        main.isShow = true;
        main.getDealers = getDealers;
        main.createDealer = createDealer;
        main.updateDealer = updateDealer;
        main.deleteDealer = deleteDealer;
        main.setEditedDealer = setEditedDealer;
        main.isCurrentDealer = isCurrentDealer;
        main.cancelEditing = cancelEditing;
        main.getBranches = getBranches;
        main.selectBranch = selectBranch;

        initCreateForm();
        getDealers();
        getBranches();
    })

    .filter('startFrom', function () {
        return function (input, start) {
            start = +start;
            return input.slice(start);
        }
    })

    .controller('productDealerCtrl', function (ProductDealer, $http) {
        var main = this;
        var defDate = new Date();


        function getProductDealers() {
            ProductDealer.find(
                function (result) {
                    main.productDealers = result;
                });
        }

        function createProductDealer(productDealer) {

            ProductDealer.create(productDealer,
                function (result) {
                    initCreateForm();
                    getProductDealers();
                });
        }

        function updateProductDealer(productDealer) {
            ProductDealer.upsert(productDealer,
                function (result) {
                    cancelEditing();
                    getProductDealers();
                });
        }

        function deleteProductDealer(productDealerId) {
            ProductDealer.deleteById({ Id: productDealerId },
                function (result) {
                    cancelEditing();
                    getProductDealers();
                });
        }


        function initCreateForm() {
            main.newProductDealer = { ProductCode: '', DealerCode: '', SKU: '', IsAvailable: 1, Active: 1, Deleted: 0, CreatedBy: 'AUTO', CreatedDate: defDate, CreateAgent: 'AUTO', UpdatedBy: 'AUTO', UpdatedDate: defDate, UpdateAgent: 'AUTO' };
        }

        function setEditedProductDealer(productDealer) {
            main.editedProductDealer = angular.copy(productDealer);
            main.isEditing = true;
        }

        function isCurrentProductDealer(productDealerId) {
            return main.editedProductDealer !== null && main.editedProductDealer.Id === productDealerId;
        }

        function cancelEditing() {
            main.editedProductDealer = null;
            main.isEditing = false;
        }

        main.productDealers = [];
        main.editedProductDealer = null;
        main.isEditing = false;
        main.getProductDealers = getProductDealers;
        main.createProductDealer = createProductDealer;
        main.updateProductDealer = updateProductDealer;
        main.deleteProductDealer = deleteProductDealer;
        main.setEditedProductDealer = setEditedProductDealer;
        main.isCurrentProductDealer = isCurrentProductDealer;
        main.cancelEditing = cancelEditing;

        initCreateForm();
        getProductDealers();
    })
    .controller('selBrand', function (Brand) {
        var main = this;

        function getBrands() {
            Brand.find(
                function (result) {
                    main.brands = result;
                });
        }

        function selectBrand(brand) {
            console.log(brand);
            main.newProduct.BrandCode = brand.Code;

        }


        main.Brands = [];
        main.selectBrand = selectBrand;
        getBrands();
    })
    .controller('orderCtrl', function (Order, $http) {
        var main = this;
        var defDate = new Date();
        var submain = this;


        function getOrders() {
            Order.find(
                function (result) {
                    main.orders = result;
                });
        }

        function setViewOrder(order) {
            $http({
                method: 'GET',
                url: 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/Order/',
                //url : 'http://localhost:10010/api/orderDetails?filter={"where":{"OrderCode":"'+order.Code+'"}}',
                data: {}
            }).then(function (result) {
                main.ordersDetails = result.data;
                main.isShow = false;
                main.isView = true;
            });
        }

        function createOrder(order) {
            Order.create(order,
                function (result) {
                    initCreateForm();
                    getOrders();
                }, function (errors) {
                    main.errors = errors.data.error;
                }
            );
        }

        function updateOrder(order) {
            if (confirm('ASSIGN??')) {
                Order.upsert(order,
                    function (result) {
                        cancelEditing();
                        getOrders();
                        alert('Assigned Successfuly');
                    }, function (errors) {
                        main.errors = errors.data.error;
                        alert('Assign Failed');
                    }
                );
            } else {
                alert('Cancelled');
            }

        }

        function deleteOrder(orderId) {
            Order.deleteById({ Code: orderId },
                function (result) {
                    cancelEditing();
                    getOrders();
                });
        }


        function initCreateForm() {
            main.newOrder = {
                Code: '', KioskCode: '', DealerCode: '', Email: '', DP: '', Discount: '', DiscountNominal: '', TotalPrice: '', RequestDate: '', DeliveryDate: '', TotalQty: '',
                Name: '', Destination: '', Phone: '', Status: '', Active: 1, Deleted: 0, CreatedBy: 'AUTO', CreatedDate: defDate, CreateAgent: 'AUTO', UpdatedBy: 'AUTO', UpdatedDate: defDate, UpdateAgent: 'AUTO'
            };
        }

        function setEditedOrder(order) {
            main.editedOrder = angular.copy(order);
            main.isEditing = true;
        }

        function isCurrentOrder(orderId) {
            return main.editedOrder !== null && main.editedOrder.Code === orderId;
        }

        function cancelEditing() {
            main.editedOrder = null;
            main.isEditing = false;
        }
        function cancelView() {
            main.viewProduct = null;
            main.isShow = true;
            main.isView = false;
        }



        main.orders = [];
        main.editedOrder = null;
        main.isEditing = false;
        main.isShow = true;
        main.isView = false;
        main.getOrders = getOrders;
        main.createOrder = createOrder;
        main.updateOrder = updateOrder;
        main.deleteOrder = deleteOrder;
        main.setEditedOrder = setEditedOrder;
        main.isCurrentOrder = isCurrentOrder;
        main.cancelEditing = cancelEditing;
        main.setViewOrder = setViewOrder;
        main.cancelView = cancelView;

        initCreateForm();
        getOrders();

    })
    .controller('newOrderCtrl', ['$scope', 'Order', '$http', '$uibModal', function ($scope, Order, $http, $uibModal) {
        var main = this;
        var defDate = new Date();
        var submain = this;

        function getOrders() {
            // $http.get('http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/Order?filter={"where":{"Status":"CREATED"}}',
            //     function (result) {
            //         main.orders = result.data;
            //     }, function (res) {
            //         console.log(res);
            //     });
            $http({
                method: 'GET',
                url: 'http://tabor-o2o-webapi-internal-dev/api/Order?filter={"where":{"Status":"CREATED"}}',
                // url : 'http://localhost:10010/api/Order?filter={"where":{"Status":"CREATED"}}',
                data: {}
            }).then(function (result) {
                main.orders = result.data;
            });
        }

        function getDealers() {
            $http({
                method: 'GET',
                url: 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/Order/',
                // url : 'http://localhost:10010/api/dealers',
                data: {}
            }).then(function (result) {
                main.dealers = result.data;
            });
        }

        function createOrder(order) {
            Order.create(order,
                function (result) {
                    initCreateForm();
                    getOrders();
                }, function (errors) {
                    main.errors = errors.data.error;
                }
            );
        }

        function updateOrder(order) {
            if (confirm('ASSIGN??')) {
                Order.upsert(order,
                    function (result) {
                        cancelEditing();
                        getOrders();
                        alert('Assigned Successfuly');
                    }, function (errors) {
                        main.errors = errors.data.error;
                        alert('Assign Failed');
                    }
                );
            } else {
                alert('Cancelled');
            }

        }

        function deleteOrder(orderId) {
            Order.deleteById({ Code: orderId },
                function (result) {
                    cancelEditing();
                    getOrders();
                });
        }

        function initCreateForm() {
            main.newOrder = {
                Code: '', KioskCode: '', DealerCode: '', Email: '', DP: '', Discount: '', DiscountNominal: '', TotalPrice: '', RequestDate: '', DeliveryDate: '', TotalQty: '',
                Name: '', Destination: '', Phone: '', Status: '', Active: 1, Deleted: 0, CreatedBy: 'AUTO', CreatedDate: defDate, CreateAgent: 'AUTO', UpdatedBy: 'AUTO', UpdatedDate: defDate, UpdateAgent: 'AUTO'
            };
        }

        function setEditedOrder(order) {
            main.editedOrder = angular.copy(order);
            main.isEditing = true;
            main.isShow = false;
            main.isView = false;
        }
        function isCurrentOrder(orderId) {
            return main.editedOrder !== null && main.editedOrder.Code === orderId;
        }

        function cancelEditing() {
            main.editedOrder = null;
            main.isEditing = false;
            main.isShow = true;
            main.isView = false;
        }

        function setViewOrder(order) {
            $http({
                method: 'GET',
                //              url : 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/Order/',
                url: 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/orderDetails?filter={"where":{"OrderCode":"' + order.Code + '"}}',
                data: {}
            }).then(function (result) {
                main.ordersDetails = result.data;
                main.isShow = false;
                main.isView = true;
            });
        }

        function cancelView() {
            main.viewProduct = null;
            main.isShow = true;
            main.isView = false;
        }


        function openModalAssign(data) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: '../pages/forms/assignOrder.html',
                controller: 'assignCtrl',
                controllerAs: 'main',
                size: 'md',
                resolve: {
                    data: data
                }
            });

        }

        main.orders = [];
        main.editedOrder = null;
        main.isEditing = false;
        main.isShow = true;
        main.isView = false;
        main.getOrders = getOrders;
        main.updateOrder = updateOrder;
        main.deleteOrder = deleteOrder;
        main.setEditedOrder = setEditedOrder;
        main.isCurrentOrder = isCurrentOrder;
        main.cancelEditing = cancelEditing;
        main.setViewOrder = setViewOrder;
        main.cancelView = cancelView;
        main.openModalAssign = openModalAssign;

        initCreateForm();
        getOrders();
        // getDealers();

    }])
    // .controller('assignCtrl', ['Order', '$http', '$uibModalInstance', 'data', function (Order, $http, $uibModalInstance, data) {
    //     var main = this;

    //     main.data = data;

    //     main.updateOrder = updateOrder;
    //     main.cancelEditing = cancelEditing;


    //     setAssignOrder(data);
    //     main.orderDetails = [];
    //     main.assignOrder.DealerCode = '';

    //     function setAssignOrder(data) {
    //         main.assignOrder = angular.copy(data);
    //     }

    //     function getKiosks(data) {
    //         $http({
    //             method: 'GET',
    //             //url : 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/Order/',
    //             url: 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/kiosks?filter={"where":{"Code":"' + data.KioskCode + '"}}',
    //             data: {}
    //         }).then(function successCallback(result) {
    //             main.kiosks = result.data[0].BranchCode;
    //             getDealers();
    //             getOrderDetails();
    //             console.log(main.kiosks);
    //         });
    //     }


    //     function getDealers() {
    //         $http({
    //             method: 'GET',
    //             //url : 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/Order/',
    //             url: 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/dealers?filter={"where":{"BranchCode":"' + main.kiosks + '"}}',
    //             data: {}
    //         }).then(function (result) {
    //             main.dealers = result.data;
    //             var convDealers = main.dealers.map(x => x.Code.toString());
    //             var joinConvDealers = "\"" + convDealers.join("\",\"") + "\"";
    //             getOrderDetails(joinConvDealers)
    //         });
    //     }

    //     function getOrderDetails(joinConvDealers) {
    //         $http({
    //             method: 'GET',
    //             //url : 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/Order/',
    //             url: 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/orderDetails?filter={"where":{"OrderCode":"' + data.Code + '"}}',
    //             data: {}
    //         }).then(function (result) {
    //             main.orderDetails = result.data;
    //             var convOrderDetails = main.orderDetails.map(x => x.ProductCode.toString());
    //             var joinConvOrderDetails = "\"" + convOrderDetails.join("\",\"") + "\"";
    //             getProductDealers(joinConvOrderDetails, joinConvDealers);
    //         });
    //     }


    //     function getProductDealers(joinConvOrderDetails, joinConvDealers) {
    //         $http({
    //             method: 'GET',
    //             //url : 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/Order/',
    //             url: 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/ProductDealers?filter={"where":{"and":[{"ProductCode":{"inq":[' + joinConvOrderDetails + ']}},{"DealerCode":{"inq":[' + joinConvDealers + ']}}]}}',
    //             data: {}
    //         }).then(function (result) {
    //             main.productDealers = result.data;
    //             console.log(convOrderDetails);
    //         });
    //     }
    //     function setDealerCode(dealer) {
    //         if (dealer.IsAvailable == 1) {
    //             main.assignOrder.DealerCode = angular.copy(dealer.DealerCode);
    //         } else {
    //             alert("CANNOT ASSIGN , PRODUCT IS NOT AVAILABLE");
    //         }

    //     }


    //     function updateOrder(order) {
    //         if (confirm('ASSIGN??')) {
    //             updateProperty();
    //             Order.upsert(order,
    //                 function (result) {
    //                     cancelEditing();
    //                     alert('Assigned Successfuly');
    //                     $uibModalInstance.close();
    //                     location.reload();

    //                 }, function (errors) {
    //                     main.errors = errors.data.error;
    //                     alert('Assign Failed');
    //                     $uibModalInstance.close();
    //                 }
    //             );
    //         } else {
    //             alert('Cancelled');
    //             $uibModalInstance.close();
    //         }

    //     }

    //     function cancelEditing() {
    //         $uibModalInstance.dismiss('Cancel');
    //     }

    //     function updateProperty() {
    //         main.assignOrder.Status = 'ASSIGNED';
    //         main.assignOrder.CreatedBy = 'Outlet1';
    //         main.assignOrder.CreateAgent = 'Admin';
    //         main.assignOrder.UpdatedBy = 'Admin';
    //         main.assignOrder.UpdateAgent = 'Admin';
    //     }


    //     main.updateOrder = updateOrder;
    //     main.getProductDealers = getProductDealers;
    //     main.setDealerCode = setDealerCode;
    //     getKiosks(data);



    // }])

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
            $state.go('editProductCategory', { pcId: code })
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
                        $state.go('viewProductCategory')
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

            $state.go('viewKioskMap', { kioskId: kiosk.Code });
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

    .controller('ReportCtrl',function($scope,Dealer,$http){
        var main = this;
        main.dealers = [];
        main.reports = [];
        main.btnTextSearch = "Search";
        main.btnExport = "Export";
        function getDealer(){
            $http({
                method: 'GET',
                url: 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/Dealers/',
                // url : 'http://localhost:10010/api/dealers',
                data: {}
            }).then(function (result) {
                main.dealers = result.data;
                if(result.data.length < 1){
                    alert("Dealer not found");
                }
            });
        }

        function getDataReport(startDate, endDate, dealerVal){
            var newStartDate = new Date(startDate).toUTCString;
            var newEndDate = new Date(endDate).toUTCString;
            main.btnTextSearch = "Searching";
            $http({
                method: 'GET',
                url: 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/VMappedReports?filter[where][Status]=COMPLETED&filter[where][DealerCode]='+dealerVal+'&filter[where][RequestDate][between][0]='+startDate+'&filter[where][RequestDate][between][1]='+endDate+'&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC',
                // url : 'http://localhost:10010/api/dealers',
                data: {}
            }).then(function (result) {
                main.reports = result.data;
                main.btnTextSearch = "Search";
                if (result.data.length == 0){
                    alert("Data Not Found");
                    main.btnTextSearch = "Search";
                }
            });
        }

        function getDataCompletedReportExport(startDate, endDate, dealerVal){
            var newStartDate2 = new Date(startDate).toUTCString;
            var newEndDate2 = new Date(endDate).toUTCString;
            main.isShow = true;
            main.btnExport = "Exporting";
            $http({
                method: 'GET',
                url: 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/VMappedReports?filter[where][Status]=COMPLETED&filter[where][DealerCode]='+dealerVal+'&filter[where][RequestDate][between][0]='+startDate+'&filter[where][RequestDate][between][1]='+endDate+'&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC',
                // url : 'http://localhost:10010/api/dealers',
                data: {}
            }).then(function (result) {
                main.reportsExport = result.data;
                if (result.data.length == 0){
                    alert("Data Not Found");
                }
            });
        }

        function getDataAllReport(startDate, endDate){
            var newStartDate = new Date(startDate).toUTCString;
            var newEndDate = new Date(endDate).toUTCString;
            main.btnTextSearch = "Searching";
            $http({
                method: 'GET',
                url: 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/VMappedReports?filter[where][DealerCode][neq]=null&filter[where][RequestDate][between][0]='+startDate+'&filter[where][RequestDate][between][1]='+endDate+'&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC',
                // url : 'http://localhost:10010/api/dealers',
                data: {}
            }).then(function (result) {
                main.reports = result.data;
                main.btnTextSearch = "Search";
                if (result.data.length == 0){
                    alert("Data Not Found");
                }
            });
        }

        function getDataReportExport(startDate, endDate){
            var newStartDate2 = new Date(startDate).toUTCString;
            var newEndDate2 = new Date(endDate).toUTCString;
            main.isShow = true;
            main.btnExport = "Exporting";
            $http({
                method: 'GET',
                url: 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/VMappedReports?filter[where][DealerCode][neq]=null&filter[where][RequestDate][between][0]='+startDate+'&filter[where][RequestDate][between][1]='+endDate+'&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC',
                // url : 'http://localhost:10010/api/dealers',
                data: {}
            }).then(function (result) {
                main.reportsExport = result.data;
                if (result.data.length == 0){
                    alert("Data Not Found");
                }
            });
        }

        function selectDealer(dealer){
            console.log(dealer.Code);
            return dealer.Code;
        }

        main.isShow = false;
        main.getDataCompletedReportExport = getDataCompletedReportExport;
        main.getDataReport = getDataReport;
        main.selectDealer = selectDealer;
        main.getDataAllReport = getDataAllReport;
        main.getDataReportExport = getDataReportExport;
        getDealer();
    })

    //     .controller('LoginController', ['$scope', '$state', 'authService', '$location', function ($scope, $state, authService, $location) {
    //         $scope.login = function () {
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
    //                 console.log("Not Authenticated");
    //                 $location.path('/login');
    //             }

    //             if (User.isAuthenticated()) {
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
            $state.go('login');
        }
    });
}

angular
    .module('CrudAngular')
    .run(
    runBlock
    );
