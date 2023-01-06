const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('.list');
listItems.forEach((item,idx)=>{
 item.addEventListener('click',()=>{
   hideAllContents();
   hideAllcol();
   contents[idx].classList.add('show');
   item.classList.add('col');
 })
 function hideAllContents() {
   contents.forEach(content => content.classList.remove('show'));
}
function hideAllcol() {
   listItems.forEach(item => item.classList.remove('col'));
}
})