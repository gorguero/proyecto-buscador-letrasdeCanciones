import * as UserInterface from './interfaz.js';

UserInterface.formulario.addEventListener('submit', buscarCancion);

function buscarCancion(){

    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === ''){

        UserInterface.divMensaje.textContent = 'Todos los campos son obligatorios';
        UserInterface.divMensaje.classList.add('error');

        setTimeout(() => {
            UserInterface.divMensaje.textContent = '';
            UserInterface.divMensaje.classList.remove('error');
        },3000);

        return;
    }else{



    }

}