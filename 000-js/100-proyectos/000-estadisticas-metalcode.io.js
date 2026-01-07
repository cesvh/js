const h3Elementos = document.querySelectorAll("div > button > h3");
const resultado = [];

h3Elementos.forEach(h3 => {
	const titulo = h3.textContent.trim();
	//busca el primer div hacia arriba del dom
	const divContenedor = h3.closest("div");
	const pElementos = divContenedor.querySelectorAll( "ol > li > span > div > p" );
    //Convertir salida NodeList de pElementos a un array
	const leccion = Array.from(pElementos).map(p => {
        return p.textContent.trim();
    });
	resultado.push({ titulo, leccion });
});

console.log(resultado);
