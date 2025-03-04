<template>
  <base-card>
    <h1>Favorites({{ fetchFavorites.length }})</h1>
    <div class="container">
      <ul v-if="fetchFavorites.length > 0">
        <li v-for="item in fetchFavorites" :key="item.imdbID" @click="handleFetch(item.imdbID)">
          <div class="list-item">
            <div>
              <img :src="item.Poster" class="movieposter" />
            </div>
            <div>
              <h2>{{ item.Title }}</h2>
              <p>{{ item.Year }}</p>
            </div>
            <div class="remove-item">
              <base-button @click="handleRemove(item.imdbID)" mode="remove">Remove</base-button>
            </div>
          </div>
        </li>
      </ul>
      <p class="text" v-else>please add some movies here!</p>
    </div>
    <div v-if="fetchFavorites.length > 0">
      <base-button @click="handleEmpty" mode="empty">Empty Favorites</base-button>
    </div>
  </base-card>
</template>
<script>
export default {
  computed: {
    fetchFavorites() {
      return this.$store.getters.favorites
    },
  },
  methods: {
    async handleFetch(id) {
      this.isLoading = true
      await this.$store.dispatch('fetchMovieWithId', { query: id, type: 'i' })
      this.isLoading = false
      this.$store.state.isOpen = true
      // console.log('clicked the id :', id)
    },
    handleRemove(id) {
      if (this.$store.getters.favorites.find((imdbid) => imdbid.imdbID === id)) {
        this.$store.state.favorites = this.$store.state.favorites.filter(
          (imdbid) => imdbid.imdbID !== id,
        )
        localStorage.setItem('favorites', JSON.stringify(this.$store.state.favorites))
        this.$store.state.currentMovie = {}
        // console.log('currentMovie', this.$store.state.currentMovie)
        // console.log('favorites', this.$store.getters.favorites)
      }
    },
    handleEmpty() {
      let response = confirm('are you sure you want to delete all items in favorites?')
      if (response === true) {
        this.$store.state.favorites = []
        localStorage.setItem('favorites', JSON.stringify(this.$store.state.favorites))
      }
    },
  },
}
</script>
<style scoped>
.container {
  height: 70vh;
  overflow: scroll;
  overflow-x: hidden;
}
.list-item {
  display: flex;
  /* align-items: center; */
  gap: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
.movieposter {
  height: 80px;
  width: 80px;
  border-radius: 12px;
}
.remove-item {
  margin-left: auto;
}
ul {
  padding: 0;
}

li {
  list-style: none;
  cursor: pointer;
}
.text {
  padding: 1rem;
  font-size: 26px;
}
</style>
