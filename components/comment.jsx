import PropTypes from "prop-types";
import React from "react";

const Comment = props => {
  return (
    <>
      <div className={`comment-container ${props.rootClassName} `}>
        <div className="comment-container1">
          <img alt={props.image_alt} src={props.image_src} loading="lazy" className="comment-image" />
          <textarea placeholder="輸入留言" className="comment-textarea textarea"></textarea>
          <button className="comment-button button">{props.button}</button>
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
            width: 1074px;
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
            width: 862px;
          }
          .comment-button {
            margin-left: var(--dl-space-space-unit);
          }
        `}
      </style>
    </>
  );
};

Comment.defaultProps = {
  rootClassName: "",
  image_alt: "image",
  textarea_placeholder: "placeholder",
  image_src: "https://pbs.twimg.com/ext_tw_video_thumb/1148064582071545858/pu/img/-asywjIzDbmCV3WS.jpg:large",
  button: "留言",
};

Comment.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  image_src: PropTypes.string,
  button: PropTypes.string,
};

export default Comment;
