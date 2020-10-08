$(document).ready(function(){
    $(".modal").modal();
    $(".parallax").parallax();
    $(".sidenav").sidenav();
    $(".carousel.carousel-slider").carousel({
      fullWidth: true,
      indicators: true,
    
    });
    $(".myreviews").carousel({
      numVisible:7,
      shift:55,
      padding:55,
    
    });
  });

  function toogleModal(){
    var instance = M.Modal.getInstance($("#modal3"));
      instance.open();


  }