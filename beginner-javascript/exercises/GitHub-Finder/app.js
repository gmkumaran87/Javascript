const form = document.querySelector('.form-control');
const profileDisplay = document.querySelector('.profileDisplay');
const button = document.getElementById('find');

console.log(form);

const git = new GitHub();
const ui = new UI();

// Event Listeners
document.body.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        profileFinder();
    }
});

button.addEventListener('click', profileFinder);

function profileFinder(e) {
    const users = form.value;

    if (users !== '') {
        // GET username profile from GitHub
        git.getUsers(users).then((data) => {
            if (data.profile.message !== 'Not Found') {
                // UI call to display profile
                ui.displayProfile(data.profile);

                // Show Repositories of the User
                ui.showRepos(data.repos);
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