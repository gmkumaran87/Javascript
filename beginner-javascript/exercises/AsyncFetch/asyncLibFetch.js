// eslint-disable-next-line no-unused-vars
class HTTPFetch {
    // GET Method for API
    // eslint-disable-next-line class-methods-use-this
    async get(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    // eslint-disable-next-line class-methods-use-this
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data),
        });
        const resData = await response.json();
        return resData;
    }

    // eslint-disable-next-line class-methods-use-this
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data),
        });
        const resData = await response.json();
        return resData;
    }

    // eslint-disable-next-line class-methods-use-this
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' },
        });
        const resData = await 'Resource Deleted...';
        return resData;
    }
}