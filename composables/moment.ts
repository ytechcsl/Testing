import moment from 'moment'
export const useMomentJS = () => {
	return moment
}
export const useMomentDate = (date: any) => {
	return date ? moment(date).local().format('DD-MM-YYYY') : moment().local().format('DD-MM-YYYY')
}

export const useMomentDatetime = (datetime: any) => {
	return datetime ? moment(datetime).local().format('DD-MM-YYYY hh:mm:ss') : moment().local().format('DD-MM-YYYY hh:mm:ss')
}
