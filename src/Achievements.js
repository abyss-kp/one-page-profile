import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
export default function Achievements(props) {
  function Item(props) {
    return (
      <div id={"achievements"}>
        <Paper>
          <p style={{
            position: 'absolute',
            top: '15px',
            left: "10px",
            width: '100%',
            background: `linear-gradient(to left, green, yellow, orange, red)`,
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: '20px',
            fontWeight:'bold',
            lineHeight: '60px'

          }}>{props.item.description}</p>
          <img src={props.item.file.url} alt="image" style={{ width: "96vw", height: "70vh" }} />
        </Paper>
      </div >
    )
  }
  return (
    <Carousel interval={10000} >
      {
        props.data[0].fields.achievementImages.map(item => {
          return <Item item={item.fields} />
        })
      }
    </Carousel>
  )
}

