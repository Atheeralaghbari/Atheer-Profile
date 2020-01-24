let section1=document.getElementById("skills");
let skills_a=document.getElementById("skills_a")
skills_a.addEventListener("click",function(){
    if(section1.style.display=="block"){
        section1.style.display = 'none';

    }
    else{
        section1.style.display = 'block';
        section1.classList.add("animated","slideInLeft")
        section1.classList.add("animated","slow");
        
        $('.jqueryscript1').rProgressbar({
            percentage: 70,
            fillBackgroundColor: '#00e5ff',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            height: '6px',
         
            ShowProgressCount:true,
            duration: 2000
          
          
          });
          
          $('.jqueryscript2').rProgressbar({
            percentage: 80,
            fillBackgroundColor: '#00e5ff',
            backgroundColor: '#ffffff',
            borderRadius: '50px',
            height: '6px',

            ShowProgressCount:true,
            duration: 2000
          
          
          });
          
          
          $('.jqueryscript3').rProgressbar({
            percentage: 80,
            fillBackgroundColor: '#00e5ff',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            height: '6px',
    
            ShowProgressCount:true,
            duration: 2000
          
          
          });
          
          
          $('.jqueryscript4').rProgressbar({
            percentage: 90,
            fillBackgroundColor: '#00e5ff',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            height: '6px',
        
            ShowProgressCount:true,
            duration: 2000
          });
          
          $('.jqueryscript5').rProgressbar({
            percentage: 90,
            fillBackgroundColor: '#00e5ff',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            height: '6px',
        
            ShowProgressCount:true,
            duration: 2000
          
          
          });

          $('.jqueryscript6').rProgressbar({
            percentage: 90,
            fillBackgroundColor: '#00e5ff',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            height: '6px',
          
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
        section2.classList.add("animated","slideInLeft")
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
        section3.classList.add("animated","slideInLeft")
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
    
  
       
    }
    else{
        section4.style.display = 'block';
        section4.classList.add("animated","slideInLeft")
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
        section5.classList.add("animated","slideInLeft")
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
   
    }
    else{
        section6.style.display = 'block';
        section6.classList.add("animated","slideInLeft")
        section6.classList.add("animated","slow");
        // section6.classList.add("animated","duration-2s")
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
        section7.classList.add("animated","slow");
        // section7.classList.add("animated","delay-.5s");
        section1.style.display='none';
        section2.style.display='none';
        section3.style.display="none"
        section4.style.display="none";
        section5.style.display="none";
        section6.style.display="none";
    }
})

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
