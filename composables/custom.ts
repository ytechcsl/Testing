export const useFoo = () => {
	return useState('foo', () => 'foo')
}
export const useBar = () => {
	return useState('bar', () => 'bar')
}
