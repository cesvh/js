const video = {
    titulo: "Un video de JavaScript",
    descripcion: "Programar en javascript es divertido",
    comentarios: [
        {
            usuarioID: 1,
            comentario: "Buen video"
        },
        {
            usuarioID: 2,
            comentario: "Mal video",
            comentarios: [
                {
                    usuarioID: 3,
                    comentario: "A mi si me gustó",
                    comentarios: [
                        {
                            usuarioID: 2,
                            comentario: "A mi no",
                            comentarios: [
                                {
                                    usuarioID: 3,
                                    comentario: "De gustos hay sabores"
                                }
                            ]
                        }
                    ]
                },
                {
                    usuarioID: 4,
                    comentario: "Velo de nuevo, quizás no entendiste",
                    comentarios: [
                        {
                            usuarioID: 2,
                            comentario: "No, no lo entendí"
                        }
                    ]
                },
                {
                    usuarioID: 9,
                    comentario: "Este es nuevo comentando",
                    comentarios: [
                        {
                            usuarioID: 3,
                            comentario: "Jajajaja, puede ser"
                        }
                    ]
                },
                {
                    usuarioID: 12,
                    comentario: "El contenido es gratis"
                }
            ]
        },
        {
            usuarioID: 10,
            comentario: "Gracias"
        },
        {
            usuarioID: 12,
            comentario: "Buen contenido"
        }
    ]
}

function mostrarComentarios(comentarios, nivel = 0){
    const espacios = " ".repeat(nivel * 4);
    for(const comentario of comentarios){
        console.log(`${espacios}${comentario.usuarioID}: ${comentario.comentario}`);
        if(comentario.comentarios){
            mostrarComentarios(comentario.comentarios, (nivel + 1));
        }
    }
}

console.log();
console.log(video.titulo);
console.log(video.descripcion);

mostrarComentarios(video.comentarios);

console.log();
