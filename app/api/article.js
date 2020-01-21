import request from '@/utils/request'

export const getArticleMsg = (data) => request.get('/getArticleMsg', { params: data })
