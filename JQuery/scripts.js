$(".dark-btn").click(
    function(){
    $(".box").toggleClass("dark");
    $("body").toggleClass("dark");
  }
  );
  $(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
  }
  );
$(".reveal-btn").click(
    function(){
        // $(".cupcake").addClass("reveal");
        $(".cupcake").css("display","block");
        // $(".reveal-btn").css("display","none");
        $(".reveal-btn").hide();
    }
);
$( function() {
    $( ".draggable" ).draggable();
  } );
