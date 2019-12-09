class Divide {
    constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    getDivide() {
        if (this.numero2 === 0) {
            return console.log('No se puede dividir por cero');
        } else {
            return console.log(`La divisón de los números ${this.numero1} y ${this.numero2} es => ${this.numero1 / this.numero2}`);
        }
    }
}

module.exports = Divide;