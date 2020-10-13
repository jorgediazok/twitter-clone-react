import React from 'react'
import {Avatar,Button} from "@material-ui/core"
import "../styles/TweetBox.css"

function Tweetbox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
        <Avatar src="https://randomuser.me/api/portraits/men/28.jpg"/>
        <input type="text" placeholder="What's happening?"/>
        </div>
        <input type="text" placeholder="Optional: Enter image URL" className="tweetBox__imageInput"/>
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default Tweetbox
