"use strict";
class Mail {
    later(email, after) {
        console.log(`Enviar email a ${email} en ${after} ms.`);
        return true;
    }
    send(email) {
        console.log(`Enviar email a ${email}.`);
        return true;
    }
    queue(email) {
        console.log(`Encolar un email a ${email}.`);
        return true;
    }
}
let mail1 = new Mail();
mail1.send('Hola');
mail1.queue('Adios');
mail1.later('PD: Revisar', 5000);
