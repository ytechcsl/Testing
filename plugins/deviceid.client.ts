import DeviceDetector from 'device-detector-js'
export default defineNuxtPlugin(nuxtApp => {
	const dvid = useCookie<string>('dvid')
	console.log(navigator)
	navigator.permissions.query({ name: 'geolocation' }).then(res => {
		console.log(res)
	})
	if (!dvid.value) {
		const deviceDetector = new DeviceDetector()
		const deviceInfo = deviceDetector.parse(navigator.userAgent)
		console.log(deviceInfo)
		dvid.value = useBcryptHash(JSON.stringify(deviceInfo)) + '|;' + useSHA256Hash(JSON.stringify(deviceInfo))
	}
})
