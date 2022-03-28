import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {
  PeoplePage,
  PlanetPage,
  StarshipPage,
  JediPage,
  LoginPage
} from '../pages';
import { StarShipDetails } from '../sw-components'
import ErrorBoundry from "../error-boundry";

import SwapiService from "../../services/swapi-service";
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../context/sw-serwice';
import { AuthProvider } from '../context/user-authorization'

import './app.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      service: new SwapiService()
    };

    this.onServiceChange = this.onServiceChange.bind(this);
  }

  onServiceChange() {
    this.setState(({ service }) => {
      return {
        service: service instanceof SwapiService ?
          new DummySwapiService() : new SwapiService()
      }
    });
  }

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.service}>
          <Router>
            <div className="stardb-app">
              <AuthProvider>
                <Header onServiceChange={this.onServiceChange} />
                <RandomPlanet />
                <div className="container">
                  <Routes>
                    <Route path="/" element={<h2>Welcome to StarDB</h2>} />
                    <Route path="people" element={<PeoplePage />} />
                    <Route path="planets" element={<PlanetPage />} />
                    <Route path="starships" element={<StarshipPage />}>
                      <Route
                        index
                        element={
                          <div className="card" style={{ padding: "1rem" }}>
                            <span>Please, select an item from a list</span>
                          </div>
                        }
                      />
                      <Route path=":starshipId" element={<StarShipDetails />} />
                    </Route>
                    <Route
                      path="*"
                      element={<p>There's nothing here!</p>}
                    />

                    <Route path="login" element={<LoginPage />} />
                    <Route path="jeditemple" element={<JediPage />} />
                  </Routes>
                </div>
              </AuthProvider>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};
