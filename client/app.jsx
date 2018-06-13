import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import GameDescription from './components/GameDescription.jsx'
import CarouselSlot from './components/Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameId: '1',
      name: null,
      description: null,
      videoURL: null,
      mainImageURL: null,
      logoURL: null,
      carouselImagesURL: [],
      recentReviews: null,
      allReviews: null,
      releaseDate: null,
      developer: null,
      publisher: null,
      tags: [],
      slideIndex: 1
    }
    this.fetchGame = this.fetchGame.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
    this.showSlides = this.showSlides.bind(this);
  }

  componentDidMount() {
    this.setState({gameId: this.getRandomInt().toString()}, () => {
      this.fetchGame(this.state.gameId);
    });
  }

  getOrder(itemIndex) {
    const position = this.state.position;
    const { children } = this.props
    const numItems = this.state.carouselImagesURL.length || 1

    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position)
    }
    return itemIndex - position
  }

  changeImage(event) {
    this.setState({mainImageURL: event})
  }

  showSlides(n) {
    var slides = document.getElementsByClassName("image-holder");
    console.log(slides)

    if (n > slides.length) {
      this.setState({slideIndex: 1});
    }
    if (n < 1) {
      this.setState({slideIndex: slides.length});
    }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[this.state.slideIndex-1].style.display = "block";
  }

  slideLeft(n) {
    let currentIndex = this.state.slideIndex;

    this.showSlides(this.state.slideIndex - 1);
    this.setState({slideIndex: currentIndex - 1});
  }

  slideRight(n) {
    let currentIndex = this.state.slideIndex;

    this.showSlides(this.state.slideIndex + 1);
    this.setState({slideIndex: currentIndex + 1})
  }

  getRandomInt() {
    return Math.floor(Math.random() * (100)) + 1;
  }

  fetchGame(gameId) {
    axios.get(`/${gameId}`)
      .then((data) => {
        const gameData = data.data[0];

        //for testing only
        let carouselArray = [];
        for (var i = 0; i < 15; i++) {
          carouselArray.push(gameData.carouselImagesURL);
        };

        //for testing only
        let tagsArray = [];
        for (var i = 0; i < 3; i++) {
          tagsArray.push(gameData.tags);
        }

        this.setState({
          name: gameData.name,
          description: gameData.description,
          videoURL: gameData.videoURL,
          mainImageURL: gameData.mainImageURL,
          logoURL: gameData.logoURL,
          carouselImagesURL: carouselArray,
          recentReviews: gameData.recentReviews,
          allReviews: gameData.allReviews,
          releaseDate: gameData.releaseDate,
          developer: gameData.developer,
          publisher: gameData.publisher,
          tags: tagsArray
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="background">
          <div className="app_name">{this.state.name}</div>
          <div className="container">
            <div className="flex-item images">
              <img className="image" src={this.state.mainImageURL} />
              <div className="carousel container">
                {this.state.carouselImagesURL.map((image, index) => <CarouselSlot key={index} image={image} changeImage={this.changeImage}/>)}
              </div>
            </div>
            <div className="flex-item description">
              <GameDescription description={this.state.description} descriptionImage={this.state.descriptionImage}
                tags={this.state.tags} logoURL={this.state.logoURL} recentReviews={this.state.recentReviews}
                allReviews={this.state.allReviews} releaseDate={this.state.releaseDate} developer={this.state.developer}
                publisher={this.state.publisher}
              />
            </div>
          </div>
        </div>
      </div>)
  }
}

export default App;
