const form = document.querySelector('.form-control');
const profileDisplay = document.querySelector('.profileDisplay');
const button = document.getElementById('find');

console.log(form);

const git = new GitHub();
const ui = new UI();

button.addEventListener('click', profileFinder);

function profileFinder(e) {
    const users = form.value;

    if (users !== '') {
        // GET username profile from GitHub
        git.getUsers(users).then((data) => {
            if (data.message !== 'Not Found') {
                // UI call to display profile
                ui.displayProfile(data);
            } else {
                // Show Alert message
                ui.showAlert('User does not found in GitHub...', 'alert');
            }
        });
    } else {
        // Clear the Screen
        ui.clearProfile();
    }
}