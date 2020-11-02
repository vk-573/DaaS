<template>
  <img id="logo" src="./assets/dog.png">
  <NavBar />
  <router-view/>
</template>

<script>
import { onUnmounted } from 'vue';
import NavBar from './components/NavBar/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  },
  onUnmounted() {
    console.log("UNMOUNT");
  }
}
</script>
