<template>
    <div class="page">
        <div class="glitcher">
            <div ref="whiteBox" v-if="showWhiteBox" class="white-box">
                CLICK
            </div>
            <div ref="greenBox" v-if="showgreenBox" class="green-box"></div>
            <div class="glitch-box" v-show="showGlitchBox">
                <div class="glitch-line white">
                    <div ref="whiteGlitchBoxes" class="white-glitch-box" v-for="i in 16"></div>
                </div>
                <div class="glitch-line green">
                    <div ref="greenGlitchBoxes" class="green-glitch-box" v-for="i in 16"></div>
                </div>
            </div>
            <div ref="nameBlock" v-if="showName" class="name-block">
                <h1>
                    Hi, I'm Denis Azamatov
                </h1>
                <h2>
                    SOFTWARE DEVELOPER
                </h2>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap, { random, SteppedEase } from "gsap";
import { Bounce } from "gsap/all";
import { onMounted, ref } from "vue";
const showWhiteBox = ref(true);
const showgreenBox = ref(false);
const showGlitchBox = ref(false);
const showName = ref(false);

const whiteBox = ref<HTMLElement | null>(null);
const greenBox = ref<HTMLElement | null>(null);
const nameBlock = ref<HTMLElement | null>(null);
const whiteGlitchBoxes = ref<HTMLElement[] | null>(null);
const greenGlitchBoxes = ref<HTMLElement[] | null>(null);

onMounted(() => {
    const blink = gsap.to(whiteBox.value, { opacity: 0, duration: 1, ease: SteppedEase.config(1), repeat: -1 });
    whiteBox.value?.addEventListener('click', () => {
        blink.eventCallback('onRepeat', () => {
            blink.kill();
            let timeline = gsap.timeline()
                .to(whiteBox.value, { width: '380px', color: 'white', duration: 0.5, repeat: 0 })
                .add(() => { showgreenBox.value = true })
                .to(whiteBox.value, { height: '3rem', duration: 1, ease: Bounce.easeOut, repeat: 0 })
                .add(() => { showName.value = true })
                .add(() => { showWhiteBox.value = false; })
                .add(() => { showgreenBox.value = false })
                .add(() => { showGlitchBox.value = true; });

            whiteGlitchBoxes.value?.forEach(box => {
                timeline.to(box, { scaleY: gsap.utils.random(0.2, 1.5), duration: 0.2, repeat: 0 }, '<');
            })
            greenGlitchBoxes.value?.forEach(box => {
                timeline.to(box, { scaleY: gsap.utils.random(0.2, 1.5), duration: 0.2, repeat: 0 }, '<');
            })

            whiteGlitchBoxes.value?.slice(0, 1).forEach(box => {
                timeline.to(box, { scaleY: gsap.utils.random(0.2, 1.5), duration: 0.2, ease: SteppedEase.config(1), repeat: 0 });
            })

            whiteGlitchBoxes.value?.forEach(box => {
                timeline.to(box, { scaleY: gsap.utils.random(0.2, 1.5), duration: 0.2, ease: SteppedEase.config(1), repeat: 0 }, '<');
            })
            greenGlitchBoxes.value?.forEach(box => {
                timeline.to(box, { scaleY: gsap.utils.random(0.2, 1.5), duration: 0.2, ease: SteppedEase.config(1), repeat: 0 }, '<');
            })

            whiteGlitchBoxes.value?.slice(0, 1).forEach(box => {
                timeline.to(box, { scaleY: 0, duration: 0.2, ease: SteppedEase.config(1), repeat: 0 });
            })

            whiteGlitchBoxes.value?.forEach(box => {
                timeline.to(box, { scaleY: 0, duration: 0.2, ease: SteppedEase.config(1), repeat: 0 }, '<');
            })

            greenGlitchBoxes.value?.forEach(box => {
                timeline.to(box, { scaleY: 0, duration: 0.2, ease: SteppedEase.config(1), repeat: 0 }, '<');
            })
        })
    });
});
</script>

<style scoped lang="scss">
@import "../assets/style.scss";

.page {
    display: flex;
    justify-content: center;
    align-items: center;

    .glitcher {
        position: relative;
        width: 380px;
        height: 5rem;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }

    .name-block {
        position: absolute;
        user-select: none;
    }

    .white-glitch-box {
        width: 23.75px;
        height: 2rem;
        background: #FFF;
        z-index: 101;
        box-shadow: 0px 0px 100px;
    }

    .glitch-box {
        width: 380px;
        flex-wrap: wrap;
        display: flex;
    }

    .green-glitch-box {
        width: 23.75px;
        height: 2rem;
        background: $green;
        z-index: 100;
        box-shadow: 0px 0px 100px $green;
    }

    .glitch-line {
        display: flex;
        position: absolute;

        &.green {
            margin-top: 3rem;
        }
    }

    .white-box {
        user-select: none;
        color: $primary;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        width: 70px;
        height: 5rem;
        position: absolute;
        margin: auto;
        box-shadow: 0px 0px 100px white;
        cursor: pointer;
        z-index: 1;
    }

    .green-box {
        background-color: $green;
        width: 380px;
        top: 3rem;
        height: 2rem;
        position: absolute;
        margin: auto;
        box-shadow: 0px 0px 100px $green;
    }

    h1 {
        text-shadow: 0px 0px 20px;
    }

    h2 {
        color: $green;
        text-shadow: 0px 0px 20px;
    }
}
</style>