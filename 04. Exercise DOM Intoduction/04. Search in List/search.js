function search() {
   const children = document.querySelectorAll('ul#towns li');
   const srch = document.getElementById("searchText").value;
   const res = document.getElementById("result");
   let count = 0;

   for (let i = 0; i < children.length; i++) {
      children[i].style.fontWeight = 'normal';
      children[i].style.textDecoration = '';
   }

   for (let i = 0; i < children.length; i++) {
      let txt = children[i].textContent;
      if (txt.includes(srch)) {
         children[i].style.fontWeight = 'bold';
         children[i].style.textDecoration = 'underline';
         count++;
      } // or we can put the normalization here as an else statemnt

   }
   //print it at bottom of html
   res.textContent = `${count} matches found`;
}