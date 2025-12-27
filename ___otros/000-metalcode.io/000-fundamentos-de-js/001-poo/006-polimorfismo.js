class Notificador {
    enviarMensaje(mensaje){
        return `Notificador - enviarMensaje: ${mensaje}`;
    }
}

class Email extends Notificador {
    enviarMensaje(mensaje){
        return `Email - enviarMensaje: ${mensaje}`;
    }
}

class SMS extends Notificador {
    enviarMensaje(mensaje){
        return `SMS - enviarMensaje: ${mensaje}`;
    }
}

class PushNotification extends Notificador {
    enviarMensaje(mensaje){
        return `PushNotification - enviarMensaje: ${mensaje}`;
    }
}

function notificacion(notificador, mensaje){
    return notificador.enviarMensaje(mensaje);
}

const objEmail = new Email();
const mensajeEmail = notificacion(objEmail, "Mensaje por objEmail");
console.log(mensajeEmail);

const objSMS = new SMS();
const mensajeSMS = notificacion(objSMS, "Mensaje por SMS");
console.log(mensajeSMS);

const objPush = new PushNotification();
const mensajePush = notificacion(objPush, "Mensaje por PushNotification");
console.log(mensajePush);

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\001-poo\006-polimorfismo.js
Email - enviarMensaje: Mensaje por objEmail
SMS - enviarMensaje: Mensaje por SMS
PushNotification - enviarMensaje: Mensaje por PushNotification
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/
