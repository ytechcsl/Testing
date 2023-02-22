<template>
    <div>
        <h1>Fetch Data</h1>
        <button type="button" @click="backToHomePage">Back to home</button>
        <br />
        <div>
            <van-button type="primary">Primary</van-button>
            <van-button type="success">Success</van-button>
            <van-button type="default">Default</van-button>
            <van-button type="danger">Danger</van-button>
            <van-button type="warning">Warning</van-button>
        </div>
        <van-form @submit="onSubmit">
            {{ form.username }} {{ form.password }}
            <van-cell-group inset>
                <van-field
                    v-model="form.username"
                    name="Username"
                    label="Username"
                    placeholder="Username"
                    :rules="[
                        { required: true, message: 'Username is required' },
                    ]"
                />
                <van-field
                    v-model="form.password"
                    type="password"
                    name="Password"
                    label="Password"
                    placeholder="Password"
                    :rules="[
                        { required: true, message: 'Password is required' },
                    ]"
                />
            </van-cell-group>
            <div style="margin: 16px">
                <van-button round block type="primary" native-type="submit">
                    Submit
                </van-button>
            </div>
        </van-form>
        <van-form @failed="onFailed">
            <van-cell-group inset>
                <van-field
                    v-model="value1"
                    name="pattern"
                    placeholder="Use pattern"
                    :rules="[{ pattern, message: 'Error message' }]"
                />
                <van-field
                    v-model="value2"
                    name="validator"
                    placeholder="Use validator"
                    :rules="[{ validator, message: 'Error message' }]"
                />
                <van-field
                    v-model="value3"
                    name="validatorMessage"
                    placeholder="Use validator to return message"
                    :rules="[{ validator: validatorMessage }]"
                />
                <van-field
                    v-model="value4"
                    name="asyncValidator"
                    placeholder="Use async validator"
                    :rules="[
                        { validator: asyncValidator, message: 'Error message' },
                    ]"
                />
                <van-field name="switch" label="Switch">
                    <template #input>
                        <van-switch v-model="checked" />
                    </template>
                </van-field>
                <van-field name="checkbox" label="Checkbox">
                    <template #input>
                        <van-checkbox v-model="checked1" shape="square" />
                    </template>
                </van-field>
                <van-field name="checkboxGroup" label="CheckboxGroup">
                    <template #input>
                        <van-checkbox-group
                            v-model="groupChecked"
                            direction="horizontal"
                        >
                            <van-checkbox name="1" shape="square"
                                >Checkbox 1</van-checkbox
                            >
                            <van-checkbox name="2" shape="square"
                                >Checkbox 2</van-checkbox
                            >
                        </van-checkbox-group>
                    </template>
                </van-field>
                <van-field name="radio" label="Radio">
                    <template #input>
                        <van-radio-group
                            v-model="checked2"
                            direction="horizontal"
                        >
                            <van-radio name="1">Radio 1</van-radio>
                            <van-radio name="2">Radio 2</van-radio>
                        </van-radio-group>
                    </template>
                </van-field>
                <van-field name="stepper" label="Stepper">
                    <template #input>
                        <van-stepper v-model="value5" aria-label="setper" />
                    </template>
                </van-field>
                <van-field name="rate" label="Rate">
                    <template #input>
                        <van-rate v-model="value6" />
                    </template>
                </van-field>
                <van-field name="uploader" label="Uploader">
                    <template #input>
                        <van-uploader v-model="value7" alt="image" />
                    </template>
                </van-field>
                <van-field
                    v-model="result"
                    is-link
                    readonly
                    name="picker"
                    label="Picker"
                    placeholder="Select city"
                    @click="showPicker = true"
                />
                <van-popup v-model:show="showPicker" position="bottom">
                    <van-picker
                        :columns="columns"
                        @confirm="onConfirm"
                        @cancel="showPicker = false"
                    />
                </van-popup>
                <van-field
                    v-model="result1"
                    is-link
                    readonly
                    name="datePicker"
                    label="Date Picker"
                    placeholder="Select date"
                    @click="showPicker1 = true"
                />
                <van-popup v-model:show="showPicker1" position="bottom">
                    <van-date-picker
                        @confirm="onConfirm1"
                        @cancel="showPicker1 = false"
                    />
                </van-popup>
            </van-cell-group>
            <div style="margin: 16px">
                <van-button round block type="primary" native-type="submit">
                    Submit
                </van-button>
            </div>
        </van-form>

        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in images1" :key="image">
                <van-image :src="image" alt="img" />
            </van-swipe-item>
        </van-swipe>

        <div class="demo-image">
            <div v-for="fit in fits" :key="fit" class="block">
                <span class="demonstration">{{ fit }}</span>
                <van-image
                    width="100%"
                    height="100%"
                    :src="url"
                    fit="contain"
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
import { useAnimal } from "~/stores/animal";
import { useAuth } from "~/stores/auth";
import { useTrick } from "~/stores/trick";

const animal = useAnimal();
const auth = useAuth();
const trick = useTrick();
definePageMeta({
    // middleware: ["auth"],
});

const images1 = [
    "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
    "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
    "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
    "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
    "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
    "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
    "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
    "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
    "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
    "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
];

const form = ref({
    username: "",
    password: "",
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

const value1 = ref("");
const value2 = ref("");
const value3 = ref("abc");
const value4 = ref("");
const pattern = /\d{6}/;
const checked = ref(false);
const checked1 = ref(false);
const groupChecked = ref([]);
const checked2 = ref("1");
const value5 = ref(1);
const value6 = ref(3);
const value7 = ref([
    { url: "https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg" },
]);

const result = ref("");
const showPicker = ref(false);
const columns = [
    { text: "Delaware", value: "Delaware" },
    { text: "Florida", value: "Florida" },
    { text: "Georqia", value: "Georqia" },
    { text: "Indiana", value: "Indiana" },
    { text: "Maine", value: "Maine" },
];

const onConfirm = ({ selectedOptions }: any) => {
    result.value = selectedOptions[0]?.text;
    showPicker.value = false;
};

const result1 = ref("");
const showPicker1 = ref(false);
const onConfirm1 = ({ selectedValues }: any) => {
    result.value = selectedValues.join("/");
    showPicker.value = false;
};

const validator = (val: any) => /1\d{10}/.test(val);

const validatorMessage = (val: any) => `${val} is invalid`;

const asyncValidator = (val: any) =>
    new Promise((resolve) => {
        showLoadingToast("Validating...");

        setTimeout(() => {
            closeToast();
            resolve(val === "1234");
        }, 1000);
    });

const onFailed = (errorInfo: any) => {
    console.log("failed", errorInfo);
};
</script>


<style scoped>
.demo-image .block {
    padding: 30px;
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