<template>
    <input type="checkbox" id="check">
    <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
        <header>Image Editor</header>
        <ul>
            <li @click="toggleGeometric"><a href="#" class="display"><i class="fas fa-qrcode"></i>Display Image<i
                        class="fa-solid fa-angle-down" :class="toggleArrow('display')"></i></a>
                <transition>
                    <ul class="Subclass" v-if="transform === 'display'">
                        <li @click.stop="requestMaking" class="color">Color Image</li>
                        <li @click.stop="requestMaking" class="gray">Gray Scale</li>
                        <li @click.stop="requestMaking" class="binary">Binary Image</li>
                    </ul>
                </transition>
            </li>
            <li @click="toggleGeometric"><a href="#" class="geometric"><i class="fas fa-qrcode"></i>Geometric<i
                        class="fa-solid fa-angle-down" :class="toggleArrow('geometric')"></i></a>
                <transition>
                    <ul class="Subclass" v-if="transform === 'geometric'">
                        <li @click.stop="requestMaking" class="scale">Scaling</li>
                        <li @click.stop="requestMaking" class="rotation">Rotate</li>
                        <li @click.stop="requestMaking" class="translation">Translate</li>
                    </ul>
                </transition>
            </li>
            <li @click="toggleGeometric"><a href="#" class="smoothing"><i class="fas fa-link"></i>Image Smoothing<i
                        class="fa-solid fa-angle-down" :class="toggleArrow('smoothing')"></i></a>
                <transition>
                    <ul class="Subclass" v-if="transform === 'smoothing'">
                        <li @click.stop="requestMaking" class="average">Averaging</li>
                        <li @click.stop="requestMaking" class="gaussian">Gaussian</li>
                        <li @click.stop="requestMaking" class="median">Median</li>
                        <li @click.stop="requestMaking" class="bilateral">Bilateral</li>
                    </ul>
                </transition>
            </li>
            <li @click="toggleGeometric"><a href="#" class="morphological"><i class="fas fa-stream"></i>Morphological<i
                        class="fa-solid fa-angle-down" :class="toggleArrow('morphological')"></i></a>
                <transition>
                    <ul class="Subclass" v-if="transform === 'morphological'">
                        <li @click.stop="requestMaking" class="erosion">Erosion</li>
                        <li @click.stop="requestMaking" class="dilation">Dilation</li>
                        <li @click.stop="requestMaking" class="opening">Opening</li>
                        <li @click.stop="requestMaking" class="closing">Closing</li>
                    </ul>
                </transition>
            </li>
            <li @click="toggleGeometric"><a href="#" class="histogram"><i class="fas fa-calendar-week"></i>Histogram<i
                        class="fa-solid fa-angle-down" :class="toggleArrow('histogram')"></i></a>
                <transition>
                    <ul class="Subclass" v-if="transform === 'histogram'">
                        <li @click.stop="requestMaking" class="histogram">Histogram</li>
                        <li @click.stop="requestMaking" class="equalize">Eqalising</li>
                        <li @click.stop="requestMaking" class="threshold">Thresholding</li>
                    </ul>
                </transition>
            </li>
            <li @click="toggleGeometric"><a href="#" class="sharpening"><i class="fas fa-calendar-week"></i>Sharpening<i
                        class="fa-solid fa-angle-down" :class="toggleArrow('sharpening')"></i></a>
                <transition>
                    <ul class="Subclass" v-if="transform === 'sharpening'">
                        <li @click.stop="requestMaking" class="sharpen">Sharpen</li>
                        <li @click.stop="requestMaking" class="laplacian">Laplacian</li>
                    </ul>
                </transition>
            </li>
            <li @click="toggleGeometric"><a href="#" class="edge"><i class="fas fa-calendar-week"></i>Edge Detection<i
                        class="fa-solid fa-angle-down" :class="toggleArrow('edge')"></i></a>
                <transition>
                    <ul class="Subclass" v-if="transform === 'edge'">
                        <li @click.stop="requestMaking" class="prewitt">Prewitt</li>
                        <li @click.stop="requestMaking" class="sobel">Sobel</li>
                        <li @click.stop="requestMaking" class="robert">Robert</li>
                    </ul>
                </transition>
            </li>
            <li @click="toggleGeometric"><a href="#" class="frequency"><i class="fas fa-calendar-week"></i>Frequency
                    Filters<i class="fa-solid fa-angle-down" :class="toggleArrow('frequency')"></i></a>
                <transition>
                    <ul class="Subclass" v-if="transform === 'frequency'">
                        <li @click.stop="requestMaking" class="lowpass">Low Pass Filter</li>
                        <li @click.stop="requestMaking" class="highpass">High Pass Filter</li>
                    </ul>
                </transition>
            </li>
            <li @click="toggleGeometric"><a href="#" class="pointoperations"><i class="fas fa-calendar-week"></i>Point
                    Operations<i class="fa-solid fa-angle-down" :class="toggleArrow('pointoperations')"></i></a>
                <transition>
                    <ul class="Subclass" v-if="transform === 'pointoperations'">
                        <li @click.stop="requestMaking" class="negation">Negation</li>
                        <li @click.stop="requestMaking" class="identity">Identity</li>
                        <li @click.stop="requestMaking" class="cstretching">Contrast Stretching</li>
                        <li @click.stop="requestMaking" class="logtransform">Log Transform</li>
                        <li @click.stop="requestMaking" class="powerlaw">Power Law</li>
                    </ul>
                </transition>
            </li>
            <li @click="toggleGeometric"><a href="#" class="otherfeatures"><i class="fas fa-calendar-week"></i>Other
                    Features<i class="fa-solid fa-angle-down" :class="toggleArrow('otherfeatures')"></i></a>
                <transition>
                    <ul class="Subclass" v-if="transform === 'otherfeatures'">
                        <li @click.stop="requestMaking" class="watermark">Water Marking</li>
                        <li @click.stop="requestMaking" class="brightness">Brightness</li>
                        <li @click.stop="requestMaking" class="crop">Croping</li>
                        <li @click.stop="requestMaking" class="contrast">Contrast</li>
                    </ul>
                </transition>
            </li>
            <li><router-link to="/"><i class="far fa-envelope"></i> Revert</router-link></li>
        </ul>
    </div>
    <section>
        <div>
            <base-loader v-if="isLoading"></base-loader>
            <img :src="imageSrc" alt="" v-else ref="image">
        </div>
        <download-btn></download-btn>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    provide(){
        return {
            downloadClick : this.downloadClick
        }
    },
    data() {
        return {
            transform: 'display',
            imageSrc: null,
            isLoading: false,
        }
    },
    methods: {
        toggleGeometric(event) {
            if (event.target.tagName == 'A') {
                if (this.transform === event.target.className) {
                    // console.dir(event.target.className)
                    this.transform = false;
                } else {
                    this.transform = event.target.className
                }
            }
            console.log(this.transform)
        },
        requestMaking(event) {
            const requestName = event.target.className;
            this.isLoading = true,
                axios.get(`http://127.0.0.1:5000/${requestName}`).then((response) => {
                    this.imageSrc = 'data:image/jpeg;base64,' + response.data.image
                    this.isLoading = false;
                });
        },
        toggleArrow(value) {
            return this.transform === value ? 'active' : false
        },
        downloadClick(downloadImage){
         downloadImage(this.$refs.image)
        }
    },
    created() {
        this.isLoading = true;
        axios.get(`http://127.0.0.1:5000/color`).then((response) => {
            this.imageSrc = 'data:image/jpeg;base64,' + response.data.image
            console.log(response);
            this.isLoading = false;
        });
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');

* {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
}

.active {
    transform: rotate(180deg);
}

.sidebar {
    position: fixed;
    left: -400px;
    /* top: 0; */
    width: 400px;
    height: 100%;
    background: #042331;
    transition: all .5s ease;
    overflow-y: scroll;
}

* {
    scrollbar-width: thin;
    scrollbar-color: #242424 #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
    width: 10px;
}

*::-webkit-scrollbar-track {
    background: #ffffff;
}

*::-webkit-scrollbar-thumb {
    background-color: #242424;
    border-radius: 13px;
    border: 3px solid #ffffff;
}

.sidebar header {
    font-size: 30px;
    color: white;
    line-height: 70px;
    text-align: center;
    background: #063146;
    text-align: left;
    padding-left: 20px;
    user-select: none;
}

.sidebar ul a {
    display: block;
    height: 100%;
    width: 100%;
    line-height: 65px;
    font-size: 25px;
    color: white;
    padding-left: 40px;
    box-sizing: border-box;
    border-bottom: 1px solid black;
    border-top: 1px solid rgba(255, 255, 255, .1);
    transition: .4s;
}

ul li:hover a {
    position: relative;
    padding-left: 50px;
}

.sidebar ul a .fas {
    margin-right: 16px;
}

.sidebar ul a .fa-solid {
    position: absolute;
    margin-top: 20px;
    right: 50px;
    transition: all 0.3s ease-in;
}

#check {
    display: none;
}

