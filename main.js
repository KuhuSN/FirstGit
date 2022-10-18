// Examine the document object //

//console.dir(document);
//console.log(document);
// console.log(document.domain);
// console.log(document.URL);
//console.log(document.title);
//document.title = 123;
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

//console.log(document.getElementById('header-title'));
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
//items.style.backgroundColor = '#f4f4f4';
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
//li[1].style.background = 'yellow';

// Gives Error

//li.style.backgroundColor = '#ffff00';

// for(var i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor = '#ffff00';
// }


// QuerySelector

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World!';

var submit = document.querySelector('input[type = "submit"]');
submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';
secondItem.style.backgroundColor = 'green';

var ThirdItem = document.querySelector('.list-group-item:nth-child(3)');
ThirdItem.style.visibility = 'hidden';