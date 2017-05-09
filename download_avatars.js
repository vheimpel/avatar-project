var request = require('request');
var GITHUB_USER = "vheimpel";
var GITHUB_TOKEN = "40b24ddf955eb70bdda4cb2f9368deebcfa33459";


function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
    var options = {
    url: requestURL,
    headers: {
      'User-Agent': 'GitHub Avatar Downloader - Student Project'
    }
  };
  request(options, cb);
}

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    info.forEach(function(user) {
      console.log(user.avatar_url);
    });

  }
}

function downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg") {
}

getRepoContributors("jquery", "jquery", callback)


