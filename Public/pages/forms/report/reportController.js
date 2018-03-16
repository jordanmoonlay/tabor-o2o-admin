
angular.module(`CrudAngular`)
    .controller(`ReportCtrl`, ReportController);

ReportController.$inject = [`Dealer`,`$http`,`$state`,`Constants`,`$stateParams`];


function ReportController(Dealer,$http,$state,Constants,$stateParams){
        var main = this;
        main.dealers = [];
        main.reports = [];
        main.dataAfterCount = "";
        main.btnTextSearch = "Search";
        main.btnExport = "Export";

        function countData(startDate, endDate, dealerVal){
            var newEndDate = new Date(endDate);
            newEndDate.setDate(newEndDate.getDate()+1).toUTCString;
            debugger
            if(dealerVal!=null){
                $http({
                method: `GET`,
                url: `${Constants.BASE_API}/OrderDetails/count?where[Status]=COMPLETED&where[DealerCode]=`+dealerVal+`&where[RequestDate][between][0]=`+startDate+`&where[RequestDate][between][1]=`+newEndDate+``,
                // url : `http://localhost:10010/api/dealers`,
                data: {}
                }).then(function (result) {
                    main.dataAfterCount = result.data.count;
                    console.log(main.dataAfterCount);
                    if(result.data.length < 1){
                        alert("Dealer not found");
                    }
                });
            }else{
                $http({
                method: `GET`,
                url: `${Constants.BASE_API}/OrderDetails/count?where[Status]=COMPLETED&where[RequestDate][between][0]=`+startDate+`&where[RequestDate][between][1]=`+newEndDate+``,
                // url : `http://localhost:10010/api/dealers`,
                data: {}
                }).then(function (result) {
                    main.dataAfterCount = result.data.count;
                     console.log(main.dataAfterCount);
                    if(result.data.length < 1){
                        alert("Dealer not found");
                    }
                });
            }
            
        }

        function countAllData(startDate, endDate){
           
                $http({
                method: `GET`,
                url: `${Constants.BASE_API}/OrderDetails/count?where[DealerCode][neq]=null&where[RequestDate][between][0]=`+startDate+`&where[RequestDate][between][1]=`+endDate+``,
                // url : `http://localhost:10010/api/dealers`,
                data: {}
                }).then(function (result) {
                    main.dataAfterCount = result.data.count;
                    console.log(main.dataAfterCount);
                    if(result.data.length < 1){
                        alert("Dealer not found");
                    }
                });
            
            
        }


        function getDealer(){
            $http({
                method: `GET`,
                url: `${Constants.BASE_API}/Dealers/`,
                // url : `http://localhost:10010/api/dealers`,
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
            var newEndDate = new Date(endDate);
            newEndDate.setDate(newEndDate.getDate()+1).toUTCString;

            console.log(dealerVal);
            main.btnTextSearch = "Searching";
            countData(startDate,endDate,dealerVal);
        
            if(dealerVal!=null){
                $http({
                method: `GET`,
                url: `${Constants.BASE_API}/VMappedReports?filter[where][Status]=COMPLETED&filter[where][DealerCode]=`+dealerVal+`&filter[where][RequestDate][between][0]=`+startDate+`&filter[where][RequestDate][between][1]=`+newEndDate+`&filter[limit]=10&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC`,
                // url : `http://localhost:10010/api/dealers`,
                data: {}
            }).then(function (result) {
                main.reports = result.data;
                main.btnTextSearch = "Search";
                if (result.data.length == 0){
                    alert("Data Not Found");
                    main.btnTextSearch = "Search";
                }else{
                    main.paginationCurrent = 1;
                }
            });
            }else{
                $http({
                method: `GET`,
                url: `${Constants.BASE_API}/VMappedReports?filter[where][Status]=COMPLETED&filter[where][RequestDate][between][0]=`+startDate+`&filter[where][RequestDate][between][1]=`+newEndDate+`&filter[limit]=10&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC`,
                // url : `http://localhost:10010/api/dealers`,
                data: {}
            }).then(function (result) {
                main.reports = result.data;
                main.btnTextSearch = "Search";
                if (result.data.length == 0){
                    alert("Data Not Found");
                    main.btnTextSearch = "Search";
                }else{
                    main.paginationCurrent = 1;
                }
            });
            }

        }

        function getDataCompletedReportExport(startDate, endDate, dealerVal){
            var newStartDate2 = new Date(startDate).toUTCString;
            var newEndDate2 = new Date(endDate);
            newEndDate2.setDate(newEndDate2.getDate()+1).toUTCString;
            main.isShow = true;
            main.btnExport = "Exporting";
            
            if(dealerVal!=null){
                $http({
                    method: `GET`,
                    url: `${Constants.BASE_API}/VMappedReports?filter[where][Status]=COMPLETED&filter[where][DealerCode]=`+dealerVal+`&filter[where][RequestDate][between][0]=`+startDate+`&filter[where][RequestDate][between][1]=`+newEndDate2+`&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC`,
                    // url : `http://localhost:10010/api/dealers`,
                    data: {}
                }).then(function (result) {
                    main.reportsExport = result.data;
                    if (result.data.length == 0){
                        alert("Data Not Found");
                    }
                });
            }else{
                $http({
                    method: `GET`,
                    url: `${Constants.BASE_API}/VMappedReports?filter[where][Status]=COMPLETED&filter[where][RequestDate][between][0]=`+startDate+`&filter[where][RequestDate][between][1]=`+newEndDate2+`&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC`,
                    // url : `http://localhost:10010/api/dealers`,
                    data: {}
                }).then(function (result) {
                    main.reportsExport = result.data;
                    if (result.data.length == 0){
                        alert("Data Not Found");
                    }
                });
            }
        }

        function getDataAllReport(startDate, endDate){
            var newStartDate = new Date(startDate).toUTCString;
            var newEndDate = new Date(endDate);
            newEndDate.setDate(newEndDate.getDate()+1).toUTCString;
            main.btnTextSearch = "Searching";
            countAllData(startDate,endDate);
            $http({
                method: `GET`,
                url: `${Constants.BASE_API}/VMappedReports?filter[where][DealerCode][neq]=null&filter[where][RequestDate][between][0]=`+startDate+`&filter[where][RequestDate][between][1]=`+newEndDate+`&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC`,
                // url : `http://localhost:10010/api/dealers`,
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
            var newEndDate2 = new Date(endDate);
            newEndDate2.setDate(newEndDate.getDate()+1).toUTCString;
            main.isShow = true;
            main.btnExport = "Exporting";
            $http({
                method: `GET`,
                url: `${Constants.BASE_API}/VMappedReports?filter[where][DealerCode][neq]=null&filter[where][RequestDate][between][0]=`+startDate+`&filter[where][RequestDate][between][1]=`+newEndDate2+`&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC`,
                // url : `http://localhost:10010/api/dealers`,
                data: {}
            }).then(function (result) {
                main.reportsExport = result.data;
                if (result.data.length == 0){
                    alert("Data Not Found");
                }
            });
        }
        
        function getPageCompleteData(startDate, endDate, dealerVal,page){
            var basePage = 10;
            var initiatePage = (basePage * (page-1));
            console.log(initiatePage);
            var newStartDate2 = new Date(startDate).toUTCString;
            var newEndDate2 = new Date(endDate);
            newEndDate2.setDate(newEndDate2.getDate()+1).toUTCString;
            main.btnTextSearch = "Searching";
            debugger
            if(dealerVal!=null){
                $http({
                    method: `GET`,
                    url: `${Constants.BASE_API}/VMappedReports?filter[where][Status]=COMPLETED&filter[where][DealerCode]=`+dealerVal+`&filter[where][RequestDate][between][0]=`+startDate+`&filter[where][RequestDate][between][1]=`+newEndDate2+`&filter[limit]=`+basePage+`&filter[skip]=`+initiatePage+`&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC`,
                    // url : `http://localhost:10010/api/dealers`,
                    data: {}
                }).then(function (result) {
                    main.reports = result.data;
                    main.btnTextSearch = "Search";
                    if (result.data.length == 0){
                        alert("Data Not Found");
                    }
                });
            }else{
                $http({
                    method: `GET`,
                    url: `${Constants.BASE_API}/VMappedReports?filter[where][Status]=COMPLETED&filter[where][RequestDate][between][0]=`+startDate+`&filter[where][RequestDate][between][1]=`+newEndDate2+`&filter[limit]=`+basePage+`&filter[skip]=`+initiatePage+`&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC`,
                    // url : `http://localhost:10010/api/dealers`,
                    data: {}
                }).then(function (result) {
                    main.reports = result.data;
                    main.btnTextSearch = "Search";
                    if (result.data.length == 0){
                        alert("Data Not Found");
                    }
                });
            }
        }

        function getPageAllData(startDate, endDate,page){
            var basePage = 10;
            var initiatePage = (basePage * (page-1));
            console.log(initiatePage);
            var newStartDate2 = new Date(startDate).toUTCString;
            var newEndDate2 = new Date(endDate);
            newEndDate2.setDate(newEndDate2.getDate()+1).toUTCString;
            main.paginationCurrent = page;
            main.btnTextSearch = "Searching";
            
            $http({
                method: `GET`,
                url: `${Constants.BASE_API}/VMappedReports?filter[where][DealerCode][neq]=null&filter[where][RequestDate][between][0]=`+startDate+`&filter[where][RequestDate][between][1]=`+newEndDate2+`&filter[limit]=`+basePage+`&filter[skip]=`+initiatePage+`&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC`,
                // url : `http://localhost:10010/api/dealers`,
                data: {}
            }).then(function (result) {
                main.reports = result.data;
                main.btnTextSearch = "Search";
                if (result.data.length == 0){
                    alert("Data Not Found");
                }
            });
        }


        function selectDealer(dealer){
            debugger
            if(dealer==null){
                console.log("ok");
            }else{
                console.log(dealer.Code);
            return dealer.Code;
            }
            
        }

    
        

        main.isShow = false;
        main.getPageCompleteData = getPageCompleteData;
        main.getDataCompletedReportExport = getDataCompletedReportExport;
        main.getDataReport = getDataReport;
        main.selectDealer = selectDealer;
        main.getDataAllReport = getDataAllReport;
        main.getDataReportExport = getDataReportExport;
        main.countData = countData;
        main.getPageAllData = getPageAllData;
        main.countAllData = countAllData;
        getDealer();

       
}

angular.module(`CrudAngular`)
    .controller(`PrintReportCtrl`, PrintReportController);

PrintReportController.$inject = [`Dealer`,`$http`,`$state`,`Constants`,`$stateParams`,`$window`];

function PrintReportController(Dealer,$http,$state,Constants,$stateParams,$window){
    var main = this;
    var kioskCode = "";
    main.kioskAddress = "";
    main.dataPrint = {}
    main.orderDetails = [];
    main.orderCode = "";
    main.kioskCode = "";
    function getKioskCode(id){
            $http({
                method: `GET`,
                url: `${Constants.BASE_API}/Orders?filter[where][Code]=`+id+``,
                data: {}
            }).then(function (result){
                main.orderCode = result.data[0].Code;
                main.requestDate = result.data[0].RequestDate;
                main.orderName = result.data[0].Name;
                main.kioskCode = result.data[0].KioskCode;
                main.orderPhone = result.data[0].Phone;
                main.SelfPickUp = result.data[0].SelfPickUp;
                kioskCode = result.data[0].KioskCode;
                main.totalPrice = result.data[0].TotalPrice;
                main.totalItem = result.data[0].TotalQuantity;
                main.totalShippingFee = result.data[0].TotalShippingFee;
                main.pinOrder = result.data[0].PIN;
                main.DP = result.data[0].DP;
                getAddress(kioskCode);
                getPaymentMethod(main.orderCode);
                getPaymentMethodFulfillment(main.orderCode);
                getOrderDetail(main.orderCode);
            })
        }

    function getOrderDetail(code){
        $http({
                method: `GET`,
                url: `${Constants.BASE_API}/VMappedReports?filter[where][OrderCode]=`+code+``,
                data: {}
            }).then(function (result){
                main.orderDetails = result.data;
                debugger
            })
    }

    function getAddress(code){
        $http({
            method: `GET`,
            url: `${Constants.BASE_API}/Kiosks?filter[where][Code]=`+code+``,
            data: {}
        }).then(function(result){
            main.kioskBranch = result.data[0].Name;
            main.kioskAddress = result.data[0].Address;
            main.kioskPhone = result.data[0].PhoneNumber;
        })
    }

    function getPaymentMethod(code){
        debugger
        $http({
            method: `GET`,
            url: `${Constants.BASE_API}/OrderPayments?filter[where][OrderCode]=`+code+``,
            data: {}
        }).then(function(result){
            main.paymentMethod = result.data[0].PaymentType;
            main.paidAmount = result.data[0].PaidAmount;
            debugger
        })
    }

    function getPaymentMethodFulfillment(code){
        $http({
            method: `GET`,
            url: `${Constants.BASE_API}/OrderPayments?filter[where][OrderCode]=`+code+`&filter[where][PaymentType]=FULFILLMENT`,
            data: {}
        }).then(function(result){
            main.fullfilmentPaymentMethod = result.data[0].PaymentType;
            main.fullfilmentPaidAmount = result.data[0].PaidAmount;
            debugger
        })
    }

    (function () {
            var id = $stateParams.id;
            getKioskCode(id);
            })();

    function print() {
        $window.print();
    }

    function close() {
        $window.close();
    }

    main.print = print;
    main.close = close;
}