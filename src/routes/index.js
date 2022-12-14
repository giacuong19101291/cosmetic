const productsRouter = require('./products')
const siteRouter = require('./site')
function route(app) {
    
    app.use('/product',productsRouter)   
    app.use('/',siteRouter)
}

module.exports = route;