const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
<<<<<<< HEAD
    
=======
>>>>>>> 03889cc (Ajout de la section panier)
    getProductsFromFile(products => {
      if (this.id) {
        const existingProductIndex = products.findIndex(prod => prod.id === this.id);
        const updatedProducts = [...products];
<<<<<<< HEAD
        updatedProducts [existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        console.log(err);
      });
=======
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
          console.log(err);
        });
>>>>>>> 03889cc (Ajout de la section panier)
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      }
<<<<<<< HEAD
      
=======
>>>>>>> 03889cc (Ajout de la section panier)
    });
  }

  static deleteById(id) {
    getProductsFromFile(products => {
      const updatedProducts = products.filter(prod => prod.id !== id);
      fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        if (!err) {
<<<<<<< HEAD

        }
      })
=======
          console.log('Product deleted');
        }
      });
>>>>>>> 03889cc (Ajout de la section panier)
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    });
  }
<<<<<<< HEAD
};
=======
};
>>>>>>> 03889cc (Ajout de la section panier)
