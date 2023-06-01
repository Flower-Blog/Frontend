import { useEffect, useState } from "react";

import { _apiCheckJwt, apiUserGetUserData } from "@/components/api";
import { apiAdminGetFlowers, apiAdminGetUsers } from "@/components/api";
import AllFlowerTypes from "@/components/dashboard/AllFlowerTypes";
import UserRecord from "@/components/dashboard/UserRecord";

export default function Page() {
  const [IsManager, SetIsManager] = useState(false);
  const [Users, setUsers] = useState([]);
  const [Flowers, setFlowers] = useState([]);
  const [NewUsers, setNewUsers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await _apiCheckJwt();
        const jwt = res.data.jwt;

        const userDataRes = await apiUserGetUserData(jwt);
        const admin = userDataRes.data.userdata[0].admin;

        // 使用者資料
        const UsersResponse = await apiAdminGetUsers(jwt);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setUsers(UsersResponse.data.users);
        // 花種類
        const FlowersResponse = await apiAdminGetFlowers(jwt);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setFlowers(FlowersResponse.data.flowers);

        if (admin) SetIsManager(true);
      } catch (error) {
        console.log("error", error);
      }
    };

    // 將 Users 的 createdAt 字串轉換為日期物件
    const usersWithDate = Users.map((user: any) => ({
      ...user,
      createdAt: new Date(user.createdAt),
    }));

    // 過濾出日期為今天的使用者
    const newUsers = usersWithDate.filter((user: any) => isToday(user.createdAt));

    // 設定 NewUsers 的狀態為符合條件的使用者數量
    setNewUsers(newUsers.length);

    fetchData();
  }, [Users]);

  // 判斷日期是否是今天
  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };
  //TODO: UI function
  const [activeComponent, setActiveComponent] = useState("userRecord");

  const showComponent = (component: React.SetStateAction<string>) => {
    setActiveComponent(component);
  };

  return (
    <>
      {IsManager ? (
        <div className="page-container">
          <div className="page-container4">
            <div className="page-container5">
              <button className="page-button1 button" onClick={() => showComponent("userRecord")}>
                使用者記錄
              </button>
              <button className="page-button2 button" onClick={() => showComponent("Allflower")}>
                所有送花記錄
              </button>
            </div>
            <div className="page-container6">
              {activeComponent === "Allflower" && (
                <>
                  {Flowers != null &&
                    Flowers.map((item: any) => {
                      const { id, name, language } = item;
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <AllFlowerTypes id={id} name={name} language={language} />
                      );
                    })}
                </>
              )}
              {activeComponent === "userRecord" && (
                <>
                  <div className="component4-container1">
                    <div className="component4-container2">
                      <div className="component4-container4">總使用者人數：{Users.length}</div>
                      <div className="component4-container4">今日加入使用者：{NewUsers}</div>
                    </div>
                    {Users != null &&
                      Users.map((item: any) => {
                        const { name, email, picture, createdAt } = item;
                        return (
                          // eslint-disable-next-line react/jsx-key
                          <UserRecord name={name} email={email} picture={picture} createdAt={createdAt} />
                        );
                      })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        //FIXME: 換成使用者跑錯地方
        <p className="text-9xl">請你 go away</p>
      )}

      <style jsx>
        {`
          .component4-container1 {
            flex: 0 0 auto;
            width: 995px;
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
          .component4-button {
            width: 208px;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
          .component4-button1 {
            width: 235px;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  );
}

export const getServerSideProps = async () => {
  // const res = await _apiCheckJwt();
  // const jwt = res.data.jwt;

  // let Users = [];
  // let Flowers = [];

  // try {
  //   // 使用者資料
  //   // const UsersResponse = await apiAdminGetUsers(jwt);
  //   // Users = UsersResponse.data.users;
  //   // 花種類
  //   // const FlowersResponse = await apiAdminGetFlowers(jwt);
  //   // Flowers = FlowersResponse.data.flowers;

  //   // return { props: { Users, Flowers } };
  // } catch {
  //   // return { props: { Users, Flowers } };
  // }
  return { props: {} };
};
