const healthRouter = require('./health')
const usersRouter = require('./users')


const init = (server) => {
    server.get('/', function (req, res) {
        res.redirect('/health');
    });

    server.use('/health', healthRouter);
    server.use('/users', usersRouter);
}

module.exports = {
    init
}
