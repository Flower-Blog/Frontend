import React from "react";

const UserRecord = (props: any) => {
  return (
    <>
      <div className="w-full">
        <div className="component4-container4 grid justify-between">
          <div className="flex align-middle">
            <img alt="頭像" src={props.picture} className="component4-image" />
            <h1 className="mr-3 text-2xl font-bold">{props.name}</h1>
            <span className="font-smibold mr-3 text-xl">{props.email}</span>
          </div>
          <span className="font-smibold mr-3 text-xl ">{props.createdAt}</span>
        </div>
      </div>
      <style jsx>
        {`
          .component4-button1 {
            width: 208px;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
          .component4-container3 {
            width: 100%;
            height: 369px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .component4-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 0px 0px #1d1c1c;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-left: 0px;
            padding-top: var(--dl-space-space-halfunit);
            margin-right: 0px;
            padding-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #ff9066;
          }
          .component4-image {
            width: 50px;
            height: 55px;
            object-fit: cover;
            margin-right: 10px;
          }
          .component4-text {
            margin-right: 20px;
          }
          .component4-container5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            box-shadow: 5px 5px 0px 0px #1d1c1c;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            padding-top: 10px;
            padding-left: 10px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: 10px;
            padding-bottom: 10px;
            background-color: #ff9066;
          }
          .component4-image1 {
            width: 50px;
            height: 55px;
            object-fit: cover;
            margin-right: 10px;
          }
          .component4-text2 {
            margin-right: 20px;
          }
          .component4-container6 {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            box-shadow: 5px 5px 0px 0px #1d1c1c;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            padding-top: 10px;
            padding-left: 10px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: 10px;
            padding-bottom: 10px;
            background-color: #ff9066;
          }
          .component4-image2 {
            width: 50px;
            height: 55px;
            object-fit: cover;
            margin-right: 10px;
          }
          .component4-text4 {
            margin-right: 20px;
          }
        `}
      </style>
    </>
  );
};

export default UserRecord;
