import express from 'express'
import product from './../controllers/product_controller'

const route = express.Router();

route.get('/', product.index);
route.post('/store', product.store);
route.get('/edit/:id', product.edit);
route.put('/update', product.update);
route.delete('/destroy', product.destroy);
// route.destroy('/update', product.destroy);

export default route;