import { BASE_BACKEND_URL } from './constants';

class MainApi {
  constructor(options) {
    this.baseUrl = options.BASE_BACKEND_URL;
    this.headers = options.headers;
    this.token = '';
  }

  setToken(token) {
    this.token = `Bearer ${token}`;
  }

  _request(url, options) {
    const headersWithToken = {
      ...options.headers,
      Authorization: this.token,
    };
    const optionsWithToken = {
      ...options,
      headers: headersWithToken,
    };
    return fetch(url, optionsWithToken).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Error: ${response.status}`);
    });
  }

  register(name, email, password) {
    return this._request(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
  }

  authorize(email, password) {
    return this._request(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }

  getSavedMovies() {
    return this._request(`${this.baseUrl}/movies`, {
      headers: this.headers,
    });
  }

  getUserData() {
    return this._request(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    });
  }

  patchUserData(name, email) {
    return this._request(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({ name, email }),
    });
  }

  postMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  }) {
    return this._request(`${this.baseUrl}/movies`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
      }),
    });
  }

  deleteMovie(movieId) {
    return this._request(`${this.baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this.headers,
    });
  }
}

const mainApi = new MainApi({
  BASE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;
