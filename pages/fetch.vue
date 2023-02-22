<template>
    <div>
        <h1>Fetch Data</h1>
        <button type="button" @click="backToHomePage">Back to home</button>
        <br />
        <el-row class="mb-4">
            <el-button>Default</el-button>
            <el-button type="primary" aria-label="12345">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
        </el-row>
        <el-form :model="form" label-width="120px">
            <el-form-item label="Activity name">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-select
                    v-model="form.region"
                    placeholder="please select your zone"
                >
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Activity time">
                <el-col :span="11">
                    <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="Pick a date"
                        style="width: 100%"
                    />
                </el-col>
                <el-col :span="2" class="text-center">
                    <span class="text-gray-500">-</span>
                </el-col>
                <el-col :span="11">
                    <el-time-picker
                        v-model="form.date2"
                        placeholder="Pick a time"
                        style="width: 100%"
                    />
                </el-col>
            </el-form-item>
            <el-form-item label="Instant delivery">
                <el-switch v-model="form.delivery" />
            </el-form-item>
            <el-form-item label="Activity type">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="Online activities" name="type" />
                    <el-checkbox label="Promotion activities" name="type" />
                    <el-checkbox label="Offline activities" name="type" />
                    <el-checkbox label="Simple brand exposure" name="type" />
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources">
                <el-radio-group v-model="form.resource">
                    <el-radio label="Sponsor" />
                    <el-radio label="Venue" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form">
                <el-input v-model="form.desc" type="textarea" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
        <el-skeleton />
        <br />
        <el-skeleton style="--el-skeleton-circle-size: 100px">
            <template #template>
                <el-skeleton-item variant="circle" />
            </template>
        </el-skeleton>
        <div class="demo-image">
            <div v-for="fit in fits" :key="fit" class="block">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                    style="width: 100px; height: 100px"
                    :src="url"
                    :fit="fit"
                    :alt="fit"
                />
            </div>
        </div>
        ------------------------------------------------------------
        <ul>
            <li v-for="(item, idx) in menus" :key="idx">
                {{ item.type }}
            </li>
        </ul>
        ------------------------------------------------------------
        <div
            v-for="(item, idx) in animals"
            :key="idx"
            style="border: 1px grey solid; margin-bottom: 8px; padding: 10px"
        >
            <h2 v-html="item.type"></h2>
            <p v-html="item.text"></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

import { useAnimal } from "~/stores/animal";
import { useAuth } from "~/stores/auth";
import { useTrick } from "~/stores/trick";
const animal = useAnimal();
const auth = useAuth();
const trick = useTrick();
definePageMeta({
    // middleware: ["auth"],
});

const form = reactive({
    name: "",
    region: "",
    date1: "",
    date2: "",
    delivery: false,
    type: [],
    resource: "",
    desc: "",
});
const fits = ["fill", "contain", "cover", "none", "scale-down"];
const url =
    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";

const menus = computed(() => auth.menus);
const animals = computed(() => animal.animals);
let serverTrick: boolean = false;
onMounted(async () => {
    console.log("Mounted working");
    console.log("serverTrick ", serverTrick);
    console.log("Pinia ", trick.animalServerTrick);
    if (trick.animalServerTrick) return trick.setAnimalServerTrick(false);
    const { data: aml } = await useFetch(
        () =>
            "https://cat-fact.herokuapp.com/facts/random?animal_type=cat,dog&amount=10"
    );
    console.log(aml);
    animal.setAnimals(aml.value);
    console.log(aml.value);
    console.log(animal.animals);
});

function onSubmit() {
    console.log(form);
    console.log("submit!");
}

const backToHomePage = () => {
    const router = useRouter();
    router.push("/");
};

// console.log("Start fetching");
if (process.server) {
    const { data: aml } = await useFetch(
        () =>
            "https://cat-fact.herokuapp.com/facts/random?animal_type=cat,dog&amount=10"
    );
    animal.setAnimals(aml.value);
    trick.setAnimalServerTrick(true);
    serverTrick = true;
    console.log("serverTrick ", serverTrick);
    console.log("Pinia ", trick.animalServerTrick);
}

// const { data: test } = await useFetch(() => "http://localhost:8000/testing", {
//     credentials: "include",
// });
// console.log(test);
// console.log("End fetching");
</script>


<style scoped>
.demo-image .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    display: inline-block;
    width: 20%;
    box-sizing: border-box;
    vertical-align: top;
}
.demo-image .block:last-child {
    border-right: none;
}
.demo-image .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}
</style>