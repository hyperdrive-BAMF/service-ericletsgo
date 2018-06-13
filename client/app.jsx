import React from 'react';
import axios from 'axios';

import GameDescription from './components/GameDescription.jsx';
import CarouselSlot from './components/Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameId: this.getRandomInt().toString(),
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
    };
    this.fetchGame = this.fetchGame.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }

  componentDidMount() {
    this.fetchGame(this.state.gameId);
  }

  getRandomInt() {
    return Math.floor(Math.random() * (100)) + 1;
  }

  changeImage(event) {
    this.setState({ mainImageURL: event });
  }

  fetchGame(gameId) {
    axios.get(`/${gameId}`)
      .then((data) => {
        const gameData = data.data[0];

        // for testing only
        const carouselArray = [];
        for (let i = 0; i < 15; i++) {
          carouselArray.push(gameData.carouselImagesURL);
        };

        // for testing only
        let tagsArray = [];
        for (let i = 0; i < 3; i++) {
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
          tags: tagsArray,
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
                {this.state.carouselImagesURL.map((image, i) => {
                  <CarouselSlot
                    key={i}
                    image={image}
                    changeImage={this.changeImage}
                  /> })
                }
              </div>
            </div>
            <div className="flex-item description">
              <GameDescription
                description={this.state.description}
                descriptionImage={this.state.descriptionImage}
                tags={this.state.tags}
                logoURL={this.state.logoURL}
                recentReviews={this.state.recentReviews}
                allReviews={this.state.allReviews}
                releaseDate={this.state.releaseDate}
                developer={this.state.developer}
                publisher={this.state.publisher}
              />
            </div>
          </div>
        </div>
      </div>);
  }
}

export default App;
