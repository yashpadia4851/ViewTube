import React from "react";
import { COMMENTS_IMAGE } from "../utils/contants";
const CommentData = [
  {
    name: "ReactJS",
    text: "Great job on the comment design – it's sleek and intuitive!",
    replies: [
      {
        name: "ReactJS",
        text: "Great job on the comment design – it's sleek and intuitive!",
        replies: [
          {
            name: "ReactJS",
            text: "Great job on the comment design – it's sleek and intuitive!",
            replies: [
              {
                name: "ReactJS",
                text: "Great job on the comment design – it's sleek and intuitive!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "ReactJS",
    text: "Great job on the comment design – it's sleek and intuitive!",
    replies: [
      {
        name: "ReactJS",
        text: "Great job on the comment design – it's sleek and intuitive!",
        replies: [
          {
            name: "ReactJS",
            text: "Great job on the comment design – it's sleek and intuitive!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "ReactJS",
    text: "Great job on the comment design – it's sleek and intuitive!",
    replies: [
      {
        name: "ReactJS",
        text: "Great job on the comment design – it's sleek and intuitive!",
        replies: [],
      },
      {
        name: "ReactJS",
        text: "Great job on the comment design – it's sleek and intuitive!",
        replies: [],
      },
      {
        name: "ReactJS",
        text: "Great job on the comment design – it's sleek and intuitive!",
        replies: [],
      },
    ],
  },
  {
    name: "ReactJS",
    text: "Great job on the comment design – it's sleek and intuitive!",
    replies: [],
  },
  {
    name: "ReactJS",
    text: "Great job on the comment design – it's sleek and intuitive!",
    replies: [
      {
        name: "ReactJS",
        text: "Great job on the comment design – it's sleek and intuitive!",
        replies: [
          {
            name: "ReactJS",
            text: "Great job on the comment design – it's sleek and intuitive!",
            replies: [
              {
                name: "ReactJS",
                text: "Great job on the comment design – it's sleek and intuitive!",
                replies: [],
              },
              {
                name: "ReactJS",
                text: "Great job on the comment design – it's sleek and intuitive!",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "ReactJS",
        text: "Great job on the comment design – it's sleek and intuitive!",
        replies: [
          {
            name: "ReactJS",
            text: "Great job on the comment design – it's sleek and intuitive!",
            replies: [],
          },
          {
            name: "ReactJS",
            text: "Great job on the comment design – it's sleek and intuitive!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "ReactJS",
    text: "Great job on the comment design – it's sleek and intuitive!",
    replies: [
      {
        name: "ReactJS",
        text: "Great job on the comment design – it's sleek and intuitive!",
        replies: [
          {
            name: "ReactJS",
            text: "Great job on the comment design – it's sleek and intuitive!",
            replies: [
              {
                name: "ReactJS",
                text: "Great job on the comment design – it's sleek and intuitive!",
                replies: [],
              },
            ],
          },
          {
            name: "ReactJS",
            text: "Great job on the comment design – it's sleek and intuitive!",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-md my-2">
      <img className="w-8 h-8" src={COMMENTS_IMAGE} alt="image of user" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment?.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="p-1 m-2 w-[99%]">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={CommentData} />
    </div>
  );
};

export default CommentContainer;
