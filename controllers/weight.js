import { Kilogram, MiliGram, Ounce, Pound } from "../utils/weight.js";

const getWeightController = (req, res) => {
    res.render("weight", {
        result: null
    })
}

const postWeightController = (req, res) => {
    const { weight, from, to } = req.body
    let result = 0;
    
    switch (from) {
        case "gm":
            result = Gram(to, weight)
            break;
        case "mg":
            result = MiliGram(to, weight)
            break;
        case "kg":
            result = Kilogram(to, weight)
            break;
        case "Oz":
            result = Ounce(to, weight)
            break;
        case "lb":
            result = Pound(to, weight)
            break;
    }

    res.render("weight", {
        result: `${weight} ${from} = ${result} ${to}`
    })
}

export {
    getWeightController,
    postWeightController
}