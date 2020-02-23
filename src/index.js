class SwapiService {
  _apiBase = 'https://swapi.co/api';

  async getResource(url) {
    const res = await fetch(this._apiBase + url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    }
    return await res.json();
  }

  Get = {
    person: async id => {
      return this.getResource(`/people/${id}`);
    },
    starship: async id => {
      return this.getResource(`/starships/${id}`);
    },
    planet: async id => {
      return this.getResource(`/planets/${id}`);
    },
    All: {
      people: async () => {
        const response = await this.getResource('/people/');
        return response.results;
      },
      planets: async () => {
        const response = await this.getResource('/planets/');
        return response.results;
      },
      starships: async () => {
        const response = await this.getResource('/starships/');
        return response.results;
      }
    }
  };
}

const swapi = new SwapiService();

swapi.Get.All.starships().then(people => {
  people.forEach(person => console.log(person.name));
});
