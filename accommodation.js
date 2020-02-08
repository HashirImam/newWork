$( document ).ready(function() {

  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( ".hamburger" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".hamburger" ).hide();
  $( ".cross" ).show();
  });
  });
  
  $( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".cross" ).hide();
  $( ".hamburger" ).show();
  });
  });
  
  });


var btn1 = document.getElementById("event-btn1");
var btn2 = document.getElementById("event-btn2");
var btn3 = document.getElementById("event-btn3");
var btn4 = document.getElementById("event-btn4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");
var btn01 = document.getElementById("btn1");
var btn02 = document.getElementById("btn2");
var btn03 = document.getElementById("btn3");
var btn04 = document.getElementById("btn4");



info1.style.display="block";
info2.style.display="none";
info3.style.display="none";
info4.style.display="none";
btn1.style.fontWeight="bold";
btn01.style.fontWeight="bold";
btn02.style.fontWeight="normal";
    btn03.style.fontWeight="normal";
    btn04.style.fontWeight="normal";

  btn1.onclick= function() {
  info1.style.display="block";
  info2.style.display="none";
  info3.style.display="none";
  info4.style.display="none";
  btn1.style.fontWeight="bold";
  btn2.style.fontWeight="normal";
  btn3.style.fontWeight="normal";
  btn4.style.fontWeight="normal";
  
 
  }

  btn01.onclick= function() {
    info1.style.display="block";
    info2.style.display="none";
    info3.style.display="none";
    info4.style.display="none";
    btn01.style.fontWeight="bold";
    btn02.style.fontWeight="normal";
    btn03.style.fontWeight="normal";
    btn04.style.fontWeight="normal";
    
   
    }




  btn2.onclick= function() {
    
    info1.style.display="none";
    info2.style.display="block";
    info3.style.display="none";
    info4.style.display="none";
    btn2.style.fontWeight="bold";
  btn1.style.fontWeight="normal";
  btn3.style.fontWeight="normal";
  btn4.style.fontWeight="normal";
   
    }

    btn02.onclick= function() {
    
      info1.style.display="none";
      info2.style.display="block";
      info3.style.display="none";
      info4.style.display="none";
      btn02.style.fontWeight="bold";
    btn01.style.fontWeight="normal";
    btn03.style.fontWeight="normal";
    btn04.style.fontWeight="normal";
     
      }

    btn3.onclick= function() {
        info1.style.display="none";
        info2.style.display="none";
        info3.style.display="block";
        info4.style.display="none";
        btn3.style.fontWeight="bold";
  btn1.style.fontWeight="normal";
  btn2.style.fontWeight="normal";
  btn4.style.fontWeight="normal"; 
        
        }

        btn03.onclick= function() {
          info1.style.display="none";
          info2.style.display="none";
          info3.style.display="block";
          info4.style.display="none";
          btn03.style.fontWeight="bold";
    btn01.style.fontWeight="normal";
    btn02.style.fontWeight="normal";
    btn04.style.fontWeight="normal"; 
          
          }

        btn4.onclick= function() {
            info1.style.display="none";
            info2.style.display="none";
            info3.style.display="none";
            info4.style.display="block";
            btn4.style.fontWeight="bold";
  btn1.style.fontWeight="normal";
  btn3.style.fontWeight="normal";
  btn2.style.fontWeight="normal";
            }
                  
      
            btn04.onclick= function() {
              info1.style.display="none";
              info2.style.display="none";
              info3.style.display="none";
              info4.style.display="block";
              btn04.style.fontWeight="bold";
    btn01.style.fontWeight="normal";
    btn03.style.fontWeight="normal";
    btn02.style.fontWeight="normal";
              }



var modal1 = document.getElementById("night1pop");
var modal2 = document.getElementById("night2pop");
var modal3 = document.getElementById("night3pop");
var modal4 = document.getElementById("night4pop");

var bt1 = document.getElementById("bulletOne");
var bt2 = document.getElementById("bulletTwo");
var bt3 = document.getElementById("bulletThree");
var bt4 = document.getElementById("bulletFour");
var bt5 = document.getElementById("bulletFive");
var bt6 = document.getElementById("bulletSix");
var bt7 = document.getElementById("bulletSeven");

