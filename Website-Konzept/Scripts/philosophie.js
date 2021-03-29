var l = 1;
var burgerB = false;

$(document).ready(function(){

    $("main").animate({opacity:1});
    $("#b1,#b2,#b3").animate({"margin-left":"0"},600);
    $("#text").animate({"margin-left":"10%"},600);
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
        
         $(function(){
          $('#dropHead2').hover(function(ev){
             $('#dropdown2').toggleClass('fade2'); 
              ev.preventDefault();
          });
          $('#dropdown2').hover(function(ev){
            $('#dropdown2').toggleClass('fade2'); 
             ev.preventDefault();
         });
        });


       /* $("#dropHead").hover(function(){
          $("#dropdown").st({"display":"block","opacity":"1","margin-top":"2vw"});
          }, function(){
          $("#dropdown").css({"display":"none","opacity":"0","margin-top":"0vw"});
        });
        $("#dropdown").hover(function(){
          $("#dropdown").css({"display":"block","opacity":"1","margin-top":"2vw"});
          }, function(){
          $("#dropdown").css({"display":"none","opacity":"0","margin-top":"0vw"});
        });*/
      });


  $(document).ready(function(){
    $(function(){
      $('main').click(function(ev){
         $('#dropdown2').removeClass('fade2'); 
         $('#dropdown').removeClass('fade'); 
          ev.preventDefault();
      });
    });
     $(function(){
      $('#dropHead').click(function(ev){
         $('#dropdown').addClass('fade'); 
         $('#dropHead').addClass('active');
         $('#dropdown2').removeClass('fade2'); 
        
          ev.preventDefault();
      });
  });
    $(function(){
      $('#dropHead2').click(function(ev){
         $('#dropdown2').addClass('fade2'); 
         $('#dropdown').removeClass('fade'); 
          ev.preventDefault();
      });
    
   
    });
  
  });

  $(document).ready(function(){
    $(function(){
      $('main').click(function(ev){
         $('#dropdown2H').removeClass('fade2H'); 
         $('#dropdownH').removeClass('fadeH'); 
          ev.preventDefault();
      });
    });
     $(function(){
      $('#dropHeadH').click(function(ev){
         $('#dropdownH').addClass('fadeH'); 
         $('#dropHeadH').addClass('active');
         $('#dropdown2H').removeClass('fade2H'); 
        
          ev.preventDefault();
      });
  });
    $(function(){
      $('#dropHead2H').click(function(ev){
         $('#dropdown2H').addClass('fade2H'); 
         $('#dropdownH').removeClass('fadeH'); 
          ev.preventDefault();
      });
    
   
    });
  
  });
     
function burger(){
  
  if(burgerB == false){
    $('#burger').css({"display":"none"});
    $('#close').css({"display":"block"});
    $('#nav').animate({"height":"40vw"});
    burgerB=true;
    return;
  }
  if(burgerB == true){
    $('#close').css({"display":"none"});
    $('#burger').css({"display":"block"});
    $('#nav').animate({"height":"0vw"});
    burgerB=false;
    return;
  }
}