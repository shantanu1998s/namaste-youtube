import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comment }) => {
  return comment.map((item, indx) => (
    <div key={indx} className="">
      <Comment data={item} />
      <div className="ml-5 mt-2 border border-l-black ">
      <CommentsList comment={item.reply}/>
      </div>
    </div>
  ));
};

export default CommentsList;
