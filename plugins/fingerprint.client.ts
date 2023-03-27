import { fpjsPlugin } from '@fingerprintjs/fingerprintjs-pro-vue-v3'
export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.use(fpjsPlugin, {
		loadOptions: {
			apiKey: 'c7EktZOZyhhBXapTWcTW'
		}
	})
	// console.log(nuxtApp)
})
