import request from '@/utils/request'

export const getArticleMsg = (data) => request.get('/getArticleMsg', { params: data })

// export const testWebsocket = (data) => request.get('', )
