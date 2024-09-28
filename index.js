import express from "express";
import { create, engine } from "express-handlebars";
import converter from "./routes/converter.js"
const app = express()
const hbs = create({extname: "hbs", defaultLayout: "main"})

app.engine("hbs", hbs.engine)
app.set("view engine", "hbs")
app.set("views", "./views")
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

app.use(converter)



const startApp = () => {
    app.listen(8000, () => {
        console.log(`Server running on http://localhost:${8000}`)
    })
}

startApp()