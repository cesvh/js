
let itemsTitles = document.querySelectorAll('div > button > h3');
itemsTitles.forEach( i => console.log(i.innerText));

let items = document.querySelectorAll('ol > li > span > div > p');
items.forEach( i => console.log(i.innerText));

/*
Introducción a JavaScript
    // Entorno y modo de trabajo del curso
    // ¿Qué es una variable?
    // Tipos de Datos (primitivos)
    // Variables Constantes
    // Sentencia condicional if
    // Operador ternario
    // Sentencia condicional switch
    // Sentencia de repetición while (bucle)
    // Sentencia de repetición do while (bucle)
    // Sentencia de repetición for (bucle)
    // Funcionamiento de continue en Bucles
    // Funcionamiento de break en Bucles
    ¿Qué es una función?
    Scope de variables
    Template literals

Programación Orientada a Objetos
    Introducción a la Programación Orientada a Objetos
    ¿Qué es un objeto?
    Clases y Objetos
    Encapsulamiento privado
    Accessors Get y Set
    Herencia
    Sobrescritura de métodos
    Abstracción
    Polimorfismo
    Static
    Funciones constructoras

Introducción a Arrays
    ¿Qué es un Array?
    Agregar elementos a un array
    Eliminar elementos de un array
    Sentencia de repetición for...of
    Arrays bidimensionales
    Array de objetos
    Objetos con arrays

Referencia, Mutabilidad e Inmutabilidad
    Paso por Valor vs Paso por Referencia
    Paso por Valor y Referencia como parámetro en funciones
    Mutabilidad en Programación
    Funciones Inmutables 
    Operador Spread (...)
    Operador Spread en Arrays
    Operador Spread para combinar objetos
    Clonación de objetos a profundidad con structureClone()

Programación Funcional
    Introducción a Programación Funcional
    Función Pura
    Función de Primera Clase
    Funciones Flecha (arrow function)
    Función de Orden Superior
    Funciones como paso de referencia
    Clausura (Closure)
    Control de ejecución de funciones por medio de Closures
    Currying
    Ejercicio: Currying para validaciones
    Composición de funciones (Composition)
    Función pipe
    Recursividad
    Ejercicio: Recursividad en un escenario real

Arrays y Programación Funcional
    Método map
    Método filter
    Método reduce
    Método forEach
    Evaluación de condiciones (métodos: find, some y every)
    Método flat
    Método flatMap
    Método concat
    Método reverse
    Método sort
    Ejercicio: operaciones inmutables en arrays
    Ejercicio: currying aplicado a filtros
    Ejercicio: transformando Arrays con Métodos Funcionales

Manipulación y Control Avanzado de Objetos
    Desestructuración (destructuring)
    Operador rest (...)
    Desestructuración de arrays
    Desestructuración en funciones
    Desestructuración de objetos complejos
    Formato JSON
    Serialización de objetos
    Deserialización de objetos
    Transformación de Objetos en Estructuras Iterables
    Sellado de objetos (seal)
    Congelado de objetos (freeze)

Manejo de Errores
    Manejo de Errores con try...catch
    Lanzar Error (throw)
    Errores Personalizados

Manipulación del DOM con JavaScript
    ¿Qué es un Entorno de Ejecución? (Runtime Environment)
    ¿Qué es el DOM? (Document Object Model)
    Preparación de entorno
    Introducción al Document Object Model (DOM)
    Selectores clásicos
    Selectores CSS
    Manipulación de contenido y atributos
    Aplicación de estilos
    Formas de manejar Eventos en JavaScript
    Explorando Eventos comunes en JavaScript
    Creación y eliminación de elementos dinámicamente
    Formularios
    Ejercicio: Creación de contenido dinámico con código organizado

Programación Asíncrona
    ¿Qué es Programación Asíncrona?
    Funciones síncronas
    Temporizador setTimeout() (timers)
    Temporizador setInterval() (timers)
    Callbacks
    Promesas (Promise)
    Encadenamiento de Promesas
    Promesas con timers
    Manejo de promesas con Promise.all()
    Manejo de promesas con Promise.race()
    Manejo de promesas con Promise.any()
    Manejo de promesas con Promise.settled()
    Funciones asíncronas con async
    Programación asíncrona con await
    Uso de async/await con promesas
    Ejercicio: creación de cuenta regresiva usando asincronía y DOM

Api fetch
    HTTP
    Uso de API fetch
    Api fetch con async/await
    Solicitudes GET y resultados JSON
    Solicitudes POST
    Solicitudes PUT
    Solicitudes DELETE

Proyecto Final
    Creación de proyecto
    Creación de tabla HTML
    Obtener información de Servicio Web
    Crear contenido dinámico en Tabla
    Creación de Formulario
    Enviar información por POST a Servicio Web
    Mostrar nueva información dinámicamente en Tabla
    Ejecutar la creación de elemento
    Creación de Botones dinámicos
    Editar información de Servicio Web
    Mostrar información editada dinámicamente
    Ejecución de editar elemento
    Eliminar información de Servicio Web
    Eliminar contenido dinámicamente
    Ejecución de eliminar elemento

Conclusión y código fuente
    Despedida y código fuente
*/
