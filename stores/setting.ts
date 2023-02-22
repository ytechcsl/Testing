export const useSetting = defineStore('setting', {
	state: () => ({
		currentLocation: {
			lat: 17.971262,
			lng: 102.619367
		},
		incrementedTimes: 0,
		menu: <any>[]
	}),

	getters: {
		cLocation: state => state.currentLocation,
		menus: state => state.menu
	},

	actions: {
		setCurrentLocation(location: any) {
			this.currentLocation = location
		}
	}
})
