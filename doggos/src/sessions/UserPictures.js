import { reactive, toRefs } from "vue";

const state = reactive({
  favorites: [],
  history: []
});

export default function useUserPictures() {
  const toggleFavorite = (imgUrl) => {
    if (!state.favorites.includes(imgUrl)) {
      state.favorites.push(imgUrl)
    } else {
      const index = state.favorites.findIndex(item => item === imgUrl);
      state.favorites.splice(index, 1);
    }
  }
  const addHistory = (imgUrl) => {
    if (state.history.includes(imgUrl)) {
      const index = state.history.findIndex(item => item === imgUrl);
      state.history.splice(index, 1);
    }
    state.history.unshift(imgUrl)
  }
  return {
    ...toRefs(state),
    toggleFavorite,
    addHistory,
  }
}