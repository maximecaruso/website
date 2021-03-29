var l = 1;


$(document).ready(function(){

    $("main").animate({opacity:1});
    $("#sb").animate({"height":"20vw"},600);
    $("#textKa").animate({"margin-left":"5%","width":"30%"},600);
  });





  $(document).ready(function(){
    $(function(){
          $('#dropHead').hover(function(ev){
             $('#dropdown').toggleClass('fade'); 
              ev.preventDefault();
          });
          $('#dropdown').hover(function(ev){
            $('#dropdown').toggleClass('fade'); 
             ev.preventDefault();
         });
        });


   
      });