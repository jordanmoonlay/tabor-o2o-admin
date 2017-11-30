function fnExcelReport()
    {
        var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
        var textRange; var j=0;
        tab = document.getElementById('completeReport'); 

        for(j = 0 ; j < tab.rows.length ; j++) 
        {     
            tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
        
        }

        tab_text=tab_text+"</table>";
        tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");
        tab_text= tab_text.replace(/<img[^>]*>/gi,"");
        tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); 

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE "); 

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  
        {
            txtArea1.document.open("txt/html","replace");
            txtArea1.document.write(tab_text);
            txtArea1.document.close();
            txtArea1.focus(); 
            sa=txtArea1.document.execCommand("SaveAs",true,"Completed Report.xls");
        }  
        else     
            sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  

        return (sa);
    }

    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve,ms));
    }

    async function demo(){

        console.log("break...");
        document.getElementById("btnExport").disabled = true;
        await sleep(5000);
        console.log("continue..");
        await fnExcelReport();
        location.reload();
        
    }