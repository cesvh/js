function verifyPassword(realPassword, maxRetries){
    let attempts = 0;

    return (password) => {

        if(attempts >= maxRetries){
            return "Bloqueado";
        }else{
            attempts++;

            if(password === realPassword){
                attempts = 0;
                return "Contraseña correcta";
            }else{
                return `Contraseña incorrecta, intentos restantes ${maxRetries - attempts}`;
            }
        }
    }

}

const verify = verifyPassword("123456789", 3);
console.log(verify("7"));
console.log(verify("123456789"));
console.log(verify("7"));
console.log(verify("7"));
console.log(verify("7"));
console.log(verify("7"));
console.log(verify("7"));
console.log(verify("123456789"));
