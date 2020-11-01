<script>
import DogService from '../../services/DogService';
import ImageViewer from '../ImageViewer/ImageViewer.vue';
import "./Discover.scss";

export default {
  name: 'Discover',
  async created() {
    console.log("here");
    const breed = await DogService.listBreed();
    if (breed === "error") {
      console.log("error !");
    }
    console.log("brred:", breed);
    this.breed = breed;
    this.loading = false;
    console.log("loading:", this.loading);
  },
  data() {
    return {
      breed: {},
      selectedBreed: "",
      labelBreed: "",
      selectedSub: "",
      selected: "",
      dropped: false,
      loading: true
    }
  },
  methods: {
    onBreedClick(key) {
      console.log("value:", key);
      this.selectedBreed = key;
    },
    onSubClick(key) {
      console.log("value on sub:", key);
      // this.selectedSub = key;
    }
  },
  components: {
    ImageViewer
  }
}
</script>

<template>
  <div class="discover">
    <div>Search for news breeds</div>
    <div>eheh</div>
    <div v-if="loading">LOADING...</div>
    <div v-if="!loading" class="filters">
      <select>
        <option selected disabled hiddee value="">Select breed</option>
        <option
          v-for="(value, key) in this.breed"
          v-bind:key="key"
          v-bind:value="value"
          @click="onBreedClick(key)"
        >
          {{key}}
        </option>
      </select>
      <!-- <span>Selected: {{ selected }}</span> -->
      <!-- {{this.selectedBreed}} -->
      <select v-model="selectedSub">
        <option disabled value="">Sub Breed</option>
        <option
          v-for="(value, key) in this.breed[selectedBreed]"
          v-bind:key="key"
          v-bind:value="value"
          @click="onSubClick(value)"
        >
          {{value}}
        </option>
      </select>
      <ImageViewer v-if="selectedBreed" :breed="selectedBreed" :sub="selectedSub"/>
    </div>
  </div>
</template>
