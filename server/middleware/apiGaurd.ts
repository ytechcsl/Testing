import CryptoJS from 'crypto-js'
export default defineEventHandler(async event => {
	const config = useRuntimeConfig()

	const url = event.node.req.url
	if (url?.startsWith('/api')) {
		// return send(event, 'No permission')
		const bToken: any = event.node.req.headers?.btoken
		if (!bToken) return send(event, 'No permission')
		try {
			const bytes = CryptoJS.AES.decrypt(bToken, config.cpubKey)
			const decriptToken = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
			console.log(decriptToken)
			const hash = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(CryptoJS.enc.Hex.parse(decriptToken?.time?.toString()), config.hpubKey))
			if (!(decriptToken && hash === decriptToken?.key)) return send(event, 'No permission')
		} catch (error) {
			console.log(error)
			return send(event, 'No permission')
		}
	}
})
