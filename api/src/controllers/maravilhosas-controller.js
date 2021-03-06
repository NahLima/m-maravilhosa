const models = require('../models/maravilhosas-models')


//Nomes dos métodos para implementação:


// GET mostrar todas as maravilhosas
const getMaravilhosas = (req, res) => {

    const result = models.selectAllData()

    res.status(200).send(result)
}


// GET buscar maravilhosa por Id

const getMaravilhosaById = (req, res) => {

    const id = req.params.id
    const result = models.selectDataById(id)

    if (!result) {
        res.status(404).send('Id não encontrado!')
    } else {
        res.status(200).send(result)
        console.log(`Id ${id} encontrado`)
    }
}


// POST criar um novo objeto maravilhosa
const addMaravilhosa = (req, res) => {

    const { error } = models.insertData(req.body)
    if (error === null) {
        res.status(201).json("Registro adicionado com sucesso!");
    } else {
        res.status(400).json({ "message": error.message })
    }
    

}


// PUT alterar cadastro maravilhosa
const updateMaravilhosa = (req, res) => {

    const id = req.params.id
    const body = req.body


    if (id) {
        const result = models.updateData(id, body)
        res.status(200).send('Dado alterado com sucesso')
        console.log(body)
    } else {
        res.status(404).send('Id não encontrado!')

    }
}

// DELETE deletar maravilhosa
const deleteMaravilhosa = (req, res) => {
    const id = req.params.id
    const result = models.deleteData(id)
    if (!result) {
        res.status(404).send('Id não encontrado!')
    } else {
        res.status(202).send('Dado deletado com sucesso!')
            (`Id ${id} deletado!`)

    }

}



module.exports = {
    getMaravilhosas,
    getMaravilhosaById,
    addMaravilhosa,
    updateMaravilhosa,
    deleteMaravilhosa
}
