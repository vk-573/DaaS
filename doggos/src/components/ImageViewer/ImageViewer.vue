<script>
import DogService from '../../services/DogService';
import "./ImageViewer.scss";

export default {
  name: 'ImageViewer',
  props: ['breed', 'sub'],
  async created() {
    const images = await DogService.getBreedImages(this.breed);
    if (images === "error") {
      // TODO snackBar
      console.log("error !");
      return;
    }
    console.log("images:", images);
    this.images = [...images];
    console.log("this.images:", this.images);
    console.log("this.images[0]:", this.images[0]);
  },
  data() {
    return {
      images: [],
      index: 0,
    }
  },
  methods: {
    prev() {
      console.log("clicked on prev");
    },
    next() {
      console.log("clicked on next");
    },
  }
}
</script>

<template>
  <div class="image-viewer">
    <div v-if="this.images[0]">
      <div class="image-content">
        <i class="ph-paper-plane-right-fill arrow inverse"></i>
          <img class="image" :src="this.images[0]"/>
        <i class="ph-paper-plane-right-fill arrow"></i>
      </div>
      <div>{{index + 1}} / {{images.length}}</div>
      <i class="ph-heart-fill hearth"></i>
    </div>
    <div v-if="!this.images[0]">
      There is no images for this breed or sub breed
    </div>
  </div>
</template>