import request from '@/utils/request'

export const getCommontsList = (data) => request.get('/getCommontsList', { params: data })
