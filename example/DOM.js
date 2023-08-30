var header =document.querySelector('#main-header');
header.style.borderBottom='solid 5px #ccc';

var input=document.querySelector('input');

input.vaue='Hello World';
var submit=document.querySelector('input[type="submit"]');
submit.value="send";
var secondItem=document.querySelector('li:nth-child(odd)');
secondItem.style.color="green";

var third=document.getElementsByClassName("list-group-item");
third[2].style.backgroundColor='green';
var al=document.getElementById("items");

al.style.fontWeight='bold';

var id=document.getElementById('items');
id.createElement('li');


var item=document.querySelector('.list-group-item:nth-child(2)');
item.style.backgroundcolor='green';
var item=document.querySelector('.list-group-item:nth-child(3)');

item.style.visibility='hidden';

var it=document.querySelectorAll('.list-group-item:nth-child(2)');
it.style.backgroundcolor='green';

var irt=document.querySelectorAll('.list-group-item:nth-child(odd)');
irt.style.backgroundcolor='green';