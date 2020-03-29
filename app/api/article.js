import request from '@/utils/request';

export const getArticleMsg = (data) => request.get('/getArticleMsg', { params: data }); // 查询文章列表,
// recent list 和 type list 都是在这个接口中获取.

export const getArticleName = (data) => request.get('/getArticleName', { params: data }); // 搜索文章名.

export const readArticle = (data) => request.get('/readArticle', { params: data }); // 读取文章.

// export const testWebsocket = (data) => request.get('', )
