import { createStore } from 'vuex'
const store = createStore({
  state() {
    return {
      movies: [],
      currentMovie: {},
      favorites: [],
      watched: [],
    }
  },
  mutations: {
    setMovies(state, payload) {
      state.movies = payload
      console.log(payload)
    },
    getMovieData(state, payload) {
      state.currentMovie = payload
    },
  },
  getters: {
    getMovies(state) {
      return state.movies
    },
  },
  actions: {
    async movieFetcher(context, payload) {
      const api_key = 'd2c7b4f6'
      const query = payload.query || ''
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${api_key}`)
      const responseData = await response.json()
      console.log(responseData)
      console.log(responseData.Search)

      if (!response.ok) {
        console.log(responseData)
      }

      const moviesList = []
      for (const item of responseData.Search) {
        const movie = {
          id: item.imdbID,
          title: item.Title,
          poster: item.Poster,
          year: item.Year,
        }
        moviesList.push(movie)
      }
      context.commit('setMovies', moviesList)
      console.log(moviesList)
    },
    async fetchMovieWithId(context, payload) {
      const api_key = 'd2c7b4f6'
      const query = payload.query || ''
      const response = await fetch(`http://www.omdbapi.com/?i=${query}&apikey=${api_key}`)
      const responseData = await response.json()
      console.log(responseData)
      console.log(responseData.Search)

      if (!response.ok) {
        console.log(responseData)
      }

      context.commit('getMovieData', responseData)
    },
  },
})

export default store
