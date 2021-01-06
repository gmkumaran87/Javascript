function handleClick(e) {
    e.preventDefault();

    const number = document.querySelector('.jokes-input').value;
    console.log(number);

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        let output = '';
        if (this.status === 200) {
            const jokes = JSON.parse(this.responseText);

            jokes.value.forEach((element) => {
                output += `<li>${element.joke}</li>`;
            });

            document.querySelector('.jokes').innerHTML = output;
        } else {
            console.log(this.status);
        }
    };
    xhr.send();
}

document.getElementById('submit').addEventListener('click', handleClick);