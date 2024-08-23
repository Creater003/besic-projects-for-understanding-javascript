var main = document.querySelector(".main")



main.addEventListener("mousemove",function(dets){

    //getting the position of cursor
    var mouseMove  = dets.x;

    //getting the details  of the rectangle we made
    var rectLocation= main.getBoundingClientRect();

    //getting the startinf position of the rectangle
    var insideMouseMove = mouseMove-rectLocation.left;
   
    

    //dividing the rectangle into two parts
    if (insideMouseMove <mouseMove/2) {
        //using the gsap map range function to map the color
     var redCOlor =  gsap.utils.mapRange(0,rectLocation.width/2,255,0,insideMouseMove)
        gsap.to(main,{
            backgroundColor :`rgb(${redCOlor},0,0)`,
           })
        
    }

    else{

        //mapping for another half
        var redCOlor =  gsap.utils.mapRange(rectLocation.width/2,rectLocation.width,0,255,insideMouseMove)
       
        gsap.to(main,{
            backgroundColor :`rgb(0,0,${redCOlor})`,
        })
        
    }

    
    
})

