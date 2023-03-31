<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup lang="ts">
import "highlight.js/styles/solarized-light.css";
</script>
<style>
.hljs {
    color: #a7b6d2 !important;
    background: #282c34 !important;
}
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>