const list = document.querySelector('#book-list ul');


//delete books
list.addEventListener('click', function(e){
   if(e.target.className == 'delete'){
       const li = e.target.parentElement;  
       list.removeChild(li); 
   }
});




















// const list = document.querySelector('#book-list ul');

// // delete books
// list.addEventListener('click', (e) => {
//   if(e.target.className == 'delete'){
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   }
// });
