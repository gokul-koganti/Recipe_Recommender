import React from 'react';
import '../video.css';
import youtube from '../apis/youtube';

//VideoURL Componenet takes recipeName and finds a youtube video of that recipe
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
              q: recipeName
          }
      })
      this.setState({
        videoId: response.data.items[0].id.videoId
      })
    }

    render(){
        this.getRecipeVideo(this.props.recipe);
        return(
            <a href={'https://www.youtube.com/watch?v='+this.state.videoId}>click me</a>

        )
    }
}

export default VideoURL;