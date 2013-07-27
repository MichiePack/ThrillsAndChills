/**
 * @author Michelle Pack
 */
      $("document").ready(function() {
        getData();
      });
      
      function getData() {
        $.ajax({
          // the URL for the request
          url: "_data/pricelist.txt",

          // whether this is a POST or GET request
          type: "GET",
         
          // the type of data we expect back
          dataType : "text",
          
          // function to call for success
          success: successFn,

          // function to call on an error
          error: errorFn,
                           
          // code to run regardless of success or failure
          complete: function( xhr, status ) {
            console.log("The request is complete!");
          }
        });
      }
      
      function successFn(result) {
        console.log("Setting result");
        $("#content").append(result);
      }
      function errorFn(xhr, status, strErr) {
        console.log("There was an error!");
        $("#content").append(result);
      }