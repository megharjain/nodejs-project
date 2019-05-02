/* This file creates an instance of the elastic serach client object, given a host and exports it. 
* The host endpoint here is an AWS Elasticsearch domain created by me. 
*/

var elasticsearch = require('elasticsearch')

var client = new elasticsearch.Client( {  
    host: 'https://search-meghaproject-o3lasf4xaudrqjtpiwokjokx6u.us-east-2.es.amazonaws.com',
    log: 'trace'
});

module.exports = client