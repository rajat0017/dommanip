var addstorage= document.getElementById('my-form');
var names= document.getElementById('name');
var emails = document.getElementById('email');
addstorage.addEventListener('submit', addtostorage );


function addtostorage(e){
  
    
    
    let myobj={
        name : names.value,
        email : emails.value
    };
    
    var objstr= JSON.stringify(myobj);
    
    localStorage.setItem('obj', objstr);
    
    var newobj =JSON.parse(newlocalStorage.getItem(obj));
    
   
    
}

