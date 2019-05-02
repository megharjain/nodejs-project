/* Author : Megha Jain*/


var client = require('./connection.js');
var events = require('events')
var elasticsearch = require('elasticsearch');
var fs = require('fs')

/*
* Ping the elasticsearch server to see if it's up, otherwise print an error.
*/

client.ping(function (error) {
  if (error) {
    console.log('Uh oh, ES server is down!');
  } else {
    console.log('ES server works!');
  }
});


/*
* Open Nobel prize dataset file generated by load.js.
*
*/ 

fileData  = fs.readFileSync('nobel-prize.json');
jsonData = JSON.parse(fileData);


/*
* Load each Nobel prize document to ElasticSearch. 
*
*/

var push = function (){
    
    dataArray = jsonData.prizes;
    
    var i;
    
    for (i = 0; i < dataArray.length; i++)
    {
        requestObj = {
            index : 'nobel',
            id : i + 1,
            type : 'prizes',
            body : dataArray[i]
            
        }
        
        client.index(requestObj, (error, response, status) => {
            if (error)
            {
                console.log(error)
            }
            else
            {
                console.log(response)
            }
        })
    }
    
};

/*
* Function to delete a document given its id. 
*/

var deleteDoc = function (deleteID){
    
    client.delete({index: 'nobel', id: deleteID,  type: 'prizes'}, (error, response, status) => {
        if (error)
        {
            console.log(error)
        }
        else
        {
            console.log(response)
        }
    })
};

/*
* Function to display all noble prizes of a given categry (subject). 
*/

var displayByCategory = function(categoryName) {
    
    queryObj = {
        index : 'nobel',
        type : 'prizes',
        body: {
            query: {
                match: {
                    category : categoryName,
                } 
            }
        }
    }
    
    client.search(queryObj, (error, response, status) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log(response);
        }
    })
};


/*
* Function to display the results of a multifield match query, in this matching the year and category fields. 
*/ 

var displayMultiField = function (field, year){
    queryObj = {
        index : 'nobel',
        type : 'prizes',
        body: {
            query: {
                bool: {
                    must : [
                        { match : { category : field} },
                        { match : { year: year } }
                    ]
                } 
            }
        }
    }
    
    console.log(queryObj)
    client.search(queryObj, (error, response, status) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(response)
        }
    
    } )
};

// Examples tests:
// push();
//displayByCategory('physics');
//displayMultiField('physics', '2016');












