interface A {
    a(): void
}

interface B extends A {
    b(): void
}

interface C {
    c(): void
}

interface D extends B, C {
    d(): void
}


// En este ejemplo, la interfaz D extiende las interfaces B y C. Por lo tanto, D tiene todos los métodos de las interfaces B y C, que son los métodos a(), b() y c(). Además, D tiene su propio método d(). Por lo tanto, D tiene cuatro métodos en total. Ahora, si una clase implementa la interfaz D, entonces esa clase debe proporcionar implementaciones para todos los métodos de las interfaces B, C y D. Aquí hay un ejemplo de cómo una clase implementa la interfaz D.
class E implements D {
    a() {
        console.log('funcion a de la interfaz A');
    }

    b() {
        console.log('función b de la interfaz B');
    }

    c() {
        console.log('función c de la interfaz C');
    }

    d() {
        console.log('función d de la interfaz D');
    }
}

const e = new E();
e.a(); // funcion a de la interfaz A
e.b(); // función b de la interfaz B
e.c(); // función c de la interfaz C
e.d(); // función d de la interfaz D
