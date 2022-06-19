function solve() {
   const [button1, button2, button3] = Array.from(document.getElementsByClassName("add-product"));
   let purchases = {}
   let checkoutButton = document.getElementsByClassName('checkout')[0];
   checkoutButton.addEventListener('click', finalClick);

   button1.addEventListener('click', onClick);
   button2.addEventListener('click', onClick);
   button3.addEventListener('click', onClick);

   

   function onClick(ev){
      let product = ev.currentTarget.parentElement.parentElement
      let productName = product.getElementsByClassName("product-title")[0].textContent;
      let productPrice = Number(product.getElementsByClassName("product-line-price")[0].textContent);

      if (purchases.hasOwnProperty(productName) == false) {
         purchases[productName] = 0;
      }
         purchases[productName] += productPrice;
      document.getElementsByTagName("textarea")[0].textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
   }

   function finalClick() {
      let things = Object.keys(purchases);
      let prices = Object.values(purchases).reduce((partialSum, a) => partialSum + a, 0);

      document.getElementsByTagName("textarea")[0].textContent += `You bought ${things.join(', ')} for ${prices.toFixed(2)}.`
      //attach this to text output
   }
}