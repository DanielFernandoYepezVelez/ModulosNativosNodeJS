class Fs {
    getInformation() {
        console.log("Modulo File System");
        const fs = require('fs');
        fs.writeFile('./texto.txt', 'Aqui estamos agregando texto al archivo \"TXT\" creado', (error) => {
            if (error) {
                return console.log(error);
            }
            console.log('Archivo creado exitosamente');
        });

        fs.readFile("./texto.txt", (error, dataFile) => {
            if (error) {
                return console.log(error);
            }
            console.log(dataFile.toString());
        });
    }
}

module.exports = Fs;