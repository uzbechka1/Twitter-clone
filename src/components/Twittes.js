import React from "react";
import CreateTweet from "./CreateTween";
import Posts from "./Posts";
const Twittes = () => {
  return (
    <div className="posts">
      <div className="posts__home">Home</div>
      <CreateTweet />
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
};

export default Twittes;