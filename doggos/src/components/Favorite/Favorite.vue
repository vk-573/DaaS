<script>
import "./Favorite.scss";
import useUserPictures from "../../sessions/UserPictures";

export default {
  setup() {
    const { favorites, toggleFavorite } = useUserPictures();

    return {
      favorites,
      toggleFavorite
    };
  },
};
</script>

<template>
  <div class="favorite">
    <p>You bookmarked {{favorites.length}} pictures</p>
    <div class="image-container">
      <img
        v-for="(value) in favorites"
        v-bind:key="value"
        v-bind:value="value"
        @click="toggleFavorite(value)"
        :src="value"
      >
    </div>
  </div>
</template>
