// You will add code in this file
import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const {postInfo} = props
  console.log(postInfo)
  return (
    <div className="post-border">
      <PostHeader
        username={postInfo.username}
        thumbnailUrl={
          postInfo.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={postInfo.imageUrl}
        />
      </div>
      <LikeSection />
      <CommentSection
        postId={postInfo.imageUrl}
        comments={postInfo.comments}
      />
    </div>
  );
};

export default Post;
