<template>
    <div class="page">
        <div ref="overlay" v-if="showOverlay" class="overlay">
            <div ref="startBtn" @click="play" class="btn-start">START</div>
        </div>
        <div ref="wrapper" class="wrapper">
            <video @loadeddata="loaded" ref="video" src="../assets/Welcome.mp4" type="video/mp4" loop muted disable-picture-in-picture="true"></video>
        </div>
        <div class="link">
            Video source: <a href="https://www.youtube.com/watch?v=UQntOAp-gsw">https://www.youtube.com/watch?v=UQntOAp-gsw</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
const video = ref<HTMLVideoElement | null>(null);
const wrapper = ref<HTMLElement | null>(null);
const overlay = ref<HTMLElement | null>(null);
const startBtn = ref<HTMLElement | null>(null);
const scrollWidth = ref(0);
const scrollHeight = ref(0);
const firstTime = ref(true);

const showOverlay = ref(true);

onMounted(() => {
    const width = (video.value?.clientWidth ?? 0) - (wrapper.value?.clientWidth ?? 0);
    const height = (video.value?.clientHeight ?? 0) - (wrapper.value?.clientHeight ?? 0);
    scrollWidth.value = width;
    scrollHeight.value = height;
    wrapper.value?.scroll({ left: width / 2, top: height / 1.5 })
})

function loaded() {
    if (!startBtn.value) {
        setTimeout(loaded, 1000);
        return;
    }
    gsap.to(startBtn.value, { opacity: 1, translateY: 0, duration: 1 });
}

function play() {
    gsap.to(overlay.value, { opacity: 0, duration: 0.5 }).eventCallback('onComplete', () => {
        showOverlay.value = false
    });
    window.onmousemove = scroll;
    window.ondeviceorientation = touch;
    video.value?.play();
}

function scroll(event: MouseEvent) {
    const x = event.clientX;
    const xPercentage = x / (wrapper.value?.clientWidth ?? 0);
    const scrollX = xPercentage * scrollWidth.value;

    const y = event.clientY;
    const yPercentage = y / (wrapper.value?.clientHeight ?? 0);
    const scrollY = yPercentage * scrollHeight.value;
    gsap.to(wrapper.value, { scrollTo: { y: scrollY * 1.5, x: scrollX }, duration: 0.5 });
}

function touch(event: DeviceOrientationEvent) {
    if (firstTime.value) {
        firstTime.value = false;
        return;
    }

    // const x = 100 - (gsap.utils.clamp(80, 100, event.beta ?? 0) - 80) * 5;
    // const scrollX = x * (scrollHeight.value / 100);

    const y = 100 - (gsap.utils.clamp(-40, 40, event.gamma ?? 0) + 40) * 5;
    const scrollY = y * (scrollWidth.value / 100);

    gsap.to(wrapper.value, { scrollTo: { x: scrollY}, duration: 0.5 });
}

</script>
 
<style lang="scss" scoped>
video {
    width: 120%;
    display: block;
}

@media screen and (max-width:820px) {
    video {
        width: unset;
        height: 120%;
        display: block;
    }
}

.overlay {
    background-color: rgb(0, 0, 0, 0.5);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-start {
    border: 2px solid white;
    padding: 10px;
    cursor: pointer;
    opacity: 0;
    transform: translateY(30px);
}

a:link {
    text-decoration: underline;
    color: inherit;
}

a:visited {
    text-decoration: underline;
    color: inherit;
}

.link {
    padding: 20px;
}

.wrapper {
    overscroll-behavior: none;
    width: 100%;
    height: 100%;
    overflow: scroll;
    position: relative;
}
</style>