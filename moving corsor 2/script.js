

//we are not finding the element main becasue thre is only 1 element on the screen ad we nned not to do that 
// so we can use window.addEventListner directly
window.addEventListener("mousemove",function(dets){

    //mappint the x-axis postion 
    let mappingPosition = gsap.utils.mapRange(0,this.window.innerWidth,200,this.window.innerWidth-200,dets.x)

    //mapping the y-axis posithon
    let mappingPosition2 = gsap.utils.mapRange(0,this.window.innerHeight,100,this.window.innerHeight-100,dets.y)
    gsap.to('.main',{
        left: mappingPosition+'px',
        top: mappingPosition2+"px" 

        // ease: Power4
        
    })

})