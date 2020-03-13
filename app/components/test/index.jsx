/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getArticleMsgApi } from '@/models/actions/getArticles';

// eslint-disable-next-line react/prop-types
function Test({ articleList, getArticleMsgApi }) {
  const methods = {
    testApi() {
      getArticleMsgApi('all');
    }
  };
  useEffect(() => {
    console.log(articleList);
    methods.testApi();
  }, []);
  return (
    <div>1</div>
  );
}

const getArticleList = (state) => {
  const { articleList } = state;
  return { articleList };
};

const setArticleList = (dispatch) => ({
  getArticleMsgApi: () => dispatch(getArticleMsgApi('all'))
});

Test.propTypes = {
  getArticleMsgApi: PropTypes.func.isRequired
  // articleList:
};

export default (connect(getArticleList, setArticleList))(Test);
