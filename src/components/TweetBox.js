import React from 'react'
import {Avatar,Button} from "@material-ui/core"
import "../styles/TweetBox.css"

function Tweetbox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
        <Avatar src="https://randomuser.me/api/portraits/men/28.jpg"/>
        <input type="text" placeholder="What is happening?"/>
        <input type="text" placeholder="Enter image URL"/>

        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  )
}

export default Tweetbox
