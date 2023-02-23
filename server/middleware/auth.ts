import DeviceDetector from 'device-detector-js'
import requestIP from 'request-ip'
import CryptoJS from 'crypto-js'
import Base64 from 'crypto-js/enc-base64'
export default defineEventHandler(async event => {
	const config = useRuntimeConfig()

	const userAgent: any = event.node.req.headers['user-agent']
	const deviceDetector = new DeviceDetector()
	const deviceInfo = deviceDetector.parse(userAgent)
	var clientIp = requestIP.getClientIp(event.node.req)

	event.context.clientIp = clientIp
	event.context.deviceInfo = deviceInfo
	event.context.auth = { user: 123 }

	const cookie = parseCookies(event)
	console.log('Cookies ', cookie)
	const cIp = '183.182.115.200' // event.context.clientIp
	if (!cookie.area) {
		const areaInfo = await $fetch(`http://ip-api.com/json/${cIp}?fields=66846719`)
		const encryptArea = CryptoJS.AES.encrypt(JSON.stringify(areaInfo), config.cpriKey).toString()
		setCookie(event, 'area', encryptArea, {
			path: '/',
			maxAge: 60 * 60 * 1
		})
		event.context.area = areaInfo
	} else {
		const bytes = CryptoJS.AES.decrypt(cookie.area, config.cpriKey)
		const areaInfo = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
		event.context.area = areaInfo
		if (cIp !== areaInfo.query) {
			const areaInfo = await $fetch(`http://ip-api.com/json/${cIp}?fields=66846719`)
			const encryptArea = CryptoJS.AES.encrypt(JSON.stringify(areaInfo), config.cpriKey).toString()
			setCookie(event, 'area', encryptArea, {
				path: '/',
				maxAge: 60 * 60 * 1
			})
		}
	}
	const url = event.node.req.url
	if (url?.startsWith('/api')) {
		// return send(event, 'No permission')
		const bToken: any = event.node.req.headers?.btoken
		if (!bToken) return send(event, 'No permission')
		try {
			const bytes = CryptoJS.AES.decrypt(bToken, config.cpubKey)
			const decriptToken = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
			console.log(decriptToken)
			const hash = Base64.stringify(CryptoJS.HmacSHA256(CryptoJS.enc.Hex.parse(decriptToken?.time?.toString()), config.hpubKey))
			if (!(decriptToken && hash === decriptToken?.key)) return send(event, 'No permission')
		} catch (error) {
			console.log(error)
			return send(event, 'No permission')
		}
	}
})
