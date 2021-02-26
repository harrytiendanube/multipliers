const healthRouter = require('./health')
const valueRouter = require('./value')


const init = (server) => {
    server.get('/', function (req, res) {
        res.redirect('/health')
    })

    server.use('/health', healthRouter)
    server.use('/value', valueRouter)
}

module.exports = {
    init
}
