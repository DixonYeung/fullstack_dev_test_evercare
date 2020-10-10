var http = require('http');
var memory;
var deleted = {"deletedItem":[]};
 http.createServer(function (req, res) {
 	/*const axios = require('axios');

			axios.get('https://dummyapi.io/data/api/user?limit=10', {headers: { 'app-id': '5f8106ffbede2d0c85bff608' }})
			  .then(response => {
			    res.writeHead(200, {'Content-Type': 'text', 'Access-Control-Allow-Origin':'http://localhost:8080'});
			    res.end(JSON.stringify(response.data));
			});*/
 	if (req.method === 'POST') {
 		const FORM_URLENCODED = 'application/x-www-form-urlencoded';
		if(req.headers['content-type'] === FORM_URLENCODED) {
		    let body = '';
		    req.on('data', chunk => {
		        body += chunk.toString(); // convert Buffer to string
		    });
		    req.on('end', () => {
		    	if(body.includes('requestType=initializeTable')){
		    		//refresh the memory everytime when admin initialize the table
		    		console.log("\n\n\n");
		    		memory ='';
				deleted = {"deletedItem":[]};

		    		const axios = require('axios');

				axios.get('https://dummyapi.io/data/api/user?limit=50', {headers: { 'app-id': '5f8106ffbede2d0c85bff608' }})
				  .then(response => {
				    memory = JSON.stringify(response.data);
				    res.writeHead(200, {'Content-Type': 'text', 'Access-Control-Allow-Origin':'http://localhost:8080'});
				    res.end(memory);
				});
		    	}
		    	else if(body.includes('requestType=delete&id=')){
		    		var id = body.split('requestType=delete&id=')[1];
		    		var json_memory = JSON.parse(memory);
		    		/*console.log(json_memory.data);*/
		    		for(var i = 0; i<json_memory.data.length; i++){
		    			if(json_memory.data[i].id == id){
		    				
		    				deleted['deletedItem'].push(json_memory.data[i]);
		    				delete json_memory.data[i];
		    				res.writeHead(200, {'Content-Type': 'text', 'Access-Control-Allow-Origin':'http://localhost:8080'});
				    		res.end(JSON.stringify(deleted));
				    		console.log(JSON.stringify(deleted));
		    			}
		    		}
		    	}
			
		    });
		}
	}
    	else {

    	}
 	
   	/*response.writeHead(200, {'Content-Type': 'text', 'Access-Control-Allow-Origin':'http://localhost:8080'});
   	response.write(body);
   	response.end();*/
 }).listen(8081);