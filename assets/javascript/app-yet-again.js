 // Example queryURL for Giphy API

    var gifImagePath; // global variable for current gif path to be displayed

    var queryList = ['cats', 'dogs', 'skunks'];

    function displayGifInfo(q) {

        queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q";

        $.ajax({
          url: queryURL,
          method: 'GET'
        }).done(function(response) {
          console.log(response);
          console.log(response.data.image_url);
          gifImagePath = response.data.image_url;
          $('#gifs-view').html('<img src=' + gifImagePath + ' />'); 

        });
 
    }  // end of function displayGifInfo

     function renderButtons(q) {

        // Deletes the gifs prior to adding new gifs
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();
        // Loops through the array of gifs

          // Then dynamicaly generates buttons for each gif in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adds a class of gif to our button
          a.addClass("gif");
          // Added a data-attribute
          a.attr("data-name", q);
          // Provided the initial button text
          a.text(q);
          // Added the button to the buttons-view div
          $("#buttons-view").append(a);
        
      }

   $("button").on("click", function() {

      // This function handles events where the add gif button is clicked
      $("#add-gif").on("click", function(event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var gif = $("#gif-input").val().trim();

        // The gif from the textbox is then added to our array
        queryList.push(gif);

        // Calling renderButtons which handles the processing of our gif array
        for (var i = 0; i<queryList.length; i++) {
            displayGifInfo(q = queryList[i]);
            renderButtons(q = queryList[i]);
        }       
      });

      // Adding click event listeners to all elements with a class of "gif"
      $(document).on("click", ".gif", displaygifInfo);

      // Calling the renderButtons function to display the intial buttons
    renderButtons();

});




