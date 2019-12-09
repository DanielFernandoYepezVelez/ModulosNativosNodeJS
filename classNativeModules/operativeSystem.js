class Os {
    getInformation() {
        console.log("Modulo Nucleo(Core) de NodeJS");
        console.log("Modulo OS(Sistema Operativo)");
        const os = require('os');
        console.log(os.platform());
        console.log(os.hostname());
        console.log(os.release());
        console.log(os.freemem(), "bytes");
        console.log(os.totalmem(), "bytes");
    }
}

module.exports = Os;