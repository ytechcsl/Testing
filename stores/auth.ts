export const useAuth = defineStore('auth', {
	state: () => ({
		n: 2,
		incrementedTimes: 0,
		menu: <any>[]
	}),

	getters: {
		double: state => state.n * 2,
		incrementTime: state => state.incrementedTimes,
		menus: state => state.menu
	},

	actions: {
		increment(amount = 1) {
			this.incrementedTimes++
			this.n += amount
		},
		setMenu(mn = <any>[]) {
			this.menu = mn
		}
	}
})
