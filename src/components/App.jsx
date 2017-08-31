class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: this.props.videos,
      current: this.props.videos[0],
      submit: false
    };

    this.linkClicked = this.linkClicked.bind(this);
    this.searchCallBack = this.searchCallBack.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  linkClicked(e) {
    var ourID = e.dispatchMarker.split('$')[1];
    ourID = ourID.split('.')[0];
    this.setState({current: this.state.videos[ourID]});
  }

  submitHandler(e) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: e.target.value,
      max: this.props.max
    };
    searchYouTube(options, this.searchCallBack);
  }

  searchCallBack(data) {
    this.setState({videos: data.items, current: data.items[0]});
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
