import CryptoJS from 'crypto-js'
export const useBcrypt = () => {
	const stamp = Date.now()
	const hash = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(CryptoJS.enc.Hex.parse(stamp.toString()), useHpubKey()))
	const encodeData = CryptoJS.AES.encrypt(
		JSON.stringify({
			time: stamp,
			key: hash
		}),
		useCpubKey()
	).toString()
	return encodeData
}

export const useBcryptHash = (data: string) => {
	const encodeData = CryptoJS.AES.encrypt(data, useCpubKey()).toString()
	console.log(encodeData)
	return encodeData
}

export const useSHA256Hash = (data: string) => {
	const hash = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(CryptoJS.enc.Hex.parse(data), useHpubKey()))
	return hash
}
