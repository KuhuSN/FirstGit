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



var my_form = document.getElementById('my-form');

my_form.addEventListener('submit',storeValue);

function storeValue(e){
    e.preventDefault();
    let user_details = JSON.parse(localStorage.getItem('user_details')) || [];
    user_details.push({
        user_name : document.getElementById('name').value,
        user_email : document.getElementById('email').value
        });

    if(user_details.user_name != '' && user_details.user_email != ''){
        localStorage.setItem('user_details', JSON.stringify(user_details));

      // console.log(localStorage.getItem('user_details'));
    
    }else{
        alert('Please fill the details');
    }
    showDetails();
    
    
}

function showDetails(){
    console.log(localStorage.getItem('user_details'));
    if(localStorage.getItem('user_details')){
         //let{user_name ,user_email }= JSON.parse(localStorage.getItem('user_details'));
          var output = document.querySelector('tbody');
          output.innerHTML = "";
          JSON.parse(localStorage.getItem('user_details')).forEach(data => {
          output.innerHTML += `
                    <tr>
                        <td>${data.user_name}</td>
                        <td>${data.user_email}</td>
                    </tr>
            `;          
        });
    }
}

