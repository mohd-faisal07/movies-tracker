import { createStore } from 'vuex'
const store = createStore({
  state() {
    return {
      movies: [],
      currentMovie: {},
      favorites: JSON.parse(localStorage.getItem('favorites')) || [],
      watched: JSON.parse(localStorage.getItem('watched')) || [],
      isLoading: false,
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
    setIsLoading(state, payload) {
      state.isLoading = payload
    },
  },
  getters: {
    getMovies(state) {
      return state.movies
    },
    currentMovie(state) {
      return state.currentMovie
    },
    watched(state) {
      return state.watched
    },
    favorites(state) {
      return state.favorites
    },
    isLoading(state) {
      return state.isLoading
    },
  },
  actions: {
    async movieFetcher(context, payload) {
      try {
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
      } catch (err) {
        const error = new Error(err.message || 'something went wrong during fetching!')
        throw error
      }
    },
    async fetchMovieWithId(context, payload) {
      try {
        const api_key = 'd2c7b4f6'
        const query = payload.query || ''
        const response = await fetch(`http://www.omdbapi.com/?i=${query}&apikey=${api_key}`)
        const responseData = await response.json()
        console.log(responseData)
        if (!response.ok) {
          console.log(responseData)
        }

        context.commit('getMovieData', responseData)
      } catch (err) {
        const error = new Error(
          err.message || 'something went wrong during fetching for the particular film!',
        )
        throw error
      }
    },
    setterIsLoading(context, payload) {
      context.commit('setIsLoading', payload)
    },
  },
})

export default store
