import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{
          alignItems: 'center',
          cursor: 'pointer',
          marginRight: '20px',
        }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{
            marginRight: '20px',
          }}
          alt='thumbnail'
          src={video.snippet.thumbnails.medium.url}
        />{' '}
        <Typography variant='subtitle1'> {video.snippet.title} </Typography>{' '}
      </Paper>{' '}
    </Grid>
  )
}

export default VideoItem
