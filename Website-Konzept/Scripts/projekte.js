var l = 1;
var newBilder = -1;
var bilderMax = 37;
var burgerB = false;
var title = ["AstridlindgrenSchule","Zulassungsstelle","Projekt 3","Projekt 4","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2","Projekt 2"]

$(document).ready(function(){
    for (let i = 0; i<bilderMax; i++){
        $("#projekte").append("<div id='projekt"+i+"' style='margin-top:20vw'></div>");
      $("#projekt"+i).append("<a href='../projekte/"+title[i]+"/"+title[i]+".html'><div class='projektHolder'><img src='../Images/ProjektImage/"+title[i]+".jpg' class='projekte' style=''><p class='title'>"+title[i]+"</p><img src='../Images/keyboard_arrow_right_white_24dp.svg' class='arrow'></div></a>");
    }

    $("main").animate({opacity:1});
    for (let i = 0; i<9; i++){
    $("#projekt"+i).css({"margin-top":"2vw"});
    }
  });



  $(document).scroll(function(){
    $(function(){

  
        
        for (let i = 0; i<bilderMax; i++){
        if((window.pageYOffset+(window.innerHeight/1))>$("#projekt"+i).offset().top && newBilder<i){
          newBilder++;
          $("#projekt"+i).animate({"margin-top":"2vw"})
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