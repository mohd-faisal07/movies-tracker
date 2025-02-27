<template>
  <section>
    <header>
      <div>
        <base-button link to="/" mode="flat"><h1>MoviesTracker</h1></base-button>
      </div>
      <div class="searchdiv">
        <input
          type="text"
          id="search"
          v-model.trim="searchInput"
          title="Search for movies/Web Series"
          placeholder="Search for movies/Web Series"
          class="searchinput"
        />
        <base-button @click="submitButton">Search</base-button>
      </div>
      <div class="buttons">
        <base-button link to="/watched">Watched</base-button>
        <base-button link to="/favorites">Favorite</base-button>
      </div>
    </header>
  </section>
</template>
<script>
export default {
  data() {
    return {
      searchInput: '',
    }
  },
  methods: {
    async submitButton() {
      await this.$store.dispatch('movieFetcher', { query: this.searchInput })
      this.$router.replace('/')
      // console.log('clicked')
    },
  },
}
</script>

<style scoped>
section {
  background-color: #020330;
}
header button {
  color: #d8d516;
}
header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
}

.searchinput {
  min-width: 25rem;
  border-radius: 50px;
  padding: 1rem;
  margin-right: 1rem;
}

.buttons {
  display: flex;
  flex-direction: row-reverse;
}
</style>
align-self: ;
