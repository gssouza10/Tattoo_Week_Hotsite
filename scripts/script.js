$(function(){

  $(".content").css("display", "none");
  $(".content#firstContent").addClass("active");

  $(".transfer").on("click", function( e ){         
    e.preventDefault();
      
    $(".content").removeClass("active");
      var id = $(this).attr("href");
      $("#"+id+"").addClass("active");
      
  });
});

function myFunction1() {
  document.body.style.backgroundImage = "url('images/machine2.jpg')";
  
}
function myFunction2() {
  document.body.style.backgroundImage = "url('images/background_experience.jpg')";
 
}
function myFunction3() {
  document.body.style.backgroundImage = "url('images/background_tickets.png')";
  
}
