export default class SwapiService {
  _apiBase = 'https://swapi.co/api';
  _imgBase = 'https://starwars-visualguide.com/assets/img';
  _extractId = item => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };
  _Transform = {
    planet: planet => {
      return {
        id: this._extractId(planet),
        name: planet.name,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
        population: planet.population
      };
    },
    starship: starship => {
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
      };
    },
    person: person => {
      return {
        id: this._extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
        eyeColor: person.eye_color
      };
    }
  };

  getResource = async url => {
    const res = await fetch(this._apiBase + url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    }
    return await res.json();
  };
  getPersonImage = ({ id }) => {
    return `${this._imgBase}/characters/${id}.jpg`;
  };
  getStarshipImage = ({ id }) => {
    return `${this._imgBase}/starships/${id}.jpg`;
  };
  getPlanetImage = ({ id }) => {
    return `${this._imgBase}/planets/${id}.jpg`;
  };

  Get = {
    person: async id => {
      const person = await this.getResource(`/people/${id}`);
      return this._Transform.person(person);
    },
    starship: async id => {
      const starship = await this.getResource(`/starships/${id}`);
      return this._Transform.starship(starship);
    },
    planet: async id => {
      const planet = await this.getResource(`/planets/${id}`);
      return this._Transform.planet(planet);
    },
    All: {
      people: async () => {
        const people = await this.getResource('/people/');
        return people.results.map(this._Transform.person);
      },
      planets: async () => {
        const planets = await this.getResource('/planets/');
        return planets.results.map(this._Transform.planet);
      },
      starships: async () => {
        const starships = await this.getResource('/starships/');
        return starships.results.map(this._Transform.starship);
      }
    }
  };
}
