<template>
    <input type="checkbox" id="check">
    <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
        <header>My App</header>
        <ul>
            <li @click="toggleGeometric"><a href="#"><i class="fas fa-qrcode geometric"></i>Geometric</a>
                <ul class="Subclass" v-if="geometric">
                    <li>Transform</li>
                    <li>Translate</li>
                    <li>Rotate</li>
                </ul>
            </li>
            <li><a href="#"><i class="fas fa-link"></i>Shortcuts</a></li>
            <li><a href="#"><i class="fas fa-stream"></i>Overview</a></li>
            <li><a href="#"><i class="fas fa-calendar-week"></i>Events</a></li>
            <li><a href="#"><i class="far fa-question-circle"></i>About</a></li>
            <li><a href="#"><i class="fas fa-sliders-h"></i>Services</a></li>
            <li><a href="#"><i class="far fa-envelope"></i>Contact</a></li>
        </ul>
    </div>
    <section>
        <img src="../assets/PreviewImg.jpg" alt="">
    </section>
</template>

<script>
export default {
    data() {
        return {
            geometric: true,
        }
    },
    methods: {
        toggleGeometric(event) {
            console.log(event.target.tagName)
            if (event.target.tagName == 'A') {
                this.geometric = !this.geometric;
            }
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

img {
    width: 1200px;
    height: 700px;
}

.Subclass li {
    font-size: 20px;
    color: white;
    transform: translateX(80px);
    margin: 5px;
    transition: all 0.2s ease-in;
}

.Subclass li:hover{
    transform: translateX(90px);
}
</style>