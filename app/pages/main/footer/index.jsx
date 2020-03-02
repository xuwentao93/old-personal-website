import React from 'react';
import './index.less';
// import { getCommontsList } from '@/api/comment'

const test = [
  {
    user: 'a',
    comment: '收到，还是你看的比较仔细，最后一段我当时居然没看。',
    time: '2019-05-05 14:44'
  },
  {
    user: 'b',
    comment: '另外，建议老师以后发视频到B站。。0时间广告等待。 YOUKU 这种 40 秒广告太可怕了。。',
    time: '2019-11-11 15:55'
  }
];

export default function Footer() {
  return (
    <div className="footer">
      <div className="comments-list">
        {
          test.map((comment) => (
            <div className="article-comment" key={comment.time}>
              <div className="comment-user">{ comment.user }</div>
              <div className="comment-content">{ comment.comment }</div>
              <div className="comment-time">{ comment.time }</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
