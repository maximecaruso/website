var l = 1;
var bilderMax = 37;
var burgerB = false;


$(document).ready(function(){
 
    for (let i = 0; i<bilderMax; i++){
      $("#imageStart").append("<div  id='startbild"+i+"' style='position:absolute;left:10%;width:80%;display:none;'><img src='Images/Startseite/start"+(i+1)+".jpg' style='width:100%' ></div>");
      
    }
    
    $("#startbild0").fadeIn(500);
    $("#startbild0").css("display","block");
    $("main").animate({opacity:1},1000);
  
    setInterval(slider, 5000);
  });


  
$(document).ready(function(){
  $("body").css({"overflow-y":"hidden"});
  $("html").css({"overflow-y":"hidden"});
  $("#imgStart").attr({"src":"Images/logo.gif","onload":"intro()"});
});
function intro(){
 
  $("#start").css({"animation-delay":"2s"});
  $("#inhaltHaupt").css({"animation-delay":"2s"});
  window.scrollTo(0, 0);
 
 
  $("#start").delay(1400).animate({"z-index":"0"},500);

  setTimeout(noneF, 2300);
}
function noneF(){
  $("#start").animate({"opacity":"0"});
  $("html").css({"overflow-y":"scroll"});
  
}

 function slider(){
 

    $("#startbild"+l+"").fadeIn(1000);

    for (let i = 0; i<bilderMax; i++){
        if(l != i){
        $("#startbild"+i+"").delay(1000).fadeOut(100);

          


       // let vid1 = document.getElementById("startbild"+i);
       // vid1.pause();
      //  vid1.currentTime = 0;
        }
        
            
        
        }
        l++;
        if(bilderMax<=l){
            l=0;
        }
        
      }

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
        /*  $(function(){
          $('main').click(function(ev){
             $('#dropdown2').removeClass('fade2'); 
             $('#dropdown').removeClass('fade'); 
              ev.preventDefault();
          });
        });*/
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
      /*  $(function(){
          $('main').click(function(ev){
             $('#dropdown2H').removeClass('fade2H'); 
             $('#dropdownH').removeClass('fadeH'); 
              ev.preventDefault();
          });
        });*/
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