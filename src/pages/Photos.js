import React from "react";
import Slider from "react-slick";
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  slider: {
    '& .slick-arrow': {
      zIndex: '1',
      paddingLeft: '50px',
      paddingRight: '70px',
      '&::before': {
        color: 'black',
      }
    }
  },
  image: {
    maxHeight: '80vh',
    maxWidth: '100vw',
    objectFit: 'contain',
  }

});
class Photos extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      fade: true,
      speed: 500,
      lazyLoad: 'progressive',
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const images = this.props.data[0].fields.achievementImages
    return (
      <div style={{ margin: "110px 8px 0px 0px" }}>
        <Slider {...settings}
          className={this.props.classes.slider}>
          {images.map(img =>
            <img src={img.fields.file.url} alt={img.fields.description} data-action={img.fields.file.url}
              className={this.props.classes.image} />
          )}
        </Slider>
      </div>
    );
  }
}
export default withStyles(styles)(Photos) //slick-arrow slick-prev