inputPrincipal=document.querySelector("#principal")
btnAgregar=document.querySelector(".boton-editar")
container=document.querySelector("div")

class Item{
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea)
        };
        
}
btnAgregar.addEventListener("click", (e) =>{
    var botonCandado =document.createElement("button")
    var botonRemover =document.createElement("button")

    
    botonCandado.className += " fa fa-lock";
    botonRemover.className += " fa fa-trash-o";

    let textInput = document.createElement("input");
    textInput.setAttribute("value",inputPrincipal.value)
    var espacio = document.createElement("br")
    container.appendChild(espacio)
    container.appendChild(textInput);
    container.appendChild(botonCandado);
    container.appendChild(botonRemover);
    console.log(textInput)
    textInput.setAttribute("disabled","true")
    botonRemover.addEventListener("click", rem=>{
        container.removeChild(textInput)
        container.removeChild(botonCandado);
        container.removeChild(botonRemover);
        container.removeChild(espacio)
        
        
    })
    botonCandado.addEventListener("click",editar=>{
        textInput.removeAttribute("disabled")
        console.log(editar)   
})
})



/*<div class="item" >
<input  id= "tareas" class="item-input"  text="texto" disabled>


<button class="boton-editar">
<i class="fa fa-lock" aria-hidden="true"></i>
</button>
<button class="boton-remover">
<i class="fa fa-trash-o" aria-hidden="true"></i>

</button>
</div>  */