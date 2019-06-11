const name = 'clientes'

let schema = {
    id: 'number',
    name: 'string',
    lastName: 'string'
}

// contenido inicial
let data = [
    {
        id: 1,
        name: "Edwin1",
        lastName: "Salinas1"
    }
]

module.exports = {
    schema,
    data,
}
