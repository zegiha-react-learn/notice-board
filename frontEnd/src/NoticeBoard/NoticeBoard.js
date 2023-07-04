import React from 'react';
import './NoticeBoard.css'
import heartImg from "../img/heart.svg";
import profileImg from "../img/342518945_246426527763460_1305510582506421862_n.jpg";
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

const NoticeBoard = () => {
  const key = "noticeData";
  const {data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage} = useInfiniteQuery(
    [key], () => axios.get('http://localhost:3001/takeData')
  )
  function check() {
    console.log(data.myFeeling);
  }

  return (
    <div className="NoticeBoard">
      <div className="container" onClick={check}>
        <div className="cell">
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
      </div>
    </div>
  );
};

export default NoticeBoard;