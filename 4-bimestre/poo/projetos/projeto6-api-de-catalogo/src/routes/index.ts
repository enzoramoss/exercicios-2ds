import { Router } from "express"
import rotaProdutos from "./produtos"

const rotaPrincipal = Router()

rotaPrincipal.get('/ping', (req, res) => {
    return res.json({ pong: true })
})

rotaPrincipal.get("/", (req, res) => {
    return res.json({ nome: "Cabecinha", idade: "Tem nem um mês" })
})

rotaPrincipal.use('/produtos', rotaProdutos)

export default rotaPrincipal