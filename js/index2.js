let section1=document.getElementById("skills");
let skills_a=document.getElementById("skills_a")
skills_a.addEventListener("click",function(){
    if(section1.style.display=="block"){
        section1.style.display = 'none';
        section1.style.display = 'block';

    }
    else{
        section1.style.display = 'block';
        section1.classList.add("animated","slideInLeft");
        section1.classList.add("animated","slow");
        $('.jqueryscript1').rProgressbar({
            percentage: 90,
            fillBackgroundColor: '#7ed5fe',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            height: '6px',
            // width: '30%',
            ShowProgressCount:true,
            duration: 2000
          
          
          });
          
          $('.jqueryscript2').rProgressbar({
            percentage: 70,
            fillBackgroundColor: '#7ed5fe',
            backgroundColor: '#ffffff',
            borderRadius: '50px',
            height: '6px',
            // width: '30%',
            
            ShowProgressCount:true,
            duration: 2000
          
          
          });
          
          
          $('.jqueryscript3').rProgressbar({
            percentage: 80,
            fillBackgroundColor: '#7ed5fe',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            height: '6px',
            // width: '30%',
            ShowProgressCount:true,
            duration: 2000
          
          
          });
          
          
          $('.jqueryscript4').rProgressbar({
            percentage: 60,
            fillBackgroundColor: '#7ed5fe',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            height: '6px',
            // width: '30%',
            ShowProgressCount:true,
            duration: 2000
          });
          
          $('.jqueryscript5').rProgressbar({
            percentage: 70,
            fillBackgroundColor: '#7ed5fe',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            height: '6px',
            // width: '30%',
            ShowProgressCount:true,
            duration: 2000
          
          
          });

          $('.jqueryscript6').rProgressbar({
            percentage: 90,
            fillBackgroundColor: '#7ed5fe',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            height: '6px',
            // width: '30%',
            ShowProgressCount:true,
            duration: 2000
          
          
          });
          $('.circlechart').circlechart();
        section2.style.display='none';
        section3.style.display="none"
        section4.style.display="none";
        section5.style.display="none";
        section6.style.display="none";
        section7.style.display="none";
    }
})


let section2=document.getElementById("services");
let service_a=document.getElementById("service_a")
service_a.addEventListener("click",function(){
    if(section2.style.display=="block"){
        section2.style.display = 'none';
        section2.style.display = 'block';
  
    }
    else{
        section2.style.display = 'block';
        section2.classList.add("animated","slideInLeft");
        section2.classList.add("animated","slow");
        section3.style.display="none"
        section1.style.display="none";
        section4.style.display="none";
        section5.style.display="none";
        section6.style.display="none";
        section7.style.display="none";
    }
})
let section3=document.getElementById("about-me");
let about_a=document.getElementById("about_a")
about_a.addEventListener("click",function(){
    if(section3.style.display=="block"){
        section3.style.display = 'none';
        section3.style.display = 'block';
    }
    else{
        section3.style.display = 'block';
        section3.classList.add("animated","slideInLeft");
        section3.classList.add("animated","slow");
        
        section1.style.display="none";
        section2.style.display="none";
        section4.style.display="none";
        section5.style.display="none";
        section6.style.display="none";
        section7.style.display="none";
    }
})





let section4=document.getElementById("previous-work");
let work_a=document.getElementById("work_a")
work_a.addEventListener("click",function(){
    if(section4.style.display=="block"){
        section4.style.display = 'none';
        section4.style.display = 'block';
  
       
    }
    else{
        section4.style.display = 'block';
        section4.classList.add("animated","slideInLeft");
        section4.classList.add("animated","slow");
        section2.style.display="none";
        section3.style.display = 'none';
        section5.style.display="none"
        section6.style.display="none";
        section7.style.display="none";
        section1.style.display="none";
    }
})




let section5=document.getElementById("contacts");
let contact_a=document.getElementById("contact_a")
contact_a.addEventListener("click",function(){
    if(section5.style.display=="block"){
        section5.style.display = 'none';
        section5.style.display = 'block';
    }
    else{
        section5.style.display = 'block';
        section5.classList.add("animated","slideInLeft");
        section5.classList.add("animated","slow");
        section4.style.display = 'none';
        section1.style.display="none";
        section2.style.display="none";
        section3.style.display = 'none';
        section6.style.display="none";
        section7.style.display="none";
    }
})


