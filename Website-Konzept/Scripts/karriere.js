
d = new Date();
var burgerB = false;
$(document).ready(function(){

    $("main").animate({opacity:1});
    $("#suche>p").animate({"opacity":"1"},1000);
    $("#suche>img").attr("src","../Images/werbungJb3_2.gif");
   // setTimeout(bild1, 1000);
  });



let an = false;
let an2 = false;
  
function bild1(){
  $("#suche>img").attr("src","https://prinzessin223.github.io/website/Website-Konzept/Images/1x/wollen.png");
              
}
      $(document).scroll(function(){
        $(function(){
if(window.innerWidth>600){
            if((window.pageYOffset+(window.innerHeight/1.6))>$("#bilden").offset().top && an == false ){
               
                $("#bilden>img").attr("src","../Images/werbungJb3.gif");
                $("#bilden>p").animate({"opacity":"1"},1000);
                an =true;
            
          }
     
          if((window.pageYOffset+(window.innerHeight/1.4))>$("#zitat").offset().top && an2==false ){

            $("#zitat").animate({"opacity":"1","height":"25vw"},600);
      
            an2 = true;
      }
     
}
else{
  if((window.pageYOffset+(window.innerHeight/1.6))>$("#bildenHa").offset().top && an == false ){
               
    $("#bildenHa>img").attr("src","../Images/werbungJb3.gif")
    $("#bildenHa>p").animate({"opacity":"1"},1000);
    an =true;
}
  if((window.pageYOffset+(window.innerHeight/1.4))>$("#zitat").offset().top && an2==false ){

    $("#zitat").animate({"opacity":"1","margin-left":"10%","height":"60vw"},1000);
   
    an2 = true;
}
}
            });
    
        
       
       
          });
          $(document).ready(function(){
          $('#zitat').hover(function(ev){
            $('#zitat').css({"background-image":"url(../Images/briefo_1.gif)"});
            ev.preventDefault();
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
              $('#nav').animate({"height":"60vw"});
              $('header').animate({"height":"65vw"});
              burgerB=true;
              return;
            }
            if(burgerB == true){
              $('#close').css({"display":"none"});
              $('#burger').css({"display":"block"});
              $('#nav').animate({"height":"0vw"});
              $('header').animate({"height":"18vw"});
              burgerB=false;
              return;
            }
          }
          
 
