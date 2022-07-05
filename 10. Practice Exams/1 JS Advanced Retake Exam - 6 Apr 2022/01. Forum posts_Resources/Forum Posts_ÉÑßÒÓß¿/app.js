window.addEventListener("load", solve);

function solve() {
  let titleField = document.getElementById('post-title');
  let categoryField = document.getElementById('post-category');
  let contentField = document.getElementById('post-content');
  let publishButton = document.getElementById('publish-btn');
  let reviewList = document.getElementById('review-list');
  let publishList = document.getElementById('published-list');
  let clearBut = document.getElementById('clear-btn')
 
  publishButton.addEventListener('click', onClick);

  function onClick(){
    if(titleField.value != '' && categoryField.value != '' && contentField.value != ''){
      let list = document.createElement('li');
      list.className = 'rpost';
      let article = document.createElement('article');
      let h4 = document.createElement('h4');
      h4.textContent = titleField.value;
      let p1 = document.createElement('p');
      p1.textContent = 'Category: ' + categoryField.value;
      let p2 = document.createElement('p');
      p2.textContent = 'Content: ' + contentField.value;

      let editBut = document.createElement('button');
      editBut.className = 'action-btn edit';
      editBut.textContent = 'Edit';
      let approveBut = document.createElement('button');
      approveBut.className = 'action-btn approve';
      approveBut.textContent = 'Approve';


      article.appendChild(h4);
      article.appendChild(p1);
      article.appendChild(p2);

      list.appendChild(article);
      list.appendChild(approveBut);
      list.appendChild(editBut);

      reviewList.appendChild(list);

      //clean input
      titleField.value = '';
      categoryField.value = '';
      contentField.value = '';

      //Make edit button work
      editBut.addEventListener('click', onEdit);

      function onEdit(e){
        let localLi = e.currentTarget.parentNode.childNodes;
        let localarticle = localLi[0].childNodes;
        titleField.value = localarticle[0].textContent;
        categoryField.value = localarticle[1].textContent.substring(10);
        contentField.value = localarticle[2].textContent.substring(9);

        e.currentTarget.parentNode.remove()
        //it appends it n does not return it to where it was. hope this ok.
      }

      approveBut.addEventListener('click', onApprove);

      function onApprove(e) {
        let toDel = e.currentTarget.parentNode;
        toDel.removeChild(toDel.childNodes[1]);
        toDel.removeChild(toDel.childNodes[1]);
        
        publishList.appendChild(toDel);
      }

      clearBut.addEventListener('click', onClear);

      function onClear(){
        const myNode = publishList
        while (myNode.firstChild) {
          myNode.removeChild(myNode.lastChild);
        }
      }

    }
  }
}
