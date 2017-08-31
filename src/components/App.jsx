class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: this.props.videos,
      current: this.props.videos[0],
      submit: false
    };

    this.linkClicked = this.linkClicked.bind(this);
  }

  linkClicked(e) {
    var ourID = e.dispatchMarker.split('$')[1];
    ourID = ourID.split('.')[0];
    this.setState({current : this.state.videos[ourID]});
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div> <Search /> </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div> <VideoPlayer video={this.state.current} /> </div>
          </div>
          <div className="col-md-5">
            <div> <VideoList videos={this.state.videos}  func = {this.linkClicked}/> </div>
          </div>
        </div>
      </div> );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
