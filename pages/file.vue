<template>
    <div>
        <input type="file" name="nFile" id="iFile" @change="browseFile" />
        <button type="button" @click="submitForm">Upload file</button>
        <pre class="px-4 rounded-md"> <code class="hljs javascript">javascript
router.<span class="hljs-title function_">get</span>(<span class="hljs-string">'/'</span>, <span class="hljs-function">(<span class="hljs-params">req, res</span>) =&gt;</span> {
  res.<span class="hljs-title function_">send</span>(<span class="hljs-string">'Hello world!'</span>);
});

router.<span class="hljs-title function_">post</span>(<span class="hljs-string">'/users'</span>, <span class="hljs-function">(<span class="hljs-params">req, res</span>) =&gt;</span> {
  <span class="hljs-comment">// Create a new user</span>
});
</code> </pre>
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