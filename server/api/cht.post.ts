export default defineEventHandler(async event => {
	const body = await readBody(event)
	console.log(event.node.req.headers)
	console.log(body)
	/* const data = await $fetch('https://ask-stream-zvpnsiaqoa-as.a.run.app/', {
		method: 'POST',

		body: {
			messages: [
				{
					role: 'user',
					content: body.message
				}
			],
			session: Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
		}
	})
	console.log(data)
	setResponseHeader(event, 'content-type', 'text/event-stream')
	return data */
})
