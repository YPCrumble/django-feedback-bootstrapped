$("document").ready( function() {
  $("#feedback-form").submit(function(e) {
    e.preventDefault();
    var data = $(this).serialize();
    var formURL = $(this).attr("action");
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : data,
        success: function(data, textStatus, jqXHR) 
        {   
        	alert("Feedback submitted!");
        },
        error: function(jqXHR, textStatus, errorThrown) 
        {
            alert("Feedback could not be submitted :(");
        }
    });
  });
});