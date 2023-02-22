import { useSetting } from '~/stores/setting'
export default defineNuxtPlugin(async nuxtApp => {
	navigator.geolocation.getCurrentPosition(
		position => {
			console.log(position.coords)

			const setting = useSetting()
			setting.setCurrentLocation({ lat: position.coords.latitude, lng: position.coords.longitude })
		},
		error => {
			console.log(error.message)
		}
	)
})
