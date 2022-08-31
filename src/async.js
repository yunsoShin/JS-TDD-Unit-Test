function fetchProduct(error) {
  if (error === 'error') {
    return Promise.reject('network eror');
  }
  return Promise.resolve({ item: '', price: 200 });
}

module.exports = fetchProduct;
