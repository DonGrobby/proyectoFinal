document.getElementById("recovery-form").addEventListener("submit", function (event) {
    event.preventDefault();
});

function recovery(){
    var formulario = document.getElementById("recovery-form");

    if (formulario.checkValidity()) {
        recoveryOperation();
    }
}

function recoveryOperation(){
    var recoveryEmail = document.getElementById('recoveryEmail');

    var datos = {
        email: recoveryEmail.value
    };

    fetch('php/recuperacion.php', {
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
        document.getElementById("recovery-sended").innerHTML = 'El correo ha sido enviado, siga el proceso descrito el en el video para más información.';
    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
    });
}

function prueba(){
    alert("Probando");
}

function changePass(){
    var formulario = document.getElementById("recovery-form");

    if (formulario.checkValidity()) {
        changePasswordOperation();
    }
}

function changePasswordOperation(){
    var changePasword = document.getElementById('changePassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    
    
    var urlParams = new URLSearchParams(window.location.search);
    var urlToken = urlParams.get('token');
    
    if(!(changePasword === confirmPassword)){
        alert("La contraseña no coincide.");
        return;
    }
    var datos = {
        changePassword: changePasword,
        token: urlToken
    };

    fetch('php/change_password.php', {
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
        window.location.href = 'index.html';
    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
    });
}