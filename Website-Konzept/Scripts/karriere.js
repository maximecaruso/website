

var burgerB = false;
$(document).ready(function(){

    $("main").animate({opacity:1});
    $("#suche>p").animate({"opacity":"1"},1000);
    $("#suche>img").attr("src","../Images/werbungjb3_2.gif")
  });



let an = false;

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

      $(document).scroll(function(){
        $(function(){
if(window.innerWidth>600){
            if((window.pageYOffset+(window.innerHeight/1.6))>$("#bilden").offset().top && an == false ){
               
                $("#bilden>img").attr("src","../Images/werbungjb3.gif")
                $("#bilden>p").animate({"opacity":"1"},1000);
                an =true;
          }
     
          if((window.pageYOffset+(window.innerHeight/1.4))>$("#zitat").offset().top ){

            $("#zitat").animate({"opacity":"1","margin-left":"35%"},1000);
          
      }
     
}
else{
  if((window.pageYOffset+(window.innerHeight/1.6))>$("#bildenHa").offset().top && an == false ){
               
    $("#bildenHa>img").attr("src","../Images/werbungjb3.gif")
    $("#bildenHa>p").animate({"opacity":"1"},1000);
    an =true;
}
  if((window.pageYOffset+(window.innerHeight/1.4))>$("#zitat").offset().top ){

    $("#zitat").animate({"opacity":"1","margin-left":"10%"},1000);
  
}
}
            });
    
        
       
       
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
              $('#nav').animate({"height":"60vw"});
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