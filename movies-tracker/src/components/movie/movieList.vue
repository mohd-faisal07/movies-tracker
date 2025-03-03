<template>
  <div class="container">
    <div v-if="isLoader">
      <base-spinner></base-spinner>
    </div>
    <ul v-else>
      <li v-for="item in movies" :key="item.id" @click="handleFetch(item.id)">
        <div class="list-item">
          <div>
            <img :src="item.poster" class="movieposter" />
          </div>
          <div>
            <h2>{{ item.title }}</h2>
            <p>{{ item.year }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    movies() {
      return this.$store.state.movies
    },
    isLoader() {
      return this.$store.getters.isLoading
    },
  },
  methods: {
    async handleFetch(id) {
      try {
        this.$store.dispatch('setterIsLoading', true)
        console.log('store', this.$store.getters.isLoading)
        await this.$store.dispatch('fetchMovieWithId', { query: id, type: 'i' })
      } catch (err) {
        const error = new Error(err.message || 'something went wrong while fetching')
        throw error
      }
      this.$store.dispatch('setterIsLoading', false)
      // this.isLoading = false
      // console.log(this.isLoading)
      // console.log('clicked the id :', id)
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
ul {
  padding: 0;
}

li {
  list-style: none;
  cursor: pointer;
}
</style>
