import { reactive, toRefs } from "vue";

const state = reactive({
  favorites: [],
  history: []
});

export default function useUserPictures() {
  const initFavorite = () => {
    console.log("getting favorite from local");
  }
  const toggleFavorite = (imgUrl) => {
    if (!state.favorites.includes(imgUrl)) {
      state.favorites.push(imgUrl)
    } else {
      const index = state.favorites.findIndex(item => item === imgUrl);
      state.favorites.splice(index, 1);
    }
  }
  const saveFavorite = () => {
    console.log("saving to local");
  }
  const initHistory = () => {
    console.log("getting history from local");
  }
  const addHistory = (imgUrl) => {
    state.history.push(imgUrl)
  }
  const saveHistory = () => {
    console.log("saving to history");
  }
  return {
    ...toRefs(state),
    initFavorite,
    saveFavorite,
    toggleFavorite,
    initHistory,
    addHistory,
    saveHistory,
  }
}