document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
});

function login_inproccess() {

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

function regist_inproccess() {

    var formulario = document.getElementById("registerForm");

    if (formulario.checkValidity()) {
        registOperation();
    }
}

function registOperation() {
    var datos = {
        name: document.getElementById('registerName').value,
        email: document.getElementById('registerEmail').value,
        password: document.getElementById('registerPassword').value
    };

    fetch('php/regist_user.php', {
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
            if(data.includes('SQLSTATE')){
                alert('No se ha podido conectarse al servidor, inténtelo más tarde');
                return;
            } else if (data == 'nameTaken') {
                alert('El nombre ya se encuentra en uso.'); 
                return;
            } else if (data == 'registeredEmail') {
                alert('El correo ya se encuentra en uso.');
                return;
            }
            window.location.href = 'index.html';
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud:', error);
        });
}