

let cart = [];

var item = function(name, price, count){
  this.name=name;
  this.price=price;
  this.count=count;
};


//addItemToCart

let addItemToCart=(name, price, count)=>{
  let item = new item(name, price, count);
  cart.push(item);
}

//removeItemFromCart

//removeItemFromCartAll

// clearCart()

//countCart()

//totalCart()

//saveCart()

//loadCart()
