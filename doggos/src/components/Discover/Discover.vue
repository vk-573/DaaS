<script>
import DogService from '../../services/DogService';
import ImageViewer from '../ImageViewer/ImageViewer.vue';
import "./Discover.scss";

export default {
  name: 'Discover',
  async created() {
    const breed = await DogService.listBreed();
    if (breed === "error") {
    }
    this.breed = breed;
    this.loading = false;
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
  components: {
    ImageViewer
  }
}
</script>

<template>
  <div class="discover">
    <p>Search for news breeds</p>
    <div v-if="loading">LOADING...</div>
    <div v-if="!loading" class="filters">
      <select v-model="selectedBreed">
        <option selected disabled hiddee value="">Select breed</option>
        <option
          v-for="(value, key) in this.breed"
          v-bind:key="key"
          v-bind:value="key"
        >
          {{key}}
        </option>
      </select>
      <select v-model="selectedSub">
        <option disabled value="">Sub Breed</option>
        <option
          v-for="(value, key) in this.breed[selectedBreed]"
          v-bind:key="key"
          v-bind:value="value"
        >
          {{value}}
        </option>
      </select>
      <!-- Double key for rerender when breed and sub changes -->
      <ImageViewer :key="`${selectedBreed}-${selectedSub}`" v-if="selectedBreed" :breed="selectedBreed" :sub="selectedSub"/>
    </div>
  </div>
</template>
