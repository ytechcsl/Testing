export const useAnimal = definePiniaStore('animal', {
	state: () => ({
		animal: <any>[],
		loading: false
	}),

	getters: {
		animals: state => state.animal
	},

	actions: {
		async fetchAnimals() {
			console.log('Start Fetching')
			this.loading = true
			const { data } = await useFetch(() => 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat,dog&amount=10')
			this.animal = data
			this.loading = false
			console.log(this.animal)
			console.log('End Fetching')
		},
		setAnimals(data: any) {
			this.animal = data
		}
	}
})
