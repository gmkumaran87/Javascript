class UI {
    constructor() {
        this.profile = document.querySelector('.profileDisplay');
    }

    displayProfile(data) {
        console.log(data);

        this.profile.innerHTML = `<div class="card card-body" style="width:100%">
        <div class="row">
          <div class="col-md-3">
          <div class="card">
          <div class="card-body">
              <img class= "img-fluid" src="${data.avatar_url}" style="display:block">
              <a href="${data.html_url}" class="btn btn-primary" style="margin: 20px 0">View ProfileS</a>
        </div>
        </div>
        </div>
        <div class="col-md-9">
          <div class="card">
            <div class="card-body">
              <span class ="btn btn-primary"> Public Repos: ${data.public_repos} </span>
              <span class ="btn btn-primary"> Public Gists: ${data.public_gists} </span>
              <span class ="btn btn-primary"> Followers: ${data.followers} </span>
              <span class ="btn btn-primary"> Following: ${data.following} </span>
              <br></br>
              <ul class="list-group">
    <li class="list-group-item">Company: ${data.company}</li>
  <li class="list-group-item">Website/Blogs: Company: ${data.blog}</li>
  <li class="list-group-item">Location: ${data.location}</li>
  <li class="list-group-item">Member Created since: ${data.created_at} </li>
</ul>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div class="card" style="width:100%;margin: 40px auto">
      <div class="card-header">
      <h2> List of Repositories</h2>
      </div>
      <div class="card-body"></div>
      </div>`;
    }
}