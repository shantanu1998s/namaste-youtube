import React from "react";
import CommentsList from "./CommentsList";

const comments = [
  {
    name: "shantanu",
    text: "you are just amazing bro❤",
    reply: [
      {
        name: "shantanu",
        text: "you are just amazing bro❤",
        reply: [
          {
            name: "shantanu",
            text: "you are just amazing bro❤",
            reply: [{ name: "shantanu", text: "you are just amazing bro❤",reply:[] }],
          },
        ],
      },
      {
        name: "shantanu",
        text: "you are just amazing bro❤",
        reply: [
          {
            name: "shantanu",
            text: "you are just amazing bro❤",
            reply: [{ name: "shantanu", text: "you are just amazing bro❤",reply:[] }],
          },
        ],
      },
      {
        name: "shantanu",
        text: "you are just amazing bro❤",
        reply: [
          {
            name: "shantanu",
            text: "you are just amazing bro❤",
            reply: [{ name: "shantanu", text: "you are just amazing bro❤",reply:[] }],
          },
        ],
      },
      {
        name: "shantanu",
        text: "you are just amazing bro❤",
        reply: [
          {
            name: "shantanu",
            text: "you are just amazing bro❤",
            reply: [{ name: "shantanu", text: "you are just amazing bro❤",reply:[] }],
          },
        ],
      },
      {
        name: "shantanu",
        text: "you are just amazing bro❤",
        reply: [
          {
            name: "shantanu",
            text: "you are just amazing bro❤",
            reply: [{ name: "shantanu", text: "you are just amazing bro❤",reply:[] }],
          },
        ],
      },
    ],
  },
  {
    name: "shantanu",
    text: "you are just amazing bro❤",
    reply: [
      {
        name: "shantanu",
        text: "you are just amazing bro❤",
        reply: [
          {
            name: "shantanu",
            text: "you are just amazing bro❤",
            reply: [{ name: "shantanu", text: "you are just amazing bro❤",reply:[] }],
          },
        ],
      },
      {
        name: "shantanu",
        text: "you are just amazing bro❤",
        reply: [
          {
            name: "shantanu",
            text: "you are just amazing bro❤",
            reply: [{ name: "shantanu", text: "you are just amazing bro❤",reply:[] }],
          },
        ],
      },
      {
        name: "shantanu",
        text: "you are just amazing bro❤",
        reply: [
          {
            name: "shantanu",
            text: "you are just amazing bro❤",
            reply: [{ name: "shantanu", text: "you are just amazing bro❤",reply:[] }],
          },
        ],
      },
      {
        name: "shantanu",
        text: "you are just amazing bro❤",
        reply: [
          {
            name: "shantanu",
            text: "you are just amazing bro❤",
            reply: [{ name: "shantanu", text: "you are just amazing bro❤",reply:[] }],
          },
        ],
      },
      {
        name: "shantanu",
        text: "you are just amazing bro❤",
        reply: [
          {
            name: "shantanu",
            text: "you are just amazing bro❤",
            reply: [{ name: "shantanu", text: "you are just amazing bro❤",reply:[] }],
          },
        ],
      },
    ],
  },
  {
    name: "shantanu",
    text: "you are just amazing bro❤",
    reply: [
      {
        name: "shantanu",
        text: "you are just amazing bro❤",
        reply: [
          {
            name: "shantanu",
            text: "you are just amazing bro❤",
            reply: [{ name: "shantanu", text: "you are just amazing bro❤",reply:[] }],
          },
        ],
      },
      {
        name: "shantanu",
        text: "you are just amazing bro❤",
        reply: [
          {
            name: "shantanu",
            text: "you are just amazing bro❤",
            reply: [{ name: "shantanu", text: "you are just amazing bro❤",reply:[] }],
          },
        ],
      },
      {
        name: "shantanu",
        text: "you are just amazing bro❤",
        reply: [
          {
            name: "shantanu",
            text: "you are just amazing bro❤",
            reply: [{ name: "shantanu", text: "you are just amazing bro❤",reply:[] }],
          },
        ],
      },
      {
        name: "shantanu",
        text: "you are just amazing bro❤",
        reply: [
          {
            name: "shantanu",
            text: "you are just amazing bro❤",
            reply: [{ name: "shantanu", text: "you are just amazing bro❤",reply:[] }],
          },
        ],
      },
      {
        name: "shantanu",
        text: "you are just amazing bro❤",
        reply: [
          {
            name: "shantanu",
            text: "you are just amazing bro❤",
            reply: [{ name: "shantanu", text: "you are just amazing bro❤",reply:[] }],
          },
        ],
      },
    ],
  },
  {
    name: "shantanu",
    text: "you are just amazing bro❤",
    reply: [
      {
        name: "shantanu",
        text: "you are just amazing bro❤",
        reply: [
          {
            name: "shantanu",
            text: "you are just amazing bro❤",
            reply: [{ name: "shantanu", text: "you are just amazing bro❤",reply:[] }],
          },
        ],
      },
      {
        name: "shantanu",
        text: "you are just amazing bro❤",
        reply: [
          {
            name: "shantanu",
            text: "you are just amazing bro❤",
            reply: [{ name: "shantanu", text: "you are just amazing bro❤",reply:[] }],
          },
        ],
      },
      {
        name: "shantanu",
        text: "you are just amazing bro❤",
        reply: [
    
        ],
      },
      {
        name: "shantanu",
        text: "you are just amazing bro❤",
        reply: [
          {
            name: "shantanu",
            text: "you are just amazing bro❤",
            reply: [{ name: "shantanu", text: "you are just amazing bro❤",reply:[] }],
          },
        ],
      },
    ],
  },

];

const CommentContainer = () => {
  return (
    <div className="">
      <h1 className="text-xl font-bold">Comments:</h1>
      <CommentsList comment={comments}/>
    </div>
  );
};

export default CommentContainer;
