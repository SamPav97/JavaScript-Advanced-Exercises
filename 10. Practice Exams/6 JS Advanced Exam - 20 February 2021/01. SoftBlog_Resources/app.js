function solve(){
   let postSection = Array.from(document.querySelectorAll('section'))[1];
   let author = document.getElementById('creator');
   let title = document.getElementById('title');
   let category = document.getElementById('category');
   let content = document.getElementById('content');
   let createButton = Array.from(document.querySelectorAll('button'))[0];
   let archiveSection = Array.from(document.querySelectorAll('ol'))[0];

   createButton.addEventListener('click', onCreate);

   function onCreate(e){
      e.preventDefault()


      
      let article = document.createElement('article');
      let h1 = document.createElement('h1');
      h1.textContent = title.value;
      let p = document.createElement('p');
      p.textContent = 'Category: ';
      let strong = document.createElement('strong');
      strong.textContent = category.value;
      p.appendChild(strong);
      let p2 = document.createElement('p');
      p2.textContent = 'Creator: ';
      let strong2 = document.createElement('strong');
      strong2.textContent = author.value;
      p2.appendChild(strong2);
      let p3 = document.createElement('p');
      p3.textContent = content.value;

      let div = document.createElement('div');
      div.className = 'buttons';
      let delButton = document.createElement('button');
      delButton.className = 'btn delete';
      delButton.textContent = 'Delete';
      let archiveButton = document.createElement('button');
      archiveButton.className = 'btn archive';
      archiveButton.textContent = 'Archive';
      div.appendChild(delButton);
      div.appendChild(archiveButton);

      article.appendChild(h1);
      article.appendChild(p);
      article.appendChild(p2);
      article.appendChild(p3);
      article.appendChild(div);

      postSection.appendChild(article);
      archiveButton.addEventListener('click', onArchive);

      function onArchive(){
         article.remove();
         let li = document.createElement('li');
         li.textContent = h1.textContent;

         archiveSection.appendChild(li);

         Array.from(archiveSection.getElementsByTagName("LI"))
         .sort((a, b) => a.textContent.localeCompare(b.textContent))
         .forEach(li => archiveSection.appendChild(li));
      }

      delButton.addEventListener('click', onDelete);

      function onDelete(){
         article.remove();
      }


   }

  }



  