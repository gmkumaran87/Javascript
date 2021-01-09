const form = document.querySelector('.form-control');
const profileDisplay = document.querySelector('.profileDisplay');
const button = document.getElementById('find');

console.log(form);

const git = new GitHub();
const ui = new UI();

button.addEventListener('click', profileFinder);

function profileFinder(e) {
    const users = form.value;
    console.log(users);

    if (users !== '') {
        // GET username profile from GitHub
        git.getUsers(users).then((data) => {
            if (data.message !== 'Not Found') {
                // UI call to display profile
                ui.displayProfile(data);
            } else {
                // Show Alert message
                console.log('Here');

                profileDisplay.innerHTML = `<h2 class="alert"> Username ${users} is NOT FOUND...</h2>`;
            }
        });
    } else {
        // Clear the Screen
    }
}