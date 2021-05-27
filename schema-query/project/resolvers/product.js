module.exports = {
  price_with_discount(product) {
    if (product.discount) {
      return product.price * (1 - product.discount);
    } else {
      return product.price;
    }
  },
};
