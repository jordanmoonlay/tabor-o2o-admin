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

    // function uploadProduct(product) {
    //     return new Promise((resolve, reject) => {
    //         var fd = new FormData();
    //         fd.append('file', product.Image);
    //         console.log(fd);
    //         $http.post(Constants.BASE_API + "/containers/products/upload", {
    //             data: fd,
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //                 Accept: undefined
    //             }
    //         }).then(
    //             result => { resolve(result) }
    //             ).catch(
    //             error => {
    //                 debugger
    //                 console.log(error)
    //             }
    //             );
    //     });
    // }

    function createProduct(product) {
        if (confirm("Are You Sure to Create?")) {
            // uploadProduct(product).then(res => {
            //     debugger
            // product.Image = res.data;
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
            // })

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
            method: 'GET',
            url: `${Constants.BASE_API}/brands`,
            data: {}
        }).then(function (result) {
            main.brands = result.data;
        });
    }


    function initCreateForm() {
        main.newProduct = {
            Code: '', BrandCode: '', Name: '', Description: '', Price: '', DP: '', Specification: '', Weight: '', Width: '', Height: '', Length: '', Image: '', Active: 1, Deleted: 0, CreatedBy: 'AUTO', CreatedDate: defDate, CreateAgent: 'AUTO', UpdatedBy: 'AUTO', UpdatedDate: defDate,
            UpdateAgent: 'AUTO'
        };
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

    function goTo(code) {
        console.log(code)
        $state.go('viewProductCategoryMap', { productId: code })
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
    main.goTo = goTo

    initCreateForm();
    getProducts();
    getBrands();
}