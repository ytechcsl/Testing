import { DeviceUUID } from 'device-uuid'
import DeviceDetector from 'device-detector-js'
export default defineNuxtPlugin(nuxtApp => {
	const dvid = useCookie<string>('dvid')
	if (!dvid.value) {
		//
		const token: string = new DeviceUUID().get()
		const device: any = new DeviceUUID().parse()
		console.log(token)
		console.log(device)
		const deviceDetector = new DeviceDetector()
		const deviceInfo = deviceDetector.parse(device.source)
		console.log(deviceInfo)
		dvid.value = useBcryptHash(JSON.stringify(deviceInfo)) + '|;' + token
	}
})
