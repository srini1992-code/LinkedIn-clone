import React, { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import './Posts.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import InputOption from './InputOption';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

const Posts = forwardRef(
  ({ name, description, message, photoUrl, timestamp }, ref) => {
    return (
      <div ref={ref} className="posts">
        <div className="posts__header">
          <Avatar src={photoUrl}>{name[0]}</Avatar>
          <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post__body">
          <p>{message}</p>
        </div>

        <div className="post__buttons">
          <InputOption
            Icon={ThumbUpAltOutlinedIcon}
            color="gray"
            title="Like"
          />
          <InputOption
            Icon={ChatBubbleOutlineIcon}
            title="Comment"
            color="gray"
          />
          <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
          <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
        </div>
      </div>
    );
  }
);

export default Posts;
