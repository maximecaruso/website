
var burgerB = false;
var l = 0;
$(document).ready(function(){

    $("main").animate({opacity:1});
  
    $("#text1 p").animate({"margin-left":"0%","opacity":"1"},600,"swing");
    $("#text1 img").animate({"margin-left":"5%","opacity":"1"},600,"swing");
  });





   
   

      $(document).scroll(function(){
        $(function(){

          if(window.innerWidth>600){
            for (let i = 0; i<4; i++){
            if((window.pageYOffset+(window.innerHeight/1.6))>$("#text"+(i+1)).offset().top){
              if(i==0){
                $("#text1 p").animate({"margin-left":"0%","opacity":"1"},600,"swing");
                $("#text1 img").animate({"margin-left":"5%","opacity":"1"},600,"swing");
              }
              if(i==1){
                $("#text2 img").animate({"margin-left":"10%","opacity":"1"},600 ,"swing");
                $("#text2 p").animate({"margin-left":"4.9%","opacity":"1"},600 ,"swing");
              }
              if(i==2){
                $("#text3 p").animate({"margin-left":"5%","opacity":"1"},600,"swing");
                $("#text3 img").animate({"opacity":"1"},600,"swing");
              }
              if(i==3){
                $("#text4 img").animate({"margin-left":"15%","opacity":"1"},600,"swing");
                $("#text4 p").animate({"opacity":"1"},600,"swing");
              }
            }
          }
        }
        else{
          for (let i = 0; i<4; i++){
            if((window.pageYOffset+(window.innerHeight/1.6))>$("#text"+(i+1)).offset().top){
              if(i==0 && l<1){
                $("#text1 p").animate({"margin-left":"0%","opacity":"1"},600,"swing");
                $("#text1 img").animate({"margin-left":"5%","opacity":"1"},600,"swing");
                l++;
              }
              if(i==1 && l<2){
                $("#text2 img").animate({"margin-left":"10%","opacity":"1"},600 ,"swing");
                $("#text2 p").animate({"margin-left":"4.9%","opacity":"1"},600 ,"swing");
                l++;
              }
              if(i==2 && l<3){
                $("#text3 p").animate({"margin-left":"5%","opacity":"1"},600,"swing");
                $("#text3 img").animate({"opacity":"1"},600,"swing");
                l++;
              }
              if(i==3 && l<4){
                $("#text4 img").animate({"margin-left":"10%","opacity":"1"},600,"swing");
                $("#text4 p").animate({"opacity":"1"},600,"swing");
                l++;
              }
            }
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