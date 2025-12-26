// Falta optimizar este primer array
let itemsTitles = document.querySelectorAll('div > button > h3');
itemsTitles.forEach( i => console.log(i.innerText));

let items = document.querySelectorAll('ol > li > span > div > p');
let lenMiTexto = items.length;
let ascendente = "";
let descendente = "";
let porcentaje = 0;

items.forEach( (i, indice) => {
    porcentaje = (Math.round(((indice + 1) * 100 / lenMiTexto) * 100) / 100);
    ascendente = `${++indice} (${porcentaje}%)`;
    descendente = `${lenMiTexto - (indice) + 1} - ${i.innerText}`;
    // Mismo resultado que: + 1
    // descendente = `${lenMiTexto - (indice-1)} - ${i.innerText}`;
	console.log(`${ascendente} - ${descendente}`);
});

// Lo ideal es que ambos arrays se unifiquen y se otenga un resultado como el siguiente:

/*
Bienvenida
	// 1 (0.74%) - 135 - Bienvenida

Introducción a JavaScript
	// 2 (1.48%) - 134 - Entorno y modo de trabajo del curso
	// 3 (2.22%) - 133 - ¿Qué es una variable?
	// 4 (2.96%) - 132 - Tipos de Datos (primitivos)
	// 5 (3.7%) - 131 - Variables Constantes
	// 6 (4.44%) - 130 - Sentencia condicional if
	// 7 (5.19%) - 129 - Operador ternario
	// 8 (5.93%) - 128 - Sentencia condicional switch
	// 9 (6.67%) - 127 - Sentencia de repetición while (bucle)
	// 10 (7.41%) - 126 - Sentencia de repetición do while (bucle)
	// 11 (8.15%) - 125 - Sentencia de repetición for (bucle)
	// 12 (8.89%) - 124 - Funcionamiento de continue en Bucles
	// 13 (9.63%) - 123 - Funcionamiento de break en Bucles
	// 14 (10.37%) - 122 - ¿Qué es una función?
	// 15 (11.11%) - 121 - Scope de variables
	// 16 (11.85%) - 120 - Template literals

Programación Orientada a Objetos
	// 17 (12.59%) - 119 - Introducción a la Programación Orientada a Objetos
	// 18 (13.33%) - 118 - ¿Qué es un objeto?
	// 19 (14.07%) - 117 - Clases y Objetos
	// 20 (14.81%) - 116 - Encapsulamiento privado
	// 21 (15.56%) - 115 - Accessors Get y Set
	// 22 (16.3%) - 114 - Herencia
	23 (17.04%) - 113 - Sobrescritura de métodos
	24 (17.78%) - 112 - Abstracción
	25 (18.52%) - 111 - Polimorfismo
	26 (19.26%) - 110 - Static
	27 (20%) - 109 - Funciones constructoras

Introducción a Arrays
	28 (20.74%) - 108 - ¿Qué es un Array?
	29 (21.48%) - 107 - Agregar elementos a un array
	30 (22.22%) - 106 - Eliminar elementos de un array
	31 (22.96%) - 105 - Sentencia de repetición for...of
	32 (23.7%) - 104 - Arrays bidimensionales
	33 (24.44%) - 103 - Array de objetos
	34 (25.19%) - 102 - Objetos con arrays

Referencia, Mutabilidad e Inmutabilidad
	35 (25.93%) - 101 - Paso por Valor vs Paso por Referencia
	36 (26.67%) - 100 - Paso por Valor y Referencia como parámetro en funciones
	37 (27.41%) - 99 - Mutabilidad en Programación
	38 (28.15%) - 98 - Funciones Inmutables 
	39 (28.89%) - 97 - Operador Spread (...)
	40 (29.63%) - 96 - Operador Spread en Arrays
	41 (30.37%) - 95 - Operador Spread para combinar objetos
	42 (31.11%) - 94 - Clonación de objetos a profundidad con structureClone()

Programación Funcional
	43 (31.85%) - 93 - Introducción a Programación Funcional
	44 (32.59%) - 92 - Función Pura
	45 (33.33%) - 91 - Función de Primera Clase
	46 (34.07%) - 90 - Funciones Flecha (arrow function)
	47 (34.81%) - 89 - Función de Orden Superior
	48 (35.56%) - 88 - Funciones como paso de referencia
	49 (36.3%) - 87 - Clausura (Closure)
	50 (37.04%) - 86 - Control de ejecución de funciones por medio de Closures
	51 (37.78%) - 85 - Currying
	52 (38.52%) - 84 - Ejercicio: Currying para validaciones
	53 (39.26%) - 83 - Composición de funciones (Composition)
	54 (40%) - 82 - Función pipe
	55 (40.74%) - 81 - Recursividad
	56 (41.48%) - 80 - Ejercicio: Recursividad en un escenario real

Arrays y Programación Funcional
	57 (42.22%) - 79 - Método map
	58 (42.96%) - 78 - Método filter
	59 (43.7%) - 77 - Método reduce
	60 (44.44%) - 76 - Método forEach
	61 (45.19%) - 75 - Evaluación de condiciones (métodos: find, some y every)
	62 (45.93%) - 74 - Método flat
	63 (46.67%) - 73 - Método flatMap
	64 (47.41%) - 72 - Método concat
	65 (48.15%) - 71 - Método reverse
	66 (48.89%) - 70 - Método sort
	67 (49.63%) - 69 - Ejercicio: operaciones inmutables en arrays
	68 (50.37%) - 68 - Ejercicio: currying aplicado a filtros
	69 (51.11%) - 67 - Ejercicio: transformando Arrays con Métodos Funcionales

Manipulación y Control Avanzado de Objetos
	70 (51.85%) - 66 - Desestructuración (destructuring)
	71 (52.59%) - 65 - Operador rest (...)
	72 (53.33%) - 64 - Desestructuración de arrays
	73 (54.07%) - 63 - Desestructuración en funciones
	74 (54.81%) - 62 - Desestructuración de objetos complejos
	75 (55.56%) - 61 - Formato JSON
	76 (56.3%) - 60 - Serialización de objetos
	77 (57.04%) - 59 - Deserialización de objetos
	78 (57.78%) - 58 - Transformación de Objetos en Estructuras Iterables
	79 (58.52%) - 57 - Sellado de objetos (seal)
	80 (59.26%) - 56 - Congelado de objetos (freeze)

Manejo de Errores
	81 (60%) - 55 - Manejo de Errores con try...catch
	82 (60.74%) - 54 - Lanzar Error (throw)
	83 (61.48%) - 53 - Errores Personalizados

Manipulación del DOM con JavaScrip
	84 (62.22%) - 52 - ¿Qué es un Entorno de Ejecución? (Runtime Environment)
	85 (62.96%) - 51 - ¿Qué es el DOM? (Document Object Model)
	86 (63.7%) - 50 - Preparación de entorno
	87 (64.44%) - 49 - Introducción al Document Object Model (DOM)
	88 (65.19%) - 48 - Selectores clásicos
	89 (65.93%) - 47 - Selectores CSS
	90 (66.67%) - 46 - Manipulación de contenido y atributos
	91 (67.41%) - 45 - Aplicación de estilos
	92 (68.15%) - 44 - Formas de manejar Eventos en JavaScript
	93 (68.89%) - 43 - Explorando Eventos comunes en JavaScript
	94 (69.63%) - 42 - Creación y eliminación de elementos dinámicamente
	95 (70.37%) - 41 - Formularios
	96 (71.11%) - 40 - Ejercicio: Creación de contenido dinámico con código organizado

Programación Asíncrona
	97 (71.85%) - 39 - ¿Qué es Programación Asíncrona?
	98 (72.59%) - 38 - Funciones síncronas
	99 (73.33%) - 37 - Temporizador setTimeout() (timers)
	100 (74.07%) - 36 - Temporizador setInterval() (timers)
	101 (74.81%) - 35 - Callbacks
	102 (75.56%) - 34 - Promesas (Promise)
	103 (76.3%) - 33 - Encadenamiento de Promesas
	104 (77.04%) - 32 - Promesas con timers
	105 (77.78%) - 31 - Manejo de promesas con Promise.all()
	106 (78.52%) - 30 - Manejo de promesas con Promise.race()
	107 (79.26%) - 29 - Manejo de promesas con Promise.any()
	108 (80%) - 28 - Manejo de promesas con Promise.settled()
	109 (80.74%) - 27 - Funciones asíncronas con async
	110 (81.48%) - 26 - Programación asíncrona con await
	111 (82.22%) - 25 - Uso de async/await con promesas
	112 (82.96%) - 24 - Ejercicio: creación de cuenta regresiva usando asincronía y DOM

Api fetch
	113 (83.7%) - 23 - HTTP
	114 (84.44%) - 22 - Uso de API fetch
	115 (85.19%) - 21 - Api fetch con async/await
	116 (85.93%) - 20 - Solicitudes GET y resultados JSON
	117 (86.67%) - 19 - Solicitudes POST
	118 (87.41%) - 18 - Solicitudes PUT
	119 (88.15%) - 17 - Solicitudes DELETE

Proyecto Final
	120 (88.89%) - 16 - Creación de proyecto
	121 (89.63%) - 15 - Creación de tabla HTML
	122 (90.37%) - 14 - Obtener información de Servicio Web
	123 (91.11%) - 13 - Crear contenido dinámico en Tabla
	124 (91.85%) - 12 - Creación de Formulario
	125 (92.59%) - 11 - Enviar información por POST a Servicio Web
	126 (93.33%) - 10 - Mostrar nueva información dinámicamente en Tabla
	127 (94.07%) - 9 - Ejecutar la creación de elemento
	128 (94.81%) - 8 - Creación de Botones dinámicos
	129 (95.56%) - 7 - Editar información de Servicio Web
	130 (96.3%) - 6 - Mostrar información editada dinámicamente
	131 (97.04%) - 5 - Ejecución de editar elemento
	132 (97.78%) - 4 - Eliminar información de Servicio Web
	133 (98.52%) - 3 - Eliminar contenido dinámicamente
	134 (99.26%) - 2 - Ejecución de eliminar elemento

Conclusión y código fuente
	135 (100%) - 1 - Despedida y código fuente
*/
