// Examine the document object //

// console.dir(document);
// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(documnent.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = "Hello";
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);


// GetElementsByID

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'GoodBye';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';


// GetElementsByClassName

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// Gives Error
// items.style.backgroundColor = '#f4f4f4';
// for(var i=0;i<items.length;i++)
// {
//     items[i].style.backgroundColor = '#FAFA33';
// }

// GetElementsByTagName

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.background = 'yellow';

// Gives Error

// li.style.backgroundColor = '#ffff00';

// for(var i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor = '#ffff00';
// }


// QuerySelector

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World!';

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';
// secondItem.style.backgroundColor = 'green';

// var ThirdItem = document.querySelector('.list-group-item:nth-child(3)');
// ThirdItem.style.visibility = 'hidden';


// QuerySelectorAll

// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello Add';

// var odd = document.querySelectorAll('li:nth-child(odd');
// var even = document.querySelectorAll('li:nth-child(even');
// even[0].style.color = 'green';
// for(var i=0;i<odd.length;i++)
// {
//    // odd[i].style.backgroundColor = '#f4f4f4';
//     odd[i].style.backgroundColor = 'green';
    
//     even[i].style.backgroundColor = '#ccc';
// } 

// Traversing the DOM 

// var itemList = document.querySelector('#items');
// ParentNode 

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);


// parentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// ChildNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //firstChild

// // console.log(itemList.firstChild);
// // //firstElementChild
// // console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// lastChild
// console.log(itemList.lastChild);
// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);


// previousSibling
// console.log(itemList.previousSibling);

// // previousElementSibling
// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color = 'green';

// CreateElement

// create a div

// var newDiv = document.createElement('div');
// // add class
// newDiv.className = 'hello';
// //add id
// newDiv.id = 'hello1';

// // add attr
// newDiv.setAttribute('title','Hello Div');

// //create text node
// var newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText); 

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);
// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv , h1);

    var form = document.getElementById('addForm');
    var itemList = document.getElementById('items');
    var item = document.getElementsByClassName('list-group-item');
    var filter = document.getElementById('filter');
 // form submit event
    form.addEventListener('submit', addItem);

 // Delete Event
    itemList.addEventListener('click',removeItem);
    
 //adding edit button to all the list
 for(let i=0;i<item.length;i++){
        const editBtn = document.createElement('button');
        editBtn.className = 'btn btn-sm float-right editBtn';
        editBtn.appendChild(document.createTextNode('EDIT'));

        item[i].appendChild(editBtn);
 }

 // Filter Event
 filter.addEventListener('keyup',filterItems);
 // Add Item
 function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;
    var description = document.getElementById('description').value;

    if(newItem != ''){
        // create new li element
        var li = document.createElement('li');
        // add class
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(newItem + ' ' + description));

    
        //create del buttone element
        var deleteBtn = document.createElement('button');


        //Add  classes to  del button
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
        // Append Text node
        deleteBtn.appendChild(document.createTextNode('X'));
        // Append Button to li
        li.appendChild(deleteBtn);
        
        // Append li to list
        itemList.appendChild(li);
        
        document.getElementById('item').value = '';
    }else{
        alert('Add some text');
    }
 }


// Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure you want to delete it?')){
             var li = e.target.parentElement;
             itemList.removeChild(li);
        }  
    }
}


//filter Items

function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    //Get lis
    var items = itemList.getElementsByTagName('li');
    
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}


