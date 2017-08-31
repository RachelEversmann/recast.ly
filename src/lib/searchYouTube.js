var searchYouTube = (options, callback) => {
  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search",
    type: "GET",
    data: {
      q: "cats",
      part: "snippet",
      key: YOUTUBE_API_KEY,
      maxResults: 5
    },
    success: function(data){
      console.log(data);
    },
    error: function (){
      console.error('you f*&#ed up');
    }
  });
};

window.searchYouTube = searchYouTube;
