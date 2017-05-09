var request = require('request');
var fs = require('fs');
var GITHUB_USER = "vheimpel";
var GITHUB_TOKEN = "40b24ddf955eb70bdda4cb2f9368deebcfa33459";
var userUrl = "";
var userLogin = "";


function downloadImageByURL(url, userName) {
  request.get(url)
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
       })
       .pipe(fs.createWriteStream(`avatars/${userName}.jpg`));
}

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
      userAvatarUrl = user.avatar_url
      userLogin = user.login
      downloadImageByURL(userAvatarUrl, userLogin)
    });

  }
}

getRepoContributors("jquery", "jquery", callback)



