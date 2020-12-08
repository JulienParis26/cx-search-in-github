'use strict';
module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      
    login: {
        type: Sequelize.STRING,
        allowNull: true
    },
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: true
    },
    node_id: {
        type: Sequelize.STRING,
        allowNull: true 
    },
    avatar_url: {
        type: Sequelize.STRING,
        allowNull: true
    },
    gravatar_id: {
        type: Sequelize.STRING,
        allowNull:true
    },
    url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    html_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    followers_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    following_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    gists_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    starred_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    subscriptions_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    organizations_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    repos_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    events_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    received_events_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    type: {
        type: Sequelize.STRING,
        allowNull:true
    },
    site_admin: {
        type: Sequelize.STRING,
        allowNull:true
    },
    name: {
        type: Sequelize.STRING,
        allowNull:true
    },
    company: {
        type: Sequelize.STRING,
        allowNull:true
    },
    blog: {
        type: Sequelize.TEXT,
        allowNull:true
    },
    location: {
        type: Sequelize.STRING,
        allowNull:true
    },
    email: {
        type: Sequelize.STRING,
        allowNull:true
    },
    hireable: {
        type: Sequelize.STRING,
        allowNull:true
    },
    bio: {
        type: Sequelize.TEXT,
        allowNull:true
    },
    twitter_username: {
        type: Sequelize.STRING,
        allowNull:true
    },
    public_repos: {
        type: Sequelize.STRING,
        allowNull:true
    },
    public_gists: {
        type: Sequelize.STRING,
        allowNull:true
    },
    followers: {
        type: Sequelize.STRING,
        allowNull:true
    },
    following: {
        type: Sequelize.STRING,
        allowNull:true
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull:true
    },
    updated_at: {
        type: Sequelize.DATE,
        allowNull:true
    }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};