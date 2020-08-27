$(function(){

  $(".content").css("display", "none");
  $(".content#firstContent").addClass("active");

  $("a").on("click", function( e ){         
    e.preventDefault();
      
    $(".content").removeClass("active");
      var id = $(this).attr("href");
      $("#"+id+"").addClass("active");
      
  });
  return false;
});

function myFunction1() {
  document.body.style.backgroundImage = "url('images/background_masterclass.png')";
  
}
function myFunction2() {
  document.body.style.backgroundImage = "url('images/background_experience.png')";
 
}
function myFunction3() {
  document.body.style.backgroundImage = "url('images/background_tickets.png')";
  
}
