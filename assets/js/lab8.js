//Prob 6
var count = (function () {
    let counter = 0;
    let step = 20;

    const add = function() {
        return counter += 1;
    };

    const reset = function() {
        counter = 0;
        return counter;
    };

    const toString = function () {
        console.log("counter: " + counter);
    };

    // prob8: Solution 1
    const makeAdder = function (i) {
        step = i;
        return function () {
            counter +=step;
        }
    };

    return {
        add: add,
        reset: reset,
        toString: toString,
        makeAdder: makeAdder
    }
}());

console.log("=======PROB 6========");

console.log(count.add());
console.log(count.add());
console.log(count.add());
count.toString();
console.log(count.reset());
count.toString();

// prob 7
/*
* The variable is `counter`, this variable can access on 3 functions add, reset, to String
* and can not access from out of count function
* */

// prob8: solution 2
count.makeAdder1 = function(step) {
    let add1 = this.add;
    return function () {
        let i = 0;
        while (i < step) {
            add1();
            i++;
        }
    };
};

count.reset()
console.log("=======PROB 8.1========");
add5 = count.makeAdder(5);
add5();
add5();
add5();
count.toString();

count.reset();

add7 = count.makeAdder(7);
add7();
add7();
add7();
count.toString();

count.reset();
console.log("=======PROB 8.2========");
add5 = count.makeAdder1(5);
add5();
add5();
add5();
count.toString();

count.reset();

add7 = count.makeAdder1(7);
add7();
add7();
add7();
count.toString();

//prob 9 : we will put all the code to esmodule for export the module and import wherever we need to use
/*

==> model/package.mjs

    export function package(param1, param2) {
        this.param1 = param1;
        this.param2 = param2;
    }


==> main.js

    import {Package} from "model/package.mjs";
    const package1 = new Package("param1", "param2");

* */


//Prob 10
var employee = (function () {
    var name, age, salary;

    function setAge(newAge) {
        age = newAge;
    }
    
    function setSalary(newSalary) {
        salary = newSalary;
    }
    
    function setName(newName) {
        name = newName;
    }
    
    function getAge() {
        return age;
    }
    
    function getSalary() {
        return salary;
    }
    
    function getName() {
        return name;
    }

    function increaseSalary(percentage) {
        salary += salary * percentage / 100;
    }
    
    function incrementAge() {
        age++;
    }

    return {
        setAge: setAge,
        setSalary: setSalary,
        setName: setName,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge
    }
}());

//prob11
var employeeExtend = (function () {
    var address;

    function setAddress(newAddress) {
        address = newAddress;
    }

    function getAddress() {
        return address;
    }

    employee.setAddress = setAddress;
    employee.getAddress = getAddress;

    return employee;

}(employee));


employee.setAddress("1000 N 4st, Fairfield, Iowa");
employee.setName("employee name");

console.log(employee.getAddress());
