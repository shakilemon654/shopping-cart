   // Price Increment function for phone and case and subtotal
   function priceIncrement(inputNumber, itemPriceID, subtotalPriceID, totalPriceID, basePrice) {
    let num = parseInt(document.getElementById(inputNumber).value);
    num ++;
    document.getElementById(inputNumber).value = num;
    
    currentPrice = basePrice * num;
    document.getElementById(itemPriceID).innerText = currentPrice;
    
    let totalPrice = parseInt(document.getElementById(totalPriceID).innerText);
    totalPrice += basePrice;
    document.getElementById(totalPriceID).innerText = totalPrice;
    document.getElementById(subtotalPriceID).innerText = totalPrice;
 }
  // Price Decrement function for phone and case and subtotal
 function priceDecrement(inputNumber, itemPriceID, subtotalPriceID, totalPriceID, basePrice) {
    let num = parseInt(document.getElementById(inputNumber).value);
    if (num > 1){
       num--;
       document.getElementById(inputNumber).value = num;

       let currentPrice = parseInt(document.getElementById(itemPriceID).innerText);
       currentPrice = currentPrice - basePrice;
       document.getElementById(itemPriceID).innerText = currentPrice;

       let totalPrice = parseInt(document.getElementById(totalPriceID).innerText);
       totalPrice -= basePrice;
       document.getElementById(totalPriceID).innerText = totalPrice;
       document.getElementById(subtotalPriceID).innerText = totalPrice;
    }
 }

 // phone price increment
 document.getElementById("phone-plus-sign").addEventListener("click", function(){
    priceIncrement("phone-input-number", "phone-price", "subtotal-price", "total-price", 1219)
 })

 // phone price decrement
 document.getElementById("phone-minus-sign").addEventListener("click", function(){
    priceDecrement("phone-input-number", "phone-price", "subtotal-price", "total-price", 1219)
 })

 // case price increment
 document.getElementById("case-plus-sign").addEventListener("click", function(){  
    priceIncrement("case-input-number", "case-price", "subtotal-price", "total-price", 59);
 })

 // case price decrement
 document.getElementById("case-minus-sign").addEventListener("click", function(){
    priceDecrement("case-input-number", "case-price", "subtotal-price", "total-price", 59);
 })

 // Function for remove-item button
 function removeItem(inputNumber, itemPriceID, subtotalPriceID, totalPriceID) {
       document.getElementById(inputNumber).value = 0;
       let currentPrice = parseInt(document.getElementById(itemPriceID).innerText);
       let totalPrice = parseInt(document.getElementById(totalPriceID).innerText);
       totalPrice = totalPrice - currentPrice;
       document.getElementById(totalPriceID).innerText = totalPrice;
       document.getElementById(subtotalPriceID).innerText = totalPrice;
       document.getElementById(itemPriceID).innerText = 0;
    }

 // phone remove item handling   
 document.getElementById("phone-remove-item").addEventListener("click", function(){
       removeItem("phone-input-number", "phone-price", "subtotal-price", "total-price")
    })

 // case remove item handling   
 document.getElementById("case-remove-item").addEventListener("click", function(){
    removeItem("case-input-number", "case-price", "subtotal-price", "total-price")
 })