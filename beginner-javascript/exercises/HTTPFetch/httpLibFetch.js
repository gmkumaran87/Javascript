// eslint-disable-next-line no-unused-vars
class HTTPFetch {
    // GET Method for API
    // eslint-disable-next-line class-methods-use-this
    get(url) {
        return fetch(url)
            .then((response) => {
                // console.log(response);
                if (response.ok) return response.json();
                throw Error(`Failed to fetch server responded with ${response.status}`);
            })
            .then((data) => data)
            .catch((err) => err);
    }

    // eslint-disable-next-line class-methods-use-this
    post(url, data) {
        return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .then((resData) => resData)
            .catch((err) => err);
    }

    put(url, data) {
        return fetch(url, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => err);
    }

    delete(url) {
        return fetch(url, { method: 'DELETE', headers: { 'Content-type': 'application/json' } })
            .then((res) => res.json())
            .then((data) => 'Resource Deleted..')
            .catch((err) => err);
    }
}