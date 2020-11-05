

import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import "regenerator-runtime/runtime";
import routes from './routes/route';

class Server {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(bodyParser.urlencoded({ extended: true }))
        this.server.use(bodyParser.json());
        this.server.use(cors());
        this.server.use(routes);
    }

    routes() {
        const port = 3000;
        this.server.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
        })
    }
}

export default new Server().server;
