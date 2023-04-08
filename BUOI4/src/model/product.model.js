const products = require('./db.json')

const fs = require('fs');

const path = require('path');

const saveNewProduct = (data) => {
  fs.writeFile(path.join(__dirname,'./db.json') , JSON.stringify(data),  (err) => {
    if(err){
      console.log(err);
    }
  })
}

class Product {
  constructor(id, title, price, description, category , image, rating){
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.rating = rating;
  }
  save() {
  products.push(this);
  saveNewProduct(products)
  console.log(products);
  }

  static Products() {
    return products;
  }
}

module.exports = Product;

