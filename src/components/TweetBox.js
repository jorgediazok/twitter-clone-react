import React,{useState} from 'react'
import {Avatar,Button} from "@material-ui/core"
import "../styles/TweetBox.css"
import db from "../firebase"

function Tweetbox() {


  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Jorge Diaz",
      username: "roke_diaz",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://randomuser.me/api/portraits/men/28.jpg",



    });
    setTweetMessage("");
    setTweetImage("")
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
        <Avatar src="https://randomuser.me/api/portraits/men/28.jpg"/>
        <input value={tweetMessage} type="text" placeholder="What's happening?" onChange={e=>setTweetMessage(e.target.value)}/>
        </div>
        <input value={tweetImage} type="text" placeholder="Optional: Enter image URL" className="tweetBox__imageInput" onChange={e=>setTweetImage(e.target.value)}/>
        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default Tweetbox
