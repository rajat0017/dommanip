var itemlist= document.querySelector('#items');
// itemlist.parentElement.style.backgroundColor= 'f4f4f4';

// itemlist.children[1].style.backgroundColor='blue';
// itemlist.firstElementChild.style.color='red';
// itemlist.lastElementChild.style.fontWeight='bold';

// itemlist.nextElementSibling.style.backgroundColor='#ccc';
// itemlist.previousElementSibling.style.color='red';
var newele= document.createElement('div');
newele.className='new class';
newele.id='newid';
newele.setAttribute('title','hello');

var newele_text= document.createTextNode('hello');
newele.appendChild(newele_text);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newele,h1);