(function() {

	if(!(localStorage.getItem("APP_ID") && localStorage.getItem("API_KEY") && localStorage.getItem("API_HOST"))){
		var err = "Please set configuration vars by visiting config.html in a browser";
		alert(err)
	}

	const ParseObjectType = function(objName) {
	  const apiHost = localStorage.getItem("API_HOST");
	  this.headers = {
	    'X-Parse-Application-Id': localStorage.getItem("APP_ID"),
	    'X-Parse-REST-API-Key': localStorage.getItem("API_KEY"),
	    'Content-Type': 'application/json'
	  }
	  this.objName = objName;
	  this.baseUrl = `${apiHost}/parse/classes/${objName}`;
	};

	ParseObjectType.prototype.getAll = function(onGet) {
	  var request = new XMLHttpRequest();
	  request.open("GET", this.baseUrl, true);
	  for(var header in this.headers){
	    request.setRequestHeader(header, this.headers[header]);
	  }
	  request.send();
	  request.onload = function(){
	    if(this.status >= 200 && this.status < 400){
	      parseResponse(this.response, onGet);
	    } else {
	      onGet(this.response);
	    }
	  }
	  request.onerror = function(e){
	    throw new Error(e);
	  }
	};

	ParseObjectType.prototype.get = function(id, onGet) {
	  const requestUrl = `${this.baseUrl}/${id}`;
	  var request = new XMLHttpRequest();
	  request.open("GET", requestUrl, true);
	  for(var header in this.headers){
	    request.setRequestHeader(header, this.headers[header]);
	  }
	  request.send();
	  request.onload = function(){
	    if(this.status >= 200 && this.status < 400){
	      parseResponse(this.response, onGet);
	    } else {
	      onGet(this.response);
	    }
	  }
	  request.onerror = function(e){
	    throw new Error(e);
	  }
	};

	ParseObjectType.prototype.create = function(props, onCreate) {
	  var request = new XMLHttpRequest();
	  request.open("POST", this.baseUrl, true);
	  for(var header in this.headers){
	    request.setRequestHeader(header, this.headers[header]);
	  }
	  request.send(JSON.stringify(props));
	  request.onload = function(){
	    if(this.status >= 200 && this.status < 400){
	      parseResponse(this.response, onCreate);
	    } else {
	      onCreate(this.response);
	    }
	  }
	  request.onerror = function(e){
	    throw new Error(e);
	  }
	};

	ParseObjectType.prototype.update = function(objId, props, onUpdate) {
	  var request = new XMLHttpRequest();
	  request.open("PUT", this.baseUrl + '/' + objId, true);
	  for(var header in this.headers){
	    request.setRequestHeader(header, this.headers[header]);
	  }
	  request.send(JSON.stringify(props));
	  request.onload = function(){
	    if(this.status >= 200 && this.status < 400){
	      parseResponse(this.response, onUpdate);
	    } else {
	      onUpdate(this.response);
	    }
	  }
	  request.onerror = function(e){
	    throw new Error(e);
	  }
	};

	ParseObjectType.prototype.remove = function(objId, onRemove) {
	  var request = new XMLHttpRequest();
	  request.open("DELETE", this.baseUrl + '/' + objId, true);
	  for(var header in this.headers){
	    request.setRequestHeader(header, this.headers[header]);
	  }
	  request.send();
	  request.onload = function(){
	    if(this.status >= 200 && this.status < 400){
	      onRemove(null, { message: `Successfully deleted object ${objId}` });
	    } else {
	      onRemove(this.response);
	    }
	  }
	  request.onerror = function(e){
	    throw new Error(e);
	  }
	};

	function parseResponse(body, callback) {
	  try {
	    const data = JSON.parse(body);
			if (data.results) {
				callback(null, data.results);
			} else {
				callback(null, data);
			}
	  } catch(e) {
	    console.error(e.stack);
	    callback(Error(`An error occured while parsing response: ${e.message}`));
	  }
	}

	window.ParseObjectType = ParseObjectType;

})();
