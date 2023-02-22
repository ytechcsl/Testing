export default defineEventHandler(event => {
	console.log('End ', event.context.deviceInfo)
	return `Default foo handler`
})
