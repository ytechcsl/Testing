import DeviceDetector from 'device-detector-js'
import requestIP from 'request-ip'
export default defineEventHandler(event => {
	const cookies = parseCookies(event)
	// console.log(event)

	const userAgent: any = event.node.req.headers['user-agent']
	const deviceDetector = new DeviceDetector()
	const deviceInfo = deviceDetector.parse(userAgent)
	var clientIp = requestIP.getClientIp(event.node.req)
	console.log(deviceInfo)

	event.context.clientIp = clientIp
	event.context.deviceInfo = deviceInfo
	event.context.auth = { user: 123 }
})
