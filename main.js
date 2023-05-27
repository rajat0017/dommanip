var addstorage = document.getElementById('my-form');
var names = document.getElementById('name');
var emails = document.getElementById('email');
addstorage.addEventListener('submit', addtostorage);


var container = document.getElementById('my-form');

container.addEventListener('submit', additemlist);
container.addEventListener('click', removeItem);

function removeItem(myobj){
    if(myobj.target.classList.contains('delete'))  {
     if(confirm('are you sure ?')){
         var ele= myobj.target.parentElement;
        
     
         container.removeChild(ele);
       
         localStorage.removeItem(names.value);
     }
    } 

 }

function additemlist(e) {
    e.preventDefault();

    var li = document.createElement('li');
    li.className = 'items';
    li.id = 'itemid';
    li.appendChild(document.createTextNode('Name=  ' +names.value +',  Email=' + emails.value));
    
    container.appendChild(li);

    var newbutton = document.createElement('button');
    newbutton.className='btn btn-danger btn-float-right delete';
    newbutton.appendChild(document.createTextNode('delete'));
    li.appendChild(newbutton);
    

}


function addtostorage(e) {

    let myobj = {
        name: names.value,
        email: emails.value
    };

    var objstr = JSON.stringify(myobj);
    localStorage.setItem(names.value, objstr);
    var newobj = JSON.parse(localStorage.getItem(names.value));
   

}