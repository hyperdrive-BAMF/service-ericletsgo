import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.images !== this.props.images) {
      this.setState({images: this.props.images})
    }
  }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      className: 'carousel'
    };

    return (
      <Slider{...settings} id="carousel">
        {
          this.state.images.map((image) => {
            return (
              <img src={image}  className="image"/>)
          })
        }
      </Slider>
    )
  }
}

export default Carousel;
