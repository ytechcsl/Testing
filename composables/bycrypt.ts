import CryptoJS from 'crypto-js'
import Base64 from 'crypto-js/enc-base64'
export const useBcrypt = () => {
	const config = useRuntimeConfig()
	const stamp = Date.now()
	const hash = Base64.stringify(CryptoJS.HmacSHA256(CryptoJS.enc.Hex.parse(stamp.toString()), config.hpubKey))
	console.log(hash)
	const encodeData = CryptoJS.AES.encrypt(
		JSON.stringify({
			time: stamp,
			key: hash
		}),
		config.cpubKey
	).toString()
	return encodeData
}
