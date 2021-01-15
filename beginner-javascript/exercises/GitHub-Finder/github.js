class GitHub {
    constructor() {
        this.client_id = '6f56ff930d8ebdec26cf';
        this.client_secret = 'A41b40e40ac937f4dd7863cfaefb2258f1bdc034';
        this.per_page = 3;
        this.sort = 'create: asc';
    }

    // eslint-disable-next-line class-methods-use-this
    async getUsers(username) {
        const profileRes = await fetch(
            `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );
        const profile = await profileRes.json();

        const profileRepos = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=${this.per_page}&sort=${this.sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const repos = await profileRepos.json();
        return { profile, repos };
    }
}