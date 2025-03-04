<template>
  <base-dialog :show="!!error" title="Error while adding items!" @close="handleClose"
    ><p>{{ error }}</p></base-dialog
  >
  <section v-if="currentMovie.imdbID" class="movie-item">
    <div v-if="isLoader">
      <base-spinner></base-spinner>
    </div>
    <div class="movie-container" v-else>
      <div class="img-div">
        <img :src="currentMovie.Poster" class="movie-poster" />
      </div>
      <div class="movie-desc">
        <h1>{{ currentMovie.Title }}</h1>
        <p>
          <strong> IMDB Rating: {{ currentMovie.imdbRating }} / 10 </strong>
        </p>
        <p>Duration : {{ currentMovie.Runtime }}</p>
        <p>Released Year : {{ currentMovie.Year }}</p>
        <p>Genre : {{ currentMovie.Genre }}</p>
        <p>Description : {{ currentMovie.Plot }}</p>
        <div class="buttons">
          <base-button @click="handleFavorite(currentMovie.imdbID)">Add to favorites</base-button>
          <base-button @click="handleWatched(currentMovie.imdbID)">Add to watched</base-button>
        </div>
      </div>
    </div>
  </section>
  <section v-else>
    <h2>
      please search for a movie and click on the left list to see the full details of the movie/web
      series.
    </h2>
  </section>
</template>
<script>
export default {
  data() {
    return {
      error: null,
    }
  },

  computed: {
    currentMovie() {
      return this.$store.getters.currentMovie
    },
    isLoader() {
      return this.$store.getters.isLoading
    },
  },

  methods: {
    handleFavorite(id) {
      try {
        this.$store.dispatch('setterIsLoading', true)
        if (!this.$store.getters.favorites.find((imdbid) => imdbid.imdbID === id)) {
          this.$store.state.favorites.push(this.$store.state.currentMovie)
          // console.log('favorites', this.$store.getters.favorites)
          localStorage.setItem('favorites', JSON.stringify(this.$store.state.favorites))
          this.$store.state.isOpen = false
        } else {
          const error = 'Item is already present in the list!'
          this.error = error
        }
      } catch (err) {
        throw new Error(err.message || 'error while adding to the list list')
      }
      this.$router.replace('/favorites')
      this.$store.dispatch('setterIsLoading', false)
    },
    handleWatched(id) {
      try {
        if (!this.$store.getters.watched.find((imdbid) => imdbid.imdbID === id)) {
          this.$store.state.watched.push(this.$store.state.currentMovie)
          // console.log(this.$store.getters.watched)
          localStorage.setItem('watched', JSON.stringify(this.$store.state.watched))
          this.$store.state.isOpen = false
        } else {
          const error = 'Item is already present in the list!'
          this.error = error
        }
      } catch (err) {
        throw new Error(err.message || 'error while adding to the list list')
      }
      this.$router.replace('/watched')
      // console.log('curentmovie', this.currentMovie)
    },
    handleClose() {
      this.error = null
    },
  },
}
</script>

<style scoped>
.movie-container {
  display: flex;
  width: 100%;
}
.movie-desc h1 {
  font-size: 32px;
  padding-bottom: 0.5rem;
}
.movie-desc {
  margin-left: 2rem;
}
p {
  margin-bottom: 0.3rem;
}
.movie-poster {
  padding: 0.3rem;
  border-radius: 12px;
}
.movie-item {
  width: 60vw;
}
.buttons {
  margin-top: 0.5rem;
}
section h2 {
  text-align: center;
}

@media (max-width: 600px) {
  .movie-poster {
    width: 150px;
    height: 200px;
  }
  .movie-container {
    flex-direction: column;
  }
  .movie-desc {
    margin-left: 0.3rem;
  }
  .buttons {
    display: flex;
    margin: 10px 0;
  }
}
</style>
