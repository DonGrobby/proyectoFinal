function log_in(){

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
    
        console.log(response);
    
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
    });
    
}