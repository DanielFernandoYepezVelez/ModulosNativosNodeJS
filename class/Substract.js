class Substract {
    constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    getSubstract() {
        return console.log(`La resta de los numeros ${this.numero1} y ${this.numero2} es => ${this.numero1 - this.numero2}`);
    }

}

module.exports = Substract;