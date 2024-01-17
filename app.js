const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
      id: 1,
      title: "Air Force",
      Desc:"Step into the cockpit with Air Force shoes. These kicks are ready for takeoff, offering first class comfort and style. With premium leather construction and an iconic silhouette, Jordan shoes are built for adventure. Whether you're cruising down the runway or just going about your day, their rugged yet refined design will have you soaring in style. So lace up, and let your inner pilot experience the smooth ride and cloud-like feel of AIR FORCE shoes. The sky's the limit when you're rocking these classic high flyers!",
      price: 2300,
      colors: [
        {
          code: "black",
        Images: "./Images/air.png",
        
        },
        {
          code: "darkblue",
        Images: "./Images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Jordan",
      Desc:"Step into the cockpit with Jordan shoes. These kicks are ready for takeoff, offering first class comfort and style. With premium leather construction and an iconic silhouette, Jordan shoes are built for adventure. Whether you're cruising down the runway or just going about your day, their rugged yet refined design will have you soaring in style. So lace up, and let your inner pilot experience the smooth ride and cloud-like feel of Jordan shoes. The sky's the limit when you're rocking these classic high flyers!",
      price: 3300,
      colors: [
        {
          code: "lightgray",
        Images: "./Images/jordan.png",
        },
        {
          code: "green",
        Images: "./Images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 2999,
      Desc:"Step into the cockpit with Blazer shoes. These kicks are ready for takeoff, offering first class comfort and style. With premium leather construction and an iconic silhouette, Jordan shoes are built for adventure. Whether you're cruising down the runway or just going about your day, their rugged yet refined design will have you soaring in style. So lace up, and let your inner pilot experience the smooth ride and cloud-like feel of Blazer shoes. The sky's the limit when you're rocking these classic high flyers!",
      colors: [
        {
          code: "lightgray",
        Images: "./Images/blazer.png",
        },
        {
          code: "green",
        Images: "./Images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 1999,
      Desc:"Step into the cockpit with Crater shoes. These kicks are ready for takeoff, offering first class comfort and style. With premium leather construction and an iconic silhouette, Jordan shoes are built for adventure. Whether you're cruising down the runway or just going about your day, their rugged yet refined design will have you soaring in style. So lace up, and let your inner pilot experience the smooth ride and cloud-like feel of Crater shoes. The sky's the limit when you're rocking these classic high flyers!",
      colors: [
        {
          code: "black",
        Images: "./Images/crater.png",
        },
        {
          code: "lightgray",
        Images: "./Images/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 2399,
      Desc:"Step into the cockpit with Hippie shoes. These kicks are ready for takeoff, offering first class comfort and style. With premium leather construction and an iconic silhouette, Jordan shoes are built for adventure. Whether you're cruising down the runway or just going about your day, their rugged yet refined design will have you soaring in style. So lace up, and let your inner pilot experience the smooth ride and cloud-like feel of Hippie shoes. The sky's the limit when you're rocking these classic high flyers!",
      colors: [
        {
          code: "gray",
        Images: "./Images/hippie.png",
        },
        {
          code: "black",
        Images: "./Images/hippie2.png",
        },
      ],
    },
  ];

  let choosenProduct = products[0];

  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");
  const currentProductDesc = document.querySelector(".productDesc")
  
  menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      //change the current slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
  
      //change the choosen product
      choosenProduct = products[index];
  
      //change texts of currentProduct
      currentProductTitle.textContent = choosenProduct.title;
      currentProductDesc.textContent = choosenProduct.Desc;
      currentProductPrice.textContent = "Rs." + choosenProduct.price;
      currentProductImg.src =  choosenProduct.colors[0].Images;
      currentProductColors.src = choosenProduct.colors[0].Images
      
   
   // assigning new colors
   
   
   currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = choosenProduct.colors[index].code
   })
   currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].Images;
    });
  });
   
    });
});


currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size,index)=>{
            size.style.backgroundColor="white";
            size.style.color = "black";
        });
        size.style.backgroundColor="black";
        size.style.color = "white";
    })
})