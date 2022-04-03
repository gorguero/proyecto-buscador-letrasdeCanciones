import * as UserInterface from './interfaz.js';
import API from './api.js';

UserInterface.formulario.addEventListener('submit', buscarCancion);

function buscarCancion(e){

    e.preventDefault();

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
    }

    const busqueda = new API(artista,cancion);
    busqueda.consultarAPI();

}