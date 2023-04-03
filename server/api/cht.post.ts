import axios from 'axios'
export default defineEventHandler(async event => {
	try {
		const body = await readBody(event)
		const reqBody = {
			messages: [
				{
					role: 'user',
					content: body.message
				}
			],
			session: Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
		}
		const headers: any = {
			'Content-Type': 'application/json',
			Accept: 'text/event-stream'
		}
		const response = await axios.post('https://ask-stream-zvpnsiaqoa-as.a.run.app/', JSON.stringify(reqBody), {
			headers: headers,
			responseType: 'stream'
		})
		// response.data.on('data', (chunk: any) => {
		// 	const text = new TextDecoder('utf-8').decode(chunk)
		// 	console.log(text.trim().replace(/data:/g, ''))
		// })
		setResponseHeader(event, 'content-type', 'text/event-stream')
		return sendStream(event, response.data)
	} catch (err) {
		return createError({ statusCode: 401, statusMessage: 'Something went wrong' })
	}
})
