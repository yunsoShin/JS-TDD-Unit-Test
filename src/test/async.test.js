const fetchProduct = require('../async');

test('error',()=>{
  expect(fetchProduct('error').then()).rejects.toEqual('error');
})

test('succese',()=>{
  expect(fetchProduct()).resolves.toEqual({item:'Milk',price:'200'});
})