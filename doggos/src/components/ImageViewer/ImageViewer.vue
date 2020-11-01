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
      if (this.index != 0) {
        this.index--;
      }
    },
    next() {
      console.log("clicked on next");
      console.log("this.images.lenth:", this.images.length);
      if (this.index + 1 < this.images.length) {
        console.log("index is lower than l");
        this.index++;
      } else {
        console.log("lol");
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
      <div>{{index + 1}} / {{this.images.length}}</div>
      <i class="ph-heart-fill hearth"></i>
    </div>
    <div v-if="!this.images[0]">
      There is no images for this breed or sub breed
    </div>
  </div>
</template>