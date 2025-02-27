<template>
  <div class="container">
    <ul>
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
// console.log(movies)
export default {
  data() {
    return {
      isLoading: false,
    }
  },
  computed: {
    movies() {
      return this.$store.state.movies
    },
  },
  methods: {
    async handleFetch(id) {
      this.isLoading = true
      await this.$store.dispatch('fetchMovieWithId', { query: id, type: 'i' })
      this.isLoading = false
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
}
</style>
