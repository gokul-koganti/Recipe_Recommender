import React from 'react';
import '../video.css';
import youtube from '../apis/youtube';

// const VideoURL = async (recipeName) => {
//     const response = await youtube.get('/search', {
//         params: {
//             q: "aloo"
//         }
//     })
//     const url = "https://www.youtube.com/watch?v=";
//     const youtubeURL = '{${url}${response.data.items[0].video.id.videoId}';
//     return <a href={'https://www.youtube.com/watch?v='+response.data.items[0].id.videoId}>click me</a>;
// }

class VideoURL extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            recipeName: this.props.getRecipeVideo,
            videoId : null
        }
    }
     getRecipeVideo = async (recipeName) => {
      const response = await youtube.get('/search', {
          params: {
              q: 'Masala Karela Recipe'
          }
      })
      this.setState({
        videoId: response.data.items[0].id.videoId
      })
  }
    render(){
        this.getRecipeVideo();
        return(
            <a href={'https://www.youtube.com/watch?v='+this.state.videoId}>click me</a>

        )
    }
}

export default VideoURL;