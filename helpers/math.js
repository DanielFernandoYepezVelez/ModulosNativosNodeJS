const Add = require('../class/Add');
const Substract = require('../class/Substract');
const Multiply = require('../class/Multiply');
const Divide = require('../class/Divide');

/* Add */
const sumaObject = new Add(123, 5);
sumaObject.getAdd();

/* Substract */
const substractObject = new Substract(12.5, 15);
substractObject.getSubstract();

/* Multiply */
const multiplyObject = new Multiply(5, 5);
multiplyObject.getMultiply();

/* Divide */
const divideObject = new Divide(12, 10);
divideObject.getDivide();