var l = 0;
var burgerB = false;
var bilderMax = 7;
let namen = ["Ausstellungsgebäude Hogenmüller","Ausstellungsgebäude Hogenmüller","Ausstellungsgebäude Hogenmüller","Mehrfamiliewohnhaus Hofweier","Erweiterung Haus am Harmersbach","Wohnhaus Schnitzhofer","Wohnhaus Schnizhofer"];
let text = [
  "BLALALALALSDASDKkaosdkkk koakdaosodokao kdoaksdokajdj jaksdk koakodk kaksodkoa",
  "BLALALALALSDASDKkaosdkkk koakdaosodokao kdoaksdokajdj jaksdk koakodk kaksodkoa",
  "asdlaskdoksaokdaskdok aosdooakskdoaso kasokodkasdkk",
  "asdlaskdoksaokdaskdok aosdooakskdoaso kasokodkasdkk",
  "asdlaskdoksaokdaskdok aosdooakskdoaso kasokodkasdkk",
]
$(document).ready(function(){
    for (let i = 0; i<bilderMax; i++){
      $("#gal").append("<div id='startbild"+i+"' style='position:absolute;display:none;width:80%;'><img src='../Images/aktuell/aktuell"+(i+1)+".png' ><p>"+namen[i]+"</p><p style='margin-top:5vw;'>"+text[i]+"</p></div>");
      $("#dotHolder").append("<span class='dot' onclick='l="+i+";slider("+i+");'></span>");
   
    }
    $("#startbild0").fadeIn(500);
    $("#startbild0").css("display","block");
    //slider(5);
    $("main").animate({opacity:1});
    $("#gallerie" ).on( "swipeleft", function( event ) { lp(1);} );
  $("#gallerie" ).on( "swiperight", function( event ) { lp(-1);} );
  $("#gallerie img" ).on( "click", function( event ) { lp(1);} );
  });

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