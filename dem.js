var form = document.getElementById('addform');
var ItemList = document.getElementsById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);
ItemList.addEventListener('click',removeItem);

//filter event
filter.addEventListener('keyup', filterItems);
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
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //append text node
    deleteBtn.appendChild(document.createTextNode('x'));

    //append button to li
    li.appendChild(deleteBtn);

    ItemList.appendChild(li);


}

function removeItem(e){
    if(e.target.classList.contain('delete')){
        if(confirm('Are you sure')){
            var li = e.target.parentElement;
          ItemList.removeChild(li);
        }
       // console.log(1);
    }
}
//filter items
function filterItems(e){
    //convert to lower-case
    var text = e.target.value.toLowerCase();
    ItemList.getElementsByTagName('li');

    //convert to array
    Array.from(items).forEach(function(item)
    {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display='block';
        }else{
            item.style.display='none';
      }

    }
    
