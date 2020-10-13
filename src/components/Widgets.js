import React from 'react'
import SearchIcon from "@material-ui/icons/Search"
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed"
import "../styles/Widgets.css"

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter"/>
      </div>
      <div className="widgets__widgetContainer">
        <h2>What is happening?</h2>
        <TwitterTweetEmbed tweetId={"1277210300811534337"}/>
        <TwitterTimelineEmbed sourceType="profile" screenName="porquetendencia" options={{height: 400}}/>
        <TwitterShareButton url={"https://github.com/jorgediazok"} options={{text: "React is awesome", via: "roke_diaz"}}/>
        
      </div>
    </div>
  )
}

export default Widgets
