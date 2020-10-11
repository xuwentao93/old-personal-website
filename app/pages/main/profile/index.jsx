import React from 'react';
import './index.less';
import { PROFILE_MESSAGE } from './constant';

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile-image" />
      {PROFILE_MESSAGE.map((message) => (
        <div className="profile-container" key={message.title}>
          <div className="profile-title">{message.title}</div>
          <div className="profile-content">{message.content}</div>
        </div>
      ))}
    </div>
  );
}
