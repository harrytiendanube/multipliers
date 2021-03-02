const healthRouter = require('./health')
const valueRouter = require('./value')


const init = (server) => {
    server.get('/', function (req, res) {
        res.redirect('/health')
    })


    server.use('/health', healthRouter)
// ⚠️ Recomendaría "/multipliers" como nombre del recurso, 
//   "value" es un nombre genérico y no hace referencia a 
//   la funcionalidad que se estaría consumiento
    server.use('/value', valueRouter)
}

module.exports = {
    init
}
