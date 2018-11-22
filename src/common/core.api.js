import axios from '../request/http'
export const getParkLists = params => axios.get('parking/parking_lot_list', params)
