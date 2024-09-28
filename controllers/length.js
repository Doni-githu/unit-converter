import { CentiMeter, Foot, Inch, KiloMeter, Meter, Mili, MilliMeter, Yard } from "../utils/length.js";


const getController = (req, res) => {
    res.render("length", {
        result: null
    })
}



const postController = (req, res) => {
    const { len, from, to } = req.body
    let result = 0;
    switch (from) {
        case "mm":
            result = MilliMeter(to, len)
            break;
        case "m":
            result = Meter(to, len)
            break;
        case "sm":
            result = CentiMeter(to, len)
            break;
        case "km":
            result = KiloMeter(to, len)
            break;

        case "mili":
            result = Mili(to, len)
            break;

        case "yard":
            result = Yard(to, len)
            break;

        case "inch":
            result = Inch(to, len)
            break;

        case "foot":
            result = Foot(to, len)
            break
        default:
            break;
    }



    res.render("length", {
        result: `${len} ${from} = ${result} ${to}` 
    })
}



export {
    getController,
    postController
}