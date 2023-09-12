const fs = require("fs")
const { getTodosLivros, getLivroPorId, insereLivro, modificarLivro, deletarLivroPorId } = require("../servicos/livro")

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("Id Invalido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        if(req.body.nome) {
            insereLivro(livroNovo)
            res.status(201)
            res.send('Livro criado com sucesso')
        } else {
            res.status(422)
            res.send("O campo nome é obrigatorio")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const body = req.body
            modificarLivro(body, id)
            res.send('Item modificado com sucesso')
        } else {
            res.status(422)
            res.send("Id Invalido")
        }
    } catch {
        res.status(500)
        res.send(error.message)
    }
}

function deletarLivro(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            deletarLivroPorId(id)
            res.send("Livro deletado com sucesso")
        } else {
            res.status(422)
            res.send("Id Invalido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deletarLivro
}