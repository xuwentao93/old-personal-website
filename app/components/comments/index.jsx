import React from 'react';
// import './index.less';
// import { getCommontsList } from '@/api/comment'

const test = [
  {
    user: 'a',
    comment: 'ahahah'
  },
  {
    user: 'b',
    comment: 'huhuhu'
  }
];

export default function Footer() {
  return (
    <div className="footer">
      {
        test.map(() => (
          <div className="article-comment"></div>
        ))
      }
    </div>
  );
}
