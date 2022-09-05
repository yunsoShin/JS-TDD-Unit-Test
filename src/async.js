function fetchProduct(error) {
  if (error === 'error') {
    return Promise.reject('network ero');
  }
  return Promise.resolve({ item: '', prie: 200 });
}

module.exports = fetchProduct;
