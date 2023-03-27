// https://nuxt.com/docs/api/configuration/nuxt-config
// import Components from 'unplugin-vue-components/vite'
// import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'en'
			},
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Nuxt version 3',
			meta: [
				// <meta name="description" content="My amazing site">
				{ name: 'description', content: 'Testing SEO Description' },
				{ name: 'format-detection', content: 'telephone=no' }
			],
			link: [
				{
					rel: 'icon',
					type: 'image/ico',
					href: `favicon.ico`
				}
			]
		}
	},
	runtimeConfig: {
		// The private keys which are only available within server-side
		apiSecret: '123',
		apiBase: 'http://localhost:4500',
		hpubKey: 'hajkhkldnkfnkcjdkmnckmdls',
		cpubKey: 'ckefmlkmelofoelwcmlcmklmcel@',
		cpriKey: '#&cmkdmclamlkdmkdk,93849*!$',
		// Keys within public, will be also exposed to the client-side
		public: {
			apiBase: 'https://api.testing.com',
			hpubKey: '',
			cpubKey: ''
		}
	},
	modules: [
		[
			'@pinia/nuxt',
			{
				autoImports: [
					// automatically imports `defineStore`
					'defineStore', // import { defineStore } from 'pinia'
					// automatically imports `defineStore` as `definePiniaStore`
					['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
				]
			}
		],
		'@nuxtjs/tailwindcss',
		'@element-plus/nuxt',
		'@vant/nuxt',
		'nuxt-chatgpt'
	],
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config',
		exposeConfig: true,
		injectPosition: 0,
		viewer: false
	},
	elementPlus: {},
	chatgpt: {
		apiKey: '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'
	}
	// vite: {
	// 	plugins: [
	// 		Components({
	// 			resolvers: [AntDesignVueResolver()]
	// 		})
	// 	],
	// 	ssr: {
	// 		noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue']
	// 	}
	// }
})

// npm i pinia --legacy-peer-deps or npm i pinia --force
