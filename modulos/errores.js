function otraFuncion(){
    seRompe();
}

function seRompe(){
    return 3 + z;
}

function seRompeAsincrona(cb){
    setTimeout(() => {
        try {
        return 3 + z;
        } catch (err) {
            console.error('Error en mi funcion Asincrona');
            cb(err);
        }
    })
}

try {
    seRompeAsincrona( (err)=>{
        console.error(err.message);
    });
} catch(err){
    console.error('Vaya, algo se ha roto...');
    console.log(err);
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('esto de aquí está al final');
