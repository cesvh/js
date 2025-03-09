"use strict";
var Mes;
(function (Mes) {
    Mes[Mes["Enero"] = 0] = "Enero";
    Mes[Mes["Febrero"] = 1] = "Febrero";
    Mes[Mes["Marzo"] = 2] = "Marzo";
    Mes[Mes["Abril"] = 3] = "Abril";
    Mes[Mes["Mayo"] = 4] = "Mayo";
    Mes[Mes["Junio"] = 5] = "Junio";
    Mes[Mes["Julio"] = 6] = "Julio";
    Mes[Mes["Agosto"] = 7] = "Agosto";
    Mes[Mes["Septiembre"] = 8] = "Septiembre";
    Mes[Mes["Octubre"] = 9] = "Octubre";
    Mes[Mes["Noviembre"] = 10] = "Noviembre";
    Mes[Mes["Diciembre"] = 11] = "Diciembre";
})(Mes || (Mes = {}));
;
function esVerano(mes) {
    switch (mes) {
        case Mes.Junio:
        case Mes.Julio:
        case Mes.Agosto:
            return true;
        default:
            return false;
    }
}
let mes = Mes.Agosto;
let validarMes = esVerano(mes);
console.log(validarMes);
var AprobacionEstatus;
(function (AprobacionEstatus) {
    AprobacionEstatus[AprobacionEstatus["prueba"] = 1] = "prueba";
    AprobacionEstatus[AprobacionEstatus["enviado"] = 2] = "enviado";
    AprobacionEstatus[AprobacionEstatus["aprobado"] = 3] = "aprobado";
    AprobacionEstatus[AprobacionEstatus["rechazado"] = 4] = "rechazado";
})(AprobacionEstatus || (AprobacionEstatus = {}));
;
const solicitud = {
    id: 1,
    estatus: AprobacionEstatus.aprobado,
    comentarios: "Por favor aprobar la solicitud"
};
if (solicitud.estatus === AprobacionEstatus.aprobado) {
    console.log("Solicitud aprobada");
}
;
