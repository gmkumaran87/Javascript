class UI {
    constructor() {

    }

    showDropDownList(elem, planetArr) {
        elem.innerHTML = ``;

        for (let i = 0; i < planetArr.length; i++) {
            elem.innerHTML += `<option value = ${planetArr[i]}></option>`;
        }


    }

    showRadioButton(currEl, planet, vehicles) {

        const newVehicles = vehicles.filter(el => {
                return el.max_distance >= planet.distance;
            })
            /*console.log(currEl);/
            console.log(newVehicles);
            console.log(`vh-${currEl.name}`);*/

        let form = document.getElementById(`vehicle-${currEl.name}`).firstElementChild


        form.innerHTML = '';
        newVehicles.forEach(el => {
            let n = el.name.split(' ').map(e => {
                return e.charAt(0).toUpperCase() + e.slice(1);
            }).join('');

            let n1 = el.name.split(' ').map(e => {
                return e.charAt(0).toUpperCase() + e.slice(1);
            }).join(' ');

            console.log(n);

            form.innerHTML += `<label for="${currEl.name}-${n}" class="radio-btn">
                    <input type = "radio" id="${currEl.name}-${n}" name="${currEl.name}-vehicles"> ${n1} (${el.total_no}) </label>`;

        })

    }


}