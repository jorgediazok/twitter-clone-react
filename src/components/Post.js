import React from 'react'
import {Avatar} from "@material-ui/core"
import "../styles/Post.css"

function Post({displayName, username, verified, text, image, avatar}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://randomuser.me/api/portraits/women/40.jpg"/>
      </div>
    </div>
  )
}

export default Post
