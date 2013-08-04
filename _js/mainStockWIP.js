/**
 * @author Michelle Pack
 */
  
$("document").ready(function() {
    getData();
});

function getData() {
    // Ajax loader for csv
    // jquerycsvtotable https://code.google.com/p/jquerycsvtotable/
    
    // $('#CSVTable').CSVToTable('_data/stock1.csv')  // working as per hosted version
    $('#CSVTable').CSVToTable('_data/salesData1.01.csv')
           .bind("loadComplete",formatTable);      
     
    function formatTable() { 
    $('#CSVTable').find('TABLE').dataTable();
    }
     
}
      
