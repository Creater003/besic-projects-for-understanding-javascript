let main = document.querySelector(".main")
console.log(main);
let cursor = document.querySelector(".cursor")
console.log(cursor);
cursor.style.backgroundColor = "green"

main.addEventListener('mousemove',function(params){
        // console.log(params.x);
        const xpos = params.x
        const ypos = params.y
        cursor.style.left = '${x}px'
        
})

