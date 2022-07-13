function fetchs(error){
    if(error === 'error'){
        return Promise.reject('network error');
    }
    return Promise.resolve({item :'P' , price:1390});

    
}
module.exports = fetchs;