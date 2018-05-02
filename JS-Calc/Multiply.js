function travel(number){
    number = number.toString();
    array = [];
    units = [];
    answer = {};
    for (let i = 0; i < number.length; i++) {
        array.push(parseInt(number.charAt(i)));
        units.push(number.length-(i+1));
    }
    answer = {
        digits: array,
        units: units
    }
    return answer;
}

let n1 = 1234, n2 = 4321;
console.log(travel(n1))