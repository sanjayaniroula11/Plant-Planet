var arr = [
  {
    name: "Smooth Cactus",
    imageLink:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG90JTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
    price: "Rs. 1500",
    availability: "In Stock",
  },
  {
    name: "Tulasi",
    imageLink:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG90JTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
    price: "Rs. 500",
    availability: "In Stock",
  },
];

function addProducts() {
  var clutter = "";
  arr.forEach(function (obj) {
    clutter += `<div class="product">
    <div class="product-image">
        <img src="${obj.imageLink}"
            alt="" class="p-image">
    </div>
    <br>
    <div class="product-details">
        <h4>${obj.name}</h4>
        <p>Price : <span class="rupees">${obj.price}/-</span></p>
        <button class="add-to-cart">Add To Cart <i class="ri-shopping-cart-2-line"></i></button>
    </div>
</div>`;


  })

  document.querySelector(".products-gallery").innerHTML= clutter ;
 
}


addProducts();