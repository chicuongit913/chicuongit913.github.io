// prob1
const max = function(n1, n2) {
    return n1 > n2 ? n1 : n2;
};
console.log(max(3,5));

//prob2
const maxOfThree = function(n1, n2, n3) {
    let max = n1;
    max = max < n2 ? n2 : max;
    max = max < n3 ? n3 : max;

    return max;
};
console.log(maxOfThree(12, 20, 19));

//prob3
const isVowel = function (s) {
    if(s === "a" ||
        s === "A" ||
        s === "e" ||
        s === "E" ||
        s === "i" ||
        s === "I" ||
        s === "o" ||
        s === "O" ||
        s === "u" ||
        s === "U")
    {
        return true;
    }
    else
    {
        return false;
    }
};

console.log(isVowel("d"));

//prob 4
const sum = function (arr) {
    return arr.reduce((accumulator, element) => accumulator + element);
};

const multiply = function (arr) {
    if(arr.length === 0)
        return 0;

    return arr.reduce((accumulator, element) => accumulator * element);
};

console.log("SUM 1,2,3,4 : 1 " + sum([1, 2, 3, 4, 5, 6]));
console.log("Multiply 1,2,3,4 : " + multiply([1, 2, 3, 4]));

//prob5
const reverse = function (str) {
    return (str === "") ? "" : reverse(str.substr(1)) + str.charAt(0);
};

console.log(reverse("hello word"));


//prob6
const findLongestWord = function (arrString) {
    if (arrString.length === 0)
        return 0;

    return arrString.reduce(function(accumulator, currentValue) {
       return accumulator < currentValue.length ? currentValue.length : accumulator;
    }, arrString[0].length);

};
console.log(findLongestWord(["a","aa","bb55bbb","aaa","aaaa"]));

//prob7
const filterLongWords = function (arrString, i) {
    if (arrString.length === 0)
        return [];

    return arrString.filter(currentValue => currentValue.length >= i);
};
console.log(filterLongWords(["a","aa","bb55bbb","aaa","aaaa"], 3));

//prob8
const computeSumOfSquares = function (arrNum) {
    return arrNum.reduce((accumulator, currentValue) => accumulator + currentValue*currentValue, 0);
};
console.log(computeSumOfSquares([1,2,3]));

//prob9
const printOddNumbersOnly = function (arrNum) {
    console.log(arrNum.filter(currentValue => currentValue % 2 !== 0));
};

printOddNumbersOnly([1, 2, 3, 4, 5, 6]);

//prob10
const computeSumOfSquaresOfEvensOnly = function (arrNum) {
    return arrNum.filter(currentValue => currentValue % 2 === 0).reduce((accumulator, currentValue) => accumulator + currentValue*currentValue, 0);
};
console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));

//prob11: did like above I don't use loop or foreach

//prob12
const findSecondBiggest = function (arrNum) {
    if (arrNum.length === 0)
        return null;

    let secondMax, max = arrNum[0];

    for(let i=0;i<arrNum.length;i++){
        if(arrNum[i]>max){
            secondMax = max;
            max = arrNum[i];
        }
        else if(arrNum[i]>max && arrNum[i]!==secondMax)
            max = arrNum[i];
    }
    return secondMax;
};

console.log(findSecondBiggest([1,2,3,4,35,6,12,78]));

//prob13
const printFibo = function (n, a, b) {
    let arrNum = [];
    arrNum[0] = a;
    arrNum[1] = b;

    let i = 2;
    while (i < n) {
        arrNum[i] = arrNum[i-1] + arrNum[i-2];
        i++;
    }
    console.log(arrNum);
};

printFibo(10, 0 ,1);
