export default defineEventHandler(event => {
	// console.log('End ', event.context.deviceInfo)

	console.log(event.context)
	return event.context.area
})
