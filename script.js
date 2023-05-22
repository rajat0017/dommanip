const items = document.getElementsByClassName('list-group-item');
// items[1].style.backgroundColor='green';
// items[2].style.visibility='hidden';
var odd = document.querySelectorAll('li:nth-Child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}
var secondelem= document.querySelector('.list-group-item:nth-child(2)');
secondelem.style.color='green';