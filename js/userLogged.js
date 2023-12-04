var user = sessionStorage.getItem('userLogged');

if(user == null){
    document.getElementById('userLogged').innerHTML += 'Iniciar sesión'
} else {
    document.getElementById('userLogged').innerHTML += user;
}


