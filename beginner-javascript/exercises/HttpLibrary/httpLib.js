function HTTPLib() {
    this.http = new XMLHttpRequest();
}

HTTPLib.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    this.http.onload = function() {
        if (this.status === 200) {
            console.log(this);
            console.log('INSIDE ONLOAD');
            callback(this.responseText);
        }
        console.log(this.status);
    };
    console.log('Calling SEND');
    this.http.send();
};

HTTPLib.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = function() {
        callback(null, this.responseText);
    };

    this.http.send(JSON.stringify(data));
};

HTTPLib.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = function() {
        callback(null, this.responseText);
    };

    this.http.send(JSON.stringify(data));
};

HTTPLib.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);

    this.http.onload = function() {
        if (this.status === 200) {
            callback(null, 'Post delete');
        } else {
            callback(`Error:${this.status}`);
        }
    };
    console.log('Calling SEND');
    this.http.send();
};