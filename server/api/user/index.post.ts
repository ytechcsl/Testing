export default defineEventHandler(async event => {
	// console.log(event.node.req.headers)
	// console.log(event.node.req.socket.remoteAddress)
	// console.log(event.node.req.connection.remoteAddress)
	const body = await readBody(event)
	setCookie(event, 'tken', JSON.stringify(body))
	// console.log(body)
	const config = useRuntimeConfig()
	console.log(config.apiBase)
	return {
		success: true
	}
})
