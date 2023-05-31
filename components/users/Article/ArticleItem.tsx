import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import ErrorAlert from "@/components/alert/Error";
import SucessAlert from "@/components/alert/Success";
import { _apiCheckJwt, apiArticleDelete } from "@/components/api";

export default function SigngleArticle(props: any) {
  const router = useRouter();
  const data = {
    name: props.name,
    id: props.id,
    title: props.title,
    subStandard: props.subStandard,
    contents: props.contents,
  };
  async function deleteArticle(id: any) {
    let jwt = "";
    await _apiCheckJwt().then((res: any) => (jwt = res.data.jwt));
    apiArticleDelete(jwt, id)
      .then(() => {
        setSuccess(true);
        router.reload(); // 重新整理頁面
      })
      .catch(() => {
        setError(true);
        // window.location.reload(); // 重新整理頁面
      });
  }

  // TODO: UI funtion
  const [success, setSuccess] = useState(false);
  const [Error, setError] = useState(false);

  return (
    <>
      <Link href={"/" + props.name + "/" + props.id} className="w-full">
        <div className="blog-post-card21-blog-post-card my-4 w-full">
          <div className="w-full">
            <div className="blog-post-card21-container2">
              <h1 className="blog-post-card21-text">{props.title}</h1>
              <span className="blog-post-card21-text1">{props.subStandard}</span>
            </div>
            <div className="blog-post-card21-container3">
              <div className="blog-post-card21-profile">
                <img alt="profile" src={props.picture} className="blog-post-card21-image1" />
                <span className="blog-post-card21-text2 mr-3">{props.name}</span>
                <img alt="花朵的圖片" src="/playground_assets/1rose.png" className="blog-post-card21-image1" />
                <span className="blog-post-card21-text3">{props.flowerCount}</span>
              </div>
              {/* FIXME: 要更改花朵圖片 */}
              <div className="blog-post-card21-container4">
                <span className="blog-post-card21-text3 mx-2">{props.updatedAt}</span>
              </div>
              {props.IsPrivate ? (
                <>
                  <Link className="button" href={{ pathname: `/${props.name}/editArticle`, query: data }}>
                    編輯
                  </Link>
                  <button className="comments1-button button" onClick={() => deleteArticle(props.id)}>
                    刪除
                  </button>
                </>
              ) : null}
            </div>
            {props.IsPrivate ? (
              <>
                <Link className="button" href={{ pathname: `/${props.name}/editArticle`, query: data }}>
                  編輯
                </Link>
                <button className="comments1-button button" onClick={() => deleteArticle(props.id)}>
                  刪除
                </button>
              </>
            ) : null}
          </div>
        </div>
      </Link>
      {success && <SucessAlert message={`已刪除 ${props.title}`} />}
      {Error && <ErrorAlert message={`失敗刪除 ${props.title}`} />}
      <style jsx>
        {`
          .comments1-button {
            margin-left: var(--dl-space-space-unit);
            background-color: #ff9077;
          }
          .blog-post-card21-blog-post-card {
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
}
