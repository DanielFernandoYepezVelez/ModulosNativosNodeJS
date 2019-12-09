class Add {
    constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    getAdd() {
        return console.log(`La suma de los números ${this.numero1} y ${this.numero2} es => ${this.numero1 + this.numero2}`);
    }
}

module.exports = Add;