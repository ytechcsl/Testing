import CryptoJS from 'crypto-js'
export default defineEventHandler(async event => {
	const config = useRuntimeConfig()

	const url = event.node.req.url
	if (url?.startsWith('/api') && !url?.match('openai')) {
		const device = event.context.deviceInfo
		const bToken: any = event.node.req.headers?.btoken
		if (!bToken) return device?.os && device?.device ? sendRedirect(event, '/', 302) : createError({ statusCode: 404, statusMessage: 'not_found' })
		try {
			const bytes = CryptoJS.AES.decrypt(bToken, config.cpubKey)
			const decriptToken = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
			const hash = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(CryptoJS.enc.Hex.parse(decriptToken?.time?.toString()), config.hpubKey))
			if (!(decriptToken && hash === decriptToken?.key)) {
				return device?.os && device?.device ? sendRedirect(event, '/', 302) : createError({ statusCode: 404, statusMessage: 'Not found' })
			} else if (Date.now() - decriptToken?.time > 60000) return { statusCode: 401, statusMessage: 'failed', message: 'Operation failed' }
		} catch (error) {
			return device?.os && device?.device ? sendRedirect(event, '/', 302) : createError({ statusCode: 404, statusMessage: 'Not found' })
		}
	}
})
