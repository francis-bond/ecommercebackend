// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  through: 'ProductTag',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(Product, {
  through: 'ProductTag',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
