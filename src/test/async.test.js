const fetchs = require('../async.js');

describe('Async',()=>{
    it('',()=>{
        fetchs().then((item)=>{
            expect(item).toEqual({item :'hd' , price:1390});

        });
    });
});