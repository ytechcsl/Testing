<template>
    <div>
        <GoogleMap
            api-key="AIzaSyBXoeOmRRzSl0b4iUBadAz8M-_Zva0DpfQ"
            style="width: 100%; height: 800px"
            :center="center"
            :zoom="15"
        >
            <Marker :options="{ position: center }" />
        </GoogleMap>
    </div>
</template>

<script lang="ts" setup>
import { GoogleMap, Marker } from "vue3-google-map";
import { useSetting } from "~/stores/setting";
const setting = useSetting();
const center = computed(() => setting.cLocation);
console.log(center, setting.cLocation);
</script>