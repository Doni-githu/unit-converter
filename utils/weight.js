const Gram = (to, weight) => {
    let result = 0;

    switch (to) {
        case "mg":
            result = weight * 1000
            break;
        case "kg":
            result = weight / 1000
            break;
        case "Oz":
            result = weight / 28.35
            break;
        case "lb":
            result = weight / 453.6
            break;

        default:
            break;
    }

    return result
}

const MiliGram = (to, weight) => {
    let result = 0;

    switch (to) {
        case "g":
            result = weight / 1000
            break;
        case "kg":
            result = weight / 1e+6
            break;
        case "Oz":
            result = weight / 28350
            break;
        case "lb":
            result = weight / 453600
            break;

        default:
            break;
    }

    return result
}

const Kilogram = (to, weight) => {
    let result = 0

    switch (to) {
        case "g":
            result = weight * 1000
            break;
        case "mg":
            result = weight * 1e+6
        case "Oz":
            result = weight * 35.274
            break;
        case "lb":
            result = weight * 2.205
            break;


        default:
            break;
    }

    return result
}

const Ounce = (to, weight) => {
    let result = 0

    switch (to) {
        case "g":
            result = weight * 28.35
            break;
        case "mg":
            result = weight * 28350
        case "kg":
            result = weight / 35.274
            break;
        case "lb":
            result = weight / 16
            break;


        default:
            break;
    }


    return result
}

const Pound = (to, weight) => {
    let result = 0

    switch (to) {
        case "g":
            result = weight * 453.6
            break;
        case "mg":
            result = weight * 453600
        case "kg":
            result = weight / 2.205
            break;
        case "Oz":
            result = weight * 16
            break;


        default:
            break;
    }


    return result

}

export {
    Gram,
    MiliGram,
    Kilogram,
    Ounce,
    Pound
}