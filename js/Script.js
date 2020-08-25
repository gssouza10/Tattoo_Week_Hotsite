$(function(){

  $("div").css("display", "none");
  $("div#div1").addClass("active");

  $("a").on("click", function( e ){         
    e.preventDefault();
      
    $("div").removeClass("active");
      var id = $(this).attr("href");
      $("#"+id+"").addClass("active");
      
  });
});

function myFunction1() {
  document.body.style.backgroundImage = "url('images/bg.png')";
  
}
function myFunction2() {
  document.body.style.backgroundImage = "url('images/bg2.png')";
 
}
function myFunction3() {
  document.body.style.backgroundImage = "url('images/bg3.png')";
  
}
