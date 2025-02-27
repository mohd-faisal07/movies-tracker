<template>
  <base-card>
    <h1>Movies</h1>
    <movie-list></movie-list>
  </base-card>
</template>
<script>
import movieList from '../movie/movieList.vue'
export default {
  components: { movieList },
}
</script>
