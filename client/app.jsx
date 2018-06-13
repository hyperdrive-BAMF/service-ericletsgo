import React from 'react';
import axios from 'axios';

import GameDescription from './components/GameDescription.jsx'
import Carousel from './components/Carousel.jsx';

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
      tags: []
    }
    this.fetchGame = this.fetchGame.bind(this);
  }

  getRandomInt() {
    return Math.floor(Math.random() * (100)) + 1;
  }

  fetchGame(gameId) {
    axios.get('http://localhost:3001/' + gameId)
      .then((data) => {
        const gameData = data.data[0];
        let carouselArray = this.state.carouselImagesURL.concat(gameData.carouselImagesURL);

        for (var i = 0; i < 15; i++) {
          carouselArray.push(gameData.carouselImagesURL);
        };

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
          tags: gameData.tags
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.setState({gameId: this.getRandomInt().toString()}, () => {
      this.fetchGame(this.state.gameId);
    });
  }

  render() {
    return (
      <div>
        <div className="background">
        <div className="app_name">{this.state.name}</div>
          <div className="container">
              <div className="flex-item images">
                <img src={this.state.mainImageURL} />
                <Carousel images={this.state.carouselImagesURL} />
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
      </div>
  )}
}

export default App;
