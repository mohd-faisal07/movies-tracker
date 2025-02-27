<template>
  <section v-if="currentMovie.imdbID" class="movie-item">
    <div class="movie-container">
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
          <base-button>Add to favorites</base-button>
          <base-button>Add to watched</base-button>
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
  computed: {
    currentMovie() {
      return this.$store.state.currentMovie
    },
  },
}
</script>

<style scoped>
.movie-container {
  display: flex;
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
.img-div {
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
</style>
