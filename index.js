const restify = require('restify');
const routes = require('./routes/');

const server = restify.createServer({
    name: 'particle-photon-tic-tac-toe',
    formatters: {
        'application/json': function (req, res, body, cb) {
            res.setHeader('Cache-Control', 'must-revalidate');
            // Does the client *explicitly* accepts application/json?
            const sendText = (req.header('Accept').split(/, */).indexOf('application/json') === -1);
            // Send as plain text
            if (sendText) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            }
            // Send as JSON
            if (!sendText) {
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
            }
            return cb(null, JSON.stringify(body));
        },
    },
});

server.use(restify.bodyParser({ mapParams: false }));
server.use(restify.queryParser());
server.use(restify.gzipResponse());
server.pre(restify.pre.sanitizePath());

routes(server);

console.log('Server started.');
server.listen(5000, () => {
    console.log('%s listening at %s', server.name, server.url);
});

