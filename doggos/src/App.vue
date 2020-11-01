<template>
  <div>
    Doggos
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>
