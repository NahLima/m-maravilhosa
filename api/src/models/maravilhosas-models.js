let database = require('../data/data.json')

const selectAllData = () => {

    return database
}

const selectDataById = (id) => {

    return database.find(item => item.id == id)

}


// criar uma nova maravilhosa sem repetir
const insertData = (data) => {
    const isFound = true
    
    database.filter(item => {
        if (item.name !== data.name) {
            return database.push(data)
        }
    })
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