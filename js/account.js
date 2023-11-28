document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
});

function login_inproccess(){

    var datos = {
        correo: document.getElementById('correo').value,
        contrasena: document.getElementById('contrasena').value
    };

    fetch('php/connection.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
    })
    .then(response => {
        return response.text();
    })
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
    });
    
}

function regist_inproccess(){

    var formulario = document.getElementById("registerForm");

    if (formulario.checkValidity()) {
        registOperation();
    }
}

function registOperation(){
    var datos = {
        name: document.getElementById('registerName').value,
        email: document.getElementById('registerEmail').value,
        password: document.getElementById('registerPassword').value
    };

    fetch('php/connection.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
    })
    .then(response => {
        return response.text();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
    });
}