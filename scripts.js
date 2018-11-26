// NASA API KEY
// https://api.nasa.gov/planetary/apod?api_key=tvWTqwDr1EVsPRO5ytstOUZv6vvIBPxT1bvRr8F7

$(document).ready(function() {
  $("#shazamButton").on("click", function() {
    $.ajax({
      url:
        "https://api.nasa.gov/planetary/apod?api_key=tvWTqwDr1EVsPRO5ytstOUZv6vvIBPxT1bvRr8F7",
      success: function(data) {
        //show me the parameters
        console.log(data);
        //list of target and inserted parameters
        $("#date").html("Welcome. Today's date is " + data.date + ".");
        $("#explanation").html(data.explanation);
        $("#title").html(data.title);
        //if media is video, show video. else show iamge
        $("#media").html("Media Below.");
        if (data.media_type === "video") {
          $("#image").css("display", "none");
          $("#video").attr("src", data.url);
        } else {
          $("#image").attr("src", data.url);
          $("#video").css("display", "none");
        }
      },
      error: function(request, error) {
        alert("Try again.");
      }
    });
  });
});
