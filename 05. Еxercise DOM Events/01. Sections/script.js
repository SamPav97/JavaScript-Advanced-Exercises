function create(words) {
   // create a div w prgrph
   // add em to the dom
   //add a click event that will turn them on


   for (let index = 0; index < words.length; index++) {

   let div  = document.createElement('div');

   let p = document.createElement('p');
   p.textContent = words[index];
   p.style.display = 'none'

   div.appendChild(p);
   
   div.addEventListener('click', onClick)

   function onClick(e) {
      e.currentTarget.children[0].style = ''
   }

   let bigPapa = document.getElementById('content')

   bigPapa.appendChild(div)



   }

   
}
