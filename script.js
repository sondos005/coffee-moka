let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartButton = document.querySelector(".btn-cart");
const cartOverlay = document.getElementById("cartOverlay");
const closeButton = document.getElementById("closeCart");

if(cartButton && cartOverlay){

    cartButton.onclick = function(){

        cartOverlay.style.display = "block";

        showCart();

    }

}
if(closeButton && cartOverlay){

    closeButton.onclick = function(){

        cartOverlay.style.display = "none";

    }
}
const addButtons = document.querySelectorAll(".add-btn");


addButtons.forEach(function(button){

    button.onclick = function(){


        let name = this.dataset.name;

        let price = Number(this.dataset.price);
        cart.push({

            name:name,
            price:price

        });
        localStorage.setItem("cart", JSON.stringify(cart));
        showCart();
        if(cartOverlay){

            cartOverlay.style.display = "block";

        }


    }


});
function showCart(){


    let cartItems = document.getElementById("cartItems");

    let total = document.getElementById("total");



    if(cartItems && total){


        cartItems.innerHTML = "";

        let sum = 0;
        for(let i = 0; i < cart.length; i++){
            cartItems.innerHTML +=
            <div class="cart-item">
                <p>
                ${cart[i].name} - ${cart[i].price} JD
                </p>
                <button onclick="removeItem(${i})">
                Remove
                </button>
            </div>
            ;

            sum += cart[i].price;
        }
        total.innerHTML = sum;
    }
}
//REMOVE 

function removeItem(index){


    cart.splice(index,1);



    localStorage.setItem("cart", JSON.stringify(cart));



    showCart();


}