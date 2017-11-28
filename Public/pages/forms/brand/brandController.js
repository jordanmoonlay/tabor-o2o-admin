angular.module(`CrudAngular`)
    .controller(`MainCtrl`, BrandController);

BrandController.$inject = [`Brand`,`$http`,`$state`,`Constants`];



function BrandController (Brand,$http,$state,Constants) {
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
    }