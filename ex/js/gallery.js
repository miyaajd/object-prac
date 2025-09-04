window.addEventListener("load" , ()=>{
    const mainImg = document.querySelector(".mainImg")
    const thumbImg = document.querySelectorAll(".thumbImg li img")
    thumbImg.forEach((thumb)=>{
        thumb.addEventListener("click",()=>{
            mainImg.src = thumb.src
        })
    })
})