import React, { useEffect, useState } from "react";

interface Flower {
  id: number;
  name: string;
  language: string;
  img: string;
}

const UserRecord = (props: any) => {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/flower/flower");
        if (response.ok) {
          const data = await response.json();
          setFlowers(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="component4-container4 grid justify-between">
          <div className="font-smibold flex items-center text-xl">
            <h1 className="mr-3 text-2xl font-bold">{props.name}</h1>在
            <span className="mx-3 text-clip text-2xl font-bold">{props.title}</span>
            文章中送了一朵
            {flowers.map((flower: any) =>
              flower.id === props.flowerId ? (
                <React.Fragment key={flower.id}>
                  <span className="mx-3 text-2xl font-bold">{flower.name}</span>
                  <img alt="" src={flower.img} className="component3-image mx-2" />
                </React.Fragment>
              ) : null,
            )}
            給<span className="ml-3 text-2xl font-bold">{props.userdata.name}</span>
          </div>
          <span className="font-smibold mr-3 text-xl">{props.createdAt.substring(0, 10)}</span>
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
          .component3-image {
            width: 50px;
            height: 50px;
            object-fit: cover;
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