label #btn,
label #cancel {
    position: absolute;
    background: #042331;
    border-radius: 3px;
    cursor: pointer;
}

label #btn {
    left: 40px;
    top: 25px;
    font-size: 35px;
    color: white;
    padding: 6px 12px;
    transition: all .5s;
}

label #cancel {
    z-index: 1111;
    left: -195px;
    top: 17px;
    font-size: 30px;
    color: #0a5275;
    padding: 4px 9px;
    transition: all .5s ease;
}

#check:checked~.sidebar {
    left: 0;
    /* top: 0; */
}

#check:checked~label #btn {
    left: 250px;
    opacity: 0;
    pointer-events: none;
}

#check:checked~label #cancel {
    left: 340px;
}

#check:checked~section {
    margin-left: 400px;
}

section {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    transition: all .5s;
}

/* section div {
    width: 1200px;
    height: 800px;
} */

img {
    max-height: 900px;
    max-width: 1400px;
}

.Subclass li {
    font-size: 25px;
    color: white;
    transform: translateX(80px);
    margin: 10px;
    transition: all 0.2s ease-in;
}

.Subclass li:hover {
    transform: translateX(90px);
}

/* Vue Transition */
.v-enter-active {
    transition: all 0.3s ease-in;
}

.v-enter-from {
    transform: translateY(-50px);
    opacity: 0
}

.v-enter-to {
    transform: translateY(0);
    opacity: 1;
}
</style>