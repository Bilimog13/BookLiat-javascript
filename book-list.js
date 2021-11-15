

const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPageN = document.querySelector("#page-n");
const button = document.querySelector("#submit");
const bookList = document.querySelector("#book-list");



button.addEventListener('click',function(e){
    if(inputTitle.value == "" ||
     inputAuthor.value == "" ||
      inputPageN.value == ""){

         const alertDanger = document.querySelector(".alert-danger");
         alertDanger.className = "alert alert-danger d-block"
       
         setTimeout(function(){
            alertDanger.className = "alert alert-danger d-none"
         },3000)   
        
    }
    else{
       const NewBookRow = document.createElement('tr');

    const newTitle =  document.createElement('th');
    newTitle.innerText = inputTitle.value;
    NewBookRow.appendChild(newTitle);

    const newAuthor = document.createElement('th');
    newAuthor.innerText = inputAuthor.value;
    NewBookRow.appendChild(newAuthor);

    const newPageNumber = document.createElement('th');
    newPageNumber.innerText = inputPageN.value;
    NewBookRow.appendChild(newPageNumber);

    const close = document.createElement('th');
    const remove = document.createElement('button');
    remove.className="close custom-modal-close-button";
    remove.innerText = "x";
    remove.addEventListener('click',function(){
        remove.parentElement.parentElement.remove();
    });
    close.appendChild(remove);
    NewBookRow.appendChild(close);

    bookList.appendChild(NewBookRow);

    const alertSuccess = document.querySelector(".alert-success");
    alertSuccess.className = "alert alert-success d-block";
    
    setTimeout(function(){
        alertSuccess.className = "alert alert-success d-none";
    },3000)


    }

    inputTitle.value="";
    inputAuthor.value="";
    inputPageN.value="";

    e.preventDefault();
})





