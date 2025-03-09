enum Mes {
    Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre
};

function esVerano(mes: Mes) {
    switch (mes) {
        case Mes.Junio:
        case Mes.Julio:
        case Mes.Agosto:
            return true;
        default:
            return false;
    }
}

let mes: Mes = Mes.Agosto;
let validarMes: boolean = esVerano(mes);
console.log(validarMes);

enum AprobacionEstatus {
    prueba =1,
    enviado,
    aprobado,
    rechazado
};

const solicitud = {
    id: 1,
    estatus: AprobacionEstatus.aprobado,
    comentarios: "Por favor aprobar la solicitud"
};

if (solicitud.estatus === AprobacionEstatus.aprobado) {
    console.log("Solicitud aprobada");
};
