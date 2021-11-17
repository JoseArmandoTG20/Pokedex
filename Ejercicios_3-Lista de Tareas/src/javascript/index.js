// TORRES GARCIA JOSE ARMANDO
const contenedor = document.getElementById("contenedor");
const textoNuevaEntrada = document.getElementById("textoNuevaEntrada");
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit",(event) =>{
    event.preventDefault();
    agregarLi();
})

const agregarLi = () => {
    // Valida Que No Se Ingresen Campos Vacios.
    if(!textoNuevaEntrada.value.trim()){
        alert("Ingresa Un Valor En El Input Por Favor!!!");
        return;
    }

    //Crea Una Nueva Lista
    const nuevoLi = document.createElement("li");

    //Crea Una Nuevo Texto
    nuevoLi.innerText = textoNuevaEntrada.value;

    //Crea Un Nuevo Boton Editar
    const editBtn = document.createElement("button");
    editBtn.innerText = " EDITAR";
    editBtn.addEventListener("click",() => {editarLi(nuevoLi)});
    nuevoLi.appendChild(editBtn);

    //Crea Un Nuevo Boton Eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click",() => {eliminarLi(nuevoLi) });
    nuevoLi.appendChild(deleteBtn);
    contenedor.appendChild(nuevoLi);
    textoNuevaEntrada.value = "";
}

const eliminarLi = (li) => {
    li.remove();
}

const editarLi = (li) => {
    li.innerText.textoNuevaEntrada;
}