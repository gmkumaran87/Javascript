console.log('Im here')
const toggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')


function transition(e) {
    console.log(e.currentTarget)
    links.classList.toggle('show-links');
}


toggle.addEventListener('click', transition);

const inputList = document.querySelectorAll('.inputPlanet');

const http = new HttpFetch();
const ui = new UI();
// Storing the Planet List
let initialPlanets = [];
let planet_details = [];
let vehicles_details = [];

// Storing the list of values selected from the Drop Down list.
let selectedValues = {};


// Getting the Planets details
const planets = http.get('https://findfalcone.herokuapp.com/planets').then(data => {

    data.forEach(element => {
        planet_details.push(element);
        initialPlanets.push(element.name);
    });

    // Displaying the Planets in the Dropdown list
    inputList.forEach(list => {
        const dropId = list.list;
        ui.showDropDownList(dropId, initialPlanets);
    })
});


// Getting the Vehicles
const vehicles = http.get('https://findfalcone.herokuapp.com/vehicles').then(res => {
    res.forEach(e => {
        vehicles_details.push(e);
    })

});


// Getting the Token
/*const apiToken = http.post('https://findfalcone.herokuapp.com/token', {}).then(res => {

    const inputData = { token: res.token, planet_names: ["Jebing", "Sapir", "Donlon", "Enchai"], vehicle_names: ["Space pod", 'Space rocket', 'Space ship', 'Space shuttle'] };
    // Finding the Al Falcone
    const finalResult = http.post('https://findfalcone.herokuapp.com/find', inputData).then(1 == 1)
});*/


function updateDropDown(e) {
    let currentList = [];
    let otherList = [];

    const currElem = e.currentTarget;
    const currDataList = e.currentTarget.list;
    const selectedPlanet = e.currentTarget.value;


    selectedValues[currElem.name] = selectedPlanet;


    otherList = initialPlanets.filter(e => {

        return e !== selectedPlanet && !Object.values(selectedValues).includes(e);
    });

    currentList.push(selectedPlanet, ...otherList);


    const currPlanet = planet_details.find(e => {
        return e.name === selectedPlanet

    });


    // Update the Planets in the Dropdown list based on the selection
    inputList.forEach(list => {
        const dropId = list.list;

        if (list.id === currElem.id) {
            ui.showDropDownList(dropId, currentList);
        } else {
            ui.showDropDownList(dropId, otherList);
        }

    })

    // Updating the Vehicle Radio buttons based on the Planet selected
    ui.showRadioButton(currElem, currPlanet, vehicles_details);

}

function btnClick(e) {
    console.log(e.currentTarget);
}
inputList.forEach(elem => {
    elem.addEventListener('change', updateDropDown);
})

const radioBtns = document.querySelectorAll("input[type=radio]")

radioBtns.forEach(radio => {
    radio.addEventListener('change', btnClick);
});

console.log(radioBtns);