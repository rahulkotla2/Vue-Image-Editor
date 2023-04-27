<template>
    <input type="checkbox" id="check">
    <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
        <header>Image Editor</header>
        <ul>
            <li @click="toggleGeometric"><a href="#" class="geometric"><i class="fas fa-qrcode"></i>Geometric<i
                        class="fa-solid fa-angle-down" :class="toggleArrow('geometric')"></i></a>
                <transition>
                    <ul class="Subclass" v-if="transform === 'geometric'">
                        <li @click.stop="requestMaking" class="scaling">Transform</li>
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
            <li><a href="#"><i class="fas fa-calendar-week"></i>Events</a></li>
            <li><a href="#"><i class="far fa-question-circle"></i>About</a></li>
            <li><a href="#"><i class="fas fa-sliders-h"></i>Services</a></li>
            <li><a href="#"><i class="far fa-envelope"></i>Contact</a></li>
        </ul>
    </div>
    <section>
        <div>
            <base-loader v-if="isLoading"></base-loader>
            <img :src="imageSrc" alt="" v-else>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            transform: 'geometric',
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
                    console.log(response)
                    this.isLoading = false;
                });
        },
        toggleArrow(value) {
            return this.transform === value ? 'active' : false
        }
    },
    created() {
        this.isLoading = true;
        axios.get(`http://127.0.0.1:5000/image`).then((response) => {
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
}

.sidebar header {
    font-size: 30px;
    color: white;
    line-height: 70px;
    text-align: center;
    background: #063146;
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
    left: 350px;
}

#check:checked~section {
    margin-left: 400px;
}

section {
    display: flex;
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
.v-enter-active,
.v-leave-active {
    transition: all 0.3s ease-in;
}

.v-enter-from,
.v-leave-to {
    transform: translateY(-50px);
    opacity: 0
}

.v-enter-to,
.v-leave-from {
    transform: translateY(0);
    opacity: 1;
}
</style>