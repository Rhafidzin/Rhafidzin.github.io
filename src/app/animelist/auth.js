var client_id = '154477c5fd8a4aaf8d8188ef60ef98ee';
var client_secret = '5dc48e4be80c434496f6fefef7e870a0';

var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };
  var request = new Request(),
  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var token = body.access_token;
    }
    console.log(token)
  });