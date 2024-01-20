
### **Event Queue**

Eventos que se generan por nuestro código (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.


### **Event Loop**

Proceso en bucle que gestiona de forma asíncrona todos los eventos de nuestra aplicación. El bucle va a ejecutar eventos de manera asíncrona y podrá seguir recibiendo peticiones sin bloquearse. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.


### **Thread Pool**

Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop.

Lo que hace es levantar un hilo nuevo que se encargara de que el proceso se ejecute, una vez termine de ejecutarse el Thread Pool dispara un evento y se devuelve a el Event Loop y si es necesario a el Event Queu
