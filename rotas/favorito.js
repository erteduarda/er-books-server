const { Router } = require("express")
const { getFavoritos, postFavoritos, deletarFavoritos } = require("../controladores/favorito")

const router = Router()

router.get('/', getFavoritos)

router.post('/:id', postFavoritos)

router.delete('/:id', deletarFavoritos)

module.exports = router