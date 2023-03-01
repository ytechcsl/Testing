<template>
    <div>
        <h1>Sorry, Something went wrong please try again after five mimutes</h1>
        <div>{{ props }}</div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    error: Object,
});
</script>