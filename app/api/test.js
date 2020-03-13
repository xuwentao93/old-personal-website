import request from '@/utils/request';

export const test = (data) => request.post('./test', data);
