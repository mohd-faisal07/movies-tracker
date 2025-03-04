<template>
  <div>
    <the-header></the-header>
    <div class="movie-layout">
      <div>
        <base-spinner v-if="isLoading"></base-spinner>
        <router-view v-else></router-view>
      </div>
      <base-card v-if="!isMobile">
        <movie-item></movie-item>
      </base-card>
      <div v-if="isMobile && isOpen" class="modal">
        <movie-item></movie-item>
        <base-button @click="handleClose" mode="remove" class="closeButton">Close</base-button>
      </div>
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
  data() {
    return {
      isMobile: window.innerWidth < 768,
    }
  },
  computed: {
    isOpen() {
      return this.$store.getters.isOpen
    },
  },
  methods: {
    handleClose() {
      this.$store.state.isOpen = false
    },
  },
}
</script>

<style scoped>
.movie-layout {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  padding: 0.5rem;
}
.modal {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 10px;
  margin: 0;
  overflow: scroll;
  background-color: #0a0d50;
}
.closeButton {
  margin-left: 0.3rem;
}
@media (max-width: 600px) {
  .movie-layout {
    grid-template-columns: 1fr;
  }
}
</style>
