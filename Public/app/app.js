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
        templateUrl: 'pages/forms/newOrder.html'
      })
      .state('home', {
        url: '/index',
        templateUrl: 'pages/forms/home.html'
      })
    $urlRouterProvider.otherwise('index');
  }])
    .controller('MainCtrl', function (Brand) {
        var main = this;
         var defDate = new Date();
    
  
        function getBrands() {
            Brand.find(
                function (result) {
                    main.brands = result;
                });
        }

        function createBrand(brand) {
            Brand.create(brand,
                function (result) {
                    initCreateForm();
                    getBrands();
                }, function(errors){
                    main.errors = errors.data.error;
                }
                );
        }

        function updateBrand(brand) {
            Brand.upsert(brand,
                function (result) {
                    cancelEditing();
                    getBrands();
                });
        }

        function deleteBrand(brandId) {
            Brand.deleteById({Code: brandId},
                function (result) {
                    cancelEditing();
                    getBrands();
                });
        }
           

        function initCreateForm() {
            main.newBrand = { Code: '',Nama: '', Description: '',Logo:'',Active: 1, Deleted: 0, CreatedBy: 'AUTO', CreatedDate: defDate, CreateAgent: 'AUTO', UpdatedBy: 'AUTO', UpdatedDate: defDate, UpdateAgent: 'AUTO' };
        }

        function setEditedBrand(brand) {
            main.editedBrand = angular.copy(brand);
            main.isEditing = true;
        }

        function isCurrentBrand(brandId) {
            return main.editedBrand !== null && main.editedBrand.Code === brandId;
        }

        function cancelEditing() {
            main.editedBrand = null;
            main.isEditing = false;
        }
         function selectBrand(brand){
            console.log(brand);
            main.newProduct.BrandCode = brand.Code;
        }
        
        

        main.brands = [];
        main.editedBrand = null;
        main.isEditing = false;
        main.getBrands = getBrands;
        main.createBrand = createBrand;
        main.updateBrand = updateBrand;
        main.deleteBrand = deleteBrand;
        main.setEditedBrand = setEditedBrand;
        main.isCurrentBrand = isCurrentBrand;
        main.cancelEditing = cancelEditing;
        
        

        initCreateForm();
        getBrands();
    })
    .controller('productCtrl', function (Product,$http) {
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
            Product.create(product,
                function (result) {
                    initCreateForm();
                    getProducts();
                }, function(errors){
                    main.errors = errors.data.error;
                }
                );
        }

        function updateProduct(product) {
            Product.upsert(product,
                function (result) {
                    cancelEditing();
                    getProducts();
                });
        }

        function deleteProduct(productId) {
            Product.deleteById({Code: productId},
                function (result) {
                    cancelEditing();
                    getProducts();
                });
        }

        function getBrands(){
            $http({
                method : 'GET',
                url : 'http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api/brands/',
                data:{}
            }).then(function (result){
                main.brands = result.data;
            });
        }
           

        function initCreateForm() {
            main.newProduct = { Code: '',BrandCode: '',Name: '', Description: '',Price:'',Specification: '',Active: 1, Deleted:0, CreatedBy: 'AUTO', CreatedDate: defDate, CreateAgent: 'AUTO', UpdatedBy: 'AUTO', UpdatedDate: defDate, UpdateAgent: 'AUTO' };
        }

        function setEditedProduct(product) {
            main.editedProduct = angular.copy(product);
            main.isEditing = true;
        }

        function isCurrentProduct(productId) {
            return main.editedProduct !== null && main.editedProduct.Code === productId;
        }

        function cancelEditing() {
            main.editedProduct = null;
            main.isEditing = false;
        }
        function selectBrand(brand){
            console.log(brand);
            main.newProduct.BrandCode = brand.Code;
            
        }
        
   

        main.products = [];
        main.editedProduct = null;
        main.isEditing = false;
        main.getProducts = getProducts;
        main.createProduct = createProduct;
        main.updateProduct = updateProduct;
        main.deleteProduct = deleteProduct;
        main.setEditedProduct = setEditedProduct;
        main.isCurrentProduct = isCurrentProduct;
        main.cancelEditing = cancelEditing;
        main.selectBrand = selectBrand;
        

        initCreateForm();
        getProducts();
        getBrands();

    })
    .controller('dealerCtrl', function (Dealer,$http) {
        var main = this;
         var defDate = new Date();
     

        function getDealers() {
            Dealer.find(
                function (result) {
                    main.dealers = result;
                });
        }

        function createDealer(dealer) {
            Dealer.create(dealer,
                function (result) {
                    initCreateForm();
                    getDealers();
                }, function(errors) {
                    main.errors =  errors.data.error;
                });
        }

        function updateDealer(dealer) {
            Dealer.upsert(dealer,
                function (result) {
                    cancelEditing();
                    getDealers();
                });
        }

        function deleteDealer(dealerId) {
            Dealer.deleteById({Code: dealerId},
                function (result) {
                    cancelEditing();
                    getDealers();
                });
        }
           

        function initCreateForm() {
            main.newDealer = { Code: '',Name: '',BranchId: 0,BranchCode: '',BranchName: '', Description: '',Address:'',PhoneNumber: '',Active: 1, Deleted: 1, CreatedBy: 'AUTO', CreatedDate: defDate, CreateAgent: 'AUTO', UpdatedBy: 'AUTO', UpdatedDate: defDate, UpdateAgent: 'AUTO' };
        }

        function setEditedDealer(dealer) {
            main.editedDealer = angular.copy(dealer);
            main.isEditing = true;
        }

        function isCurrentDealer(dealerId) {
            return main.editedDealer !== null && main.editedDealer.Code === dealerId;
        }

        function cancelEditing() {
            main.editedDealer = null;
            main.isEditing = false;
        }

        function getBranches(){
            $http({
                method : 'GET',
                url : 'http://jet-api-resource.azurewebsites.net/v1/branches?size=100',
                data : {}
            }).then(function (result){
                main.branches = result.data.data;
            });
        }
        

        function selectBranch(branch){
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

    .filter('startFrom', function() {
            return function(input, start) {
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
            ProductDealer.deleteById({Id : productDealerId},
                function (result) {
                    cancelEditing();
                    getProductDealers();
                });
        }
           

        function initCreateForm() {
            main.newProductDealer = { ProductCode: '',DealerCode : '',SKU: '', IsAvailable:1,Active: 1, Deleted: 0, CreatedBy: 'AUTO', CreatedDate: defDate, CreateAgent: 'AUTO', UpdatedBy: 'AUTO', UpdatedDate: defDate, UpdateAgent: 'AUTO' };
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

         function selectBrand(brand){
            console.log(brand);
            main.newProduct.BrandCode = brand.Code;
            
        }

      
        main.Brands = [];
        main.selectBrand = selectBrand;
        getBrands();
    })
 .controller('orderCtrl', function (Order,$http) {
        var main = this;
         var defDate = new Date();
         var submain = this;

     

        function getOrders() {
            Order.find(
                function (result) {
                    main.orders = result;
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
            Order.upsert(order,
                function (result) {
                    cancelEditing();
                    getOrders();
                });
        }

        function deleteOrder(orderId) {
            Order.deleteById({Code: orderId},
                function (result) {
                    cancelEditing();
                    getOrders();
                });
        }

        function getBrands(){
            $http({
                method : 'GET',
                url : 'http://localhost:1337/api/brands',
                data:{}
            }).then(function (result){
                main.brands = result.data;
            });
        }
           

        function initCreateForm() {
            main.newOrder = { Code: '',BrandCode: '',Name: '', Description: '',Price:'',Specification: '',Active: 1, Deleted:0, CreatedBy: 'AUTO', CreatedDate: defDate, CreateAgent: 'AUTO', UpdatedBy: 'AUTO', UpdatedDate: defDate, UpdateAgent: 'AUTO' };
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
        function selectBrand(brand){
            console.log(brand);
            main.newOrder.BrandCode = brand.Code;
            
        }
        
   

        main.orders = [];
        main.editedOrder = null;
        main.isEditing = false;
        main.getOrders = getOrders;
        main.createOrder = createOrder;
        main.updateOrder = updateOrder;
        main.deleteOrder = deleteOrder;
        main.setEditedOrder = setEditedOrder;
        main.isCurrentOrder = isCurrentOrder;
        main.cancelEditing = cancelEditing;
        main.selectBrand = selectBrand;
        

        initCreateForm();
        getOrders();
        getBrands();

    })
   ;

    