<template>
  <!-- <input type="file" ref="image" @change="uploadImage"> -->

  <div class="wrapper">
    <img :src="imageSrc" alt="Example Image">
    <div class="drag-container">
      <input type="file" class="drag-input" id="file-input" ref="image" @change="uploadImage">
      <label for="file-input" class="drag-label">Drag and drop or click to select a file</label>
    </div>
  </div>
</template>

<script>
import myImage from '../assets/PreviewImg.jpg'
import axios from 'axios'
export default {
  data() {
    return {
      imageSrc: myImage,
      imageLoaded: false,
    };
  },
  methods: {
    uploadImage() {
      //Image Pushing (POST Request)
      const formData = new FormData();
      formData.append('image', this.$refs.image.files[0]);
      axios.post('http://localhost:5000/upload_image', formData, { responseType: 'arraybuffer' })
        .then(response => {
          console.log(response);
          this.requestImage(); //calling requestImage
        })
        .catch(error => {
          console.log(error);
        });
    },
    requestImage() {
      axios.get('http://127.0.0.1:5000/image').then((response) => {
        this.imageSrc = 'data:image/jpeg;base64,' + response.data.image
        console.log(response)
      });
    }
  },
}
</script>

<style>
img {
  width: 80%;
  height: 500px;
  border-radius: 20px;
}

.wrapper {
  position: absolute;
  width: 70vw;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 60px;
  border-radius: 20px;
  background-color: #2196F3;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.drag-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 600px;
  border: 2px dashed #ccc;
  border-radius: 10px;
  margin-top: 30px;
}

.drag-input {
  opacity: 0;
  position: absolute;
  z-index: -1;
}

.drag-label {
  font-size: 20px;
  color: #444;
  text-align: center;
  cursor: pointer;
}

.drag-container:hover {
  border-color: #666;
}

.drag-container.dragging {
  border-color: #2196F3;
}

.drag-label:hover {
  color: #2196F3;
}

.drag-label:active {
  color: #fff;
  background-color: #2196F3;
}
</style>