const Kelvin = (to, temp) => {
    let result = 0;

    switch (key) {
        case "C":
            result = temp - 273.15
            break;
        case "F":
            result = (temp - 273.15) * (9/5) + 32
            break;
    
        default:
            result = temp
            break;
    }
    return result
} 

const Celsius = (to, temp) => {
    let result = 0;

    switch (to) {
        case "F":
            result = (temp * (9/5)) + 32
            break;
        case "K":
            result = temp + 273.15
            break;
        default:
            result = temp
            break;
    }

    return result
}

const Fahrenheit = (to, temp) => {
    let result = 0;
    switch(to){
        case "C":
            result = (temp - 32) * (5/9)
            break;
        case "K":
            result = (temp - 32) * (5/9) + 273.15
            break;
        default:
            result = temp
            break
    }

    return result;
}


export {
    Fahrenheit,
    Celsius,
    Kelvin
} 