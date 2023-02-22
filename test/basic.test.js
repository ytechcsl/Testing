import { describe, test, expect } from 'vitest'
// import { fileURLToPath } from 'node:url'
// import { isWindows } from 'std-env'
import { setup, $fetch } from '@nuxt/test-utils'
// const isWebpack = process.env.TEST_BUILDER === 'webpack'

describe('SSR App', async () => {
	await setup({
		// rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
		// dev: process.env.TEST_ENV === 'dev',
		// server: true,
		// browser: true,
		// setupTimeout: (isWindows ? 240 : 120) * 1000,
		// nuxtConfig: {
		// 	builder: isWebpack ? 'webpack' : 'vite',
		// 	buildDir: process.env.NITRO_BUILD_DIR,
		// 	nitro: { output: { dir: process.env.NITRO_OUTPUT_DIR } }
		// }
	})
	test('Render index page', async () => {
		const html = await $fetch('/')
		// console.log(html)

		expect(html).toContain('Home')

	})
})

describe.skip('Test Calculation', () => {
	test('1+2 must equal to 3', () => {
		expect(1 + 2).equal(3)
	})
	test('6*5 must equal to 30', () => {
		expect(6 * 5).equal(30)
	})

	test('Correct bar array', () => {
		const bar = [
			{
				foo: 'bar'
			},
			{
				foo: true
			},
			{
				foo: 2
			}
		]
		expect(bar).toEqual(
			expect.arrayContaining(
				[
					expect.objectContaining(
						{
							foo: expect.any(String)
						}
					)
				]
			)
		)
	})

	test.each([
		{ a: 1, b: 1, expected: 2 },
		{ a: 1, b: 2, expected: 3 },
		{ a: 2, b: 1, expected: 3 },
	])('$a + $b = $expected', ({ a, b, expected }) => {
		expect(a + b).toBe(expected)
	})
})