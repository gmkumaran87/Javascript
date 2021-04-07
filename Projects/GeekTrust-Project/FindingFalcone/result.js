console.log('Im here in Result');

let resultTitle = document.querySelector('.result-title');
let resultPlanet = document.querySelector('.result-planet');
const bttn = document.querySelector('.result-home');

const params = new URLSearchParams(window.location.search)

let status = ''
let planetName = '';

for (const param of params) {

    if (param.includes('status')) {
        status = param[1];
    } else {
        planetName = param[1];
    }
}

if (status === 'success') {
    resultTitle.innerHTML = `Success.! Congratulations on Finding Falcone...`;
    resultPlanet.innerHTML = `Planet found - ${planetName}`;
} else if (status === 'false') {
    resultTitle.innerHTML = `Cannot find the Falcone..! Better luck next time..!`;
}

bttn.addEventListener('click', () => window.location = 'index.html');