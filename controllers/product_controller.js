
import product from './../models/product'
class product_controller {
    async index(req, res) {
        await product.findAll()
            .then(response => {
                res.json({
                    status: true,
                    data: response
                });
            }).error(err => {
                res.json({
                    status: false
                })
            });
    }

    async store(req, res) {
        await product.create({
            product_name: req.body.product_name,
            product_price: req.body.product_price,
        }).then(response => {
            res.json({
                status: true,
                data: response
            });
        }).error(err => {
            res.json({
                status: false
            })
        })
    }

    async edit(req, res) {
        await product.findByPk(req.params.id)
            .then(response => {
                res.json({
                    status: true,
                    data: response
                });
            }).error(err => {
                res.json({
                    status: false
                })
            });
    }

    async update(req, res) {
        await product.update({
            product_name: req.body.product_name,
            product_price: req.body.product_price,
        }, {
            where: {
                product_id: req.body.id
            }
        }).then(response => {
            res.json({
                status: true,
                data: response
            });
        }).error(err => {
            res.json({
                status: false
            })
        });
    }


    async destroy(req, res) {
        await product.destroy({
            where: {
                product_id: req.body.id
            }
        }).then(response => {
            res.json({
                status: true,
                data: response
            });
        }).error(err => {
            res.json({
                status: false
            })
        });
    }
}
export default new product_controller();
