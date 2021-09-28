var l = 0;
var bilderMax = 6;
var h=0;
var burgerB = false;
$(document).ready(function(){
  $("#vorher div div img").css({"visibility":"hidden"});
    for (let i = 0; i<bilderMax; i++){
      $("#gal").append("<img src='img/start"+(i+1)+".jpg' id='startbild"+i+"' style='position:absolute;display:none;'>");
      $("#dotHolder").append("<span class='dot' onclick='slider("+i+")'></span>");
   
    }
    $("#startbild0").fadeIn(500);
    $("#startbild0").css("display","block");
    //slider(5);
    $("main").animate({opacity:1});
    $("#zitat>p").html($("#zitat>p").text().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));;
    $("#zitat>p").css({"margin-top":"0vw"});
    $("#zitat>p>span").css({"display":"inline-block", "transform":"translate(120%,120%)"});
  
  });

  $(function() {
  $("#gallerie").swipe( {
     
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
  
      if(window.innerWidth<600){
    if(direction== "right"){
      lp(-1);
     
    }
    if(direction== "left"){
      lp(1);
      
    }
  }
    }
  });  });

function lp (n){
    l += n;
    if(l<0){
        l=bilderMax-1;
    }
    if(l==bilderMax){
        l=0;
    }
    console.log(l);
    console.log(n);
    slider(l);
}

 function slider(s){
    for (let i = 0; i<bilderMax; i++){
        $("#dotHolder span:nth-child("+(i+1)+")").css("background-color","#bbb");
        $("#startbild"+i+"").css("z-index","0");
        }
    $("#startbild"+s+"").css("z-index","1").fadeIn(600);
    $("#dotHolder span:nth-child("+(s+1)+")").css("background-color","#666");
    for (let i = 0; i<bilderMax; i++){
        
        if(s != i){
       
        $("#startbild"+i+"").delay(400).fadeOut(100);
        }
        
            
        
        }
        
        
     
      }




          $(document).scroll(function(){
            $(function(){
        

                if((window.pageYOffset+(window.innerHeight/1.1))>$("#Titel>h1").offset().top && h<1 ){
                  $("#Titel>h1,h2").animate({"margin-left":"10%"},600,"swing");
                 $("#balken").animate({"width":"80%"},600,"swing");
                 h++;
                 console.log(h);
              }
              if((window.pageYOffset+(window.innerHeight/0.9))>$("#einstieg>div:nth-child(1)").offset().top && h<2){
                $("#einstieg>div:nth-child(1)").animate({"margin-top":"15%"},600,"swing");
                h++;
                console.log(h);
              
            }
            
            if((window.pageYOffset+(window.innerHeight/1.5))>$("#einstieg>div:nth-child(2)").offset().top && h<3){
              $("#einstieg>div:nth-child(2)").animate({"margin-left":"10%"},600,"swing");
              h++;
              console.log(h);
          }
          if((window.pageYOffset+(window.innerHeight/1.5))>$("#haupt>div:nth-child(1)> img").offset().top && h<4){
            $("#haupt>div:nth-child(1)> img").animate({"margin-left":"10%"},600,"swing");
            h++;
            console.log(h);
        }
        if((window.pageYOffset+(window.innerHeight/1.1))>$("#haupt>div:nth-child(2)> img").offset().top && h<5){
          $("#haupt>div:nth-child(2)").animate({"margin-top":"20%"},600,"swing");
          h++;
          console.log(h);
          }
          if((window.pageYOffset+(window.innerHeight/1.4))>$("#vorher div div").offset().top && h<6){
            $("#vorher div div").animate({"margin-left":"-10%"},600,"swing");
            $("#vorher>div ").animate({"opacity":"1", "margin-left":"15%"},600,"swing");
            h++;
            console.log(h);
            }
          if((window.pageYOffset+(window.innerHeight/1.4))>$("#zitat").offset().top && h<7){
           for(let i =0;i<$("#zitat>p>span").length;i++){
              console.log("dd");

            $("#zitat>p>span:nth-child("+(i+1)+")").delay(6*i) .queue( function(next){ 
              $(this).css({"transform":"translate(0%,0%)"}); 
              next(); 
            });
            }
            h++;
            console.log(h);
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
              
     
                    /*     $(document).ready(function(){
              $("img").click(function(e) {
                console.log("sd2");
                e.preventDefault();
                
                var position = $("#gal").offset().top+200;
              
                $("body, html").animate({
                  scrollTop: position
                },1000);
               
              }); });*/
              let gallerie=false;
              $(document).ready(function(){
                
                $("img").click(function(e) {
                  if(gallerie==false){
                  gallerie=true;
                  console.log("sdsd3");
                  $("#gallerie").css({"position":"fixed","top":"-10vw","width":"100%","height":"100vw"});
                  $("#gallerie").append(" <svg xmlns='http://www.w3.org/2000/svg'  onclick='closeGallerie()' id='closeGal'  style='display:block;position:absolute;right:3%;top:9vw;' height='7vw' viewBox='0 0 24 24' width='2%' fill='#000000'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'/></svg>");
                  return;
                } });
                    
               });

               function closeGallerie(){
                $(document).ready(function(){
    
                    console.log(gallerie);
                  if(gallerie==true){
                      gallerie=false;
                      $("#gallerie").css({"position":"unset","top":"0vw","width":"100%","height":"0vw"});
                      return;         
                  }     
                 });
               }