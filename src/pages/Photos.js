import React from 'react'
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
export default function Photos(props) {
  const fn = function () {
    /* do your action */
    console.log("*****")
  }
  const images = props.data[0].fields.achievementImages
  console.log(props.data[0].fields.achievementImages)
  return (
    <div style={{ margin: "110px 8px 0px 8px" }}>
      <StyleRoot>
        <Coverflow width="960" height="500"
          displayQuantityOfSide={2}
          navigation ={true}
          enableScroll={true}
          infiniteScroll={true}
          clickable={true}
          enableHeading
          active={5}
          currentFigureScale={1.5}
          otherFigureScale={0.8}
          media={{
            '@media (max-width: 900px)': {
              width: '600px',
              height: '300px'
            },
            '@media (min-width: 900px)': {
              width: '960px',
              height: '600px'
            }
          }}
        >
          {/* <div
            onClick={() => fn()}
            onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
          >
            <img
            src='image/path'
            alt='title or description'
            style={{
              display: 'block',
              width: '100%',
            }}
          />
          </div> */}
          {images.map(img =>
            <img src={img.fields.file.url} alt={img.fields.description} data-action={img.fields.file.url} />
          )}
        </Coverflow>
      </StyleRoot>
    </div>
  )
}
