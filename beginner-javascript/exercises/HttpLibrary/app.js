const http = new HTTPLib();

/* http.get('https://jsonplaceholder.typicode.com/posts1', function(err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
}); */

// JS Object which will be update
const obj = { title: 'Sample Title', body: 'This is custom body message' };

// POST method for updating via API
/* http.post('https://jsonplaceholder.typicode.com/posts', obj, function(err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
}); 

http.put('https://jsonplaceholder.typicode.com/posts/5', obj, function(err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
}); */

// DELETE method
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});