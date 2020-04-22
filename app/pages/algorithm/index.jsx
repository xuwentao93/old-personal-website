/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import {
  Table,
  Select,
  Button,
  Modal,
  message,
  Input
} from 'antd';
import './index.less';
import { getArticleSubType } from '@/api/article';
import { COLUMNS } from './constant';
import { selectAlgorithmList, addAlgorithmProblem } from '@/api/algorithm';

const { Option } = Select;

export default function Algorithm() {
  const [typeList, setTypeList] = useState([{ subtype: '暂无数据' }]);
  const [dataSource, setDataSource] = useState([]);
  const [type, setType] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [problem, setProblem] = useState();
  const [link, setLink] = useState();
  const [types, setTypes] = useState();
  const [proficiency, setProficienty] = useState();
  const methods = {
    selectType() {
      getArticleSubType({
        type: 'algorithm'
      })
        .then((res) => {
          setTypeList(() => JSON.parse(res.data.subtypeList));
        })
        .catch((err) => console.log('err comes from  api:' + err));
    },
    changeType(subtype) {
      setType(subtype);
    },
    selectAlgorithmList(algorithmType) {
      selectAlgorithmList({ type: algorithmType })
        .then((res) => {
          const algorithmProblemList = JSON.parse(res.data.algorithmProblemList);
          algorithmProblemList.forEach((item) => {
            item.key = item.problem;
          });
          setDataSource(() => algorithmProblemList);
        })
        .catch((err) => console.log('err comes from  api:' + err));
    },
    addProblem() {
      setShowModal(true);
    },
    addAlgorithmProblem() {
      if (!problem || !link || !types || !proficiency) {
        message.warn('各个输入框不能为空!');
        return;
      }
      addAlgorithmProblem({
        problem,
        link,
        types,
        proficiency
      })
        .then((res) => {
          if (!res.success) return;
          message.success('题目添加成功!');
          setProblem('');
          setLink('');
          setTypes('');
          setProficienty('');
        })
        .catch((err) => console.log('err comes from addAlgorithmProblem api:' + err));
    }
  };

  useEffect(() => {
    methods.selectAlgorithmList(type);
  }, [type]);

  return (
    <div className="solved-algorithm-list">
      <div className="algorithm-select-list-container">
        <Select
          onClick={methods.selectType}
          placeholder="根据类型筛选题目"
          value={type}
          onChange={(value) => methods.changeType(value)}
          className="algorithm-select-list"
        >
          {
            typeList.map((subtype) => (
              <Option key={subtype.subtype} value={subtype.subtype}>
                {subtype.subtype}
              </Option>
            ))
          }
        </Select>
      </div>
      <Table columns={COLUMNS} dataSource={dataSource} className="problem-list"></Table>
      <Button type="primary" onClick={methods.addProblem}>创建</Button>
      <Modal
        visible={showModal}
        onOk={methods.addAlgorithmProblem}
        onCancel={() => setShowModal(false)}
      >
        <div className="algorithm-problem-info">
          <div className="algorithm-problem-title">题目: </div>
          <div>
            <Input type="text" value={problem} onChange={(e) => setProblem(e.target.value)} />
          </div>
          <div className="algorithm-problem-title">链接: </div>
          <div>
            <Input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
          </div>
          <div className="algorithm-problem-title">类型: </div>
          <div>
            <Input type="text" value={types} onChange={(e) => setTypes(e.target.value)} />
          </div>
          <div className="algorithm-problem-title">熟练程度: </div>
          <div>
            <Input type="text" value={proficiency} onChange={(e) => setProficienty(e.target.value)} />
          </div>
        </div>
      </Modal>
    </div>
  );
}
