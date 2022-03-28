export default class SwapiService {
    constructor() {
        this._transformPerson = this._transformPerson.bind(this);
        this._transformStarship = this._transformStarship.bind(this);
        this._transformPlanet = this._transformPlanet.bind(this);
        this.getAllPeople = this.getAllPeople.bind(this);
        this.getResource = this.getResource.bind(this);
        this.getPerson = this.getPerson.bind(this);
        this.getAllPlanets = this.getAllPlanets.bind(this);
        this.getPlanet = this.getPlanet.bind(this);
        this.getAllStarShips = this.getAllStarShips.bind(this);
        this.getStarship = this.getStarship.bind(this);
        this.getPersonImage = this.getPersonImage.bind(this);
        this.getShipImage = this.getShipImage.bind(this);
        this.getPlanetImage = this.getPlanetImage.bind(this);
    }

    // _apiBase = 'https://swapi.dev/api';
    _apiBase = 'https://swapi.py4e.com/api';

    _imgBaseUrl = 'https://starwars-visualguide.com/assets/img';


    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, received ${res.status}`)
        }

        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource('/people/');
        return res.results.map(this._transformPerson);
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    }

    async getAllPlanets() {
        const res = await this.getResource('/planets/');
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    async getAllStarShips() {
        const res = await this.getResource('/starships/');
        return res.results.map(this._transformStarship);
    }

    async getStarship(id) {
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarship(starship);
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;

        return item.url.match(idRegExp)[1];
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            climate: planet.climate
        };
    }

    _transformStarship(starship) {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            height: person.height
        }
    }

    getPersonImage({ id }) {
        return `${this._imgBaseUrl}/characters/${id}.jpg`;
    }

    getShipImage({ id }) {
        return `${this._imgBaseUrl}/starships/${id}.jpg`;
    }

    getPlanetImage({ id }) {
        return `${this._imgBaseUrl}/planets/${id}.jpg`;
    }
}