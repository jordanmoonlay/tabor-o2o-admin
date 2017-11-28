
angular.module(`CrudAngular`)
    .controller(`ReportCtrl`, ReportController);

ReportController.$inject = [`Dealer`,`$http`,`$state`,`Constants`];


function ReportController(Dealer,$http,$state,Constants){
        var main = this;
        main.dealers = [];
        main.reports = [];
        main.btnTextSearch = "Search";
        main.btnExport = "Export";
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
            main.btnTextSearch = "Searching";
            $http({
                method: `GET`,
                url: `${Constants.BASE_API}/VMappedReports?filter[where][Status]=COMPLETED&filter[where][DealerCode]=`+dealerVal+`&filter[where][RequestDate][between][0]=`+startDate+`&filter[where][RequestDate][between][1]=`+endDate+`&filter[order]=KioskCode%20ASC&filter[order]=RequestDate%20ASC`,
                // url : `http://localhost:10010/api/dealers`,
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
        }

        function getDataAllReport(startDate, endDate){
            var newStartDate = new Date(startDate).toUTCString;
            var newEndDate = new Date(endDate).toUTCString;
            main.btnTextSearch = "Searching";
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
}
