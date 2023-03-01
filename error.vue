<template>
    <div class="px-5 pt-5">
        <h1>Sorry, Something went wrong please try again after 30 seconds</h1>
        <!-- <div>{{ props }}</div> -->
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    error: Object,
});
</script>