angular.module('CrudAngular', ['ui.router','ui.bootstrap','angularUtils.directives.dirPagination','lbServices'])

    
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
    $urlRouterProvider) {
    $stateProvider
      .state('viewBrands', {
        url: '/viewBrands',
        templateUrl: 'pages/forms/viewBrands.html'
      })
      .state('newBrand', {
        url: '/newBrand',
        templateUrl: 'pages/forms/newBrand.html'
      })
      .state('viewProducts', {
        url: '/viewProducts',
        templateUrl: 'pages/forms/viewProducts.html'
      })
      .state('newProduct', {
        url: '/newProduct',
        templateUrl: 'pages/forms/newProduct.html'
      })
      .state('viewDealers', {
        url: '/viewDealers',
        templateUrl: 'pages/forms/viewDealers.html'
      })
      .state('viewOrders', {
        url: '/viewOrders',
        templateUrl: 'pages/forms/viewOrders.html'
      })
      .state('newDealer', {
        url: '/newDealer',
        templateUrl: 'pages/forms/newDealer.html'
      })
      .state('newOrder', {
        url: '/newOrder',
        templateUrl: 'pages/forms/viewNewOrders.html'
      })
      .state('home', {
        url: '/index',
        templateUrl: 'pages/forms/home.html'
      })
      .state('users',{
          url:'/users',
          templateUrl: 'pages/forms/user/list.html',
          controller: 'UserController',
          controllerAs: 'vm'
      })
      .state('users-register',{
          url:'/users/register',
          templateUrl: 'pages/forms/user/register.html',
          controller: 'UserController',
          controllerAs: 'vm'
      })
      .state('users-mapping-kiosk',{
          url:'/users/{id}/mapping-kiosk',
          templateUrl:'pages/forms/user/kiosk-mapping.html'
      })
      .state('users-mapping-dealer',{
          url:'/users/{id}/mapping-dealer',
          templateUrl:'pages/forms/user/dealer-mapping.html'
      })
    $urlRouterProvider.otherwise('index');
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
    .controller('productCtrl', function (Product, $http) {
        var main = this;
        var defDate = new Date();
        var submain = this;

        function getProducts() {
            Product.find(
                function (result) {
                    main.products = result;
                });
        }

        function createProduct(product) {
            if (confirm("Are You Sure to Create?")) {
                Product.create(product,
                    function (result) {
                        initCreateForm();
                        getProducts();
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

        function updateProduct(product) {
            if (confirm("Are You Sure to Update?")) {
                Product.upsert(product,
                    function (result) {
                        cancelEditing();
                        getProducts();
                        alert("Update Successfuly");
                    });

            } else {
                alert("Cancelled");
            }

        }

        function deleteProduct(productId) {
            if (confirm("Are You Sure to Delete?")) {
                Product.deleteById({ Code: productId },
                    function (result) {
                        cancelEditing();
                        getProducts();
                        alert("Deleted");
                    });
            } else {
                alert("Cancelled");
            }

        }

        function getBrands() {
            $http({
                method : 'GET',
                url : 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/brands',
 //                 url : 'http://localhost:10010/api/brands',
                data:{}
            }).then(function (result){
                main.brands = result.data;
            });
        }


        function initCreateForm() {
            main.newProduct = { Code: '', BrandCode: '', Name: '', Description: '', Price: '', DP: '', Specification: '',Weight:'',Width:'',Height:'',Length:'', Image: '', Active: 1, Deleted: 0, CreatedBy: 'AUTO', CreatedDate: defDate, CreateAgent: 'AUTO', UpdatedBy: 'AUTO', UpdatedDate: defDate, UpdateAgent: 'AUTO' };
        }

        function setEditedProduct(product) {
            main.editedProduct = angular.copy(product);
            main.isEditing = true;
            main.isShow = false;
            main.isView = false;
        }

        function setViewProduct(product) {
            main.viewProduct = angular.copy(product);
            main.isView = true;
            main.isShow = false;
        }


        function isCurrentProduct(productId) {
            return main.editedProduct !== null || main.viewProduct !== null && main.editedProduct.Code === productId;
        }

        function cancelEditing() {
            main.editedProduct = null;
            main.isEditing = false;
            main.isShow = true;

        }

        function cancelView() {
            main.viewProduct = null;
            main.isShow = true;
            main.isView = false;
        }

        function selectBrand(brand) {
            console.log(brand);
            main.newProduct.BrandCode = brand.Code;
        }

        function getSpec() {
            var getSpecJSON = JSON.stringify(main.specifications);
            main.newProduct.Specification = getSpecJSON;
        }


        var specifications = [3];
        specifications[0] = { key: "RAM", value: "" };
        specifications[1] = { key: "Camera", value: "" };
        specifications[2] = { key: "Battery", value: "" };


        main.specifications = specifications;

        function AddSpecification() {
            main.specifications.push({ key: "", value: "" });
        }

        function RemoveSpecification() {
            if (specifications > specifications[3]) {
                main.specifications.pop();
                var getSpecJSON = JSON.stringify(main.specifications);
                main.newProduct.Specification = getSpecJSON;
            } else {
                alert("Can't Be Deleted");
            }
        }

        main.products = [];
        main.editedProduct = null;
        main.viewProduct = null;
        main.isEditing = false;
        main.isView = false;
        main.isShow = true;
        main.getProducts = getProducts;
        main.createProduct = createProduct;
        main.updateProduct = updateProduct;
        main.deleteProduct = deleteProduct;
        main.setEditedProduct = setEditedProduct;
        main.setViewProduct = setViewProduct;
        main.isCurrentProduct = isCurrentProduct;
        main.cancelEditing = cancelEditing;
        main.cancelView = cancelView;
        main.selectBrand = selectBrand;
        main.getSpec = getSpec;
        main.AddSpecification = AddSpecification;
        main.RemoveSpecification = RemoveSpecification;

        initCreateForm();
        getProducts();
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
                method : 'GET',
              url : 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/Order/',
//                url : 'http://localhost:10010/api/orderDetails?filter={"where":{"OrderCode":"'+order.Code+'"}}',
                data:{}
            }).then(function (result){
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
    .controller('newOrderCtrl', ['$scope','Order', '$http',  '$uibModal', function ($scope, Order, $http, $uibModal) {
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
                method : 'GET',
                url : 'http://tabor-o2o-webapi-internal-dev/api/Order?filter={"where":{"Status":"CREATED"}}',
                // url : 'http://localhost:10010/api/Order?filter={"where":{"Status":"CREATED"}}',
                data:{}
            }).then(function (result){
                main.orders = result.data;
            });
        }

        function getDealers(){
            $http({
                method : 'GET',
             url : 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/Order/',
                // url : 'http://localhost:10010/api/dealers',
                data:{}
            }).then(function (result){
                main.dealers = result.data;
            });   
        }

        function createOrder(order) {
            Order.create(order,
                function (result) {
                    initCreateForm();
                    getOrders();
                }, function(errors){
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
    .controller('assignCtrl', ['Order' ,'$http', '$uibModalInstance', 'data', function (Order,$http, $uibModalInstance, data) {
        var main = this;

        main.data = data;

        main.updateOrder = updateOrder;
        main.cancelEditing = cancelEditing;
        

        setAssignOrder(data);
        main.orderDetails =[];
        main.assignOrder.DealerCode = '';

        function setAssignOrder(data) {
            main.assignOrder = angular.copy(data);
        }

        function getKiosks(data){
            $http({
                method: 'GET',
                //url : 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/Order/',
                url: 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/kiosks?filter={"where":{"Code":"'+ data.KioskCode +'"}}',
                data:{}
            }).then(function successCallback(result) {
                main.kiosks = result.data[0].BranchCode;
                getDealers();
                getOrderDetails();
                console.log(main.kiosks);
            });
        }
    

        function getDealers() {
            $http({
                method: 'GET',
                //url : 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/Order/',
                url: 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/dealers?filter={"where":{"BranchCode":"'+main.kiosks+'"}}',
                data:{}
            }).then(function (result) {
                main.dealers = result.data;
                var convDealers = main.dealers.map(x=>x.Code.toString());
                var joinConvDealers = "\""+ convDealers.join("\",\"")+"\"";
                getOrderDetails(joinConvDealers)
            });
        }

        function getOrderDetails(joinConvDealers){
            $http({
                method: 'GET',
                //url : 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/Order/',
                url: 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/orderDetails?filter={"where":{"OrderCode":"' + data.Code + '"}}',
                data:{}
            }).then(function (result) {
                main.orderDetails = result.data;
                var convOrderDetails = main.orderDetails.map(x=>x.ProductCode.toString());
                var joinConvOrderDetails = "\""+ convOrderDetails.join("\",\"")+"\"";
                getProductDealers(joinConvOrderDetails,joinConvDealers);
            }); 
        }
        
        
        function getProductDealers(joinConvOrderDetails,joinConvDealers){
            $http({
                method: 'GET',
                //url : 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/Order/',
                url: 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/ProductDealers?filter={"where":{"and":[{"ProductCode":{"inq":['+joinConvOrderDetails+']}},{"DealerCode":{"inq":['+joinConvDealers+']}}]}}',
                data:{}
            }).then(function (result) {
                main.productDealers = result.data;
                console.log(convOrderDetails);
            });
        }
        function setDealerCode(dealer) {
            if(dealer.IsAvailable == 1){
                main.assignOrder.DealerCode = angular.copy(dealer.DealerCode);
            }else{
                alert("CANNOT ASSIGN , PRODUCT IS NOT AVAILABLE");
            }
            
        }


        function updateOrder(order) {
            if (confirm('ASSIGN??')) {
                updateProperty();
                Order.upsert(order,
                    function (result) {
                        cancelEditing();
                        alert('Assigned Successfuly');
                        $uibModalInstance.close();
                        location.reload();
                        
                    }, function (errors) {
                        main.errors = errors.data.error;
                        alert('Assign Failed');
                        $uibModalInstance.close();
                    }
                );
            } else {
                alert('Cancelled');
                $uibModalInstance.close();
            }
            
        }

        function cancelEditing() {
            $uibModalInstance.dismiss('Cancel');
        }

        function updateProperty(){
            main.assignOrder.Status = 'ASSIGNED';
            main.assignOrder.CreatedBy = 'Outlet1';
            main.assignOrder.CreateAgent = 'Admin';
            main.assignOrder.UpdatedBy = 'Admin';
            main.assignOrder.UpdateAgent = 'Admin';
        }


        main.updateOrder = updateOrder;
        main.getProductDealers = getProductDealers;
        main.setDealerCode = setDealerCode;
        getKiosks(data);     

        

    }])
    .controller('kioskCtrl', function (Kiosk, $http) {
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



        initCreateForm();
        getKiosks();
        getOutlets();

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

    //your directive
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

;
