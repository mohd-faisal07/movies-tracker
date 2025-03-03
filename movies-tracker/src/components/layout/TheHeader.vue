<template>
  <section>
    <header>
      <base-dialog :show="!!error" title="an error has occured" @close="handleClose"
        ><p>{{ error }}</p></base-dialog
      >
      <div>
        <base-button link to="/" mode="outline"><h1>MoviesTracker</h1></base-button>
      </div>
      <form class="searchdiv" @submit.prevent="submitButton">
        <input
          type="text"
          id="search"
          v-model.trim="searchInput"
          title="Search for movies/Web Series"
          placeholder="Search for movies/Web Series"
          class="searchinput"
        />
        <base-button>Search</base-button>
      </form>
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
      error: null,
    }
  },
  methods: {
    async submitButton() {
      try {
        this.$store.dispatch('setterIsLoading', true)
        await this.$store.dispatch('movieFetcher', { query: this.searchInput })
        this.$router.replace('/')
      } catch (error) {
        this.error = error.message || 'something went wrong while fetching!'
      }
      this.$store.dispatch('setterIsLoading', false)
      // console.log('clicked')
    },
    handleClose() {
      this.error = null
    },
  },
}
</script>

<style scoped>
section {
  background-color: #6290c3;
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
  /* background-color: #d8d516; */
}

.buttons {
  display: flex;
  flex-direction: row-reverse;
}
.router-link-active {
  background-color: #d8d516;
  color: #3a0061;
}

@media (max-width: 600px) {
  header {
    grid-template-columns: 1fr;
  }
  .searchinput {
    min-width: 15rem;
  }
  .buttons {
    flex-direction: row;
  }
}
</style>
