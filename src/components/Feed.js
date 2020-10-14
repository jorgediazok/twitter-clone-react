// @ts-nocheck
import React from 'react'
import TweetBox from "./TweetBox"
import Post from "./Post"
import "../styles/Feed.css"

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
      <h2>Home</h2>
      </div>
      <TweetBox />
      <Post />
      <Post />

      

    </div>
  )
}

export default Feed
