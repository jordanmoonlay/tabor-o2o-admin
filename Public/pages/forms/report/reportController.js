
angular.module(`CrudAngular`)
    .controller(`ReportCtrl`, ReportController);

ReportController.$inject = [`Dealer`,`$http`,`$state`,`Constants`];


function ReportController(Dealer,$http,$state,Constants){
        var main = this;
        main.dealers = [];
        main.reports = [];
        main.dataAfterCount = "";
        main.btnTextSearch = "Search";
        main.btnExport = "Export";

        function countData(startDate, endDate, dealerVal){
            debugger
            if(dealerVal!=null){
                $http({
                method: `GET`,
                url: `${Constants.BASE_API}/OrderDetails/count?where[Status]=COMPLETED&where[DealerCode]=`+dealerVal+`&where[RequestDate][between][0]=`+startDate+`&where[RequestDate][between][1]=`+endDate+``,
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
                url: `${Constants.BASE_API}/OrderDetails/count?where[Status]=COMPLETED&where[RequestDate][between][0]=`+startDate+`&where[RequestDate][between][1]=`+endDate+``,
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
            var newEndDate = new Date(endDate).toUTCString;


            console.log(dealerVal);
            main.btnTextSearch = "Searching";
            countData(startDate,endDate,dealerVal);
        
            if(dealerVal!=null){
                $http({
                method: `GET`,
                url: `${Constants.BASE_API}/VMappedReports?filter[where][Status]=COMPLETED&filter[where][DealerCode]=`+dealerVal+`&filter[where][RequestDate][between][0]=`+startDate+`&filter[where][RequestDate][between][1]=`+endDate+`&filter[limit]=10&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC`,
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
                url: `${Constants.BASE_API}/VMappedReports?filter[where][Status]=COMPLETED&filter[where][RequestDate][between][0]=`+startDate+`&filter[where][RequestDate][between][1]=`+endDate+`&filter[limit]=10&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC`,
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
            var newEndDate2 = new Date(endDate).toUTCString;
            main.isShow = true;
            main.btnExport = "Exporting";
            if(dealerVal!=null){
                $http({
                    method: `GET`,
                    url: `${Constants.BASE_API}/VMappedReports?filter[where][Status]=COMPLETED&filter[where][DealerCode]=`+dealerVal+`&filter[where][RequestDate][between][0]=`+startDate+`&filter[where][RequestDate][between][1]=`+endDate+`&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC`,
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
                    url: `${Constants.BASE_API}/VMappedReports?filter[where][Status]=COMPLETED&filter[where][RequestDate][between][0]=`+startDate+`&filter[where][RequestDate][between][1]=`+endDate+`&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC`,
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
            var newEndDate = new Date(endDate).toUTCString;
            main.btnTextSearch = "Searching";
            countAllData(startDate,endDate);
            $http({
                method: `GET`,
                url: `${Constants.BASE_API}/VMappedReports?filter[where][DealerCode][neq]=null&filter[where][RequestDate][between][0]=`+startDate+`&filter[where][RequestDate][between][1]=`+endDate+`&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC`,
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
            var newEndDate2 = new Date(endDate).toUTCString;
            main.isShow = true;
            main.btnExport = "Exporting";
            $http({
                method: `GET`,
                url: `${Constants.BASE_API}/VMappedReports?filter[where][DealerCode][neq]=null&filter[where][RequestDate][between][0]=`+startDate+`&filter[where][RequestDate][between][1]=`+endDate+`&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC`,
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
            var newEndDate2 = new Date(endDate).toUTCString;
            main.paginationCurrent = page;
            main.btnTextSearch = "Searching";
            if(dealerVal!=null){
                $http({
                    method: `GET`,
                    url: `${Constants.BASE_API}/VMappedReports?filter[where][Status]=COMPLETED&filter[where][DealerCode]=`+dealerVal+`&filter[where][RequestDate][between][0]=`+startDate+`&filter[where][RequestDate][between][1]=`+endDate+`&filter[limit]=`+basePage+`&filter[skip]=`+initiatePage+`&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC`,
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
                    url: `${Constants.BASE_API}/VMappedReports?filter[where][Status]=COMPLETED&filter[where][RequestDate][between][0]=`+startDate+`&filter[where][RequestDate][between][1]=`+endDate+`&filter[limit]=`+basePage+`&filter[skip]=`+initiatePage+`&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC`,
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
            var newEndDate2 = new Date(endDate).toUTCString;
            main.paginationCurrent = page;
            main.btnTextSearch = "Searching";
            
            $http({
                method: `GET`,
                url: `${Constants.BASE_API}/VMappedReports?filter[where][DealerCode][neq]=null&filter[where][RequestDate][between][0]=`+startDate+`&filter[where][RequestDate][between][1]=`+endDate+`&filter[limit]=`+basePage+`&filter[skip]=`+initiatePage+`&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC`,
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
