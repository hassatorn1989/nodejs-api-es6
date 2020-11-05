import Sequelize from 'sequelize'
import db from './../configs/db'

const product = db.define('product',
    {
        product_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        product_name: {
            type: Sequelize.STRING
        },
        product_price: {
            type: Sequelize.DOUBLE
        }
    },
    {
        tableName: "product"
    }
);

export default product