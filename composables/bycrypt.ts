import CryptoJS from 'crypto-js'
export const useBcrypt = () => {
	const config = useRuntimeConfig()
	const stamp = Date.now()
	const hash = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(CryptoJS.enc.Hex.parse(stamp.toString()), config.hpubKey))
	const encodeData = CryptoJS.AES.encrypt(
		JSON.stringify({
			time: stamp,
			key: hash
		}),
		config.cpubKey
	).toString()
	return encodeData
}

export const useBcryptHash = (data: string) => {
	const config = useRuntimeConfig()
	const encodeData = CryptoJS.AES.encrypt(data, config.cpubKey).toString()
	console.log(encodeData)
	return encodeData
}
