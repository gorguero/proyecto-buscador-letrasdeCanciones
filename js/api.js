import * as UserInterface from "./interfaz.js";

class API {
  constructor(artista, cancion) {
    this.artista = artista;
    this.cancion = cancion;
  }

  consultarAPI() {
    const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

    spinner();

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        if (resultado.lyrics) {
          const { lyrics } = resultado;

          UserInterface.divResultado.textContent = lyrics;
          UserInterface.tituloResultado.textContent = `Letra de ${this.cancion} del artista ${this.artista}`;
        } else {

            UserInterface.divMensaje.textContent = 'No pudimos encontrar la letra de la canción'
            UserInterface.divMensaje.classList.add("error");

            setTimeout(() => {
                UserInterface.divMensaje.textContent = "";
                UserInterface.divMensaje.classList.remove("error");
            }, 5000);
        }
      })
  }

}

export default API;
