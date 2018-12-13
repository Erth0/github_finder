// Inst GitHub Class
const github = new GitHub;
// Inst UI Class
const ui = new UI;

// Search Input
const searchUser = document.getElementById('search-user');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    // Check if usert text is not empty
    if (!userText == '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message == 'Not Found') {
                    // Show Alert
                    ui.showAlert('User not found!', 'alert alert-danger');
                }else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        //Clear Profile
        ui.clearProfile();
    }
});
