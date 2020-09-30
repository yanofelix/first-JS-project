const sequence = {
    _id: 1,
    get id(){
        return this._id++
    }
}

const produtos = {}

function saveProduct(product) {
    if(!product.id) product.id = sequence.id
    produtos[product.id] = product
    return product
}

function getProduct(id){
    return produtos[id] || {}
}

function getProducts(){
    return Object.values(produtos)
}

module.exports = {saveProduct, getProduct, getProducts}