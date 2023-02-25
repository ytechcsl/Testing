import DeviceDetector from 'device-detector-js'
import requestIP from 'request-ip'
import CryptoJS from 'crypto-js'
export default defineEventHandler(async event => {
	const config = useRuntimeConfig()

	const userAgent: any = event.node.req.headers['user-agent']
	const deviceDetector = new DeviceDetector()
	const deviceInfo = deviceDetector.parse(userAgent)
	var clientIp = requestIP.getClientIp(event.node.req)

	event.context.clientIp = clientIp
	event.context.deviceInfo = deviceInfo
	event.context.auth = { user: 123 }

	// const cookie = parseCookies(event)
	// console.log('Cookies ', cookie)
	// const cIp = clientIp
	// if (!cookie.area) {
	// 	const areaInfo = await $fetch(`http://ip-api.com/json/${cIp}?fields=66846719`)
	// 	const encryptArea = CryptoJS.AES.encrypt(JSON.stringify(areaInfo), config.cpriKey).toString()
	// 	setCookie(event, 'area', encryptArea)
	// 	// event.context.area = areaInfo
	// } else {
	// 	const bytes = CryptoJS.AES.decrypt(cookie.area, config.cpriKey)
	// 	const areaInfo = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
	// 	event.context.area = areaInfo
	// 	if (cIp !== areaInfo.query) {
	// 		const areaInfo = await $fetch(`http://ip-api.com/json/${cIp}?fields=66846719`)
	// 		const encryptArea = CryptoJS.AES.encrypt(JSON.stringify(areaInfo), config.cpriKey).toString()
	// 		setCookie(event, 'area', encryptArea, {
	// 			path: '/',
	// 			maxAge: 60 * 60 * 1
	// 		})
	// 	}
	// }
})
