class Multiply {
    constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    getMultiply() {
        return console.log(`La multiplicación de los números ${this.numero1} y ${this.numero2} es => ${this.numero1 * this.numero2}`);
    }
}

module.exports = Multiply;