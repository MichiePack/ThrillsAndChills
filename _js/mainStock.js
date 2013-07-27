/**
 * @author Michelle Pack
 */
      $("document").ready(function() {
        getData();
      });

      function getData() {
         $("#content").load("_data/pricelist.txt");
      }