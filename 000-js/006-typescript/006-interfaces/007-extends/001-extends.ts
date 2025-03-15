interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}

interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}

class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Enviar email a ${email} en ${after} ms.`);
        return true;
    }
    send(email: string): boolean {
        console.log(`Enviar email a ${email}.`);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Encolar un email a ${email}.`);
        return true;
    }
}

let mail1 = new Mail();
mail1.send('Hola');
mail1.queue('Adios');
mail1.later('PD: Revisar', 5000);