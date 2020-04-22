/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Table, Select } from 'antd';
import './index.less';
import { getArticleSubType } from '@/api/article';
import { COLUMNS } from './constant';
import { selectAlgorithmList, addAlgorithmProblem } from '@/api/algorithm';

const { Option } = Select;

export default function Algorithm() {
  const [typeList, setTypeList] = useState([{ subtype: '暂无数据' }]);
  const [dataSource, setDataSource] = useState([]);
  const [type, setType] = useState();
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
    }
  };

  useEffect(() => {
    methods.selectAlgorithmList('all');
    console.log(addAlgorithmProblem);
  }, []);

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
    </div>
  );
}
