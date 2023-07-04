import React from 'react';
import './notice.css';
import  profileImg from '../img/342518945_246426527763460_1305510582506421862_n.jpg'
import heartImg from '../img/heart.svg'

const Notice = () => {
  return (
    <div className="notice">
      <div className="container">
        <div className="header">
          <div className="left">
            <div className="title">The title of our life</div>
            <div className="hearts">
              <img src={heartImg} alt="heartImg" className="heartImg"/>
              <div className="heartNumber text2">24</div>
            </div>
          </div>
          <div className="right">
            <img src={profileImg} alt="profileImg" className="profileImg"/>
            <div className="profileId text2">이서율</div>
          </div>
        </div>
        <div className="content">
          contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents
        </div>
      </div>
    </div>
  );
};

export default Notice;