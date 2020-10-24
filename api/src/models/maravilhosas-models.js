const fs = require('fs')

let database = require('../data/data.json')

const selectAllData = () => {

    return database
}

const selectDataById = (id) => {

    return database.find(item => item.id == id)

}


// criar uma nova maravilhosa sem repetir
const insertData = (newMaravilhosa) => {
    const maravilhosaFound = database.find(maravilhosa => maravilhosa.name == newMaravilhosa.name)

    if (!newMaravilhosa.id) {
        newMaravilhosa.id = Math.random().toString(36).substr(-8)
    }

    if (maravilhosaFound) {
        return { error: { message: "Ops, registro duplicado" } }
    } else {
        fs.writeFileSync('./src/data/data.json', JSON.stringify([...database, newMaravilhosa]), 'utf8', (err) => {
            if (err) {
                console.log(err)
            }
        })

        return { error: null }
    }
}

// alterar cadastro maravilhosa
const updateData = (id, update) => {

    const data = database.find(item => item.id == id)
    const newData = database.splice(data, 1, update)


}

const deleteData = (id) => {
    const dataFilter = database.filter(item => item.id == id)[0]

    const index = database.indexOf(dataFilter)

    return database.splice(index, 1)
}


module.exports = {
    selectAllData,
    selectDataById,
    insertData,
    updateData,
    deleteData
}
