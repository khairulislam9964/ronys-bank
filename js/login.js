document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    if(email === 'khairulislam9964@gmail.com' && password === '226677'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user')
    }

})