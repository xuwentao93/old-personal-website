import request from '@/utils/request';

export const selectAlgorithmList = (data) => request.get('./selectAlgorithmList', { params: data });

export const addAlgorithmProblem = (data) => request.post('/addAlgorithmProblem', data);

export const deleteAlgorithmProblem = (data) => request.post('/deleteAlgorithmProblem', data);

export const updateProficiency = (data) => request.post('/updateProficiency', data);
