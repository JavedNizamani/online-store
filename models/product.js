const fs = require('fs');
const path = require('path');

const db = require('./index');
const myProducts = db.Products;

module.exports = class Product {
  // constructor(t,i,p,d) {
  //   this.title = t;
  //   this.image = i;
  //   this.price = p;
  //   this.description = d;
  // }

  // save() {
  //   const p = path.join(
  //     path.dirname(process.mainModule.filename),
  //     'data',
  //     'products.json'
  //   );
  //   fs.readFile(p, (err, fileContent) => {
  //     let products = [];

  //     if (!err) {
  //       products = JSON.parse(fileContent);
  //     }
  //     products.push(this);
  //     fs.writeFile(p, JSON.stringify(products), err => {
  //       console.log(err);
  //     });
  //   });

  // }

  // static fetchAll(cb) {
  //   const p = path.join(
  //     path.dirname(process.mainModule.filename),
  //     'data',
  //     'products.json'
  //   );

  //   fs.readFile(p, (err, fileContent) => {
  //     if (err) {
  //       cb([]);
  //     }
  //     // cb(JSON.parse(fileContent));
  //     cb(myProducts.findAll({}))
  //   });
  // }

  static fetchAll = async(cb)=>{          // Modified Version of Code               Dated : 12/11/2023
    cb(await myProducts.findAll({}));     // getting data from DB table 
  }
};



