// console.log('hi');
// localStorage.setItem('name','bob');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');


// sessionStorage.setItem('name','John');
// sessionStorage.getItem('name');
// sessionStorage.removeItem('name');


// // Cookies

// document.cookie = 'name = kyle; expires='+ 
// new Date(2022,0,1).toUTCString();

// document.cookie = 'lastName = Smith ; expires='+ 
// new Date(2022,0,1).toUTCString();

// console.log(document.cookie);

var form = document.getElementById('my-form');

form.addEventListener('submit', storeDetails);

function storeDetails(e){
    e.preventDefault();

    var user_name = document.getElementById('name').value;
    var user_email = document.getElementById('email').value;


    localStorage.setItem('user_name',user_name);
    localStorage.setItem('user_email',user_email);
    
}

