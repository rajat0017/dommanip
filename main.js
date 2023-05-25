var addstorage= document.getElementById('my-form');
var names= document.getElementById('name');
var emails = document.getElementById('email');
addstorage.addEventListener('submit', addtostorage );


function addtostorage(e){
    localStorage.setItem( names.value,emails.value);
}

