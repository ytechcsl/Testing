<template>
    <div>
        <h1>Home page</h1>
        {{ token }}
        <div>
            {{ foo }}
        </div>
        <div>
            {{ bar }}
        </div>
        <button type="button" @click="goToFetchPage">Go to fetch</button>
        <button type="button" @click="gotoEditor">Editor</button>
        <button type="button" @click="gotoCropper">Cropper JS</button>

        <el-row class="mb-4">
            <el-button @click="fetchIP">Fetch IP</el-button>
            <el-button type="primary" @click="fetchUser">Fetch user</el-button>
            <el-button type="success" @click="changePage('/map')">
                Go to map
            </el-button>
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
                    style="width: 100%"
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
        <button class="primary">Test</button>
        <div>
            <img
                class="float-left mx-4"
                width="100"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
            />
            <!-- <img
                class="float-right mx-4"
                width="100"
                :src="'/api/user/image'"
            /> -->
            <p class="clear-none text-justify">
                Maybe we can live without libraries, people like you and me.
                Maybe. Sure, we're too old to change the world, but what about
                that kid, sitting down, opening a book, right now, in a branch
                at the local library and finding drawings of pee-pees and
                wee-wees on the Cat in the Hat and the Five Chinese Brothers?
                Doesn't HE deserve better? Look. If you think this is about
                overdue fines and missing books, you'd better think again. This
                is about that kid's right to read a book without getting his
                mind warped! Or: maybe that turns you on, Seinfeld; maybe that's
                how y'get your kicks. You and your good-time buddies. Maybe we
                can live without libraries, people like you and me. Maybe. Sure,
                we're too old to change the world, but what about that kid,
                sitting down, opening a book, right now, in a branch at the
                local library and finding drawings of pee-pees and wee-wees on
                the Cat in the Hat and the Five Chinese Brothers? Doesn't HE
                deserve better? Look. If you think this is about overdue fines
                and missing books, you'd better think again. This is about that
                kid's right to read a book without getting his mind warped! Or:
                maybe that turns you on, Seinfeld; maybe that's how y'get your
                kicks. You and your good-time buddies. Maybe we can live without
                libraries, people like you and me. Maybe. Sure, we're too old to
                change the world, but what about that kid, sitting down, opening
                a book, right now, in a branch at the local library and finding
                drawings of pee-pees and wee-wees on the Cat in the Hat and the
                Five Chinese Brothers? Doesn't HE deserve better? Look. If you
                think this is about overdue fines and missing books, you'd
                better think again. This is about that kid's right to read a
                book without getting his mind warped! Or: maybe that turns you
                on, Seinfeld; maybe that's how y'get your kicks. You and your
                good-time buddies. Maybe we can live without libraries, people
                like you and me. Maybe. Sure, we're too old to change the world,
                but what about that kid, sitting down, opening a book, right
                now, in a branch at the local library and finding drawings of
                pee-pees and wee-wees on the Cat in the Hat and the Five Chinese
                Brothers? Doesn't HE deserve better? Look. If you think this is
                about overdue fines and missing books, you'd better think again.
                This is about that kid's right to read a book without getting
                his mind warped! Or: maybe that turns you on, Seinfeld; maybe
                that's how y'get your kicks. You and your good-time buddies.
                Maybe we can live without libraries, people like you and me.
                Maybe. Sure, we're too old to change the world, but what about
                that kid, sitting down, opening a book, right now, in a branch
                at the local library and finding drawings of pee-pees and
                wee-wees on the Cat in the Hat and the Five Chinese Brothers?
                Doesn't HE deserve better? Look. If you think this is about
                overdue fines and missing books, you'd better think again. This
                is about that kid's right to read a book without getting his
                mind warped! Or: maybe that turns you on, Seinfeld; maybe that's
                how y'get your kicks. You and your good-time buddies. Maybe we
                can live without libraries, people like you and me. Maybe. Sure,
                we're too old to change the world, but what about that kid,
                sitting down, opening a book, right now, in a branch at the
                local library and finding drawings of pee-pees and wee-wees on
                the Cat in the Hat and the Five Chinese Brothers? Doesn't HE
                deserve better? Look. If you think this is about overdue fines
                and missing books, you'd better think again. This is about that
                kid's right to read a book without getting his mind warped! Or:
                maybe that turns you on, Seinfeld; maybe that's how y'get your
                kicks. You and your good-time buddies. Maybe we can live without
                libraries, people like you and me. Maybe. Sure, we're too old to
                change the world, but what about that kid, sitting down, opening
                a book, right now, in a branch at the local library and finding
                drawings of pee-pees and wee-wees on the Cat in the Hat and the
                Five Chinese Brothers? Doesn't HE deserve better? Look. If you
                think this is about overdue fines and missing books, you'd
                better think again. This is about that kid's right to read a
                book without getting his mind warped! Or: maybe that turns you
                on, Seinfeld; maybe that's how y'get your kicks. You and your
                good-time buddies.
            </p>
        </div>
        <div>
            <button type="button" @click="setLogoutCookie">Logout</button>
        </div>
        <Testing />
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
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

const foo = useFoo();
const bar = useBar();
let token;

onMounted(async () => {
    token = useCookie<string>("token");
    const data: any = await $fetch(
        "https://www.cloudflare.com/cdn-cgi/trace?format=json"
    );
    console.log(data);
    console.log(
        JSON.parse(
            `{"` +
                data?.replaceAll("=", `":"`)?.replaceAll("\n", `","`) +
                `subfix":""}`
        )
    );
});

async function fetchIP() {
    const data: any = await $fetch("/api/iparea", {
        headers: {
            btoken: useBcrypt(),
            "User-Agent": "User-Agent haha",
        },
    });
    const area = useCookie<string>("area");
    console.log(data);
}
async function fetchUser() {
    const data: any = await $fetch("/api/user", {
        headers: {
            btoken: useBcrypt(),
        },
    });
    console.log(data);
}

function onSubmit() {
    console.log(form);
    console.log("submit!");
}

function gotoEditor() {
    const router = useRouter();
    router.push({ path: "/editor" });
}
function gotoCropper() {
    const router = useRouter();
    router.push({ path: "/cropper" });
}
function changePage(path: string) {
    const router = useRouter();
    router.push({ path: path });
}

function setLogoutCookie() {
    const token = useCookie<string>("token");
    token.value = null;
    const router = useRouter();
    router.push({ path: "/login" });
}
function goToFetchPage() {
    const router = useRouter();
    router.push({ path: "/fetch" });
}
</script>