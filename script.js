let foto = document.getElementById("frase"); // let -> para crear variables dinamicas, document contiene toda nuestra web
foto.style.transition = 'margin .5s'; // style -> propiedad para cambiar los estilos css a los elementos
foto.addEventListener("mouseover", (e) => { //Funciones flechas o callbacks, reaccionan al evento correspondiente, (mouseover)
	e.target.style.margin = "0 25%"; // e -> elemento de tipo evento creado cuando ocurre el evento
});

foto.addEventListener("mouseout", (e) => {
	e.target.style.margin = "0";
});

let boton = document.getElementById("enviar");
boton.addEventListener("click", botonEnviar);

function botonEnviar(evento) {
	evento.target.style.color = 'blue';
}