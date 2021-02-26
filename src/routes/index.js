const healthRouter = require('./health')


const init = (server) => {
    server.get('/', function (req, res) {
        res.redirect('/health');
    });

    server.use('/health', healthRouter);
}

module.exports = {
    init
}
