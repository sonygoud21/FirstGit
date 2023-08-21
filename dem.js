var form = document.getElementById('addForm');
var ItemList = document.getElementsById('items');

//form submit event
form.addEventListener('submit',addItem);
//Add Item
function addItem(e){
    e.preventDefault();
   // console.log(1);

    //get input value
    var newItem = document.getElementById('item').value;
    //create new li element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //ItemList.appendChild(li);

    //create delete button element
    var deleteBtn = document.createElement('button');

    //add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sn float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('x'));

    //append button to li
    li.appendChild(deleteBtn);

    ItemList.appendChild(li);


}
