<script>
import "./History.scss";
import useUserPictures from "../../sessions/UserPictures";

export default {
  setup() {
    const { history } = useUserPictures();
    console.log("history:", history.value);
    return {
      history,
    };
  },
};
</script>

<template>
  <div class="history">
    <p>You have seen {{history.length}} pictures during this session </p>
    <div class="image-container">
      <img
        v-for="(value) in history"
        v-bind:key="value"
        v-bind:value="value"
        :src="value"
      >
    </div>
  </div>
</template>