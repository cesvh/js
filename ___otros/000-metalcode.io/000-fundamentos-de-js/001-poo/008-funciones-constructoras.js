function Saldo(usuarioNombre, saldo){
    this.usuarioNombre = usuarioNombre;
    this.saldo = saldo;

    this.obtenerSaldo = function(){
        return this.saldo;
    }

    this.agregarSaldo = function(monto) {
        this.saldo += monto;
    }

    this.sustraerSaldo = function(monto) {
        this.saldo -= monto;
    }
}

const usuario = new Saldo("César", 100000000);
console.log(usuario.obtenerSaldo());
usuario.sustraerSaldo(50000000);
console.log(usuario.obtenerSaldo());
usuario.sustraerSaldo(30000000);
console.log(usuario.obtenerSaldo());
usuario.agregarSaldo(100000000);
console.log(usuario.obtenerSaldo());

/*
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js> node ___otros\000-metalcode.io\000-fundamentos-de-js\001-poo\008-funciones-constructoras.js
100000000
50000000
20000000
120000000
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
PS C:\Users\cesvh\dev\github\js>
*/
