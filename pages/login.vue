<template>
    <div>
        <h1>Login page</h1>
        <button type="button" @click="setLoginCookie">Login</button>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "noauth",
    middleware: ["unauth"],
});

function setLoginCookie() {
    const token = useCookie<string>("token");
    token.value = "3949384934893849";
    const router = useRouter();
    router.push({ path: "/" });
}
</script>
