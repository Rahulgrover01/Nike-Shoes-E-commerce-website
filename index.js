const wrapper= document.querySelector(".sliderwrapper")
// const slideritem= document.querySelector(".slideritem")
const menuItems= document.querySelectorAll(".menuItem")

menuItems.forEach((item, index) => {
    item.addEventListener("click", ()=>{
        wrapper.style.transform= `translateX(${-100 * index}vw)`;
        // slideritem.style.transform= `translateX(${-100 * index}vw)`;
    });
});
