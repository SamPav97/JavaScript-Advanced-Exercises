function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let search = document.getElementById('searchField');
   let cells = document.querySelectorAll("tbody tr");

   function onClick() {

      for (const row of cells) {
         row.classList.remove('select')
         if (search.value != '' && row.innerHTML.includes(search.value)) {
            row.className = 'select'
         }
      }
      search.value = ''
   }

}