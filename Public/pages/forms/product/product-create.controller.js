angular.module('CrudAngular')
    .controller('productCreateCtrl', ProductCreateController);

ProductCreateController.$inject = ['Product', '$http', '$state', 'Constants'];


function ProductCreateController(Product, $http, $state, Constants) {
    var main = this;
    var defDate = new Date();
    var submain = this;

    function getProducts() {
        Product.find(
            function (result) {
                main.products = result;
            });
    }

    function dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ia], { type: mimeString });
    }

    function uploadProduct(product) {
        return new Promise((resolve, reject) => {
            var formData = new FormData();
            var fileInput = document.getElementById("productImage");

            debugger
            if (fileInput.files[0]) {
                formData.append("file", fileInput.files[0]);
                $http.post(Constants.BASE_API + "/containers/products/upload", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Accept: 'image/*'
                    }
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

    function uploadProduct2(product) {
        return new Promise((resolve, reject) => {

            var image = dataURItoBlob(product.Image);
            var fd = new FormData(document.forms[0]);

            fd.append('file', image);
            debugger
            $http({
                method: "POST",
                url: Constants.BASE_API + "/containers/products/upload",
                data: fd,
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=AAAbbbCCCd',
                    'Content-Disposition': 'form-data'
                }
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
        });
    }

    function createProduct2(product) {
        if (confirm("Are You Sure to Create?")) {
            uploadProduct(product).then(res => {
                debugger
                product.Image = res.data;
                Product.create(product,
                    function (result) {
                        initCreateForm();
                        getProducts();
                        alert("Create Successfuly");
                    }, function (errors) {
                        debugger
                        main.errors = errors.data.error;
                        alert('Create Error:' + main.errors);
                    }
                );
            })

        } else {
            alert("Cancelled");
        }

    }

    function createProduct(product) {
        if (confirm("Are You Sure to Create?")) {
            Product.create(product,
                function (result) {
                    initCreateForm();
                    getProducts();
                    alert("Create Successfuly");
                }, function (errors) {
                    debugger
                    main.errors = errors.data.error;
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

    function RemoveSpecification(index) {
        if (specifications > specifications[3]) {
            main.specifications.splice(index, 1);
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