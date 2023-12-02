document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
});

function login() {
    var formulario = document.getElementById("loginForm");

    if (formulario.checkValidity()) {
        loginOperation();
    }
}

function loginOperation(){
    var loginEmail = document.getElementById('loginEmail')
    var loginPassword = document.getElementById('loginPassword')

    var datos = {
        email: loginEmail.value,
        password: loginPassword.value
    };

    fetch('php/login_user.php', {
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

            loginEmail.value = '';
            loginPassword.value = '';
            return;
        } else if (data == 'emailNotExist') {
            alert('Este correo no está registrado.'); 

            loginEmail.value = '';
            loginPassword.value = '';
            return;
        } else if (data == 'wrongPassword') {
            alert('La contraseña es errónea.');

            loginPassword.value = '';
            return;
        }
        sessionStorage.setItem('userLogged', data);
        window.location.href = 'index.html';
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
            sessionStorage.setItem('userLogged', data);
            window.location.href = 'index.html';
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud:', error);
        });
}