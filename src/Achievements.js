import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
export default function Achievements(props) {
  function Item(props) {
    let styleObj={
      mobile:{
        width:"95vw",
        height:'40vh',
      },
      pc:{
        width:"80vw",
        height:'70vh',
      }
    }
    return (
        <Paper style={{margin:'0 auto',width:'fit-content'}}>
         {window.screen.width>400 && <p style={{
            position: 'absolute',
            bottom: '85px',
            // top: '6px',
            // left: "3px",
            // width: '100%',
            margin:'0 -54px',
            /* background: `linear-gradient(to left, blue, red)`,
            WebkitBackgroundClip: "text",
            color: "transparent", */
            color:'#00ff7f',
            fontSize: '20px',
            fontWeight:'bold',
            // lineHeight: '80px',
            writingMode: 'tb-rl',
            transform: 'rotate(180deg)'

          }}>{props.item.description}</p>}
          <img src={props.item.file.url} alt="image" style={window.screen.width>400?styleObj.pc:styleObj.mobile} />
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

