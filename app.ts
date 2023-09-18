import Express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import {GetIndex} from './src/routes/index-routes';
import { GetProduct } from './src/routes/product-routes';
//---------------------------------------------------------------------------

const app = Express();
const port: number = 3333; 
//var ls: Express = app;
//rotas
const indexRoute = GetIndex;
const productRoute = GetProduct;
//---------------------------------------------------------------------------

//ler a requisição em json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//carregando as rotas
app.use('/', indexRoute);
app.use('/products', productRoute);


//ouvindo porta
const server = http.createServer(app);
server.listen(port, () => console.log('servidor rodando na porta 3333'));