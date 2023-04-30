<template>
    <div class="page">
        <div class="skills">
            <Chip v-for="skill in skills" :key="skill" :text="skill"></Chip>
        </div>
    </div>
</template>

<script setup lang="ts">
import Chip from './Chip.vue';
const skills = ['C#', 'ASP.NET Core', 'Entity Framework Core', 'MSSQL', 'PostgreSQL', 'JavaScript', 'TypeScript', 'Vue', 'HTML', 'CSS', 'Rust'];
</script>

<style lang="scss" scoped>
.page {
    width: calc(100% - 40px);
    padding: 20px;
}

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
</style>