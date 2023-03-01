import { useSetting } from '~/stores/setting'
export default defineNuxtPlugin(async nuxtApp => {
	navigator.geolocation.watchPosition(
		location => {
			console.log('Watch Access ', location)
		},
		error => {
			console.log('Watch Error ', error)
		},
		{
			enableHighAccuracy: false,
			timeout: 1000,
			maximumAge: 0
		}
	)
	navigator.geolocation.getCurrentPosition(
		position => {
			// console.log(position.coords)

			const setting = useSetting()
			setting.setCurrentLocation({ lat: position.coords.latitude, lng: position.coords.longitude })
		},
		error => {
			console.log(error.message)
		}
	)
})
