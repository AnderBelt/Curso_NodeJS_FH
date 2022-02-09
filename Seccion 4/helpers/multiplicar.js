const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar=false, hasta=10) =>{

    try{
        

        let salida = '';

        for (let i=1; i<=hasta; i++){

        salida +=`${base} ${'x'.trap} ${i} = ${base*i}\n`;

        }   

        if(listar){
            console.log('================================='.bgCyan);
            console.log('Tabla del: ', colors.blue(base));
            console.log('================================='.bgCyan);

            console.log(salida);
        }




        fs.writeFileSync( `./salida/Tabla-${base}.txt` , salida);

        return `Tabla-${base}.txt creado`;

    } catch(err){
        throw err;
    }   
}

module.exports = {

    crearArchivo
}