export default defineEventHandler(event => {
	// console.log('End ', event.context.deviceInfo)
	const cookie = parseCookies(event)
	console.log(event.context)
	return cookie
})
