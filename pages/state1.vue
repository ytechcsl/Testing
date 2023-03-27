
<template>
    <div>
        Counter: {{ counter }}
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
        <br />
        <button @click="getData">Get Fingerprint</button>
    </div>
</template>

<script setup>
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-vue-v3";
const counter = useState("counter", () => Math.round(Math.random() * 1000));
const { data, error, isLoading, getData } = useVisitorData(
    { extendedResult: true },
    // Set to true to fetch data on mount
    { immediate: false }
);
onMounted(() => {
    getData();
});
watch(data, (currentData) => {
    if (currentData) {
        console.log("Current data ", currentData);
    }
});
</script>