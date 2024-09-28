import { Celsius, Fahrenheit, Kelvin } from "../utils/temperature.js";

const getTemperatureController = (req, res) => {
    res.render("temperature", {
        result: null
    })
}

const postTemperatureController = (req, res) => {
    const { temperature, from, to } = req.body
    let result = 0;

    switch (from) {
        case "C":
            result = Celsius(to, temperature)
            break;

        case "F":
            result = Fahrenheit(to, temperature)
            break;

        case "K":   
            result = Kelvin(to, temperature)
            break;
    }

    res.render("temperature", {
        result: `${temperature} ${from} = ${result} ${to}`
    })
}




export {
    getTemperatureController,
    postTemperatureController
}