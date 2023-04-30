<template>
    <div @click="changeColor" :style="{ 'background-color': color }" class="chip">
        {{ text ?? 'sss' }}
    </div>
</template>
vbin
<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ text: String }>()
const colors = ['#84D2C5', '#B05A7A', '#E4C988', '#C27664']
const color = ref(colors[Math.round(Math.random() * 3)]);

function changeColor() {
    const idx = Math.round(Math.random() * 3);
    color.value = colors[idx != colors.indexOf(color.value) ? idx : idx + 1 % colors.length]
}
</script>

<style scoped lang="scss">
@import '../assets/_variables.scss';

.chip {
    background-color: $red;
    max-width: 20rem;
    padding-block: 10px;
    padding-inline: 20px;
    border-radius: 15px;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
}

.chip:hover {
    box-shadow: 0px 0px 20px v-bind(color);
    transition: all .5s;
    animation: glow 2s infinite ;
    animation-delay: 1s;
    animation-direction: alternate;
}

@keyframes glow {
    0% {
        box-shadow: 0px 0px 20px v-bind(color);
    }

    20% {
        box-shadow: 0px 0px 22px v-bind(color);
    }

    45% {
        box-shadow: 0px 0px 18px v-bind(color);
    }

    71% {
        box-shadow: 0px 0px 15px v-bind(color);
    }

    100% {
        box-shadow: 0px 0px 10px v-bind(color);
    }
}
</style>