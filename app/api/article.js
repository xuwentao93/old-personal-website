import request from '@/utils/request';

export const getTypeArticle = (data) => request.get('/getTypeArticle', { params: data }); // 根据类型文章列表.

export const getCurrentArticle = (data) => request.get('/getCurrentArticle', { params: data }); // 根据类型文章列表.

export const getArticleName = (data) => request.get('/getArticleName', { params: data }); // 搜索文章名.

export const readArticle = (data) => request.get('/readArticle', { params: data }); // 读取文章内容.

export const writeArticle = (data) => request.post('/writeArticle', data); // 写文章.

export const getArticleSubType = (data) => request.get('/getArticleSubType', { params: data });
// 写文章时根据 type 选择 subtype.

export const likeArticle = (data) => request.get('/likeArticle', { params: data });

// export const testWebsocket = (data) => request.get('', )
