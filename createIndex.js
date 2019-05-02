var client = require('./connection.js')

/* 
* Create an index for a dataset of Nobel Prizes given from 1901-2018.
*/
client.indices.create({
    index : 'nobel'
}, (error, response) => {
    if (error){
        console.log(error);
    }
    else {
        console.log("Result of create:", response)
    }
        
});

