"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", 
    
    [
      {
          login: "pu-erh",
          id: "1437676",
          node_id: "MDQ6VXNlcjE0Mzc2NzY=",
          avatar_url: "https://avatars3.githubusercontent.com/u/1437676?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/pu-erh",
          html_url: "https://github.com/pu-erh",
          followers_url: "https://api.github.com/users/pu-erh/followers",
          following_url: "https://api.github.com/users/pu-erh/following{/other_user}",
          gists_url: "https://api.github.com/users/pu-erh/gists{/gist_id}",
          starred_url: "https://api.github.com/users/pu-erh/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/pu-erh/subscriptions",
          organizations_url: "https://api.github.com/users/pu-erh/orgs",
          repos_url: "https://api.github.com/users/pu-erh/repos",
          events_url: "https://api.github.com/users/pu-erh/events{/privacy}",
          received_events_url: "https://api.github.com/users/pu-erh/received_events",
          type: "User",
          site_admin: "false",
          name: "Makiboto",
          company: "Mhirba",
          blog: "https://mhirba.com",
          location: "Paris, Tokyo",
          email: "null",
          hireable: "true",
          bio: "Enthusiast cat/squirrel developer",
          twitter_username: "null",
          public_repos: "14",
          public_gists: "0",
          followers: "14",
          following: "0",
          created_at: "2012-02-14T19:23:26Z",
          updated_at: "2020-12-07T08:50:32Z"
      }
    ]
    
    );
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};