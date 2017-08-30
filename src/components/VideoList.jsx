class VideoList extends React.Component {

  render(){
    let listEntry = this.props.videos.map( function(video){
      // return <li><h5><em> <VideoListEntry video={video} /> </em> view goes here</h5></li>;
      return <VideoListEntry video={video} key={video.id.videoId}/>;
    });
    return <ul className="video-list"> {listEntry} </ul>;
  }
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
