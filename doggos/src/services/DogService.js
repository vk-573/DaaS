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

  getBreedImages = async (breed) => {
    try {
      const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
      console.log("res:", res);
      return res.data.message;
    } catch (err) {
      console.log("err:", err);
      return "error";
    }
  }
}

export default new DogService();