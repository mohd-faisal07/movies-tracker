<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #d8d516;
  border-color: #ffffff;
  color: #0a0d50;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}
.remove {
  background-color: #d8d516;
  color: #270041;
  transition: all 0.3s ease-in;
}
.remove:hover {
  background-color: rgb(238, 48, 48);
  color: #fff;
}
.empty {
  background-color: #d8d516;
  color: #270041;
  transition: all 0.3s ease-in;
  min-width: 100%;
}
.empty:hover {
  background-color: rgb(238, 48, 48);
  color: #fff;
}
.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #d8d516;
}
</style>
