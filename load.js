var events = require('events')
var elasticsearch = require('elasticsearch');
var request = require('request');
var content = new events.EventEmitter()
var fs = require('fs');

var url = 'http://api.nobelprize.org/v1/prize.json'

request(url, (error, response, data) => {
    if (error) {
        console.log(error)
    }
    else
    {
        content.data = data;
        content.emit('DoneFetching');
        
    }
    
});

content.on('DoneFetching', () => {
    console.log("Done fetching data, ready to load to ES!");
    console.log(Object.prototype.toString.apply(content.data))
    var toWrite = JSON.parse(content.data);  
    
    fs.writeFileSync('nobel-prize.json', content.data); 
});


