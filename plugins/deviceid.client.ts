import DeviceDetector from 'device-detector-js'
export default defineNuxtPlugin(nuxtApp => {
	const dvid = useCookie<string>('dvid')
	if (!dvid.value) {
		const deviceDetector = new DeviceDetector()
		const deviceInfo = deviceDetector.parse(navigator.userAgent)
		console.log(deviceInfo)
		dvid.value = useBcryptHash(JSON.stringify(deviceInfo)) + '|;' + useSHA256Hash(JSON.stringify(deviceInfo))
	}
})
