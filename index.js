const wrapper= document.querySelector(".sliderwrapper")
// const slideritem= document.querySelector(".slideritem")
const menuItems= document.querySelectorAll(".menuItem")


const Products =[{
    id: 1,
    title: "Jordan",
    price: 115,
    color: [{
        code: "rgb(225, 136, 136)",
        img: "./jordan.png",
    },
{
    code: "black",
    img: "./jordan2.png" 
},
],
},
{
id: 2,
    title: "Hippie",
    price: 110,
    color: [{
        code: "black",
        img: "./hippie2.png",
    },
{
    code: "gray",
    img: "./hippie.png" 
},
],
},
{
    id: 3,
    title: "blazer",
    price: 100,
    color: [{
        code: "green",
        img: "./blazer2.png",
    },
{
    code: "black",
    img: "./blazer.png" 
},
    ]  
},
{
    id: 4,
    title: "Air force",
    price: 100,
    color: [{
        code: "dark-blue",
        img: "./air2.png",
    },
{
    code: "black",
    img: "./air.png" 
},
    ]  
},
{
    id: 5,
    title: "Crater",
    price: 100,
    color: [{
        code: "white",
        img: "./crater2.png",
    },
{
    code: "black",
    img: "./crater.png" 
},
    ]  
}
]

let ChoosenProduct = Products[0]
const currentProductImg= document.querySelector(".productImg")
const currentProductTitle= document.querySelector(".producttitle")
const currentProductPrice= document.querySelector(".productPrice")
const currentProductColors= document.querySelectorAll(".color")
const currentProductSizes= document.querySelectorAll(".size")
menuItems.forEach((item, index) => {
    item.addEventListener("click", ()=>{
        wrapper.style.transform= `translateX(${-100 * index}vw)`;
        // slideritem.style.transform= `translateX(${-100 * index}vw)`;
        ChoosenProduct= Products[index]
        currentProductImg.src= ChoosenProduct.color[0].img
        currentProductTitle.textContent= ChoosenProduct.title
        currentProductPrice.textContent = "$" + ChoosenProduct.price
currentProductColors.forEach((color,index)=>{
    color.style.backgroundColor= ChoosenProduct.color[index].code
})

    });
});

