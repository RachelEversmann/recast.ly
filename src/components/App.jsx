class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: defaultVideos,
      current: defaultVideos[0]
    };

    this.options = {
      key: YOUTUBE_API_KEY,
      query: 'cats',
      max: 5
    };

    this.linkClicked = this.linkClicked.bind(this);
    this.searchCallBack = this.searchCallBack.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

  }

  componentDidMount() {
    this.props.searchYouTube({query: 'cats', key: YOUTUBE_API_KEY, max: 5}, this.searchCallBack);
  }

  linkClicked(e) {
    var ourID = e.dispatchMarker.split('$')[1];
    ourID = ourID.split('.')[0];
    this.setState({current: this.state.videos[ourID]});
  }

  submitHandler(e) {
    this.options.query = e.target.value;
    this.props.searchYouTube(this.options, this.searchCallBack);
  }

  searchCallBack(videos) {
    if (videos) {
      this.setState({videos: videos, current: videos[0]});
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search func={this.submitHandler}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.current} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} func = {this.linkClicked}/>
          </div>
        </div>
      </div> );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

var defaultVideos = [{
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/Ykxo_CqKu8F8kcm-iNgL332gQTY',
  id: {
    kind: 'youtube#video',
    videoId: '4ZAEBxGipoA'
  },
  snippet: {
    publishedAt: '2015-08-02T20:52:58.000Z',
    channelId: 'UCJbPGzawDH1njbqV-D5HqKw',
    title: 'React JS Tutorial for Beginners - 1 - Introduction',
    description: 'My website - https://www.thenewboston.com/videos.php Have questions about the tutorial or React? Ask them here ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: 'thenewboston',
    liveBroadcastContent: 'none'
  }
}];
