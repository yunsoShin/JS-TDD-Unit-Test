const fetchs = require('../async.js');

describe('Async',()=>{
    it('',()=>{
        fetchs().then((item)=>{
            expect(item).toEqual({item :'h1' , price:1390});

        });
    });
});