<template>
  <div>
    <the-header></the-header>
    <div class="movie-layout">
      <base-spinner v-if="isLoading"></base-spinner>
      <router-view v-else></router-view>
      <base-card>
        <movie-item></movie-item>
      </base-card>
    </div>
    <the-footer></the-footer>
  </div>
</template>
<script>
import TheHeader from './components/layout/TheHeader.vue'
import MovieItem from './components/movie/movieItem.vue'
import MovieList from './components/movie/movieList.vue'
import BaseCard from './components/ui/BaseCard.vue'
import TheFooter from './components/layout/TheFooter.vue'

export default {
  components: { TheHeader, MovieItem, BaseCard, MovieList, TheFooter },
}
</script>

<style scoped>
.movie-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  padding: 0.5rem;
}
@media (max-width: 600px) {
  .movie-layout {
    grid-template-columns: 1fr;
  }
}
</style>
