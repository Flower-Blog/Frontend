import PropTypes from "prop-types";
import React from "react";

const BlogPostCard2 = props => {
  return (
    <>
      <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
        <div className="blog-post-card2-container">
          <div className="blog-post-card2-container01">
            <div className="blog-post-card2-container02">
              <div className="blog-post-card2-container03">
                <div className="blog-post-card2-container04">
                  <h1 className="blog-post-card2-text">{props.title}</h1>
                  <span className="blog-post-card2-text1">{props.description}</span>
                </div>
                <img
                  alt={props.image_alt}
                  src={props.image_src}
                  image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                  className="blog-post-card2-image"
                />
              </div>
              <div className="blog-post-card2-container05">
                <div className="blog-post-card2-profile">
                  <img alt={props.profile_alt} src={props.profile_src} className="blog-post-card2-image1" />
                  <span className="blog-post-card2-text2">{props.author}</span>
                </div>
                <div className="blog-post-card2-container06">
                  <img alt={props.image_alt1} src={props.image_src1} className="blog-post-card2-image2" />
                  <span className="blog-post-card2-text3">{props.text}</span>
                </div>
              </div>
            </div>
            <button className="blog-post-card2-button button">{props.button}</button>
          </div>
          <div className="blog-post-card2-container07">
            <div className="blog-post-card2-container08">
              <div className="blog-post-card2-container09">
                <div className="blog-post-card2-container10">
                  <h1 className="blog-post-card2-text4">{props.title1}</h1>
                  <span className="blog-post-card2-text5">{props.description1}</span>
                </div>
                <img
                  alt={props.image_alt3}
                  src={props.image_src3}
                  image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                  className="blog-post-card2-image3"
                />
              </div>
              <div className="blog-post-card2-container11">
                <div className="blog-post-card2-profile1">
                  <img alt={props.profile_alt1} src={props.profile_src1} className="blog-post-card2-image4" />
                  <span className="blog-post-card2-text6">{props.author1}</span>
                </div>
                <div className="blog-post-card2-container12">
                  <img alt={props.image_alt11} src={props.image_src11} className="blog-post-card2-image5" />
                  <span className="blog-post-card2-text7">{props.text1}</span>
                </div>
              </div>
            </div>
            <button className="blog-post-card2-button1 button">{props.button1}</button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card2-blog-post-card {
            width: 773px;
            height: 570px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            transition: 0.3s;
            align-items: stretch;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            flex-direction: row;
            padding-bottom: 10px;
            justify-content: space-between;
          }
          .blog-post-card2-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card2-container {
            width: 100%;
            height: 556px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-post-card2-container01 {
            width: 100%;
            height: 271px;
            display: flex;
            box-shadow: 4px 4px 10px 0px #d4d4d4;
            align-items: center;
            justify-content: center;
          }
          .blog-post-card2-container02 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 10px;
            flex-direction: column;
          }
          .blog-post-card2-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .blog-post-card2-container04 {
            width: 471px;
            height: 168px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .blog-post-card2-text {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card2-text1 {
            color: var(--dl-color-gray-500);
            font-size: 1.25rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card2-image {
            width: 207px;
            height: 166px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: 0px;
          }
          .blog-post-card2-container05 {
            width: 100%;
            height: 73px;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: 5px;
            padding-left: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card2-profile {
            display: flex;
            align-items: center;
            padding-top: 5px;
            padding-bottom: 5px;
          }
          .blog-post-card2-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-post-card2-text2 {
            font-style: normal;
            font-weight: 600;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-post-card2-container06 {
            width: 72px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: 5px;
            padding-left: 5px;
            padding-right: 5px;
            padding-bottom: 5px;
            justify-content: space-between;
          }
          .blog-post-card2-image2 {
            width: 50%;
            height: 38px;
            object-fit: cover;
          }
          .blog-post-card2-text3 {
            align-self: center;
          }
          .blog-post-card2-button {
            width: 65px;
            height: 246px;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            font-weight: 700;
            line-height: 5;
            text-transform: lowercase;
            background-color: #b1ada5;
          }
          .blog-post-card2-container07 {
            width: 100%;
            height: 271px;
            display: flex;
            box-shadow: 4px 4px 10px 0px #d4d4d4;
            align-items: center;
            justify-content: center;
          }
          .blog-post-card2-container08 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 10px;
            flex-direction: column;
          }
          .blog-post-card2-container09 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .blog-post-card2-container10 {
            width: 471px;
            height: 168px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .blog-post-card2-text4 {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card2-text5 {
            color: var(--dl-color-gray-500);
            font-size: 1.25rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card2-image3 {
            width: 207px;
            height: 166px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: 0px;
          }
          .blog-post-card2-container11 {
            width: 100%;
            height: 73px;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: 5px;
            padding-left: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card2-profile1 {
            display: flex;
            align-items: center;
            padding-top: 5px;
            padding-bottom: 5px;
          }
          .blog-post-card2-image4 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-post-card2-text6 {
            font-style: normal;
            font-weight: 600;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-post-card2-container12 {
            width: 72px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: 5px;
            padding-left: 5px;
            padding-right: 5px;
            padding-bottom: 5px;
            justify-content: space-between;
          }
          .blog-post-card2-image5 {
            width: 50%;
            height: 38px;
            object-fit: cover;
          }
          .blog-post-card2-text7 {
            align-self: center;
          }
          .blog-post-card2-button1 {
            width: 65px;
            height: 246px;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            font-weight: 700;
            line-height: 5;
            text-transform: lowercase;
            background-color: #ffcf77;
          }

          @media (max-width: 991px) {
            .blog-post-card2-blog-post-card {
              flex-direction: row;
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .blog-post-card2-blog-post-card {
              flex-direction: column;
            }
            .blog-post-card2-image {
              width: 100%;
            }
            .blog-post-card2-image3 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .blog-post-card2-container05 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .blog-post-card2-container11 {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  );
};

BlogPostCard2.defaultProps = {
  image_alt: "image",
  rootClassName: "",
  author: "Jane Doe",
  text: "12",
  image_alt11: "image",
  profile_alt: "profile",
  image_src2: "d9117974-d1b7-46f3-befc-2be123dce60c",
  profile_src1:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=200",
  image_alt1: "image",
  image_alt2: "image",
  image_alt3: "image",
  image_src11: "/playground_assets/flower11-200h.png",
  image_src1: "/playground_assets/flower11-200h.png",
  description1: "最多49字",
  title: "最多15字",
  image_src:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=800",
  button1: "公開中",
  image_src3:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=800",
  button: "隱藏中",
  profile_alt1: "profile",
  author1: "Jane Doe",
  description: "最多49字",
  text1: "12",
  profile_src:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=200",
  title1: "最多15字",
};

BlogPostCard2.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  author: PropTypes.string,
  text: PropTypes.string,
  image_alt11: PropTypes.string,
  profile_alt: PropTypes.string,
  image_src2: PropTypes.string,
  profile_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src11: PropTypes.string,
  image_src1: PropTypes.string,
  description1: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
  button1: PropTypes.string,
  image_src3: PropTypes.string,
  button: PropTypes.string,
  profile_alt1: PropTypes.string,
  author1: PropTypes.string,
  description: PropTypes.string,
  text1: PropTypes.string,
  profile_src: PropTypes.string,
  title1: PropTypes.string,
};

export default BlogPostCard2;
