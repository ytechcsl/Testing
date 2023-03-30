<template>
    <div class="container mx-auto px-2">
        <div class="flex justify-center">
            <div class="max-w-[500px] w-full">
                <van-form @submit="onSubmit">
                    <label for="idUsername">Username</label>
                    <div class="ring-1 rounded-sm ring-black/5 mb-2">
                        <van-field
                            id="idUsername"
                            v-model="form.username"
                            name="Username"
                            placeholder="Username"
                            :rules="[
                                {
                                    required: true,
                                    message: 'Username is required',
                                },
                            ]"
                        />
                    </div>
                    <label for="idPassword">Password</label>
                    <div class="ring-1 rounded-sm ring-black/5 mb-2">
                        <van-field
                            id="idPassword"
                            v-model="form.password"
                            type="password"
                            name="Password"
                            placeholder="Password"
                            :rules="[
                                {
                                    required: true,
                                    message: 'Password is required',
                                },
                            ]"
                        />
                    </div>
                    <div>
                        <van-button type="primary" block @click="showModal">
                            Login
                        </van-button>
                    </div>
                </van-form>
            </div>
        </div>
        <div>
            <van-cell-group inset class="ring-1 ring-black/5">
                <van-cell
                    v-for="n in 5"
                    :key="n"
                    @click="doClick(n)"
                    :title="'Text item ' + (n + 1)"
                    value="Content"
                    clickable
                />
            </van-cell-group>
        </div>
        <van-dialog v-model:show="show" title="Title" show-cancel-button>
            <img
                src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg"
            />
        </van-dialog>
    </div>
</template>

<script lang="ts" setup>
import { showConfirmDialog } from "vant";

const form = ref({
    username: "",
    password: "",
});
const show = ref(false);

onMounted(() => {
    // const { csrf } = useCsrf();
    // console.log(csrf);
});

function onSubmit() {
    console.log(form);
    console.log("submit!");
}
function showModal() {
    showConfirmDialog({
        title: "Title",
        messageAlign: "left",
        message: "Content",
        cancelButtonColor: "red",
    })
        .then(() => {
            // on confirm
        })
        .catch(() => {
            // on cancel
        });
}
function doClick(n: number) {
    console.log(n);
}
</script>
