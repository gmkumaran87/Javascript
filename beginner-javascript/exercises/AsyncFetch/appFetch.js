const http = new HTTPFetch();

// User Data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com',
};

const newData = {
    userId: 10,
    id: 1,
    title: 'Muthukumaran',
    body: 'Sample Body test message',
};
http.get('https://jsonplaceholder.typicode.com/posts/')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

http.post('https://jsonplaceholder.typicode.com/posts/', newData)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));