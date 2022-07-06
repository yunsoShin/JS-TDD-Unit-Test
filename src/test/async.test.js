const fetchs = require('../async.js');

describe('Async',()=>{
    it('',()=>{
        fetchs().then((item)=>{
            expect(item).toEqual({item :'ha' , price:1390});

        });
    });
});