/**
 * @author Michelle Pack
 */
      $("document").ready(function() {
        getData();
      });

      function getData() {
         // ajax loader for csv
         //$("#content").load("_data/pricelist.txt");
       //  $("#content").load("_data/stock.csv");
       
         // datatable plugin sample
      
      
        // jquerycsvtotable https://code.google.com/p/jquerycsvtotable/
   //      $('#CSVTable').CSVToTable('_data/stock1.csv');
         //$('#CSVTable').CSVToTable('_vendor/csvtotable/test.csv');
      
         // $('#CSVTable').CSVToTable('_data/stock1.csv')
         // .bind("loadComplete",function() { 
            // $('#CSVTable').find('TABLE').dataTable();
        // });;

         $('#CSVTable').CSVToTable('_data/stock1.csv')
         .bind("loadComplete",formatTable);;      
         
         function formatTable() { 
            $('#CSVTable').find('TABLE').dataTable();
        }
         
     }
      
