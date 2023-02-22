export default defineEventHandler(async event => {
	const clientIp = '183.182.115.200' // event.context.clientIp
	const areaInfo = $fetch(`http://ip-api.com/json/${clientIp}?fields=66846719`)
	return areaInfo
})
