// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    // when the eaten button is clicked the boolean for eaten will change to eaten and the burger will switch lists
    $(".change-eaten").on("click", function(event) {
      var id = $(this).attr("id");
  
      var newEatenStatus = {
        eaten: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenStatus
      }).then(
        function() {
          console.log("changed eaten to", newEatenStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    // when the cook more button is clicked the boolean for eaten is flipped 
    $(".cook-more").on("click", function(event) {
      var id = $(this).attr("id");
  
      var newEatenStatus = {
        eaten: 0
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenStatus
      }).then(
        function() {
          console.log("changed eaten to", newEatenStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

        var newBurger = {
          burger_name: $("#ca").val().trim(),
          eaten: 0
      };

      console.log(newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      // We need the id of the cat so that we can tell mysql which cat id to delete
      // reference the object that caused the event via 'this' and grab the data-id value via .data()
      var id = $(this).attr("id");
  
      // Send the DELETE request.
      // url example -> localhost:2000-/api/burgers/1
      // this api call communitcates to our router.delete('/api/burgers/:id') route
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  