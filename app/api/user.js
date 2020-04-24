import request from '@/utils/request';

export const identifyCheck = (data) => request.post('./identifyCheck', data);
