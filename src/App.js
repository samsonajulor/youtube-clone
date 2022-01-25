import React from 'react'
import { Grid } from '@material-ui/core'
import { SearchBar, VideoList, VideoDetail, Header, Footer} from './components'
import youtube from './api/youtube'
import './index.css'

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search',  {params: {
  part: 'snippet',
  maxResults: 10,
  key: 'AIzaSyBKnBFkKNxLVjD9Nc00j796ev--QLsvtBY',
  q: searchTerm,
 }
})
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
  }
 render (){
   const {selectedVideo, videos} = this.state
  return (
    <div>
      <div>
        <Header />
      </div>
      <Grid justifyContent='center' container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div>
        <Footer />
      </div>
    </div>
  )
 }
}

export default App