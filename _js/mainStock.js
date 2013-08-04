/**
 * @author Michelle Pack
 */
      $("document").ready(function() {
        getData();
      });

      function getData() {
         // ajax loader for csv
         ////$("#content").load("_data/pricelist.txt");
         //$("#content").load("_data/stock.csv");
        $("#content").load("_data/bookfileformichelle.notepad.csv);
        
        /* 
         // datatable plugin sample
         $('#table_id').dataTable();
         
         // datatable ajax example
         $('#example').dataTable( {
            "bProcessing": true,
            "sAjaxSource": '_data/pricelist.txt'
            } );
      
      */
        // jquerycsvtotable https://code.google.com/p/jquerycsvtotable/
         $('#CSVTable').CSVToTable('_data/bookfileformichelle.notepad.csv');
         
         //$('#CSVTable').CSVToTable('_data/stock1.csv');
         ////$('#CSVTable').CSVToTable('_vendor/csvtotable/test.csv');
          }
      
