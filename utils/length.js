function MilliMeter(to, len) {
    let result = 0
    switch (to) {
        case "m":
            result = len / 1000
            break;
        case "sm":
            result = len / 10
            break;
        case "km":
            result = len / 1_000_000
            break;


        case "mili":
            result = len / 1609e+6
            break;

        case "yard":
            result = len / 914.4
            break;

        case "inch":
            result = len / 25.4
            break;

        case "foot":
            result = len / 304.8
            break;

        default:
            result = len
            break;
    }

    return result;
}

function Meter(to, len) {
    let result = 0;

    switch (to) {
        case "mm":
            result = len * 1000
            break;
        case "sm":
            result = len * 100
            break;
        case "km":
            result = len / 1000
            break;


        case "mili":
            result = len / 1609
            break;

        case "yard":
            result = len / 1.094
            break;

        case "inch":
            result = len * 39.37
            break;

        case "foot":
            result = len * 3.281
            break;

        default:
            result = len
            break;
    }
    return result
}

function CentiMeter(to, len) {
    let result = 0;

    switch (to) {
        case "mm":
            result = len * 10
            break;
        case "m":
            result = len / 100
            break;
        case "km":
            result = len / 100000
            break;


        case "mili":
            result = len / 160900
            break;

        case "yard":
            result = len / 91.44
            break;

        case "inch":
            result = len / 2.54
            break;

        case "foot":
            result = len / 30.48
            break;

        default:
            result = len
            break;
    }

    return result
}

function KiloMeter(to, len) {
    let result = 0;

    switch (to) {
        case "mm":
            result = len * 1e+6
            break;

        case "m":
            result = len * 1000
            break;

        case "sm":
            result = len * 100000
            break;
        case "mili":
            result = len / 1.609
            break;

        case "yard":
            result = len * 1094
            break;

        case "inch":
            result = len * 39370
            break;

        case "foot":
            result = len * 3281
            break;

        default:
            result = len
            break;
    }
    return result
}


const Mili = (to, len) => {
    let result = 0;
    switch (to) {
        case "mm":
            result = len * 1609e+6
            break;

        case "m":
            result = len * 1609
            break;

        case "sm":
            result = len * 160900
            break;

        case "km":
            result = len * 1.609
            break;

        case "yard":
            result = len * 1760
            break;

        case "inch":
            result = len * 63360
            break;

        case "foot":
            result = len * 5280
            break;

        default:
            result = len
            break;
    }

    return result;
}

const Yard = (to, len) => {
    let result = 0;

    switch (to) {
        case "mm":
            result = len * 914.4
            break;

        case "m":
            result = len / 1.094
            break;

        case "sm":
            result = len * 91.44
            break;

        case "km":
            result = len / 1094
            break;

        case "mili":
            result = len / 1760
            break;

        case "inch":
            result = len * 36
            break;

        case "foot":
            result = len * 3
            break;

        default:
            result = len
            break;
    }

    return result;
}


const Foot = (to, len) => {
    let result = 0;

    switch (to) {
        case "mm":
            result = len * 304.8
            break;

        case "m":
            result = len / 3.281
            break;

        case "sm":
            result = len * 30.48
            break;

        case "km":
            result = len / 3281
            break;

        case "mili":
            result = len / 5280
            break;

        case "inch":
            result = len / 12
            break;


        case "yard":
            result = len / 3
            break;

        default:
            result = len
            break;
    }


    return result;
}

const Inch = (to, len) => {
    let result = 0;


    switch (to) {
        case "mm":
            result = len * 25.4

            break;

        case "m":
            result = len / 39.37
            break;

        case "sm":
            result = len * 2.54
            break;

        case "km":
            result = len / 39370
            break;

        case "mili":
            result = len / 63360
            break;

        case "foot":
            result = len / 12
            break;

        case "yard":
            result = len / 36
            break;

        default:
            result = len
            break;
    }


    return result;
}

export {
    MilliMeter,
    Meter,
    CentiMeter,
    KiloMeter,
    Mili,
    Yard,
    Foot,
    Inch
}