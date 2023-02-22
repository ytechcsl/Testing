<template>
    <div>
        <h1>Register page</h1>
        {{ auth.double }} <br />
        {{ auth.incrementTime }}
        <button type="button" @click="increment()">Click me</button>
    </div>
</template>

<script setup lang="ts">
import { useAuth } from "~/stores/auth";
definePageMeta({
    layout: "noauth",
    middleware: ["unauth"],
});

const auth = useAuth();
const increment = auth.increment;
</script>
