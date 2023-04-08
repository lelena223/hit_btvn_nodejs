const Products = require('../model/product.model');

const getProducts = (req, res) => {
    const products = Products.Products();
    return res.json(products)    
}

const getProductById = (req, res) => {
    const products = Products.Products();
    const id = req.params.id;
    const product = products.find((products) => products.id == id);
    console.log(product);
    return res.json(product);
}

const createProduct = (req, res) => {
    const data = req.body;
    const newProduct = new Products(data.id ,data.title, data.price, data.description, data.category, data.image, data.rating);
    newProduct.save();
    return res.json(newProduct);
}

const updateProductById = (req, res) => {
    const products = Products.Products();
    const id = req.params.id;
    const data = req.body;
    const index = products.findIndex((products) => products.id == id);
    const newProduct = new Products(data.id ,data.title, data.price, data.description, data.category, data.image, data.rating);
    products.splice(index, 1, newProduct);
    // products.save();
    return res.json(products);
}

const deleteProductById = (req, res) => {
    const products = Products.Products();
    const id = req.params.id;
    const index = products.findIndex((products) => products.id == id);
    if(index == -1){
        console.log('Ko tim thay doi tuong');
    }
    products.splice(index, 1);
    const data = req.body;
    let newProduct = new Products(data.id ,data.title, data.price, data.description, data.category, data.image, data.rating);
    newProduct.save();
    return res.json(newProduct);
}
  

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById
}