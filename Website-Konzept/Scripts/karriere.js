


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

            if((window.pageYOffset+(window.innerHeight/1.6))>$("#bilden").offset().top && an == false ){
               
                $("#bilden>img").attr("src","../Images/werbungjb3.gif")
                $("#bilden>p").animate({"opacity":"1"},1000);
                an =true;
          }
          if((window.pageYOffset+(window.innerHeight/1.4))>$("#zitat").offset().top ){

            $("#zitat").animate({"opacity":"1","margin-left":"35%"},1000);
          
      }
            });
    
    
       
          });