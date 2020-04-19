import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
export default function Achievements(props) {
  function Item(props) {
    return (
        <Paper>
          <p style={{
            position: 'absolute',
            top: '15px',
            left: "10px",
            width: '100%',
            /* background: `linear-gradient(to left, blue, red)`,
            WebkitBackgroundClip: "text",
            color: "transparent", */
            color:'#00ffec',
            fontSize: '20px',
            fontWeight:'bold',
            lineHeight: '60px'

          }}>{props.item.description}</p>
          <img src={props.item.file.url} alt="image" style={{ width: "96vw", height: "70vh" }} />
        </Paper>
    )
  }
  return (
    <div id="achievements">
    <Carousel interval={10000} >
      {
        props.data[0].fields.achievementImages.map(item => {
          return <Item item={item.fields} />
        })
      }
    </Carousel>
      </div >
  )
}

