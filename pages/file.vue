<template>
    <div>
        <input type="file" name="nFile" id="iFile" @change="browseFile" />
        <button type="button" @click="submitForm">Upload file</button>
    </div>
</template>

<script lang="ts" setup>
import axios from "axios";
let fileInfo: any = null;
function browseFile(evt: any) {
    fileInfo = evt.target?.files[0];
    console.log(evt.target?.files[0]);
}
async function submitForm() {
    const formData = new FormData();
    formData.append("image", fileInfo, fileInfo.name);
    console.log(formData);
    // const result = await (
    //     await axios.post("/api/user", formData, {
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //         },
    //     })
    // ).data;
    const result = await $fetch("/api/user", {
        // headers: {
        //     "Content-Type": "multipart/form-data",
        // },
        method: "POST",
        body: formData,
    });
    console.log(result);
}
</script>