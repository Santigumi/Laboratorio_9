let container = document.getElementById("container");

let pensando = document.getElementById("pensando");
let boton = document.getElementById("boton");
let crear_publicación = document.getElementById("crear_publicación");
crear_publicación.innerHTML = ("Crear publicación");

let modal = document.getElementById("modal");
let modalName = document.getElementById("modalname");
let comentario = document.getElementById("comentario");
let publicar = document.getElementById("publicar");
let cerrar = document.getElementById("cerrar");

let comentarios = document.getElementById("comentarios");

boton.innerHTML = ("¿En qué estás pensando, Dahiana?");

let idPerfil = document.createElement("div");
idPerfil.innerHTML = ("Dahiana");
idPerfil.id = "idPerfil";
const enlace = document.createElement("a");
const imagen = document.createElement("img");
imagen.id = "icon";
enlace.href = "https://i.pinimg.com/564x/7e/00/c6/7e00c637ab6af9d8addda4112342ba84.jpg/link";
imagen.src = "https://i.pinimg.com/564x/7e/00/c6/7e00c637ab6af9d8addda4112342ba84.jpg";

enlace.appendChild(imagen);

idPerfil.appendChild(enlace);

const imagenParaPensando = imagen.cloneNode(true);
pensando.appendChild(imagenParaPensando);

const idPerfilClone = idPerfil.cloneNode(true);
modalName.appendChild(idPerfilClone);
idPerfilClone.id = "idPerfilClone";

let comentarioFondo = document.createElement("Div");
container.appendChild(comentarioFondo);
comentarioFondo.classList.add("comentarios--fondo");

    boton.addEventListener("click", (event) => {
    modal.classList.add("modal__aparece");   
    } 
        )

        cerrar.addEventListener("click", (event) => {
          modal.classList.remove("modal__aparece");
          })
      
          comentario.addEventListener("input", (event) => {
                  if (comentario.value.trim() !== "") {
                    publicar.classList.add("activado")
                  } else {
                    publicar.classList.remove("activado")
                  }
                });
      
                publicar.addEventListener("click", function() {
                  let nuevoIdPerfil = idPerfil.cloneNode(true);
                  let nuevoDiv = document.createElement("div");
                  nuevoDiv.id = "nuevoDiv";
                  let nuevoComentario = document.createElement("div");
                  nuevoComentario.id = "nuevoComentario";
                  nuevoDiv.classList.add("comentarios--style");
                  nuevoComentario.textContent = comentario.value; 
                  
                  comentarioFondo.appendChild(comentarios);
                  nuevoDiv.appendChild(nuevoIdPerfil);
                  nuevoDiv.appendChild(nuevoComentario); 

                  comentarios.appendChild(nuevoDiv); 
                  
                  comentario.value = "";
                  modal.classList.remove("modal__aparece");
              });

              



