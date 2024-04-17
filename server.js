import Fastify from "fastify";

const fastify = Fastify({
    logger: true
})

fastify.get('/', function (req, resp) {
    resp.send({name: 'Hello Antsa Fiderana'})
})

fastify.listen({port: 3000}, function (err, adress) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})