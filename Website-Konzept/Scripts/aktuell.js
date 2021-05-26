var l = 0;
var burgerB = false;
var bilderMax = 3;
let namen = ["Ausstellungsgebäude Hogenmüller","Ausstellungsgebäude Hogenmüller","Ausstellungsgebäude Hogenmüller","Mehrfamiliewohnhaus Hofweier","Erweiterung Haus am Harmersbach","Wohnhaus Schnitzhofer","Wohnhaus Schnizhofer"];
let text = [
  "BLALALALALSDASDKkaosdkkk koakdaosodokao kdoaksdokajdj jaksdk koakodk kaksodkoa",
  "BLALALALALSDASDKkaosdkkk koakdaosodokao kdoaksdokajdj jaksdk koakodk kaksodkoa",
  "asdlaskdoksaokdaskdok aosdooakskdoaso kasokodkasdkk",
  "asdlaskdoksaokdaskdok aosdooakskdoaso kasokodkasdkk",
  "asdlaskdoksaokdaskdok aosdooakskdoaso kasokodkasdkk",
];

$(document).ready(function(){
  $( document ).on( "mobileinit", function() {
    $.mobile.loader.prototype.options.disabled = true;
});
    for (let i = 0; i<bilderMax; i++){
      $("#gal").append("<div id='startbild"+i+"' style='position:absolute;display:none;width:80%;'><img src='../Images/aktuell/aktuell"+(i+1)+".png' ><p>"+namen[i]+"</p><p style='margin-top:5vw;'>"+text[i]+"</p></div>");
      $("#dotHolder").append("<span class='dot' onclick='fade1("+i+");'></span>");
    }
    for (let i = 0; i<2; i++){
      $("#dotHolder2").append("<span class='dot' onclick='fade2("+i+");'></span>");
    }
    $("#startbild0").fadeIn(500);
    $("#startbild0").css("display","block");
    //slider(5);
    $("main").animate({opacity:1});
   /* $("#gallerie" ).on( "swipeleft", function( event ) { lp(1);} );
  $("#gallerie" ).on( "swiperight", function( event ) { lp1(-1);} );
  $("#gallerie img:first-child" ).on( "click", function( event ) { lp(1);} );*/
  });
function fade1(n){
  $("#img"+(n)).animate({"opacity":"1"});
  $("#img"+(n+1)).animate({"opacity":"0"});
  $("#img"+(n+2)).animate({"opacity":"0"});
}
function fade2(n){
  $("#imgA"+(n)).animate({"opacity":"1"});
  $("#imgA"+(n+1)).animate({"opacity":"0"});
}
  $(function() {

    $("#prj1").swipe( {
     
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        if(window.innerWidth<600){
      if(direction== "right"){
        lp1(-1);

      }
      if(direction== "left"){
        lp(1);
        $("#arrwo1").css({"opacity":"0"});
      }
    }
      }
    });
    $("#prj2").swipe( {
     
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        if(window.innerWidth<600){
      if(direction== "right"){
        lpA1(-1);
    
      }
      if(direction== "left"){
        lpA(1);
        $("#arrwo2").css({"opacity":"0"});
      }
    }
      }
    });
  
  
    
  });

function lp (n){
  if(l<2){
    l += n;
    slider(l); 
  }
}
function lp1 (n){
  if(l>0){
  l += n;
  slider1(l);
  }
}
  function lpA (n){
    if(l<1){
      l += n;
      sliderA(l); 
    }
  }
  function lpA1 (n){
    if(l>0){
    l += n;
    sliderA1(l);
    }
  }


 function slider(s){
  
  $("#img"+(s-1)).animate({"left":"-90%"});
  $("#img"+s).animate({"left":"0%"});
  $("#img"+(s+1)).animate({"left":"90%"});
  $("#img"+(s+2)).animate({"left":"180%"});
      }
      function slider1(s){   
        $("#img"+(s+2)).animate({"left":"180%"});
        $("#img"+(s+1)).animate({"left":"90%"});
        $("#img"+s).animate({"left":"0%"}); 
        $("#img"+(s-1)).animate({"left":"-90%"});
            }

            function sliderA(s){
  
              $("#imgA"+(s-1)).animate({"left":"-90%"});
              $("#imgA"+s).animate({"left":"0%"});
              
              
                  }
                  function sliderA1(s){   
               
                    $("#imgA"+(s+1)).animate({"left":"90%"});
                    $("#imgA"+s).animate({"left":"0%"}); 
                    
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