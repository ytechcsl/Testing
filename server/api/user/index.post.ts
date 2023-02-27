import { readMultipartFormData } from 'h3'
import FormData from 'form-data'
import axios from 'axios'
export default defineEventHandler(async event => {
	console.log('Header ', event.node.req.headers)
	const body: Array<any> = <Array<any>>await readMultipartFormData(event)
	console.log(body)
	const formData: FormData = new FormData()
	for (const data of body) {
		formData.append(data.name, data.type && data.filename ? data.data : data.data?.toString(), data.filename)
	}
	const config1 = {
		method: 'post',
		url: 'http://127.0.0.1:5900/user/upload',
		headers: {
			...formData.getHeaders(),
			'client-ip': event.context.clientIp,
			'device-info': JSON.stringify(event.context.deviceInfo)
		},
		data: formData
	}

	try {
		const result = await (await axios(config1)).data
		console.log(result)
		const config = useRuntimeConfig()
		console.log(config.apiBase)
		return result
	} catch (error) {
		// console.log(error)
		return {
			success: false,
			code: 500
		}
	}
})
