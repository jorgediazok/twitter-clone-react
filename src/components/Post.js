import React from 'react'
import {Avatar} from "@material-ui/core"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import RepeatIcon from "@material-ui/icons/Repeat"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import PublishIcon from "@material-ui/icons/Publish"
import "../styles/Post.css"

function Post({displayName, username, verified, text, image, avatar}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://randomuser.me/api/portraits/women/40.jpg"/>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>Kate Leta <span className="post__headerSpecial"><VerifiedUserIcon className="post__badge"/></span></h3>
          </div>
          <div className="post__headerDescription">
            <p>I am building this demo of a Twitter Clone because i can. And because i like it. And because i can.</p>
          </div>          
        </div>
        <img src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif" alt=""/>
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small"/>
          <RepeatIcon fontSize="small"/>
          <FavoriteBorderIcon fontSize="small"/>
          <PublishIcon fontSize="small"/>
        </div>
      </div>
    </div>
  )
}

export default Post
