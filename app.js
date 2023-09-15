//Funcion para filtrar las categorias de los proyectos
function verCategoria(cat){
    const items = document.getElementsByClassName("item");
    for(let i=0; i < items.length;i++){
        items[i].style.display = "none";
    }

    const itemCat = document.getElementsByClassName(cat);
    for(let i = 0; i<itemCat.length;i++){
            itemCat[i].style.display = "block";
    }

    const links = document.querySelectorAll(".proyectos nav a");
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.className = "borde";
}

//Funcion para mostrar el menu responsive
function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className==""){
        x.className = "responsive";

        //Creacion de elemento que cierra el menu
        let span = document.createElement("span");
        span.innerHTML = "X";
        document.getElementById("nav").appendChild(span);

        //Quitamos el boton eliminar cuando se hace click sobre este
        span.onclick = function(){
            x.className = "";
            span.remove();
        }
    }else{
        x.className="";
    }
}

const links = document.querySelectorAll("#nav a");
for (i=0; i < links.length;i++){
    links[i].onclick = function(){
        var x = document.getElementById("nav");
        x.className = "";

        btnEliminar = document.querySelector("#nav span");
        btnEliminar.remove();
    }
}