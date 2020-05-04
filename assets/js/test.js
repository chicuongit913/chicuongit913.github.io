const myCalculator = (function() {
    const doAddition = (n1, n2) => n1 + n2;

    const doMultiplication = (n1, n2) => n1 * n2;

    return {
        doAddition: doAddition,
        doMultiplication: doMultiplication
    };
})();
console.log(myCalculator.doAddition(10,10));
console.log(myCalculator.doMultiplication(10,10));