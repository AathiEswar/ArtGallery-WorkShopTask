function changeImage(element) {
    let mainImage = document.getElementById("displayedImage");
    // element.style.animation = "fade-out 0.2s ease-in"

    mainImage.src = element.src;
   
    mainImage.style.animation = "fade-in 0.3s ease-out";
    setTimeout(()=>{
        mainImage.style.animation = "";
    },400)
  
}
