var itemList = document.querySelector('#items');

//ParentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//ChildNode
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'blue';

//firstChild
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 4';

//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.firstElementSibling);

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.backgroundColor = 'gray';

//createElement

//create a div
var newDiv = document.createElement('div');
//add class
newDiv.className = 'Hello';
//add id
newDiv.id = 'hello1';
//add attr
newDiv.setAttribute('title','Hello Div');
//create text node
var newDivText = document.createTextNode('Hello World');
//Add text to div
newDiv.appendChild(newDivText);

new container = document.querySelector('header,container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '30px'
container.insertBefore(newDiv,h1);