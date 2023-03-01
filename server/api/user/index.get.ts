import axios from 'axios'
export default defineEventHandler(async event => {
	// console.log('End ', event.context.deviceInfo)
	const cookie = parseCookies(event)
	console.log(cookie)
	// console.log(event.context)
	const headers = getHeaders(event)
	console.log(headers)
	const config1 = {
		method: 'get',
		url: 'http://127.0.0.1:5900/user/testing',
		headers
	}

	try {
		const result = await (await axios(config1)).data
		console.log('Result ', result)
		return result
	} catch (error) {
		// console.log(error)
		return {
			success: false,
			code: 500
		}
	}
})
