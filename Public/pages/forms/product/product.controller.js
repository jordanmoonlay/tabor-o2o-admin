angular.module('CrudAngular')
    .controller('productCtrl', ProductController);

ProductController.$inject = ['Product', '$http', '$state', 'Constants'];


function ProductController(Product, $http, $state, Constants) {
    var main = this;
    var defDate = new Date();
    var submain = this;

    function getProducts() {
        Product.find(
            function (result) {
                main.products = result;
            });
    }



    function updateProduct(product) {
        if (confirm("Are You Sure to Update?")) {
            var file = document.getElementById("productImage");
            debugger
            if (file.value != "") {
                uploadProduct().then(result => {
                    debugger
                    if (res.data.result.files.file[0]) {
                        p = res.data.result.files.file[0];
                        product.Image = `containers/${p.container}/download/${p.name}`;
                    }
                    Product.upsert(product,
                        function (result) {
                            cancelEditing();
                            getProducts();
                            alert("Update Successfuly");
                        });
                })
            } else {
                Product.upsert(product,
                    function (result) {
                        cancelEditing();
                        getProducts();
                        alert("Update Successfuly");
                    });
            }
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
            method: 'GET',
            url: `${Constants.BASE_API}/brands`,
            data: {}
        }).then(function (result) {
            main.brands = result.data;
        });
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

    function goTo(code) {
        console.log(code)
        $state.go('app.viewProductCategoryMap', { productId: code })
        debugger
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
    main.updateProduct = updateProduct;
    main.deleteProduct = deleteProduct;
    main.setViewProduct = setViewProduct;
    main.isCurrentProduct = isCurrentProduct;
    main.cancelEditing = cancelEditing;
    main.cancelView = cancelView;
    main.selectBrand = selectBrand;
    main.getSpec = getSpec;
    main.AddSpecification = AddSpecification;
    main.RemoveSpecification = RemoveSpecification;
    main.goTo = goTo

    getProducts();
    getBrands();
}


angular.module('CrudAngular')
    .controller('productEditCtrl', ProductEditController);

ProductEditController.$inject = ["$stateParams", "$http", "Constants", "Product", "$state"];

function ProductEditController($stateParams, $http, Constants, Product, $state) {
    var main = this;
    main.editProduct = {};
    main.specifications = [];
    main.brands = [];
    main.selectedTestBrand = {};
    main.baseapi = Constants.BASE_API + "/";
    main.imagePreview = "";

    function setEditedProduct(product) {
        main.editedProduct = angular.copy(product);
        main.isEditing = true;
        main.isShow = false;
        main.isView = false;
    }

    function getSpec() {
        var getSpecJSON = JSON.stringify(main.specifications);
        main.editProduct.Specification = getSpecJSON;
    }

    function getProductById(id) {
        $http.get(`${Constants.BASE_API}/products/${id}`).then(
            result => {
                main.editProduct = result.data;
                main.imagePreview = main.baseapi + main.editProduct.Image;
                for (var spec of JSON.parse(main.editProduct.Specification))
                    main.specifications.push({ key: spec.key, value: spec.value });
                getBrandById(main.editProduct.BrandCode);
            }
        )
    }

    function updateImagePreview(){
        if(main.editProduct.Image.length < main.imagePreview.length)
        return main.imagePreview;
        else
        return main.editProduct.Image;
    }

    function AddSpecification() {
        main.specifications.push({ key: "", value: "" });
    }

    function RemoveSpecification(index) {
        if (index > 2) {
            main.specifications.splice(index, 1)
            var getSpecJSON = JSON.stringify(main.specifications);
            main.editProduct.Specification = getSpecJSON;
        } else {
            alert("Can't Be Deleted");
        }
    }

    function uploadProduct(product) {
        return new Promise((resolve, reject) => {
            var formData = new FormData();
            var fileInput = document.getElementById("productImage");

            debugger
            if (fileInput.files[0]) {
                formData.append("file", fileInput.files[0]);
                $http.post(Constants.BASE_API + "/containers/products/upload", formData, {
                    transformRequest: angular.identity,
                    headers: { 'Content-Type': undefined }
                }).then(
                    result => {
                        debugger
                        resolve(result)
                    }
                    ).catch(
                    error => {
                        debugger
                        console.log(error)
                    }
                    );
            }
        });
    }

    function updateProduct(product) {
        if (confirm("Are You Sure to Update?")) {
            var file = document.getElementById("productImage");
            debugger
            if (file.value != "") {
                uploadProduct().then(res => {
                    debugger
                    if (res.data.result.files.file[0]) {
                        p = res.data.result.files.file[0];
                        product.Image = `containers/${p.container}/download/${p.name}`;
                    }
                    Product.upsert(product,
                        function (result) {
                        $state.go("app.viewProducts");
                        alert("Update Successfuly");
                        });
                })
            } else {
                Product.upsert(product,
                    function (result) {
                        $state.go("app.viewProducts");
                        alert("Update Successfuly");
                    });
            }
        } else {
            alert("Cancelled");
        }

    }

    function getBrands() {
        $http({
            method: 'GET',
            url: `${Constants.BASE_API}/brands`,
            data: {}
        }).then(function (result) {
            main.brands = result.data;
        });
    }

    function getBrandById(id) {
        $http({
            method: 'GET',
            url: `${Constants.BASE_API}/brands/${id}`,
            data: {}
        }).then((result) => {
            main.selectedTestBrand = result.data;
        });
    }

    function selectBrand(brand) {
        console.log(brand);
        main.editProduct.BrandCode = brand.Code;
    }

    main.getSpec = getSpec;
    main.AddSpecification = AddSpecification;
    main.RemoveSpecification = RemoveSpecification;
    main.updateProduct = updateProduct;
    main.getBrands = getBrands;
    main.selectBrand = selectBrand;
    main.updateImagePreview = updateImagePreview;


    (function () {
        main.ProductId = $stateParams.id;
        getProductById(main.ProductId);
        getBrands();
    })();
}

angular.module("CrudAngular")
    .controller("productDetailCtrl", ProductDetailController);

ProductDetailController.$inject = ["Constants", "$http", "$stateParams"];

function ProductDetailController(Constants, $http, $stateParams) {
    var main = this;
    main.viewProduct = {};
    main.baseapi = Constants.BASE_API + "/";
    main.specifications = [];

    function getProductById(id) {
        debugger
        $http.get(`${Constants.BASE_API}/products/${id}`)
            .then(
            result => {
                main.viewProduct = result.data;
                debugger
                for (var spec of JSON.parse(main.viewProduct.Specification))
                    main.specifications.push({ key: spec.key, value: spec.value });
            });
    }

    (function () {
        var id = $stateParams.id;
        getProductById(id);
    })();
}