<template>
  <base-card>
    <h1>Watched</h1>
    <div class="container">
      <ul v-if="fetchWatched.length > 0">
        <li v-for="item in fetchWatched" :key="item.imdbID" @click="handleFetch(item.imdbID)">
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
      <p v-else>please add some movies here!</p>
    </div>
  </base-card>
</template>
<script>
export default {
  computed: {
    fetchWatched() {
      return this.$store.getters.watched
    },
  },
  methods: {
    async handleFetch(id) {
      this.isLoading = true
      await this.$store.dispatch('fetchMovieWithId', { query: id, type: 'i' })
      this.isLoading = false
      // console.log('clicked the id :', id)
    },
    handleRemove(id) {
      if (this.$store.getters.watched.find((imdbid) => imdbid.imdbID === id)) {
        this.$store.state.watched = this.$store.state.watched.filter(
          (imdbid) => imdbid.imdbID !== id,
        )
        localStorage.setItem('watched', JSON.stringify(this.$store.state.watched))
        console.log('watched', this.$store.getters.watched)
        this.$store.state.currentMovie = {}
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
p {
  padding: 1rem;
  font-size: 26px;
}
</style>
