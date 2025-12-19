
let itemsTitles = document.querySelectorAll('div > button > h3');
itemsTitles.forEach( i => console.log(i.innerText));

let items = document.querySelectorAll('ol > li > span > div > p');
let lenMiTexto = items.length;
let idx = 1;

items.forEach( (i, indice) => { 
	console.log(`${idx++} - ${lenMiTexto - (indice)} - ${i.innerText}`)
});

/*
Biemvenida
    // 1 - 135 - Bienvenida

Introducción a JavaScript
    // 2 - 134 - Entorno y modo de trabajo del curso
    // 3 - 133 - ¿Qué es una variable?
    // 4 - 132 - Tipos de Datos (primitivos)
    // 5 - 131 - Variables Constantes
    // 6 - 130 - Sentencia condicional if
    // 7 - 129 - Operador ternario
    // 8 - 128 - Sentencia condicional switch
    // 9 - 127 - Sentencia de repetición while (bucle)
    // 10 - 126 - Sentencia de repetición do while (bucle)
    // 11 - 125 - Sentencia de repetición for (bucle)
    // 12 - 124 - Funcionamiento de continue en Bucles
    // 13 - 123 - Funcionamiento de break en Bucles
    // 14 - 122 - ¿Qué es una función?
    15 - 121 - Scope de variables
    16 - 120 - Template literals

Programación Orientada a Objetos
    17 - 119 - Introducción a la Programación Orientada a Objetos
    18 - 118 - ¿Qué es un objeto?
    19 - 117 - Clases y Objetos
    20 - 116 - Encapsulamiento privado
    21 - 115 - Accessors Get y Set
    22 - 114 - Herencia
    23 - 113 - Sobrescritura de métodos
    24 - 112 - Abstracción
    25 - 111 - Polimorfismo
    26 - 110 - Static
    27 - 109 - Funciones constructoras

Introducción a Arrays
    28 - 108 - ¿Qué es un Array?
    29 - 107 - Agregar elementos a un array
    30 - 106 - Eliminar elementos de un array
    31 - 105 - Sentencia de repetición for...of
    32 - 104 - Arrays bidimensionales
    33 - 103 - Array de objetos
    34 - 102 - Objetos con arrays

Referencia, Mutabilidad e Inmutabilidad
    35 - 101 - Paso por Valor vs Paso por Referencia
    36 - 100 - Paso por Valor y Referencia como parámetro en funciones
    37 - 99 - Mutabilidad en Programación
    38 - 98 - Funciones Inmutables 
    39 - 97 - Operador Spread (...)
    40 - 96 - Operador Spread en Arrays
    41 - 95 - Operador Spread para combinar objetos
    42 - 94 - Clonación de objetos a profundidad con structureClone()

Programación Funcional
    43 - 93 - Introducción a Programación Funcional
    44 - 92 - Función Pura
    45 - 91 - Función de Primera Clase
    46 - 90 - Funciones Flecha (arrow function)
    47 - 89 - Función de Orden Superior
    48 - 88 - Funciones como paso de referencia
    49 - 87 - Clausura (Closure)
    50 - 86 - Control de ejecución de funciones por medio de Closures
    51 - 85 - Currying
    52 - 84 - Ejercicio: Currying para validaciones
    53 - 83 - Composición de funciones (Composition)
    54 - 82 - Función pipe
    55 - 81 - Recursividad
    56 - 80 - Ejercicio: Recursividad en un escenario real

Arrays y Programación Funcional
    57 - 79 - Método map
    58 - 78 - Método filter
    59 - 77 - Método reduce
    60 - 76 - Método forEach
    61 - 75 - Evaluación de condiciones (métodos: find, some y every)
    62 - 74 - Método flat
    63 - 73 - Método flatMap
    64 - 72 - Método concat
    65 - 71 - Método reverse
    66 - 70 - Método sort
    67 - 69 - Ejercicio: operaciones inmutables en arrays
    68 - 68 - Ejercicio: currying aplicado a filtros
    69 - 67 - Ejercicio: transformando Arrays con Métodos Funcionales

Manipulación y Control Avanzado de Objetos
    70 - 66 - Desestructuración (destructuring)
    71 - 65 - Operador rest (...)
    72 - 64 - Desestructuración de arrays
    73 - 63 - Desestructuración en funciones
    74 - 62 - Desestructuración de objetos complejos
    75 - 61 - Formato JSON
    76 - 60 - Serialización de objetos
    77 - 59 - Deserialización de objetos
    78 - 58 - Transformación de Objetos en Estructuras Iterables
    79 - 57 - Sellado de objetos (seal)
    80 - 56 - Congelado de objetos (freeze)

Manejo de Errores
    81 - 55 - Manejo de Errores con try...catch
    82 - 54 - Lanzar Error (throw)
    83 - 53 - Errores Personalizados

Manipulación del DOM con JavaScript
    84 - 52 - ¿Qué es un Entorno de Ejecución? (Runtime Environment)
    85 - 51 - ¿Qué es el DOM? (Document Object Model)
    86 - 50 - Preparación de entorno
    87 - 49 - Introducción al Document Object Model (DOM)
    88 - 48 - Selectores clásicos
    89 - 47 - Selectores CSS
    90 - 46 - Manipulación de contenido y atributos
    91 - 45 - Aplicación de estilos
    92 - 44 - Formas de manejar Eventos en JavaScript
    93 - 43 - Explorando Eventos comunes en JavaScript
    94 - 42 - Creación y eliminación de elementos dinámicamente
    95 - 41 - Formularios
    96 - 40 - Ejercicio: Creación de contenido dinámico con código organizado

Programación Asíncrona
    97 - 39 - ¿Qué es Programación Asíncrona?
    98 - 38 - Funciones síncronas
    99 - 37 - Temporizador setTimeout() (timers)
    100 - 36 - Temporizador setInterval() (timers)
    101 - 35 - Callbacks
    102 - 34 - Promesas (Promise)
    103 - 33 - Encadenamiento de Promesas
    104 - 32 - Promesas con timers
    105 - 31 - Manejo de promesas con Promise.all()
    106 - 30 - Manejo de promesas con Promise.race()
    107 - 29 - Manejo de promesas con Promise.any()
    108 - 28 - Manejo de promesas con Promise.settled()
    109 - 27 - Funciones asíncronas con async
    110 - 26 - Programación asíncrona con await
    111 - 25 - Uso de async/await con promesas
    112 - 24 - Ejercicio: creación de cuenta regresiva usando asincronía y DOM

Api fetch
    113 - 23 - HTTP
    114 - 22 - Uso de API fetch
    115 - 21 - Api fetch con async/await
    116 - 20 - Solicitudes GET y resultados JSON
    117 - 19 - Solicitudes POST
    118 - 18 - Solicitudes PUT
    119 - 17 - Solicitudes DELETE

Proyecto Final
    120 - 16 - Creación de proyecto
    121 - 15 - Creación de tabla HTML
    122 - 14 - Obtener información de Servicio Web
    123 - 13 - Crear contenido dinámico en Tabla
    124 - 12 - Creación de Formulario
    125 - 11 - Enviar información por POST a Servicio Web
    126 - 10 - Mostrar nueva información dinámicamente en Tabla
    127 - 9 - Ejecutar la creación de elemento
    128 - 8 - Creación de Botones dinámicos
    129 - 7 - Editar información de Servicio Web
    130 - 6 - Mostrar información editada dinámicamente
    131 - 5 - Ejecución de editar elemento
    132 - 4 - Eliminar información de Servicio Web
    133 - 3 - Eliminar contenido dinámicamente
    134 - 2 - Ejecución de eliminar elemento

Conclusión y código fuente
    135 - 1 - Despedida y código fuente
*/
