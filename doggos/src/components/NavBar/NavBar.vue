
<script>
import './NavBar.scss';
export default {
  name: 'NavBar',
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <ul class="navbar">
    <router-link active-class="active" tag="li" class="link" to="/discover">
      Discover
    </router-link>
    <router-link active-class="active" tag="li" class="link" to="/favorite">
      Favorites
    </router-link>
    <router-link active-class="active" tag="li" class="link" to="/history">
      History
    </router-link>
  </ul>
</template>
