var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      part: 'snippet',
      key: options.key,
      maxResults: options.max
    },
    success: function(data) {
      callback(data);
      console.log('SUCCESS <3');
    },
    error: function () {
      console.error('you f*&#ed up');
    }
  });
};

window.searchYouTube = searchYouTube;
