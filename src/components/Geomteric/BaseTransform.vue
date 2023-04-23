<template>
    <div>
        <img :src="OriginalImage" alt="Example Image">
        <img :src="imageSrc" alt="Example Image">
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: ["id"],
    data() {
        return {
            imageSrc: '',
            OriginalImage: ''
        };
    },
    methods: {
        LoadImage(id) {
            axios.get(`http://127.0.0.1:5000/geometric/${id}`).then((response) => {
                this.imageSrc = 'data:image/jpeg;base64,' + response.data.image;
                this.OriginalImage = 'data:image/jpeg;base64,' + response.data.OriginalImage;
                console.log(response)
            })
        }
    },
    mounted() {
        this.LoadImage(this.id);
    },
    beforeRouteUpdate(to, from) {
        if (to.params.id != from.params.id) {
            this.LoadImage(to.params.id);
        }
    },
}
</script>
<style scoped>
img {
    height: 600px;
    width: 600px;
    background-size: cover;
    margin-right: 30px;
}
</style>