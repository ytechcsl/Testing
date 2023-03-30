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
		'nuxt-csurf',
		'nuxt-security'
	],
	csurf: {
		// optional
		https: true, // false, // default true if in production
		cookieKey: '__Host-csrf', // process.env.ENVIRONMENT === 'PRODUCTION' ? '__Host-csrf' : 'csrf', // "__Host-csrf" if https is true otherwise just "csrf"
		cookie: {
			// CookieSerializeOptions from unjs/cookie-es
			path: '/',
			httpOnly: true,
			sameSite: 'strict'
		},
		methodsToProtect: ['POST', 'PUT', 'PATCH', 'GET', 'DELETE'], // the request methods we want CSRF protection for
		excludedUrls: ['/', ['/.*', 'i']], // any URLs we want to exclude from CSRF protection
		// encryptSecret: /** a 32 bits secret */, // random bytes by default
		encryptAlgorithm: 'aes-256-cbc'
	},
	security: {
		headers: {
			crossOriginResourcePolicy: 'same-origin',
			crossOriginOpenerPolicy: 'same-origin',
			crossOriginEmbedderPolicy: 'require-corp',
			// contentSecurityPolicy: {
			// 	'base-uri': ["'self'"],
			// 	'font-src': ["'self'", 'https:', 'data:'],
			// 	'form-action': ["'self'"],
			// 	'frame-ancestors': ["'self'"],
			// 	'img-src': ["'self'", 'data:'],
			// 	'object-src': ["'none'"],
			// 	'script-src-attr': ["'none'"],
			// 	'style-src': ["'self'", 'https:', "'unsafe-inline'"],
			// 	'upgrade-insecure-requests': true
			// },
			contentSecurityPolicy: false,
			originAgentCluster: '?1',
			referrerPolicy: 'no-referrer',
			strictTransportSecurity: {
				maxAge: 15552000,
				includeSubdomains: true
			},
			xContentTypeOptions: 'nosniff',
			xDNSPrefetchControl: 'off',
			xDownloadOptions: 'noopen',
			xFrameOptions: 'SAMEORIGIN',
			xPermittedCrossDomainPolicies: 'none',
			xXSSProtection: '1',
			permissionsPolicy: {
				camera: ['()'],
				'display-capture': ['()'],
				fullscreen: ['()'],
				geolocation: ['()'],
				microphone: ['()']
			}
		},
		requestSizeLimiter: {
			maxRequestSizeInBytes: 2000000,
			maxUploadFileRequestInBytes: 8000000
		},
		rateLimiter: {
			// Twitter search rate limiting
			tokensPerInterval: 15,
			interval: 'minute',
			fireImmediately: true
		},
		xssValidator: {},
		corsHandler: {
			origin: '*',
			methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
			preflight: {
				statusCode: 204
			}
		},
		allowedMethodsRestricter: '*',
		hidePoweredBy: true,
		basicAuth: false,
		enabled: true, //production true
		csrf: false
	},
	// routeRules: {
	// 	'/api/iparea': {
	// 		security: {
	// 			rateLimiter: {
	// 				tokensPerInterval: 5,
	// 				interval: 'minute',
	// 				fireImmediately: true
	// 			}
	// 		}
	// 	}
	// },
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config',
		exposeConfig: true,
		injectPosition: 0,
		viewer: false
	},
	elementPlus: {},
	css: ['@fortawesome/fontawesome-svg-core/styles.css']
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