var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];

var blur1=document.getElementById("myDIV");
var blur2=document.getElementsByClassName("imageWrapper")[0];
var blur3=document.getElementsByClassName("bulletWrapper")[0];
var blackgradient=document.getElementsByClassName("content-wrapper")[0];

bt1.onclick = function() {
 
  // modal2.style.display = "none";
  // modal3.style.display = "none";
  blur1.style.filter="blur(5px)";
  blur2.style.filter="blur(5px)";
  blur3.style.filter="blur(5px)";
  blackgradient.style.background=" rgba(0, 0, 0, 0.671)";
  blur1.style.pointerEvents="none";

  
  var op = 0.1;
    modal1.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        modal1.style.opacity = op;
        
        op =op+0.1;
    }, 30);
  
  }

bt2.onclick = function() {
    // modal1.style.display = "none";
    // modal3.style.display = "none";

    blur1.style.filter="blur(5px)";
    blur2.style.filter="blur(5px)";
    blur3.style.filter="blur(5px)";
    blackgradient.style.background=" rgba(0, 0, 0, 0.671)";
    var op = 0.1;  
    modal2.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        modal2.style.opacity = op;
        
        op =op+0.1;
    }, 30);
  }

  bt3.onclick = function() {
    // modal1.style.display = "none";
    // modal2.style.display = "none";

    blur1.style.filter="blur(5px)";
    blur2.style.filter="blur(5px)";
    blur3.style.filter="blur(5px)";
    blackgradient.style.background=" rgba(0, 0, 0, 0.671)";
    var op = 0.1;  
    modal3.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        modal3.style.opacity = op;
        
        op =op+0.1;
    }, 30);
  }

  bt4.onclick = function() {
    // modal1.style.display = "none";
    // modal2.style.display = "none";

    blur1.style.filter="blur(5px)";
    blur2.style.filter="blur(5px)";
    blur3.style.filter="blur(5px)";
    blackgradient.style.background=" rgba(0, 0, 0, 0.671)";
    var op = 0.1;  
    modal4.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        modal4.style.opacity = op;
        
        op =op+0.1;
    }, 30);
  }



span.onclick = function() {

  blur1.style.filter="blur(0px)";
  blur2.style.filter="blur(0px)";
  blur3.style.filter="blur(0px)";
  blackgradient.style.background="none";
  blur1.style.pointerEvents="all";
  var op = 1;  
    var timer = setInterval(function () {
        if (op <= 0){
            clearInterval(timer);
            modal1.style.display = "none";
        }
        modal1.style.opacity = op;
        op =op-0.1;
        
    }, 10);
    
    
}

span1.onclick = function() {

  blur1.style.filter="blur(0px)";
  blur2.style.filter="blur(0px)";
  blur3.style.filter="blur(0px)";
  blackgradient.style.background="none";
    
  var op = 1;  
  var timer = setInterval(function () {
      if (op <= 0){
          clearInterval(timer);
          modal2.style.display = "none";
      }
      modal2.style.opacity = op;
      op =op-0.1;
      
  }, 10);

  }


span2.onclick = function() {

  blur1.style.filter="blur(0px)";
  blur2.style.filter="blur(0px)";
  blur3.style.filter="blur(0px)";
  blackgradient.style.background="none";

  var op = 1;  
  var timer = setInterval(function () {
      if (op <= 0){
          clearInterval(timer);
          modal3.style.display = "none";
      }
      modal3.style.opacity = op;
      op =op-0.1;
      
  }, 10);
  }
 
  
span3.onclick = function() {

  blur1.style.filter="blur(0px)";
  blur2.style.filter="blur(0px)";
  blur3.style.filter="blur(0px)";
  blackgradient.style.background="none";

  var op = 1;  
  var timer = setInterval(function () {
      if (op <= 0){
          clearInterval(timer);
          modal4.style.display = "none";
      }
      modal4.style.opacity = op;
      op =op-0.1;
      
  }, 10);
  }






  function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}