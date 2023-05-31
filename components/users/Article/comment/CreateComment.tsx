import React from "react";

const Comment = (props: any) => {
  return (
    <>
      <div className="mb-1">
        <div className="comment-container1 grid grid-cols-6">
          <div className="col-span-1 flex flex-col">
            <img alt="not found pic" src={props.picture} loading="lazy" className="comment-image" />
            <p className="text-center">{props.name}</p>
          </div>
          <div className="col-span-4 flex w-4/5">
            <textarea placeholder="輸入留言" className="textarea mx-4 w-full"></textarea>
          </div>
          <button className="comment-button button col-span-1 px-2">留言</button>
        </div>
      </div>
      <style jsx>
        {`
          .comment-container {
            width: 100%;
            height: 106px;
            display: flex;
            position: relative;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .comment-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 5px 5px 0px 0px #131212;
            align-items: center;
            justify-content: space-between;
            background-color: var(--dl-color-threefish-blue);
          }
          .comment-image {
            width: 50px;
            height: 50px;
            margin-top: 0px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .comment-textarea {
            width: 100%;
          }
          .comment-button {
            margin-left: var(--dl-space-space-unit);
          }
        `}
      </style>
    </>
  );
};

export default Comment;
