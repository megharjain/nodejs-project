# nodejs-project
 
This is a small project to demostrate the use of the elasticsearch module in node.js and carry out simple interactions with an Elasticsearchc databse that I created using AWS. This project can establish and ping an AWS elasticsearch server, load a JSON file pertaining to Nobel prize data from a public dataset URL, push retrieved documents to elasticsearch, delete a document by id and display the results of two types of queries.

Files : 
1. load.js : Script to load a JSON file containing data pertaining to all the Nobel Prizes given from 1901 - 2018. This pubic dataset was obtained from the following URL : 'http://api.nobelprize.org/v1/prize.json'. The data retrieved is stored in a file named nobel-prize.json. 

2. first.js : This is the main entry point and contains functions to ping an Elasticsearch server, push data onto it, delete a document, and display the results of two sample kinds of queries. These functions can be called as required for testing. 

3. connection.js : This file establishes a connection with an Elasticsearch client and exports the client object. In this case, the host URL endpoint is my AWS domain that contains the Elasticsearch database. 

4. createIndex.js : This file creates an index called 'nobel' in which to store the Nobel prize data/documents. 

5. package.json : Contains essentail metadata about the project and its required dependencies which need to be installed using npm init. 








 
