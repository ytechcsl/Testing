export const useTrick = defineStore('trick', {
	state: () => ({
		animalServerRender: false
	}),

	getters: {
		animalServerTrick: state => state.animalServerRender
	},

	actions: {
		setAnimalServerTrick(val: boolean) {
			this.animalServerRender = val
		}
	}
})