let section6=document.getElementById("resume");
let resume_a=document.getElementById("resume_a")
resume_a.addEventListener("click",function(){
    if(section6.style.display=="block"){
        section6.style.display = 'none';
        section6.style.display = 'block';
        // section2.style.display='none';
        // section3.style.display="none"
    }
    else{
        section6.style.display = 'block';
        section6.classList.add("animated","slideInLeft")
        section6.classList.add("animated","slow");
        section1.style.display='none';
        section2.style.display='none';
        section3.style.display="none"
        section4.style.display="none";
        section5.style.display="none";
        section7.style.display="none";
    }
})



let section7=document.getElementById("home");
let home=document.getElementById("home_id")
home.addEventListener("click",function(){
    if(section7.style.display=="block"){
        section7.style.display = 'none';
        section7.style.display = 'block';
       
    }
    else{
        section7.style.display = 'block';
        section7.classList.add("animated","slideInLeft")
        // section7.classList.add("animated","infinite");
        section7.classList.add("animated","slow");
        section7.classList.add("animated","delay-.5s");
        section1.style.display='none';
        section2.style.display='none';
        section3.style.display="none"
        section4.style.display="none";
        section5.style.display="none";
        section6.style.display="none";
    }
})

AOS.init({
    // Global settings:
disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
startEvent: 'click', // name of the event dispatched on the document, that AOS should initialize on
initClassName: 'aos-init', // class applied after initialization
animatedClassName: 'aos-animate', // class applied on animation
useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
disableMutationObserver: false, // disables automatic mutations' detections (advanced)
debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
offset: 120, // offset (in px) from the original trigger point
delay: 10, // values from 0 to 3000, with step 50ms
duration: 400, // values from 0 to 3000, with step 50ms
easing: 'ease', // default easing for AOS animations
once: false, // whether animation should happen only once - while scrolling down
mirror: false, // whether elements should animate out while scrolling past them
anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
$('.menu-icon').click(function(){
    $('.menu-icon').toggleClass('active')
    });

    $('.menu-icon').click(function(){
    $('.slide-menu').toggleClass('active')
    });
    var typed=new Typed(".typing",{
        strings:['web developer.','UI/UX designer.'],
        loop:true,
        typeSpeed:200,
        backSpeed:40,
        backDelay:1000
    })

     (function($){'use strict'; $.fn.rProgressbar=function(options){options=$.extend({percentage: null, ShowProgressCount: true, duration: 1000, // Styling Options 
    
fillBackgroundColor: '#ed1c24', backgroundColor: '#EEEEEE', borderRadius: '0px', height: '10px', width: '',overflow:'hidden'}, options); $.options=options; return this.each(function(index, el){// Markup 
$(el).html('<div class="progressbar"><div class="proggress"></div><div class="percentCount"></div></div>');
var lineProgressBarInit=function(){var progressFill=$(el).find('.proggress'); var progressBar=$(el).find('.progressbar'); 
progressFill.css({backgroundColor: options.fillBackgroundColor, height: options.height, borderRadius: options.borderRadius,overflow:options.overflow});
 progressBar.css({width: options.width, backgroundColor: options.backgroundColor, borderRadius: options.borderRadius}); // Progressing
 progressFill.animate({width: options.percentage + "%"},{step: function(x){if (options.ShowProgressCount){$(el).find(".percentCount").text(Math.round(x) + "%");}}, duration: options.duration});}
lineProgressBarInit();
});}})(jQuery);

function makesvg(percentage, inner_text=""){

    var abs_percentage = Math.abs(percentage).toString();
    var percentage_str = percentage.toString();
    var classes = ""
  
    if(percentage < 0){
      classes = "danger-stroke circle-chart__circle--negative";
    } else if(percentage > 0 && percentage <= 30){
      classes = "warning-stroke";
    } else{
      classes = "success-stroke";
    }
  
   var svg = '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">'
       + '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />'
       + '<circle class="circle-chart__circle '+classes+'"'
       + 'stroke-dasharray="'+ abs_percentage+',100"    cx="16.9" cy="16.9" r="15.9" />'
       + '<g class="circle-chart__info">'
       + '   <text class="circle-chart__percent" x="17.9" y="16.5">'+percentage_str+'%</text>';
  
    if(inner_text){
      svg += '<text class="circle-chart__subline" x="16.91549431" y="30"></text>'
    }
    
    svg += ' </g></svg>';
    
    return svg
  }
  
  (function( $ ) {
  
      $.fn.circlechart = function() {
          this.each(function() {
              var percentage = $(this).data("percentage");
              var inner_text = $(this).text();
              $(this).html(makesvg(percentage, inner_text));
          });
          return this;
      };
  
  }( jQuery ));