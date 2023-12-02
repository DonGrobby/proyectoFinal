var user = sessionStorage.getItem('userLogged')

console.log(user);

if(user == null){
    document.getElementById('userLogged').innerHTML += 'Iniciar sesión'
} else {
    document.getElementById('userLogged').innerHTML += user;
}


