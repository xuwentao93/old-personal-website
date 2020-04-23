/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import {
  Table,
  Select,
  Button,
  Modal,
  message,
  Input,
  Tag
} from 'antd';
import './index.less';
import { getArticleSubType } from '@/api/article';
import { COLUMNS, PROFICIENCY_BUTTON_LIST } from './constant';
import { selectAlgorithmList, addAlgorithmProblem } from '@/api/algorithm';

const { Option } = Select;

export default function Algorithm() {
  const [typeList, setTypeList] = useState([{ subtype: '暂无数据' }]);
  const [dataSource, setDataSource] = useState([]);
  const [type, setType] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectProficiencyButton, setSelectProficiencyButton] = useState([false, false, false]);

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
    changeAddType(currentTypes) {
      setTypes(currentTypes);
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
      console.log(types);
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
    },
    changeProficiency(text, i) {
      setProficienty(text);
      const currentSelectButtonList = [false, false, false];
      currentSelectButtonList[i] = true;
      setSelectProficiencyButton(currentSelectButtonList);
    }
  };

  useEffect(() => {
    methods.selectAlgorithmList(type || 'all');
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
            <Select
              onClick={methods.selectType}
              placeholder="根据类型筛选题目"
              value={types}
              onChange={(value) => methods.changeAddType(value)}
              className="algorithm-select-list"
              mode="multiple"
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
          <div className="algorithm-problem-title">熟练程度: </div>
          <div>
            {
              PROFICIENCY_BUTTON_LIST.map((text, i) => (
                <Tag
                  onClick={() => methods.changeProficiency(text, i)}
                  className={['proficiency-button', selectProficiencyButton[i] ? 'select-button' : '']}
                  key={text}
                >
                  {text}
                </Tag>
              ))
            }
          </div>
        </div>
      </Modal>
    </div>
  );
}
