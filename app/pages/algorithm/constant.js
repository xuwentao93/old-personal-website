/* eslint-disable no-alert */
import React from 'react';
import { Button, message } from 'antd';
import { deleteAlgorithmProblem } from '@/api/algorithm';

function deleteProblem(record) {
  const { problem, link } = record;
  // eslint-disable-next-line no-restricted-globals
  const check = confirm('确定要删除吗?');
  if (!check) return;
  deleteAlgorithmProblem({
    problem,
    link
  })
    .then((res) => {
      if (res.data.success) {
        message.info('删除成功');
      }
    })
    .catch((err) => console.log('err comes from deleteProblem api:' + err));
}

export const COLUMNS = [
  {
    title: '题目',
    dataIndex: 'problem',
    key: 'problem'
  },
  {
    title: '链接',
    dataIndex: 'link',
    key: 'link',
    render(link) {
      return (
        <a
          href={link}
          className="algorithm-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          链接
        </a>
      );
    }
  },
  {
    title: '分类',
    dataIndex: 'types',
    key: 'types'
  },
  {
    title: '熟悉程度',
    dataIndex: 'proficiency',
    key: 'proficiency',
    render(text) {
      let color = '';
      if (text === '生疏') color = '#f66';
      if (text === '理解') color = '#49f';
      if (text === '熟练') color = '#6d4';
      return <span style={{ color }}>{text}</span>;
    }
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render(text, record) {
      return (
        <Button type="danger" onClick={() => deleteProblem(record)}>删除</Button>
      );
    }
  }
];

export const PROFICIENCY_BUTTON_LIST = ['生疏', '理解', '熟练'];
