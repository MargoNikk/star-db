import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: {},
      loading: true,
      error: false
    };

    this.swapiService = new SwapiService();

    this.updatePlanet = this.updatePlanet.bind(this);
    this.onPlanetLoaded = this.onPlanetLoaded.bind(this);
    this.onError = this.onError.bind(this);
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded(planet) {
    this.setState({ planet, loading: false });
  }

  onError = (err) => {
    this.setState({ error: true, loading: false });
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;

    return (
      <div className="container">
        <div className="random-planet jumbotron rounded card">
          { error && <ErrorIndicator/> }
          { loading && <Spinner/> }
          { !loading && !error && <PlanetInfo planet={planet} /> }
        </div>
      </div>
    );
  }
}

const PlanetInfo = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  
  return (
    <React.Fragment>
      <img className="planet-image"
        alt="Planet"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}; 