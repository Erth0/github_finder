class GitHub {
    constructor() {
        this.OAUTHtoken = '#REPLACETHIS'
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?access_token=${this.OAUTHtoken}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&access_token=${this.OAUTHtoken}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        console.log(repos);
        return {
            profile,
            repos
        }
    }

}
