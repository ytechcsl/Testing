
<template>
    <div>
        <input v-model="message" />
        <button @click="sendMessage" v-text="'Send'" />
        <button @click="eventSource" v-text="'Event Source'" />
        <pre v-html="content"></pre>
    </div>
</template>

<script setup>
function eventSource() {
    const eventSource = new EventSource("http://localhost:8080");
    eventSource.addEventListener("message", (event) => {
        console.log(event.data);
    });
}

// eventSource.close();
const { send } = useChatgpt();
const data = ref("");
const message = ref("");
async function sendMessage() {
    const response = await send(message.value);
    data.value = response;
}
const a = "";
const content =
    "\n\nTo use Express.js in Nuxt.js, you can follow the steps below:\n\n1. Install the necessary dependencies:\n\n<code>\nnpm install express express-session cookie-parser body-parser --save\n</code>\n\n2. Create a new file called `server.js` in the root of your project directory.\n\n3. In `server.js`, import Express.js and create a new instance of it:\n\n<code>\nconst express = require('express')\nconst app = express()\n</code>\n\n4. Define your Express.js routes and middlewares as usual.\n\n5. In `nuxt.config.js`, configure the serverMiddleware property to use your `server.js` file:\n\n```\nmodule.exports = {\n  serverMiddleware: [\n    '~/server.js'\n  ]\n}\n```\n\n6. Start your Nuxt.js app and your Express.js server:\n\n```\nnpm run dev\n```\n\nYour Nuxt.js app should now be running on port 3000, and your Express.js server should be running on the same port. You can now use Express.js to handle API requests or any other server-side functionality you need.";
</script>