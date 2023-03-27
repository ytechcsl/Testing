import bcryptjs from 'bcryptjs'
import DeviceDetector from 'device-detector-js'
export default defineNuxtPlugin(nuxtApp => {
	const dvid = useCookie<string>('dvid')
	const salt = bcryptjs.genSaltSync()
	console.log('Salt ', salt)
	console.log('Hash ', bcryptjs.hashSync('testing1234', '$2a$10$Dn/..CgM473FK9U06pzC4u'))
	console.log('Comparation ', bcryptjs.compareSync('testing1234', '$2a$10$Dn/..CgM473FK9U06pzC4uYkGZFETg097MkExi0lH8aIjgKVWwldC'))
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
