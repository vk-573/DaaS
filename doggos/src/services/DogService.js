import axios from "axios";

class DogService  {
  listBreed = async () => {
    try {
      const res = await axios.get("https://dog.ceo/api/breeds/list/all");
      return res.data.message;
    } catch (err) {
      return "error";
    }
  }

  getSubBreedImages = (sub, images) => {
    images = images.filter((item) => item.includes(sub));
    return images;
  }

  getBreedImages = async (breed, sub) => {
    try {
      const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
      if (sub) {
        const subBreedImages = this.getSubBreedImages(sub, res.data.message);
        return subBreedImages;
      }
      return res.data.message;
    } catch (err) {
      return "error";
    }
  }
}

export default new DogService();