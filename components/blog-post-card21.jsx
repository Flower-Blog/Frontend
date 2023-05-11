import PropTypes from "prop-types";
import React from "react";

const BlogPostCard21 = props => {
  return (
    <>
      <div className={`blog-post-card21-blog-post-card ${props.rootClassName} `}>
        <div className="blog-post-card21-container">
          <div className="blog-post-card21-container1">
            <div className="blog-post-card21-container2">
              <h1 className="blog-post-card21-text">{props.title}</h1>
              <span className="blog-post-card21-text1">{props.description}</span>
            </div>
            <img
              alt={props.image_alt}
              src={props.image_src}
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="blog-post-card21-image"
            />
          </div>
          <div className="blog-post-card21-container3">
            <div className="blog-post-card21-profile">
              <img alt={props.profile_alt} src={props.profile_src} className="blog-post-card21-image1" />
              <span className="blog-post-card21-text2">{props.author}</span>
            </div>
            <div className="blog-post-card21-container4">
              <img alt={props.image_alt1} src={props.image_src1} className="blog-post-card21-image2" />
              <span className="blog-post-card21-text3">{props.text}</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card21-blog-post-card {
            width: 712px;
            height: 261px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: stretch;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            flex-direction: row;
            padding-bottom: 10px;
            justify-content: space-between;
          }
          .blog-post-card21-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card21-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-post-card21-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .blog-post-card21-container2 {
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
          .blog-post-card21-text {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card21-text1 {
            color: var(--dl-color-gray-500);
            font-size: 1.25rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card21-image {
            width: 207px;
            height: 166px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: 0px;
          }
          .blog-post-card21-container3 {
            width: 253px;
            height: 73px;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: 5px;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card21-profile {
            display: flex;
            align-items: center;
            padding-top: 5px;
            padding-bottom: 5px;
          }
          .blog-post-card21-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-post-card21-text2 {
            font-style: normal;
            font-weight: 600;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-post-card21-container4 {
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
          .blog-post-card21-image2 {
            width: 50%;
            height: 38px;
            object-fit: cover;
          }
          .blog-post-card21-text3 {
            align-self: center;
          }

          @media (max-width: 991px) {
            .blog-post-card21-blog-post-card {
              flex-direction: row;
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .blog-post-card21-blog-post-card {
              flex-direction: column;
            }
            .blog-post-card21-image {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .blog-post-card21-container3 {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  );
};

BlogPostCard21.defaultProps = {
  profile_alt: "profile",
  rootClassName: "",
  description: "最多49字",
  author: "Jane Doe",
  image_alt: "image",
  image_alt1: "image",
  image_src:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=800",
  text: "12",
  image_src1: "/playground_assets/flower11-200h.png",
  title: "最多15字",
  profile_src:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=200",
};

BlogPostCard21.propTypes = {
  profile_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_src1: PropTypes.string,
  title: PropTypes.string,
  profile_src: PropTypes.string,
};

export default BlogPostCard21;
