import http from "http"
import dotenv from "dotenv"

dotenv.config()

const port = process.env.PORT || 3000
const nome: String = "Thiago mãe"
const idade: Number = 15

const server = http.createServer((req: any, res: any) => {
    req.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end(`Servidor enviado para ${nome}, idade ${idade}!`)
})

server.listen(port, () => {
    console.log(`Servidor funcionando em http://localhost:${port}`)
})

server.close(() => {
    console.log("Servidor encerrado.")
})

export default server