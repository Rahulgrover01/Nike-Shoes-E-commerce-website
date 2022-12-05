const wrapper= document.querySelector(".sliderwrapper")
// const slideritem= document.querySelector(".slideritem")
const menuItems= document.querySelectorAll(".menuItem")


const Products =[{
    id: 1,
    title: "Jordan",
    price: 115,
    colors: [{
        code: "rgb(225, 136, 136)",
        img: "./jordan.png",
    },
{
    code: "green",
    img: "./jordan2.png" 
},
],
},
{
id: 2,
    title: "Hippie",
    price: 110,
    colors: [{
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
    title: "Blazer",
    price: 100,
    colors: [{
        code: "green",
        img: "./blazer2.png",
    },
{
    code: "white",
    img: "./blazer.png" 
},
    ], 
},
{
    id: 4,
    title: "Air force",
    price: 100,
    colors: [{
        code: "darkblue",
        img: "./air2.png",
    },
{
    code: "black",
    img: "./air.png" 
},
    ] , 
},
{
    id: 5,
    title: "Crater",
    price: 100,
    colors: [{
        code: "lightgray",
        img: "./crater2.png",
    },
{
    code: "black",
    img: "./crater.png" 
},
    ] , 
},
];

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
        currentProductImg.src= ChoosenProduct.colors[0].img
        currentProductTitle.textContent= ChoosenProduct.title
        currentProductPrice.textContent = "$" + ChoosenProduct.price
currentProductColors.forEach((color,index)=>{
    color.style.backgroundColor= ChoosenProduct.colors[index].code
})

    });
});

currentProductColors.forEach((color,index) =>{
    color.addEventListener("click", ()=>{
        currentProductImg.src= ChoosenProduct.colors[index].img
    });
    });
currentProductSizes.forEach((size) =>{
    size.addEventListener("click", ()=>{
    currentProductSizes.forEach((size) =>{
            size.style.backgroundColor= "white"
            size.style.color= "black"
    });
    
        size.style.backgroundColor= "black"
        size.style.color= "white"
    });
    });
    const  productBtn= document.querySelector(".productBtn")
    const  payment= document.querySelector(".payment")
    const  close= document.querySelector(".close")

    productBtn.addEventListener("click",()=>{
        payment.style.display="flex"
    })

    close.addEventListener("click",()=>{
        payment.style.display="none"
    })
