
angular.module(`CrudAngular`)
    .controller(`dealerCtrl`, DealerController);

DealerController.$inject = [`Dealer`,`$http`,`$state`,`Constants`];

function DealerController(Dealer, $http,$state,Constants) {
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
                url: `${Constants.JET_API}/v1/branches?size=100`,
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
    }