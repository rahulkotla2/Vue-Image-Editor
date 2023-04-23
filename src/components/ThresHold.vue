/* eslint-disable */
<template>
    <div>
        <img v-for="(image, index) in images" :key="index" :src="image" />
    </div>
</template>
  
<script>
import axios from 'axios'
export default {
    data() {
        return {
            images: []
        };
    },
    mounted() {
        // Make a request to the Flask server to get the list of images
        axios.get('http://localhost:5000/thresh')
            .then(response => {
                // Decode the images and add them to the list
                this.images = response.data.images.map(image => 'data:image/jpeg;base64,' + image.data);
                console.log(response)
            })
            .catch(error => console.log(error));
    }
};
</script>