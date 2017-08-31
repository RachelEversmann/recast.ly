var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      part: 'snippet',
      key: options.key,
      maxResults: options.max,
      videoEmbeddable: 'true',
      type: 'video'
    },
    success: function(data) {
      callback(data.items);
      console.log('SUCCESS <3');
    },
    error: function () {
      console.error('you f*&#ed up');
    }
  });
};

window.searchYouTube = searchYouTube;
