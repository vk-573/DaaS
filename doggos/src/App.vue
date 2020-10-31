<template>
  <div>
    lolol
    <NavBar />
    <Discover msg="Hello Vue 3.0 + Vite" />
  </div>
</template>

<script>
import Discover from './components/Discover/Discover.vue';
import NavBar from './components/NavBar/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Discover,
  }
}
</script>
