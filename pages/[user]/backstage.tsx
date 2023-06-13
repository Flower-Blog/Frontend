import { useEffect, useState } from "react";

import { _apiCheckJwt, apiAdminGetFlowersRecord, apiAdminGetUsers, apiUserGetUserData } from "@/components/api";
import FlowerRecord from "@/components/dashboard/FlowerRecord";
import UserRecord from "@/components/dashboard/UserRecord";

export default function Page() {
  const [isManager, setIsManager] = useState(false);
  const [users, setUsers] = useState([]);
  const [flowers, setFlowers] = useState([]);
  const [newUsers, setNewUsers] = useState(0);
  const [newFlowers, setNewFlowers] = useState(0);
  const [activeComponent, setActiveComponent] = useState("userRecord");
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await _apiCheckJwt();
        const jwt = res.data.jwt;

        const userDataRes = await apiUserGetUserData(jwt);
        const admin = userDataRes.data.userdata[0].admin;

        if (admin) setIsManager(true);

        const usersResponse = await apiAdminGetUsers(jwt);
        setUsers(usersResponse.data.users);

        const flowersResponse = await apiAdminGetFlowersRecord(jwt);
        setFlowers(flowersResponse.data.flowerRecords);

        setDataLoaded(true);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // 将 Users 的 createdAt 字符串转换为日期对象
    const usersWithDate = users.map((user: any) => ({
      ...user,
      createdAt: new Date(user.createdAt),
    }));

    // 将 Flowers 的 createdAt 字符串转换为日期对象
    const flowersWithDate = flowers.map((flower: any) => ({
      ...flower,
      createdAt: new Date(flower.createdAt),
    }));

    const newFlowers = flowersWithDate.filter(flower => isToday(flower.createdAt));
    const newUsers = usersWithDate.filter(user => isToday(user.createdAt));

    setNewFlowers(newFlowers.length);
    setNewUsers(newUsers.length);
  }, [users, flowers]);

  const isToday = (date: any) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const showComponent = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <>
      {dataLoaded ? (
        <>
          {isManager ? (
            <div className="page5-container">
              <div className="flex flex-row justify-center">
                <div className="page-container5 basis-28">
                  <button className="page-button1 button" onClick={() => showComponent("userRecord")}>
                    使用者記錄
                  </button>
                  <button className="page-button2 button" onClick={() => showComponent("flowerRecord")}>
                    所有送花記錄
                  </button>
                </div>
                <div className="page-container6">
                  {activeComponent === "userRecord" && (
                    <div className="component4-container1">
                      <div className="component4-container2">
                        <div className="component4-container4">總使用者人數：{users.length}</div>
                        <div className="component4-container4">今日加入使用者：{newUsers}</div>
                      </div>
                      {users.map(item => {
                        const { id, name, email, picture, createdAt } = item;
                        return (
                          <UserRecord key={id} name={name} email={email} picture={picture} createdAt={createdAt} />
                        );
                      })}
                    </div>
                  )}
                  {activeComponent === "flowerRecord" && (
                    <div className="component4-container1">
                      <div className="component4-container2">
                        <div className="component4-container4">總次數：{flowers.length}</div>
                        <div className="component4-container4">今日：{newFlowers}</div>
                      </div>
                      {flowers != null &&
                        flowers.map((item: any) => {
                          const { flowerId, createdAt, userdata } = item;
                          const { name, title } = item.article;
                          return (
                            <FlowerRecord
                              key={flowerId}
                              flowerId={flowerId}
                              name={name}
                              title={title}
                              userdata={userdata}
                              createdAt={createdAt}
                            />
                          );
                        })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-9xl">請你 go away</p>
          )}
        </>
      ) : (
        <div className="loading-container">
          <div className="loader">
            <div className="loaderdot"></div>
            <div className="loaderdot"></div>
            <div className="loaderdot"></div>
            <div className="loaderdot"></div>
            <div className="loaderdot"></div>
            <div className="loaderdot"></div>
          </div>
        </div>
      )}
      <style jsx>
        {`
          .loading-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .loader {
            height: 20px;
            width: 250px;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
          }

          .loaderdot {
            animation-name: loader;
            animation-timing-function: ease-in-out;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            height: 20px;
            width: 20px;
            border-radius: 100%;
            background-color: black;
            position: absolute;
            border: 2px solid white;
          }

          .loader--dot:first-child {
            background-color: #8cc759;
            animation-delay: 0.5s;
          }

          .loader--dot:nth-child(2) {
            background-color: #8c6daf;
            animation-delay: 0.4s;
          }

          .loader--dot:nth-child(3) {
            background-color: #ef5d74;
            animation-delay: 0.3s;
          }

          .loader--dot:nth-child(4) {
            background-color: #f9a74b;
            animation-delay: 0.2s;
          }

          .loader--dot:nth-child(5) {
            background-color: #60beeb;
            animation-delay: 0.1s;
          }

          .loader--dot:nth-child(6) {
            background-color: #fbef5a;
            animation-delay: 0s;
          }

          .loader--text {
            position: absolute;
            top: 200%;
            left: 0;
            right: 0;
            width: 10rem;
            margin: auto;
          }

          .loader--text:after {
            content: "جاري التحميل ..";
            font-weight: bold;
            animation-name: loading-text;
            animation-duration: 3s;
            animation-iteration-count: infinite;
          }

          @keyframes loader {
            15% {
              transform: translateX(0);
            }
            45% {
              transform: translateX(230px);
            }
            65% {
              transform: translateX(230px);
            }
            95% {
              transform: translateX(0);
            }
          }
          .component4-container1 {
            flex: 0 0 auto;
            width: "auto";
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .component4-container2 {
            width: 100%;
            height: 107px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .component4-container4 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            box-shadow: 5px 5px 0px 0px #1d1c1c;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            margin-left: 10px;
            padding-top: var(--dl-space-space-halfunit);
            margin-right: 10px;
            padding-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #ffcf77;
          }
          .page-button1 {
            width: 208px;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
          .page-button2 {
            width: 235px;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  );
}
