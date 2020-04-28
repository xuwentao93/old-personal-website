/* eslint-disable no-alert */
import React, { useState } from 'react';
import {
  Button,
  message,
  Modal,
  Select
} from 'antd';
import { deleteAlgorithmProblem, updateProficiency } from '@/api/algorithm';

function deleteProblem(record) {
  const { problem, link } = record;
  // eslint-disable-next-line no-restricted-globals
  const check = confirm('确定要删除吗?');
  console.log(record);
  if (!check) return;
  deleteAlgorithmProblem({
    problem,
    link
  })
    .then((res) => {
      if (res.data.success) {
        message.success('删除成功');
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
      const { Option } = Select;
      const [showModal, setShowModal] = useState(false);
      const [proficiency, setProficiency] = useState();
      const methods = {
        updateProficiency() {
          updateProficiency({
            link: record.link,
            problem: record.problem,
            proficiency
          })
            .then((res) => {
              if (res.data.success) message.success('熟练度设置成功!');
              else message.error(res.data.message);
              setShowModal(false);
            })
            .catch((err) => console.log('err comes from setProficiency api:' + err));
        }
      };
      return (
        <>
          <Button type="primary" style={{ marginRight: '15px' }} onClick={() => setShowModal(true)}>
            熟练度设置
          </Button>
          <Button type="danger" onClick={() => deleteProblem()}>删除</Button>
          <Modal
            visible={showModal}
            onCancel={() => setShowModal(false)}
            onOk={() => methods.updateProficiency(record)}
          >
            <Select
              value={proficiency}
              onChange={(value) => setProficiency(value)}
              placeholder="熟练度设置"
            >
              <Option value="生疏">生疏</Option>
              <Option value="理解">理解</Option>
              <Option value="熟练">熟练</Option>
            </Select>
          </Modal>
        </>
      );
    }
  }
];

export const PROFICIENCY_BUTTON_LIST = ['生疏', '理解', '熟练'];
