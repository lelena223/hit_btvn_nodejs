const data = require("../data/data");

const getProduct = (req,res) => {
    console.log(data);
    res.render("product", {
        title: "My product",
        products: data,
    });
};

const getAddProduct = (req, res) => {
    console.log(data);
    res.render("add_product");
};

module.exports = {
    getProduct,
    getAddProduct
}