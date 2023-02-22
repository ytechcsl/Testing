import { useAuth } from '~/stores/auth'
export default defineNuxtPlugin(async nuxtApp => {
	// const token = useCookie<string>('token')
	// console.log(token.value)

	const aml = await $fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat,dog&amount=2')
	// const allRouter = nuxtApp.$router.getRoutes()
	nuxtApp.$router.removeRoute('test-id')
	nuxtApp.$router.removeRoute('test-children')
	nuxtApp.$router.addRoute({
		name: 'unknown',
		path: '/:pathMatch(.*)*',
		redirect: '/'
	})
	// const permissionRoutes = nuxtApp.$router.getRoutes()
	// console.log(permissionRoutes)
	// console.log(aml)

	const auth = useAuth()
	auth.setMenu(aml)
})
