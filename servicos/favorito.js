const fs = require("fs")

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deletaFavoritoPorId(id) {
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))

    const livroFavoritoFiltrado = livros.filter(livro => livro.id !== id)
    fs.writeFileSync("favoritos.json", JSON.stringify(livroFavoritoFiltrado))
}

function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))
    
    const livroInserido = livros.find(livro => livro.id === id)
    const novaListaFavoritos = [...favoritos, livroInserido]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito
}

