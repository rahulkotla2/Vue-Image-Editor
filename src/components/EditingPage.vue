<template>
    <input type="checkbox" id="check">
    <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
        <header>My App</header>
        <ul>
            <li @click="toggleGeometric"><a href="#" class="geometric"><i class="fas fa-qrcode"></i>Geometric</a>
                <ul class="Subclass" v-if="transform === 'geometric'">
                    <li @click.stop="requestMaking" class="scaling">Transform</li>
                    <li @click.stop="requestMaking" class="rotation">Rotate</li>
                    <li @click.stop="requestMaking" class="translation">Translate</li>
                </ul>
            </li>
            <li @click="toggleGeometric"><a href="#" class="smoothing"><i class="fas fa-link"></i>Image Smoothing</a>
                <ul class="Subclass" v-if="transform === 'smoothing'">
                    <li @click.stop="requestMaking" class="average">Averaging</li>
                    <li @click.stop="requestMaking" class="gaussian">Gaussian</li>
                    <li @click.stop="requestMaking" class="median">Median</li>
                    <li @click.stop="requestMaking" class="bilateral">Bilateral</li>
                </ul>
            </li>
            <li @click="toggleGeometric"><a href="#" class="morphological"><i class="fas fa-stream"></i>Morphological</a>
                <ul class="Subclass" v-if="transform === 'morphological'">
                    <li @click.stop="requestMaking" class="erosion">Erosion</li>
                    <li @click.stop="requestMaking" class="dilation">Dilation</li>
                    <li @click.stop="requestMaking" class="opening">Opening</li>
                    <li @click.stop="requestMaking" class="closing">Closing</li>
                </ul>
            </li>
            <li @click="toggleGeometric"><a href="#" class="histogram"><i class="fas fa-calendar-week"></i>Histogram</a>
                <ul class="Subclass" v-if="transform === 'histogram'">
                    <li>Histogram</li>
                    <li>Eqalising</li>
                    <li>Thresholding</li>
                </ul>
            </li>
            <li><a href="#"><i class="fas fa-calendar-week"></i>Events</a></li>
            <li><a href="#"><i class="far fa-question-circle"></i>About</a></li>
            <li><a href="#"><i class="fas fa-sliders-h"></i>Services</a></li>
            <li><a href="#"><i class="far fa-envelope"></i>Contact</a></li>
        </ul>
    </div>
    <section>
        <div>
            <img :src="imageSrc" alt="">
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
            axios.get(`http://127.0.0.1:5000/${requestName}`).then((response) => {
                this.imageSrc = 'data:image/jpeg;base64,' + response.data.image
                console.log(response)
            });
        }
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
    font-size: 22px;
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
    padding-left: 50px;
}

.sidebar ul a i {
    margin-right: 16px;
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
    max-height: 800px;
    max-width: 1200px;
}

.Subclass li {
    font-size: 25px;
    color: white;
    transform: translateX(80px);
    margin: 5px;
    transition: all 0.2s ease-in;
}

.Subclass li:hover {
    transform: translateX(90px);
}
</style>