


$(document).ready(function(){

    $("main").animate({opacity:1});
  
    $("#text1 p").animate({"margin-left":"0%","opacity":"1"},600,"swing");
    $("#text1 img").animate({"margin-left":"5%","opacity":"1"},600,"swing");
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

      $(document).scroll(function(){
        $(function(){
    
  
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
            });
    
    
       
          });