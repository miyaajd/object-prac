window.addEventListener("load",function() {
    const imgs = document.querySelectorAll(".img")
    const lightBox = document.querySelector(".lightBox")
    const lightBoxImg = document.querySelector("#lightBoxImg")
    // 모든 썸네일에 이벤트 클릭
    imgs.forEach((img)=>{
        img.addEventListener("click", ()=>{
            // console.log("click");
            const bigScr = img.dataset.src
            // console.log(lightBoxImg);
            lightBoxImg.src = bigScr
            // console.log(lightBoxImg);
            lightBox.classList.add("active")
            lightBox.addEventListener("click", ()=>{
                lightBox.classList.remove("active")
            })
        })
    })
})