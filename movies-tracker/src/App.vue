<template>
  <div>
    <the-header></the-header>
    <div class="movie-layout">
      <router-view></router-view>
      <base-card>
        <movie-item></movie-item>
      </base-card>
    </div>
  </div>
</template>
<script>
import TheHeader from './components/header/TheHeader.vue'
import MovieItem from './components/movie/movieItem.vue'
import MovieList from './components/movie/movieList.vue'
import BaseCard from './components/ui/BaseCard.vue'
export default {
  components: { TheHeader, MovieItem, BaseCard, MovieList },
}
</script>

<style scoped>
.movie-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  padding: 0.5rem;
}
</style>
