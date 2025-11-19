import express from "express"
import helmet from "helmet"
import path from "path"
import dotenv from "dotenv"
import router from "./routes"

dotenv.config()

const app = express()

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, "..", "public")))

app.use("/", router)


const porta = process.env.PORT ? Number(process.env.PORT) : 3000

app.listen(porta, () => {
    console.log(`Servidor rodando em: http://localhost:${porta}/`)
})


export default app