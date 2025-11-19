import { Router } from "express";

const rotaProdutos = Router()

const produtos = [
    {id: 1, nome: "Mouse gueimer", preco: 9000},
    {id: 2, nome: "Teclado Mecânico", preco: 7900},
    {id: 3, nome: "Pelúcia gamer de Enzo", preco: -5000}
]

rotaProdutos.get("/", (req, res) => {
    return res.json(produtos)
})

rotaProdutos.get("/:id", (req, res) => {
    const idToSearch = parseInt(req.params.id)
    const produtoFind = produtos.find(p => p.id === idToSearch)

    if (produtoFind) return res.status(200).json(produtoFind)
})

rotaProdutos.post('/', (req, res) => {
const { id, nome, preco } = req.body;


if (typeof id !== 'number' || !nome || typeof preco !== 'number') {
return res.status(400).json({ message: 'Dados inválidos. Verifique id, nome e preco.' });
}


const exists = produtos.some(p => p.id === id);
if (exists) {
return res.status(409).json({ message: 'Já existe um produto com esse id.' });
}


const novoProdutoObj = { id, nome, preco };
produtos.push(novoProdutoObj);


return res.status(200).json(novoProdutoObj);
})

export default rotaProdutos