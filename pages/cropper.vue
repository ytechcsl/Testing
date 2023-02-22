<template>
    <div id="app">
        {{ image }}
        <cropper
            ref="cropperImg"
            class="cropper"
            @change="change"
            :src="image.src"
        />
        <div class="button-wrapper">
            <button class="button" @click="$refs.file.click()">
                <input
                    type="file"
                    ref="file"
                    @change="uploadImage($event)"
                    accept="image/*"
                />
                Upload image
            </button>
            <button class="button" @click="cropImage()">Crop image</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
const cropperImg: any = ref<HTMLInputElement | null>(null);
const image = reactive({
    src: "https://images.unsplash.com/photo-1619737307100-55b82496fcda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    type: "image/jpg",
});
const img = computed(() => image);
onUnmounted(() => {
    if (image.src) {
        URL.revokeObjectURL(image.src);
    }
});
function change(result: any) {
    console.log(result);
}
function cropImage() {
    console.log(cropperImg.value);
    const result = cropperImg.value.getResult();
    const newTab: any = window.open();
    newTab.document.body.innerHTML = `<img src="${result.canvas.toDataURL(
        image.type
    )}"></img>`;
}
function uploadImage(event: any) {
    /// Reference to the DOM input element
    const { files } = event.target;
    // Ensure that you have a file before attempting to read it
    if (files && files[0]) {
        // 1. Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
        if (image.src) {
            URL.revokeObjectURL(image.src);
        }
        // 2. Create the blob link to the file to optimize performance:
        const blob = URL.createObjectURL(files[0]);

        console.log("Working");
        // 3. Update the image. The type will be derived from the extension and it can lead to an incorrect result:
        Object.assign(image, {
            src: blob,
            type: files[0].type,
        });
        console.log(image);
    }
}
</script>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.cropper {
    max-height: 500px;
}

.button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 17px;
}

.button {
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    width: 100%;
    background: #151515;
    cursor: pointer;
    transition: background 0.5s;
    border: none;
    &:not(:last-of-type) {
        margin-right: 10px;
    }
    &:hover {
        background: #2f2f2f;
    }
    input {
        display: none;
    }
}
</style>
