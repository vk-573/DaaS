<script>
import DogService from '../../services/DogService';
import useUserPictures from "../../sessions/UserPictures";
import "./ImageViewer.scss";

export default {
  name: 'ImageViewer',
  props: ['breed', 'sub'],
  setup() {
    console.log("in setup");
    const { favorites, toggleFavorite } = useUserPictures();

    return { favorites, toggleFavorite }
  },
  async created() {
    const images = await DogService.getBreedImages(this.breed, this.sub);
    this.images = [...images];
    if (images === "error") {
      // TODO snackBar
      console.log("error !");
      return;
    }
  },
  data() {
    return {
      images: [],
      index: 0,
    }
  },
  methods: {
    prev() {
      if (this.index != 0) {
        this.index--;
      }
    },
    next() {
      if (this.index + 1 < this.images.length) {
        this.index++;
      }
    },
  }
}
</script>

<template>
  <div class="image-viewer">
    <div v-if="this.images[0]">
      <div class="image-content">
        <div  v-if="!(this.index > 0)" class="arrow-left">
        </div>
        <i v-if="this.index > 0" @click="this.prev()" class="ph-paper-plane-right-fill arrow inverse"></i>
        <div class="image-p">
          <img class="image" :src="this.images[this.index]" :key="this.index"/>
        </div>
        <div class="arrow-parent">
          <i v-if="!(this.index + 1 === this.images.length)" @click="this.next()" class="ph-paper-plane-right-fill arrow"></i>
        </div>
      </div>
      <p>{{index + 1}} / {{this.images.length}}</p>
      <i @click="toggleFavorite(this.images[this.index])" class="ph-heart-fill hearth" :class="[favorites.includes(this.images[this.index]) ? 'active-favorite' : '', 'ph-heart-fill', 'hearth']" ></i>
    </div>
    <div v-if="!this.images[0]">
      There is no images for this breed or sub breed
    </div>
  </div>
</template>